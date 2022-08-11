<template>
    <div class="header">
        <h1 class="header-title">Добавление товара</h1>
        <select name="sorting" id="sorting" @change="sortItems">
            <option value="title">По наименованию</option>
            <option value="price_hight">По цене (убыв.)</option>
            <option value="price_low">По цене (возр.)</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",

    methods: {
        sortItems(e) {
            this.$emit('sortingChange', e.target.value)
        }
    }
}
</script>

<style scoped>

</style>
