<template>
    <div class="product-item">
        <img :src="img" alt="product_img">
        <div class="product-data">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
            <h2>{{ price }}</h2>
        </div>

        <img class="remove-item-icon"
             src="src/images/trash_icon.png"
             alt="иконка удаления"
             @click="removeItem()"
        >

    </div>
</template>

<script>
export default {
    name: "ProductItemComponent",

    props: {
        img: "",
        title: "",
        description: "",
        price: ""
    },

    methods: {
        removeItem(){
            this.$emit('removeItem', )
        }
    },
}
</script>

<style scoped>

</style>
