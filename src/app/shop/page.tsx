//

import ShopAll from "@/components/pages/ShopAll";
import { getAllShop } from "@/utils/test";
import React from "react";

async function Shop() {
  const getAll = await getAllShop();
  return (
    <main>
      <ShopAll shopData={getAll} />
    </main>
  );
}

export default Shop;
