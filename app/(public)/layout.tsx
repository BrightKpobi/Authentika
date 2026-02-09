import Navbar from "@/components/layouts/navbar/ShopNavbar/Navbar";

import Footer from "@/components/layouts/footer/ShopFooter/Footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
