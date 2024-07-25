import "../styles/global.css";
import { NavBar } from './sections/navbar';
import RightInfo from "./components/rightInfo";
import LeftInfo from "./components/leftInfo";
import { Toaster } from "sonner";

export const metadata = {
  title: 'Alidev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" />
      </head>
      <body>
        <NavBar />
        <LeftInfo />
        <RightInfo />
        {children}
        <Toaster position="bottom-right" expand={false} richColors />
      </body>
    </html>
  )
}
