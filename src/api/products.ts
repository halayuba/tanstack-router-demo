type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  // .then((res) => res.json())
  // .then((json) => console.log(json));

  return await response.json();
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  // .then((res) => res.json())
  // .then((json) => console.log(json));

  return await response.json();
}
