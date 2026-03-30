import "../styles/global.css";
import NavBar from './sections/navbar';
import { Toaster } from "sonner";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: 'Alidev - Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <link rel="icon" href="/Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <NavBar />
        {children}
        <Toaster position="bottom-right" expand={false} richColors />
      </body>
    </html>
  )
}
