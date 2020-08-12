import Vue from 'vue';
import items from '../data';

const vm = new Vue({
    name: 'eventbus',
    data() {
        return {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
            type: 'all',
            capacity: 1,
            price: 0,
            maxPrice: 0,
            minPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        }
    },
    created() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        this.maxPrice = maxPrice;
        this.price = maxPrice;
        this.maxSize = maxSize;
        this.featuredRooms = featuredRooms;
        this.sortedRooms = rooms;
        this.rooms = rooms;
        this.loading = false;
    },
    methods: {
        formatData(items) {
            let tempItems = items.map(item => {
                let id = item.sys.id;
                let images = item.fields.images.map(image =>
                    image.fields.file.url
                );
                let room = { ...item.fields, images, id };
                return room;
            });
            return tempItems;
        },
        getRoom(slug) {
            let tempItems = [...this.rooms];
            const room = tempItems.find(room => room.slug === slug);
            return room;
        },
        handleChange(e) {
            const target = e.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            this[name] = value;
            console.log(name, value)
            this.filterRooms();
        },
        filterRooms() {
            let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this;
            let tempRooms = [...rooms];
            capacity = parseInt(capacity);
            if(type !== 'all') {
                tempRooms = tempRooms.filter( room => room.type === type);
            }
            if(capacity !== 1) {
                tempRooms = tempRooms.filter( room => room.capacity >= capacity);
            }
            tempRooms = tempRooms.filter(room => room.price <= price);
            tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
            if(breakfast) {
                tempRooms = tempRooms.filter(room => room.breakfast === breakfast);
            }
            if(pets) {
                tempRooms = tempRooms.filter(room => room.pets === true);
            }
            this.sortedRooms = tempRooms;
        }
    }
});

export default vm;