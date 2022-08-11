<template>

    <h2 v-if="sorted.length === 0">Нет товаров</h2>

    <TransitionGroup name="list" tag="div" class="product-list" v-else>
        <div class="product-item" v-for="(product, index) in sorted" :key="product.title">
            <img :src="product.img" alt="product_img">
            <div class="product-data">
                <div class="top">
                    <h2 class="product-title">{{ product.title }}</h2>
                    <p class="product-description">{{ product.description }}</p>
                </div>
                <h1 class="product-price">{{ formatPrice(product.price) }} руб.</h1>
            </div>

            <img class="remove-item-icon"
                 src="src/images/trash_icon.png"
                 alt="иконка удаления"
                 @click="removeItem(index)"
            >
        </div>
    </TransitionGroup>
</template>

<script>
export default {
    name: "PorductListComponent",

    props: {
        sorting: {
            type: String,
            default: 'title'
        },
        new_item: {}
    },

    watch: {
        'new_item': function (){
            this.products.push(this.new_item)
            // сохраняем в локалсторэдж наши товары
            localStorage.setItem('our_products', JSON.stringify(this.products));
        }
    },

    computed: {

        // сортировка по различным значениям
        sorted: function(){
            if (this.sorting === 'price_hight'){
                return this.products.sort((a,b)=>{
                    if(parseInt(a.price.replace(" ", "")) < parseInt(b.price.replace(" ", ""))) {return 1}
                    if(parseInt(a.price.replace(" ", "")) > parseInt(b.price.replace(" ", ""))) {return -1}
                    return 0
                })
            }
            else if (this.sorting === 'price_low'){
                return this.products.sort((a,b)=>{
                    if(parseInt(a.price.replace(" ", "")) > parseInt(b.price.replace(" ", ""))) {return 1}
                    if(parseInt(a.price.replace(" ", "")) < parseInt(b.price.replace(" ", ""))) {return -1}
                    return 0
                })
            }
            else if (this.sorting === 'title'){
                return this.products.sort((a,b)=>{
                    if(a.title > b.title) {return 1}
                    if(a.title < b.title) {return -1}
                    return 0
                })
            }
            else {
                console.log('else')
                return this.products
            }
        }
    },

    data(){
        return {
            products: [
                // {
                //     img: "src/images/stock_img.png",
                //     title: "Наименование товара 1",
                //     description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                //     price: "10000",
                //     key: 1
                // },
                // {
                //     img: "src/images/stock_img.png",
                //     title: "Это какой-то второй товар",
                //     description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                //     price: "13000",
                //     key: 2
                // },
                // {
                //     img: "src/images/stock_img.png",
                //     title: "Тут товар №3",
                //     description: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
                //     price: "14000",
                //     key: 3
                // },
            ],
        }
    },

    mounted() {
        // если есть в локалсторедж наши товары, то возьмем их оттуда
        if (localStorage.our_products && JSON.parse(localStorage.our_products).length > 0) {
            this.products = [...JSON.parse(localStorage.our_products)]
        }
    },

    methods: {
        removeItem(idx) {
            this.products.splice(idx, 1)
            // сохраняем в локалсторэдж обновленный список товаров
            localStorage.setItem('our_products', JSON.stringify(this.products));
        },

        //Форматирование вывода цены (3000000 -> 3 000 000 | событие @input)
        formatPrice(value){
            return value.toString().replace(/\s+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },

    }
}
</script>

<style scoped>

</style>
