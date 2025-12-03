import "./globals.css"
import Navigation from '../components/Navigation/Navigation'

export const metadata = {
  title: "Portfolio d'Aurélien",
  description: "Développeur web passionné par React et Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
