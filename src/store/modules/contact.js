// initial state
// shape: [{ id, quantity }]
import axios from 'axios';


const state = {
  contact: null,
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

  contactForm ({ commit }, date) {
    let  headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post('http://134.249.133.123/api/feedback_form.php', date, headers)
      .then(commit('contactMut', date));
    console.log('----------ACTIONS--------',date)

  }
}
//
// // mutations
const mutations = {
  contactMut (state, data) {
    state.contact = data;
    console.log('----------MUTATIONS--------', state)
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  actions,
  mutations
}
