<template>

    <b-container>

        <div v-if="productsItems.length">

            <paginate :list="productsItems" :per="perPage" name="products" style="padding: 0">

                <b-card-group columns>
                    <product-item
                            :product="product"
                            v-for="(product, index) in paginated('products')" :key="index"
                            @eventEmitAddToCart="addToCart"
                    ></product-item>
                </b-card-group>

            </paginate>

            <paginate-links :show-step-links="true"
     :classes="{'ul': 'pagination','li': 'page-item','li > a': ['page-link', 'cursor-pointer']}"
                            cursor-pointer
                            for="products"></paginate-links>

        </div>
        <b-alert show="" v-else variant="info">No hay productos que mostrar</b-alert>

    </b-container>


</template>

<script>

  import {mapActions, mapState, mapMutations} from 'vuex';
  import ProductItem from './productItem.component';

  export default {
    components: {ProductItem},
    mounted() {
      this.fetchProducts();
    },
    data() {

      return {
        paginate: ['products'],
        perPage: 6
      }

    },
    computed: {
      ...mapState('products', ['productsItems'])
    },
    methods: {
      ...mapActions('products', ['fetchProducts']),
      ...mapMutations('cart', ['addProduct']),
      addToCart(product){
        this.addProduct(product)
      }
    }
  }
</script>

<style scoped>

</style>
