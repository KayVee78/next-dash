import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import ClientSideProvider from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "NextDash Homepage",
    template: "%s | NextDash",
  },
  description: "NextDash App description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSideProvider>
          <div className="container">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ClientSideProvider>
      </body>
    </html>
  );
}
