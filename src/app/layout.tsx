import type { Metadata } from "next";
import "./globals.scss";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./scripts/theme";

export const metadata: Metadata = {
  title: "AutoFixer - Mobilny Serwis Samochodowy",
  description: "AutoFixer - Mobilny Serwis Samochodowy - starzynski.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      
      <body>
        <ThemeProvider theme={lightTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
