import './globals.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Final Project',
  description: 'A clean base for demo UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
