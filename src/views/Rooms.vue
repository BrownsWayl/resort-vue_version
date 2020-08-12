<template>
    <div>
        <header class="defaultHero">
            <div class="banner">
                <h1>our rooms</h1>
                <div></div>
                <p></p>
                <router-link to='/' class='btn-primary'>
                    return home
                </router-link>
            </div>
        </header>
        <room-container />
    </div>
</template>

<script>
import RoomContainer from '../components/RoomContainer';
    export default {
        name: 'rooms',
        components: {
            RoomContainer
        }
    }
</script>
