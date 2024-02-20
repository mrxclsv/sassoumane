import { useCatalog } from '../utils/hooks';

const useProductMockup = () => {

  const vars = useCatalog()
  const productMockup =
  {
    title: "Product", price: vars.bundle1,
    descr: "This is a description of the product",
    images: ["img1", "img2", "img3", "img4"],
    sku: "PRSKU",
    category: [""]
  }

  return (productMockup)
}

export default useProductMockup