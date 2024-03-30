exports.Category = {
    products: ({ id: categoryId }, { filter }, { db }) => {
        let categoryProducts = db.products.filter(product => product.categoryId === categoryId);
        if (filter?.onSale) {
            categoryProducts = categoryProducts.filter(product => product.onSale);
        }
        return categoryProducts;
    },
};
