import "../styles/global.css";
import { NavBar } from './sections/navbar';

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
        {children}
      </body>
    </html>
  )
}
