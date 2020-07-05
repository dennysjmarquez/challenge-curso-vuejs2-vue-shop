import { find, filter } from 'lodash';

export function addProduct(state, product) {

  const productInCart = find(state.cartItems, {id: product.id});

  if(!productInCart){

    const copyProduct = Object.assign({ qty: 1}, product);
    state.cartItems.push(copyProduct);

  }else{

    productInCart.qty += 1

  }

}

export function removeProduct(state, product) {

  state.cartItems = filter(state.cartItems, ({id})=>id !== product.id);

}
