import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils";
import { Navbar } from "./components/nav";
import Foot from "./components/foot";
import { Provider } from "@/context/provider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "Online Shopping Clone of Daraz",
  description: "Prototype of daraz app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased  bg-slate-100",
          fontSans.variable
        )}
      ><Provider>
        <Navbar />
        <div className="mt-20 mx-[12%]">
          {children}
          <Toaster />
          <Foot/>
        </div>
        </Provider>
        
      </body>
    </html>
  );
}
