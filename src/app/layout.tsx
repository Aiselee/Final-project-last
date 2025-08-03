import './globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SidebarWrapper from '../../components/SidebarWrapper';
import { CartProvider } from '../app/context/card-context'; 

export const metadata = {
  title: 'Final Project',
  description: 'Website for demo project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
        <CartProvider>
          <SidebarWrapper />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
