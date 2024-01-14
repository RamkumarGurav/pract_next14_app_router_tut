export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <header className="text-xl font-bold">
            This is the header for Error site
          </header>
          <main>{children}</main>
          <footer>This is the footer for Error site</footer>
        </div>
      </body>
    </html>
  );
}