<template>
    <section class='featured-rooms'>
        <div class="section-title">
            <h4>featured rooms</h4>
        </div>
        <div class="featured-rooms-center">
            <room v-for="(room, i) in rooms" :current='room' :key='i' />
        </div>
    </section>
</template>

<script>

import room from './room';
    export default {
        name: 'featuredroom',
        data() {
            return {
                rooms: ''
            }
        },
        components: {
            room
        },
        created() {
            this.rooms = this.$EventBus.rooms;
        },
    }
</script>

<style scoped>

</style>