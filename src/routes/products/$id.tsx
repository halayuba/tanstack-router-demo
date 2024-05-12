import { createFileRoute } from '@tanstack/react-router'
import { getProduct } from '../../api/products'
import { Card, CardBody } from '@nextui-org/react'

export const Route = createFileRoute('/products/$id')({
  component: Product,
  loader: async ({ params }) => await getProduct(params.id),
  notFoundComponent: () => (
    <Card radius="none" fullWidth={true} shadow="md">
      <CardBody>
        <p>I'm not found</p>
      </CardBody>
    </Card>
  ),
})

function Product() {
  const { id } = Route.useParams()
  if (+id > 5) {
    alert(id)
  }
  const product = Route.useLoaderData()
  console.log('product:', product)

  return (
    <div className="mx-auto mt-12 max-w-3xl text-2xl text-primary">
      {product.title}
    </div>
  )
}
