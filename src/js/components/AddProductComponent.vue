<template>
    <div class="add-product">
        <form action="" id="addProductForm" class="form" @submit.prevent="addProductItem">
            <div class="input-group">
                <label for="title" class="required-field">Наименование товара</label>
                <input type="text"
                       :class="{invalid: form_errors.title}"
                       id="title"
                       placeholder="Введите наименование товара"
                       v-model="form.title"
                       @focus="form_errors.title = false"
                >
                <small class="warning-text" v-if="form_errors.title">Поле является обязательным</small>
            </div>
            <div class="input-group">
                <label for="description">Описание товара</label>
                <textarea type="text"
                          id="description"
                          placeholder="Введите описание товара"
                          v-model="form.description"
                ></textarea>
            </div>
            <div class="input-group">
                <label for="img" class="required-field">Ссылка на изображение товара</label>
                <input type="text"
                       :class="{invalid: form_errors.img}"
                       id="img"
                       placeholder="Введите ссылку"
                       v-model="form.img"
                       @focus="form_errors.img = false"
                >
                <small class="warning-text" v-if="form_errors.img">Поле является обязательным</small>
            </div>
            <div class="input-group">
                <label for="price" class="required-field">Цена товара</label>
                <input type="text"
                       :class="{invalid: form_errors.price}"
                       id="price"
                       placeholder="Введите цену"
                       v-model="form.price"
                       @focus="form_errors.price = false"
                       @keypress="allowNumsOnly"
                       @input="formatPrice"
                >
                <small class="warning-text" v-if="form_errors.price">Поле является обязательным</small>
            </div>

            <button class="btn btn-block submit-btn" :disabled="disabled" type="submit">Добавить товар</button>

        </form>
    </div>
</template>

<script>
export default {
    name: "AddProductComponent",
    data(){
        return {
            key: 5,
            form: {
                title: '',
                description: '',
                img: '',
                price: '',
            },
            form_errors: {
                title: false,
                img: false,
                price: false,
            },

        }
    },

    computed: {
        disabled() {
            return !(this.form.title && this.form.img && this.form.price)
        }
    },

    methods: {
        // обрабатываем событие сабмита
        addProductItem(e){
            this.checkForm()
            if ( ! (this.form.title && this.form.img && this.form.price) ) {
                return
            }

            this.$emit('addProductItem', this.form)
            this.resetForm()
        },

        // проверка правильности заполнения формы
        checkForm(){
            if (this.form.title && this.form.img && this.form.price)
                return
            if (!this.form.title) {
                this.form_errors.title = true
            }
            if (!this.form.img) {
                this.form_errors.img = true
            }
            if (!this.form.price) {
                this.form_errors.price = true
            }
        },

        // очищаем форму
        resetForm(){
            this.form.title = ''
            this.form.description = ''
            this.form.img = ''
            this.form.price = ''
            this.form_errors.title = false
            this.form_errors.img = false
            this.form_errors.price = false
        },

        // позволяем вводить только цифры
        allowNumsOnly(e){
            // разрешаем ввод только цифр
            let key = e.keyCode;
            key = String.fromCharCode( key );
            let regex = /[0-9]/;
            if( !regex.test(key) || (key==0 && this.form.price.length === 0) ) {
                e.returnValue = false;
                if(e.preventDefault) {
                    e.preventDefault();
                }
            }
        },

        // форматирование цены в инпуте (маска)
        formatPrice(){
            this.form.price = this.form.price.toString().replace(/\s+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },


    }
}
</script>

<style scoped>

</style>
