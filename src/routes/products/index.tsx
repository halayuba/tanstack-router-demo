import { createFileRoute, Link } from "@tanstack/react-router";
import { getProducts } from "../../api/products";

export const Route = createFileRoute("/products/")({
  component: Products,
  // loader: getProducts(),
  loader: async () => await getProducts(),
});

function Products() {
  const products = Route.useLoaderData();

  return (
    <div className="max-w-3xl mx-auto mt-6 text-2xl text-primary flex flex-col gap-4">
      <h2 className="text-indigo-700 text-2xl font-semibold">Products</h2>
      {products.map((x) => (
        <div key={x.id} className="mt-2">
          <Link to={x.id}>{x.title}</Link>
          {/* <Link to={'/products/$id'} params={{id: x.id}}>{x.title}</Link> */}
        </div>
      ))}
    </div>
  );
}
