import "./globals.css";


export const metadata = {
  title: "Portfolio d'Aurélien",
  description: "Développeur web passionné par React et Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
