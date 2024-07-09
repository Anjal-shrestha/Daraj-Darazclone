
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"
import { Navbar } from "./nav";
import Foot from "./components/foot";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata = {
  title: "Online Shopping Clone in Nepal",
  description: "Prototype of daraz app",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}>
         <Navbar/>{children}</body>
    </html>
  );
}




