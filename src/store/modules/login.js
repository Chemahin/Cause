// initial state

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

  checkoutLog ({ commit }, data) {

    var formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    console.log('-------------aaaaa-----------',formData);
    fetch('http://ec2-54-88-87-181.compute-1.amazonaws.com/api/user_create.php',
      {
        method: "POST",
        credentials: 'omit',
        mode: 'cors',
        body: formData,
      })
      .then(function(res){
        console.log('----------!!!!--ACTIONS--!!!!!--------',res.json())
      })
      .catch(function (error, res) {
        // handle error
        console.log('-----------error----------',error);
        console.log('-----------error-res----------',res.json());

      })


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
