import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

import { Input, Checkbox, Listbox, ListboxItem } from '@nextui-org/react'
import { Search as SearchIcon } from 'lucide-react'
import * as v from 'valibot'

// const CategorySchema=v.object({
//   category:v.array(v.string(),[v.includes("Electronics","Clothing")])
// })

const CategorySchema = v.union([
  v.literal('Electronics'),
  v.literal('Clothing'),
  v.literal('Toys'),
  v.literal('Books'),
])

const FiltersSchema = v.object({
  categories: v.optional(v.array(CategorySchema)),
  hasDiscount: v.optional(v.boolean()),
  query: v.optional(v.string()),
  limit: v.optional(v.number()),
})

/*

type Category = 'Electronics' | 'Clothing' | 'Books' | 'Toys'
type Filters = {
  categories?: Category[]
  hasDiscount?: boolean
  query: string
  limit: number
}

*/

type Filters = v.Output<typeof FiltersSchema>
type CategoriesType = v.Output<typeof CategorySchema>

const items = ['Electronics', 'Clothing', 'Books', 'Toys']

export const Route = createFileRoute('/search')({
  validateSearch: (search) => v.parse(FiltersSchema, search),
  // validateSearch: (search: Record<string, unknown>): Filters => {
  //   return {
  //     query: search.query as string,
  //     hasDiscount: search.hasDiscount === 'true',
  //     categories: search.categories as Category[],
  //     limit: Number(search.limit) || 10,
  //   }
  // },
  component: Search,
})

function Search() {
  const { query, limit, hasDiscount, categories } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const [selectedKeys, setSelectedKeys] = useState<
    CategoriesType[] | undefined
  >([])
  // const [selectedKeys, setSelectedKeys] = useState(new Set(['']))

  const updateFilters = (name: keyof FiltersSchema, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) })
  }

  const selectedValue = useMemo(() => {
    Array.from(selectedKeys).join(', ')
  }, [selectedKeys])

  useMemo(() => {
    updateFilters('categories', Array.from(selectedKeys))
  }, [selectedKeys])

  return (
    <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-4 text-2xl text-primary">
      <h2 className="text-2xl font-semibold text-indigo-700">Search</h2>
      <pre>
        {JSON.stringify({ query, hasDiscount, categories, limit }, null, 2)}
      </pre>
      <div className="mt-8 flex flex-col gap-6">
        <h3 className="page-header">Search</h3>
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[30rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
          value={query}
          onChange={(e) => {
            updateFilters('query', e.target.value)
          }}
        />
        <Checkbox
          isSelected={hasDiscount}
          radius="none"
          onChange={(e) => updateFilters('hasDiscount', e.target.checked)}
        >
          Has Discount
        </Checkbox>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 border p-4">
            <Listbox
              // items={items}
              aria-label="Multiple selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="multiple"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              {/* {(item) => <ListboxItem key={item}>{item}</ListboxItem>} */}
              {items.map((category) => (
                <ListboxItem key={category} value={category}>
                  {category}
                </ListboxItem>
              ))}
            </Listbox>
            <p className="my-6 text-small text-default-500">
              Selected value: {selectedValue}
            </p>
          </div>
          <div className="flex-1">
            <select
              multiple
              onChange={(e) => {
                updateFilters(
                  'categories',
                  Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  ),
                )
              }}
              value={categories}
            >
              {['Electronics', 'Clothing', 'Books', 'Toys'].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
