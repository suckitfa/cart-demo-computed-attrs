const app = new Vue({
    el: "#app",
    data: {
        books: [{
            id: 1,
            title: "Vue.js无难事",
            price: 98,
            count: 1

        }, {
            id: 2,
            title: "VC++很牛逼",
            price: 198,
            count: 1

        }, {
            id: 3,
            title: "Vue.js很好用",
            price: 998,
            count: 1

        }]
    },
    methods: {
        itemPrice(price, count) {
            return price * count;
        },
        deleteItem(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            var total = 0;
            for (let book of this.books) {
                total += book.price * book.count;
            }
            return total;
        }
    }
});