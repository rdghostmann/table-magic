import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Table Magic",
  description: "Generated a quick Table from given sets of Numbers based on a new line /n",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>{children}</body>
    </html>
  );
}
