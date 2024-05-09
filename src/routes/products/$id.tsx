import { createFileRoute } from "@tanstack/react-router";
import { getProduct } from "../../api/products";

export const Route = createFileRoute("/products/$id")({
  component: Product,
  loader: async ({ params }) => await getProduct(params.id),
});

function Product() {
  const { id } = Route.useParams();
  const product = Route.useLoaderData();
  console.log("product:", product);

  return (
    <div className="max-w-3xl mx-auto mt-12 text-2xl text-primary">
      {product.title}
    </div>
  );
}
