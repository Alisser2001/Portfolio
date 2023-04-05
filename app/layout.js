import "../styles/global.css";
import { NavBar } from './components/NavBar';

export const metadata = {
  title: 'AliDev',
  description: 'Portafolio personal de Estiven Muñoz (AliDev)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hacker.png" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
