import { openSans } from "./fonts.js";
import './globals.css'

// const openSans = Open_Sans({subsets: ['latin']});

export const metadata = {
  title: 'Adtralza',
  description: 'Created by Jacob Friis Strand',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
