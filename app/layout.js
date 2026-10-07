export const metadata = {
  title: "My Next.js App",
  description: " Next.js Application"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
