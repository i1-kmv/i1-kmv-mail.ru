let money;
let name;
let time;
let price;


function start() {
    money = prompt('Ваша бюджет?');

    while (isNaN(money) || money == ''|| money == null) {
        money = prompt('Ваша бюджет?');
    }

    name = prompt( 'Название вашего магазина?').toUppesCase;
    time =21;
}
//start();


let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems:[],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++ ) {
         let a = prompt('Какой тип товара будем продавать?');
            if ((typeof(a)) === 'string' && (typeof(a)) != null && a!='' && a.length < 50) {
                console.log(' Все верно!');
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
         }
        }       
    },
    workTime: function workTime(time) {
        if (time<0) {
            console.log(' Такого не может быть');
        } else if(time > 8 && time < 20) {
           console.log(' Время работать');
           mainList.open = true;
        } else if (time < 24) {
            console.log(' Уже поздно!')
        } else {
            console.log(' В сутках 24 часа')    
        }
    },
    dayBudget: function dayBudget() {
        alert(" Ежедневный бюджет " + mainList.budget / 30);
    },
    makeDiscount: function makeDiscount() {
        if (mainList.discount == true) {
            price = (price/100)*80;
        }
    },
    hireEmployers: function hireEmployers() {
        for (let i = 1; i < 4; i++) {
            let name = prompt(" Имя сотрудника");
            mainList.employers[i] = name;
        }
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt("Перечислите через запятую товары");

        mainList.shopItems = items.split(",");
        mainList.shopItems.push(prompt(" Подождите, еще"));
        mainList.shopItems.sort();
    }
    
};

console.log(mainList)


