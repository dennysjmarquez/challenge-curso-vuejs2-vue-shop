<template>
    <b-container class="mt-4 mb-1">
        <b-row>
            <b-col cols="9">
                <slot name="products-list"></slot>
            </b-col>
            <b-col cols="3">
                <slot name="cart"></slot>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
  export default {
    name: "ShopLayout"
  }
</script>

<style scoped>

</style>
