//

export interface AddCart {
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
}

export interface Currency {
  name: string;
  code: string;
  symbol: string;
}

const newCart = {
  name: "",
  slug: ``,
  image: "",
  size: "",
  length: "",
  price: 0,
  quantity: 0,
};
