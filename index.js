const express = require('express');
const app = express();
const port = 3000;
const  data = require('./data')

const productData = data.productData;

app.get('/task/products', (req, res) => {
    const search = req.query.search || '';
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = 10;

    // Filter products by search string
    const filteredProducts = productData.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    // Paginate results
    const paginatedProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

    res.json(paginatedProducts);
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
