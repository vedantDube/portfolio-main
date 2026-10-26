import Link from "next/link";
export default function NotFound() {
  return (
    <div className="section not-found">
      <p className="eyebrow">404 / UNKNOWN ROUTE</p>
      <h1>Off the map.</h1>
      <p>This page doesn’t exist. There’s plenty to explore back home.</p>
      <Link className="button primary" href="/">
        Back to the portfolio ↗
      </Link>
    </div>
  );
}
