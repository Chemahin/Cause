// initial state
// shape: [{ id, quantity }]
import axios from 'axios';


const state = {
  authenticated: false,
}

// getters

//   cartTotalPrice: (state, getters) => {
//     return getters.cartProducts.reduce((total, product) => {
//       return total + product.price * product.quantity
//     }, 0)
//   }
// }

// actions
const actions = {

  checkoutLog ({ commit }, date) {
    let  headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post('http://134.249.133.123/api/user_create.php', date, headers)
      .then(commit('login', true));
    console.log('----------ACTIONS--------')

  }
}
//
// // mutations
const mutations = {
  login (state, data) {
    state.authenticated = data;
    console.log('----------MUTATIONS--------')
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
