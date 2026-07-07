import './globals.css'

export const metadata = {
  title: 'Marketing Sweet — Team Portal',
  description: 'Internal tools for the Marketing Sweet team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  )
}
