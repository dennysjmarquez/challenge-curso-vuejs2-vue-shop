export function totalCost(state) {

  return  state.cartItems.reduce((prev, cur)=>((parseFloat(cur.price) * cur.qty) + prev), 0);

}
