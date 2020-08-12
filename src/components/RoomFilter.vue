<template>
    <section class='filter-container'>
        <header class="section-title">
            <h4>search rooms</h4>
        </header>
        <keep-alive>
        <form class="filter-form">
            <div class="form-group">
                <label for="type">Room type</label>
                <select name="type" :value='type' @change="handleChange" class='form-control' id="type">
                    <option v-for="(item, i) in types" :key="i" :value="item">{{item}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="capacity">Guests</label>
                <select class='form-control' :value='capacity' name="capacity" @change="handleChange" id="capacity">
                    <option v-for="(item, i) in people" :key='i' :value="item">{{item}}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="price">room price $ {{price}}</label>
                <input type="range" name="price" class='form-control'
                 :value='price' @change="handleChange"  :max="maxPrice" :min="minPrice" id="price">
            </div>
            <div class="form-group">
                <label for="size">room size</label>
                <input type="number" class='size-input' name="minSize" id="size" @change="handleChange" :value='minSize'>
                <input type="number" class='size-input' name="maxSize" id="size" @change="handleChange" :value='maxSize'>
            </div>
            <div class="form-group">
                <div class="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" :checked='breakfast' @change="handleChange">
                    <label for="breakfast">breakfast</label>
                </div>
                <div class="single-extra">
                    <input type="checkbox" name="pets" id="pets" :checked='pets' @change="handleChange">
                    <label for="pets">pets</label>
                </div>
            </div>
        </form>
        </keep-alive>
    </section>
</template>

<script>
    export default {
        name: 'roomfilter',
        props: ['rooms'],
        data() {
            return {
                handleChange: '',
                types: [],
                type: '',
                people:[],
                minPrice: 0,
          //      price: 0,
                maxPrice: 0,
                minSize: 0,
                maxSize: 0,
                breakfast: false,
                pets: false,
                capacity: 0
           }
        },
        computed: {
            price: function() {
                return this.$EventBus.price;
            }
           /*  types: function() {
                let types = this.getUnique(this.rooms, 'type');
                return ['all', ...types];
            },
            people: function() {
               return this.getUnique(this.rooms, 'capacity');
            },
            price:function() {
                return this.$EventBus.price;
            },
            minPrice:function() {
                return this.$EventBus.minPrice;
            },
            maxPrice:function() {
                return this.$EventBus.maxPrice;
            },
            maxSize:function() {
                return this.$EventBus.maxSize;
            },
            minSize:function() {
                return this.$EventBus.minSize;
            },
            breakfast:function() {
                return this.$EventBus.breakfast;
            },
            pets: function() {
                return this.$EventBus.pets;
            } */
        },
        created() {
            this.handleChange = this.$EventBus.handleChange;
           let types = this.getUnique(this.rooms, 'type');
         this.types = ['all', ...types];
            this.people = this.getUnique(this.rooms, 'capacity');

            this.type = this.$EventBus.type;
            this.capacity = this.$EventBus.capacity;
           this.minPrice = this.$EventBus.minPrice;
           this.maxPrice = this.$EventBus.maxPrice;
           this.maxSize = this.$EventBus.maxSize;
           this.minSize = this.$EventBus.minSize;
           this.breakfast = this.$EventBus.breakfast;
           this.pets = this.$EventBus.pets;
        },
        methods: {
            getUnique(items, value) {
                return [...new Set(items.map(item => item[value]))];
            }
        },
    }
</script>