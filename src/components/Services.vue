<template>
    <section class='services'>
        <div class="section-title">
            <h4>services</h4>
        </div>
        <div class="services-center">
            <article class='service' v-for='(item, i) in services' :key='i'>
                <span>{{ item.icon }}</span>
                <h6>{{ item.title }}</h6>
                <p>{{ item.info }}</p>
            </article>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'services',
        data() {
            return {
                services: [
            {
                icon: '111',
                title: 'free cocktail',
                info: 'blablabalbalbalab'
            },
            {
                icon: '222',
                title: 'free Hiking',
                info: 'blablabalbalbalab'
            },
            {
                icon: '333',
                title: 'free FaShuttle',
                info: 'blablabalbalbalab'
            },
            {
                icon: '444',
                title: 'free Beer',
                info: 'blablabalbalbalab'
            },
        ]
            }
        }
    }
</script>

<style scoped>

</style>