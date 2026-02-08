import "./globals.css";

export const metadata = {
  title: "Universidade da Resina",
  description: "Aula ao vivo e gratuita — entre no grupo do WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
