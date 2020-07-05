<template>

    <b-card
            style="max-width: 252px;"
            no-body
            class="mb-2"
    >
        <b-card-header header-bg-variant="transparent">
            <b-card-title>{{product.name}}</b-card-title>
        </b-card-header>

        <b-card-img :src="product.picture" class="rounded-0"></b-card-img>


        <b-card-body>

            <b-card-text><strong>Precio: {{product.price}}</strong></b-card-text>
            <b-card-sub-title>Quedan en stock: {{product.stock}}</b-card-sub-title>

        </b-card-body>

        <b-card-footer>
            <b-button block @click="$emit('eventEmitAddToCart', product)" variant="warning">Agregar al Carrito</b-button>
        </b-card-footer>



    </b-card>

</template>

<script>

  export default {
    name: 'product-item',
    props: {
      product: {
        type: Object,
        required: true
      },
    },
    mounted() {
      //console.log(this.data)
    },
    methods: {}
  }
</script>

<style scoped>

</style>
