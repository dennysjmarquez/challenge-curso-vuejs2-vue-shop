<!--suppress CssUnresolvedCustomProperty -->
<template>
  <div id="app">

    <ShopLayout>
      <template slot="products-list">
        <productList></productList>
      </template>
      <template slot="cart">
        <Cart></Cart>
      </template>
    </ShopLayout>

  </div>
</template>

<script>

  import productList from './components/productList.component';
  import ShopLayout from './layouts/shop.layout';
  import Cart from './components/cart.component';

  export default {
    name: 'App',
    components: {
      ShopLayout,
      productList,
      Cart
    }
  }
</script>

<style>

  html, body {
    height: 100%;
    background-color: var(--gray-dark) !important;
  }

  .cursor-pointer{
    cursor: pointer;
  }

  .cart {

    display: table;
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;
    background-color: #fff;

  }

  .cart__TdName {
    min-width: 200px;
  }

  .dark td {
    color: #fff;
    background-color: #343a40;
  }

</style>
