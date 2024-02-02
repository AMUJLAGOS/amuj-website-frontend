//

import { ReactNode } from "react";

export type AddCart = {
  name: string;
  slug: string;
  image: string;
  size: string;
  length: string;
  naira_price: number;
  euro_price: number;
  pounds_price: number;
  dollar_price: number;
  quantity: number;
};

export interface Currency {
  name: string;
  code: string;
  symbol: string;
}

export type FaqContainer = {
  id: any;
  currentOpen: string;
  setCurrentOpen: React.Dispatch<React.SetStateAction<string | null>>;
  children: ReactNode;
  title: string;
};
