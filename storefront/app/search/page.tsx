import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { defaultSort, sorting } from "@/lib/constants";
import { getProducts } from "@/lib/shopify";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

type SearchParamsType = {
  q?: string;
  sort?: string;
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParamsType>;
}) {
  
  const params = await searchParams;

  const searchValue = params.q || "";
  const sort = params.sort || defaultSort.slug;

  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  // Avoid calling Shopify with empty search queries
  const products =
    searchValue.length > 0
      ? await getProducts({ sortKey, reverse, query: searchValue })
      : [];

  const resultsText = products.length > 1 ? "results" : "result";

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {products.length === 0
            ? "There are no products that match"
            : `Showing ${products.length} ${resultsText} for `}
          <span>&quot;{searchValue}&quot;</span>
        </p>
      ) : null}

      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={products} />
        </Grid>
      ) : null}
    </>
  );
}
