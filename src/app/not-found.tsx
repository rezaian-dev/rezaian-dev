import Link from "next/link";

// 🚧 Minimal 404 — rendered outside the locale layout
export default function NotFound() {
  return (
    <html lang="en">
      <body className="grid min-h-svh place-items-center bg-background text-foreground">
        <div className="text-center">
          <p className="text-gradient text-7xl font-black">404</p>
          <Link href="/" className="mt-4 inline-block text-muted-foreground underline underline-offset-4">
            Home
          </Link>
        </div>
      </body>
    </html>
  );
}
