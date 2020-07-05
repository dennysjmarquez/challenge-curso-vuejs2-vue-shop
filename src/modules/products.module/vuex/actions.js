/**
 *
 * Estos amigos es un destructurcion del objeto context
 * {state, commit, dispatch, rootState}
 *
 * y es igual que inseríamos dentro de la funcion fetchProducts(context) context.state
 * context.commit etc
 *
 */
export async function fetchProducts({state, commit, dispatch, rootState}) {

  const data = await fetch('/fixtures/products.json'),
    products = await data.json();

  // Esto es por el namespace del index de products
  // de otra forma se colocaria directo en el commit el nombre
  // de la mutacion que seria setProducts Ojo
  commit('products/setProducts', products, {root: true});

}
