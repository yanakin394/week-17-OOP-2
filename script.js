const data = [
    {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
    {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

//создаю класс Транспорт
class Transport {
    constructor (type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {
        return this.type, this.brand
    }
    getPrice() {
        return this.price
    }
}
//создаю класс Car наследуемый от Transport
class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors
    }
}
//создаю класс Bike наследуемый от Transport
class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed
    }
}
//получаю доступ к элементу веб-стр.
const container = document.querySelector('.transport');

//создаю цикл для получения данных из массива
for (let item of data) {
    if(item.type === 'car') {
        const car = new Car(item.type, item.price, item.brand, item.doors);

        let itemCar = document.createElement("div");
        itemCar.innerText = car.getInfo();

        let itemDoors = document.createElement("div");
        itemDoors.innerText = car.getDoorsCount();

        let itemPrice = document.createElement("div");
        itemPrice.innerHTML = `Цена: ${car.getPrice()} руб.`;

        let itemImg = document.createElement("img");
        itemImg.classList.add("car_img");
        itemImg.src = item.image; 

        container.appendChild(itemImg);
        container.appendChild(itemCar);
        container.appendChild(itemDoors);
        container.appendChild(itemPrice);
    }
    else if (item.type === 'bike') {
    const bike = new Bike(item.type, item.price, item.brand, item.maxSpeed);
    
    let itemBike = document.createElement("div");
    itemBike.innerText = bike.getInfo();

    let itemBikePrice = document.createElement("div");
    itemBikePrice.innerText = `Цена: ${bike.getPrice()} руб.`;

    let itemSpeed = document.createElement("div");
    itemSpeed.innerText = bike.getMaxSpeed();
    
    let bikeImg = document.createElement("img");
    bikeImg.classList.add("bike_img");
    bikeImg.src = item.image;

    container.appendChild(itemImg);
    container.appendChild(itemBike);
    container.appendChild(itemSpeed);
    container.appendChild(itemBikePrice);
    }
} 
