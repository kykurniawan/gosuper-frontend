import './globals.css'

export const metadata = {
  title: 'GoSuper App',
  description: 'GoSuper App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
