<template>
    <div>
        <div v-if="rooms.length === 0" class="empty-search">
            <h3>unfortunately no roms matched yout search</h3>
        </div>
        <section v-else class='roomslist'>
            <div class="roomslist-center">
                <room v-for="(item, i) in rooms" :current='item' :key='i' />
            </div>
        </section>
    </div>
</template>

<script>
import room from './room';
    export default {
        name: 'roomlist',
        props: ['rooms'],
        components: {
            room
        },
        created() {
        },
        updated() {
            console.log(this.rooms)
        },
    }
</script>
