export const metadata = {
  title: 'Buffet MB',
  description: 'Buffet universitario'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
