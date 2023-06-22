import Providers from "./Providers";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Empleotecnic",
  description: "Bolsa de empleo técnico especializado para el sector del vidrio, la carpintería y la protección solar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Navbar />
          <div className="container mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}