<template>
    <div class="parent-component">
        <header-component @sortingChange="sortingChange($event)"></header-component>

        <div class="main">
            <add-product-component @addProductItem="addProductItem($event)"></add-product-component>
            <product-list-component :sorting="sorting" :new_item="new_item"></product-list-component>
        </div>

    </div>
</template>

<script>
    export default {

        data() {
            return {
                sorting: 'title',
                new_item: {}
            }
        },
        methods: {
            // изменение сортировки
            sortingChange(val){
                this.sorting = val
            },

            // добавление нового товара в список
            addProductItem(data){
                this.new_item = {...data}
            }
        }

    }
</script>
