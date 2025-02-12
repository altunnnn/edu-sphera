import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white p-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Logo</Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/mentors" className="hover:text-blue-600">Mentors</Link>
            <Link href="/login" className="hover:text-blue-600">Login</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}