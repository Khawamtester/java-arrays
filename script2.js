// map Methode: convert an array to a new array, getting an array with only the item names or prices

const items = [
    { name: 'Bike',     price: 100 },
    { name: 'TV',       price: 200 },
    { name: 'Album',    price: 10  },
    { name: 'Book',     price: 5   },
    { name: 'Phone',    price: 500 },
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25  }
]

const itemNames = items.map((item) => {
    return item.name
})
const itemPrices = items.map((item) => {
    return item.price
})
console.log(itemNames)
console.log(itemPrices)
console.log(items)
