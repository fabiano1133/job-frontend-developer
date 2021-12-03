import { fakeStoreApi } from '../services/index'

export const getProducts = ({commit}) => {
  fakeStoreApi.get('/products')
    .then(response => {
      commit('GET_PRODUCTS', response.data)
    })
}
