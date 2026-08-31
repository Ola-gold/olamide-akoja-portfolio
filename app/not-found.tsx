import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notfound">
      <h1>404</h1>
      <p>THIS PAGE HASN&apos;T GROWN YET.</p>
      <Link href="/" className="btn btn--primary">
        Back to root ↗
      </Link>
    </main>
  );
}
