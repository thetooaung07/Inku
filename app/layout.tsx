import { MobileNavBar, NavBar } from "./components/NavBar";
import "./globals.css";
import { AppThemeProvider } from "./hooks/useThemeContext";

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
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors  duration-300">
        {/* <button onClick={() => setDarkMode(!darkMode)}>Hello</button> */}
        <AppThemeProvider>
          <MobileNavBar />
          <div className="md:mt-24"></div>
          {/* <NavBar></NavBar> */}
          <div className="container mx-auto">{children}</div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
