const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('collections', '/collections')
routes.add('collection', '/collections/:id')
routes.add('collection_products', '/collections/:id/products')
routes.add('product_detail', '/collections/:id/products/:prodId') 
routes.add('collection_looks', '/collections/:id/looks')

routes.add('rack', '/rack')
routes.add('checkout', '/checkout')

routes.add('account', '/account')
routes.add('account_orders', '/account/orders')
