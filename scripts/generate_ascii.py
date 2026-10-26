import json
import math
from PIL import Image, ImageOps
import numpy as np

def create_ascii_frames():
    img_path = "public/images/vedant.jpg"
    img = Image.open(img_path).convert("RGB")
    
    # Target grid
    cols = 132
    rows = 105
    target_aspect = 0.765 # width / height
    
    # Crop to target aspect ratio centered
    w, h = img.size
    current_aspect = w / h
    
    if current_aspect > target_aspect:
        new_w = int(h * target_aspect)
        left = (w - new_w) // 2
        img_cropped = img.crop((left, 0, left + new_w, h))
    else:
        new_h = int(w / target_aspect)
        top = (h - new_h) // 2
        img_cropped = img.crop((0, top, w, top + new_h))
        
    arr = np.array(img_cropped)
    r = arr[:, :, 0].astype(float)
    g = arr[:, :, 1].astype(float)
    b = arr[:, :, 2].astype(float)
    
    # Sky detection: high blue relative to red/green in outdoor daytime photo
    sky = (b > r + 15) & (b > 150)
    
    # Grayscale
    gray = np.array(ImageOps.grayscale(img_cropped)).astype(float)
    
    # On dark theme canvas, subject should pop against dark background
    # Person, clothes, railing, mountain rocks
    subject = 255.0 - gray
    processed = np.where(sky, 0.0, subject * 1.25)
    processed = np.clip(processed, 0, 255).astype(np.uint8)
    
    pil_processed = Image.fromarray(processed)
    resized = pil_processed.resize((cols, rows), Image.Resampling.LANCZOS)
    
    ramp = " .,:;irsXA253hMHGS#9B&@"
    
    frame1_chars = []
    text_lines = []
    
    for y in range(rows):
        line = ""
        for x in range(cols):
            pixel = resized.getpixel((x, y)) # 0..255
            norm = pixel / 255.0
            
            # Map to char code 33..123 (90 range)
            code = 33 + int(round(norm * 90))
            code = max(33, min(126, code))
            frame1_chars.append(chr(code))
            
            char_idx = int(norm * (len(ramp) - 1))
            line += ramp[char_idx]
        text_lines.append(line)
        
    # Frame 2: slight wave / lighting shift for scroll morph
    frame2_chars = []
    for y in range(rows):
        for x in range(cols):
            pixel = resized.getpixel((x, y))
            if pixel > 5:
                shift = math.sin(x / 14.0) * 10.0 + math.cos(y / 11.0) * 8.0
                p2 = max(0, min(255, pixel + shift))
            else:
                p2 = 0
            norm2 = p2 / 255.0
            code2 = 33 + int(round(norm2 * 90))
            code2 = max(33, min(126, code2))
            frame2_chars.append(chr(code2))
            
    frame1 = "".join(frame1_chars)
    frame2 = "".join(frame2_chars)
    text_fallback = "\n".join(text_lines)
    
    output = {
        "columns": cols,
        "rows": rows,
        "frames": [frame1, frame2],
        "text": text_fallback,
        "generated": True
    }
    
    with open("src/content/ascii-frames.json", "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False)
        
    print(f"Successfully generated ascii-frames.json with {len(frame1)} characters per frame.")

if __name__ == "__main__":
    create_ascii_frames()
