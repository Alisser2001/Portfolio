import "../styles/global.css";
import { NavBar } from './sections/navbar';
import RightInfo from "./components/rightInfo";
import LeftInfo from "./components/leftInfo";

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
        <LeftInfo/>
        <RightInfo/>
        {children}
      </body>
    </html>
  )
}
