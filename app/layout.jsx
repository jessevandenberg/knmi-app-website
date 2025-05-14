
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";




export const metadata = {
  title: "KNMI - weer - promotiewebsite",
  description: "KNMI - weer - promotiewebsite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
