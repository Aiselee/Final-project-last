import './globals.css'
import Header from '../../components/Header'

export const metadata = {
  title: 'Temporary Project',
  description: 'A clean base for demo UI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Header />
        {children}
      </body>
    </html>
  )
}
