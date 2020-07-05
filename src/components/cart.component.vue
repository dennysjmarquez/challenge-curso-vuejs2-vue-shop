<template>

    <div class="cart">
        <b-table striped hover :fields="fields" :items="cartItems" show-empty >

            <template v-slot:cell(actions)="cell">

                <b-btn size="sm" variant="danger" @click.stop="removeProduct(cell.item)">
                    Eliminar
                </b-btn>

            </template>

            <template v-slot:empty="scope">
                No hay productos en el carrito
            </template>


            <template v-slot:custom-foot>

                <b-tr class="dark">
                    <b-td class="cart__TdName">Total:</b-td>
                    <b-td></b-td>
                    <b-td></b-td>
                    <b-td>

                        <b-table-simple borderless class="mb-0 dark">

                            <b-tbody>

                                <b-tr>
                                    <b-td class="p-0"><div style="white-space: pre;">$ </div></b-td>
                                    <b-td class="p-0" style="max-width: 100px; word-wrap: break-word;">{{ totalCost.toFixed(2) }}</b-td>
                                </b-tr>

                            </b-tbody>

                        </b-table-simple>


                    </b-td>
                </b-tr>

            </template>
        </b-table>

<!--        <b-alert v-else show="" variant="info">No hay productos en el carrito</b-alert>-->
    </div>

</template>

<script>

  import {mapState, mapMutations, mapGetters} from 'vuex';

    export default {
      name: "Cart",
      data(){
        return {
          fields: [
            { key: "name", label: "Name", tdClass: 'cart__TdName'},
            'qty',
            'price',
            'actions'
          ]
        }
      },
      computed:{
        ...mapState('cart', ['cartItems']),
        ...mapGetters('cart', ['totalCost'])
      },
      methods:{
        ...mapMutations('cart', ['removeProduct'])
      }

    }

</script>

<style scoped>

</style>
