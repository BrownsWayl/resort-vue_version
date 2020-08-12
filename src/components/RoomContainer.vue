<template>
    <div>
        <room-filter :rooms='rooms' />
        <room-list :rooms='sortedRooms' />
    </div>
</template>

<script>
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
    export default {
        name: 'roomcontainer',
        components: {
            RoomFilter,
            RoomList
        },
        computed: {
            rooms: function() {
                return this.$EventBus.rooms;
            },
            sortedRooms: function() {
                return this.$EventBus.sortedRooms;
            }
        },
    }
</script>

<style scoped>

</style>