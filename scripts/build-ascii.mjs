import sharp from "sharp";
import fs from "node:fs/promises";
const columns = 132,
  rows = 105;
const sheet = "assets/generated/pose-studies.png";
const hasSheet = await fs
  .access(sheet)
  .then(() => true)
  .catch(() => false);
const frames = [];
for (let pose = 0; pose < (hasSheet ? 2 : 1); pose++) {
  let input = sharp(hasSheet ? sheet : "assets/portraits/portrait-warm.png");
  if (hasSheet) {
    const m = await input.metadata();
    const w = Math.floor(m.width / 3);
    input = input.extract({
      left: pose * w + 2,
      top: 0,
      width: w - 4,
      height: m.height,
    });
  }
  const { data } = await input
    .resize(columns, rows, { fit: "fill" })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  let values = "";
  for (let y = 0; y < rows; y++)
    for (let x = 0; x < columns; x++) {
      let light = data[y * columns + x] / 255;
      if (!hasSheet) {
        const nx = (x / columns - 0.5) / 0.48,
          ny = (y / rows - 0.52) / 0.57;
        light *= Math.max(0, Math.min(1, (1 - nx * nx - ny * ny) * 3));
      }
      values += String.fromCharCode(
        33 + Math.round(Math.max(0, Math.min(1, light)) * 90),
      );
    }
  frames.push(values);
}
const ramp = " .,:;irsXA253hMHGS#9B&@";
const text = Array.from({ length: rows }, (_, y) =>
  Array.from({ length: columns }, (_, x) => {
    const l = (frames[0].charCodeAt(y * columns + x) - 33) / 90;
    return ramp[Math.round(l * (ramp.length - 1))];
  }).join(""),
).join("\n");
await fs.mkdir("src/content", { recursive: true });
await fs.writeFile(
  "src/content/ascii-frames.json",
  JSON.stringify({ columns, rows, frames, text, generated: hasSheet }),
);
console.log(
  `Prepared ${frames.length} ASCII pose frames (${columns} × ${rows}).`,
);
