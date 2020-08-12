<template>
    <div>
        <div v-if="!room" class="error">
            <h3>no such room could be found...</h3>
            <router-link to='/rooms' class='btn-primary'>
                Back to rooms            
            </router-link>
        </div>
        <div v-if="room">
        <div :style='{background: `url(${mainImg}) center/cover no-repeat`}' id='header'>
            <div class="banner">
                <h1>{{ room.name }} room</h1>
                <div></div>
                <p></p>
                <router-link to='/rooms' class='btn-primary'>
                    back to rooms
                </router-link>
            </div>
        </div>
        <section class="single-room">
            <div class="single-room-images">
                <img v-for="(item, i) in defaultImg" :key='i' :src="item" :alt="room.name">
            </div>
            <div class="single-room-info">
                <article class="description">
                    <h3>details</h3>
                    <p>{{ room.description }}</p>
                </article>
                <article class='info'>
                    <h3>info</h3>
                    <h6>Price: {{ room.price }}</h6>
                    <h6>Size: {{ room.size }}</h6>
                    <h6>Max Capacity: {{ room.capacity >1 ? room.capacity + "people" : room.capacity + "person" }} </h6>
                    <h6> {{ room.pets ? "pets allowed": "no pets allowed" }}</h6>
                    <h6> {{ room.breakfast ? "free breakfast included" : "" }}</h6>
                </article>
            </div>
        </section>
        <section class="room-extras">
            <h6>extras</h6>
            <ul class='extras'>
                <li v-for='(item, i) in room.extras' :key='i'>- {{ item }}</li>
            </ul>
        </section>
        </div>
    </div>
</template>

<script>
import defaultBcg from '../images/room-1.jpeg';
    export default {
        data() {
            return {
                room: '',
                mainImg: '',
                dfaultImg: []
            }
        },
        created() {
            let room = this.$EventBus.getRoom(this.$route.params.slug);
            if(room) {
            this.room = room;
            const [mainImg, ...defaultImg] = room.images;
            this.mainImg = mainImg || defaultBcg;
            this.defaultImg = defaultImg;
            }
        },
    }
</script>
<style scoped>
#header {
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>