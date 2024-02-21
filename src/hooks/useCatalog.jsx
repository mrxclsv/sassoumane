const useCatalog = () => {

  /* GAMMES  */
  const vars = {
    bundle1: { price: 29900 },
    single1: { price: 14900 },
  }

  /* CATALOG */
  const catalog = {

    cosmetics: [
      {
        id: "01", title: "Product", price: vars.bundle1.price,
        descr: "This is a description of the product",
        img: "/spinner.gif",
        images: ["img1", "img2", "img3", "img4"],
        sku: "PRSKU",
        category: ["bundle", "shower gel", "body spray"]
      }, {
        id: "02", title: "Product", price: vars.bundle1.price,
        descr: "This is a description of the product",
        img: "/spinner.gif",
        images: ["img1", "img2", "img3", "img4"],
        sku: "PRSKU",
        category: [""]
      }, {
        id: "03", title: "Product", price: vars.bundle1.price,
        descr: "This is a description of the product",
        img: "/spinner.gif",
        images: ["img1", "img2", "img3", "img4"],
        sku: "PRSKU",
        category: [""]
      }, {
        id: "04", title: "Product", price: vars.bundle1.price,
        descr: "This is a description of the product",
        img: "/spinner.gif",
        images: ["img1", "img2", "img3", "img4"],
        sku: "PRSKU",
        category: [""]
      }, {
        id: "05", title: "Product", price: vars.bundle1.price,
        descr: "This is a description of the product",
        img: "/spinner.gif",
        images: ["img1", "img2", "img3", "img4"],
        sku: "PRSKU",
        category: [""]
      },
    ]
  }

  return { catalog, vars }
}

export default useCatalog