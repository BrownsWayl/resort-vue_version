<template>
    <article class='room'>
        <div class="img-container">
            <img :src="current.images[0] || img" alt="single room" />
            <div class="price-top">
                <h6>{{ current.price }}</h6>
                <p>per night</p>
            </div>
            <router-link :to='`/rooms/${current.slug}`' class='btn-primary room-link'>Features</router-link>
        </div>
        <p class="room-info">{{ current.name }}</p>
    </article>
</template>

<script>
import defaultImg from '../images/room-1.jpeg';
    export default {
        name: 'room',
        props: ['current'],
        data() {
            return {
                img: defaultImg
            }
        }
    }
</script>

<style scoped>

</style>