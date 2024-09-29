/* eslint-disable @next/next/no-img-element */
//

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ShippingPage from "@/components/shipping/ShippingPage";

function Shipping() {
  return (
    <main className="box-border overflow-hidden">
      <Header />
      <ShippingPage />
      <Footer />
    </main>
  );
}

export default Shipping;
