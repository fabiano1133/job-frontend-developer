export const GET_PRODUCTS = (state, products) => {
  state.products = products;
}

export const ADD_PRODUCT_CART = (state) => {
  state.cart.push(state.products.title)
}