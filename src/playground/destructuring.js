//
//Object Destructing
//
const person = {
    name: 'Ercan',
    age: 29,
    location: {
        city: 'Ankara',
        temp: 5
    }
};

// const {name : firstName ='Default Name', age} = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp:tempeture} = person.location;

// if(tempeture && city ) {

//     console.log(`${city} is temp : ${tempeture}`);

// }

// const book = {
//     title: "Ego is Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {title, author} = book;

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);

//
//Array Destructing
//

const address = ["Koru Mah.","Çankaya", , "06876"];

const [street, state, city='Samsun', zip] = address;

console.log(`My Adress ${street} ${state} ${city}`);

const item = ["Coffe (hot)", "$2.00","$2.50" ,"$3.00"];

const [coffee, priceShort, priceTall, priceBig] = item;

console.log(`A medium ${coffee} costs ${priceTall}`);
