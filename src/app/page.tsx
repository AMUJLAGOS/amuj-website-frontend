/* eslint-disable @next/next/no-img-element */

import Home from "@/components/pages/Home";
import { getProd } from "@/utils/test";

//

export default async function HomeView() {
  const res = await getProd();
  return (
    <main className="box-border overflow-hidden">
      <Home productData={res} />
    </main>
  );
}
