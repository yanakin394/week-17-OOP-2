# week-17-OOP-2
Вы устроились разработчиком в автомобильную компанию. Вам нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене. Вам нужно:
- создать класс Transport, у него есть свойства: type, price, brand и два метода `getInfo()` и `getPrice()` ;
- создать класс Car, который наследует от Transport. Этот класс должен содержать метод `getDoorsCount()` , который возвращает количество дверей;
- создать класс Bike, который наследует от Transport. Этот класс должен содержать метод `getMaxSpeed()`, который возвращает максимальную скорость мотоцикла.
Объект, с которым вам предстоит работать:
    
    ```jsx
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
    ```
    
    Для выполнения этого задания, вам нужно изучить самостоятельно:
    - [Про потерю контекста в js](https://habr.com/ru/post/421959/)
    - [Метод bind() для привязки контекста](https://medium.com/webbdev/bind-18396622ddc4)
    
    ## Задание на развитие мягких навыков (soft skills)🔮
    
    Во время любого интенсивного обучения очень важно не забывать переключаться на что-то, что вы любите делать. Это поможет восстановить силы, а учёба перестанет казаться бесконечной каторгой. Мы собрали разные идеи, которые помогут переключиться и отдохнуть:
    
    - послушать любимую музыку;
    - сделать любимый напиток;
    - заняться спортом;
    - 15 минут тишины;
    - поиграть в игру;
    - открыть для себя новое место;
    - заняться хобби;
    - поспать;
    - почитать книгу;
    - посмотреть классный фильм;
    - ухаживать за собой;
    - просто лежать.
    
    Продолжите список и делайте паузы, они тоже нужны и важны 😉
