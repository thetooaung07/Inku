import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "T's Blog",
  description: "Created by Thet Oo Aung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        <div className="container mx-auto">{children}</div>

        {/* <footer>This is the footer!</footer> */}
      </body>
    </html>
  );
}
