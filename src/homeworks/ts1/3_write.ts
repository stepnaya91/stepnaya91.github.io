/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

//Категория (Category)
type Category = {
    id: string,
    name: string,
    photo?: string
}
//Продукт (Product)
type Product = {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createAt: string,
    oldPrice?: number,
    price: number,
    category: Category
}
//Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
type Operation = {
    id: string,
    name: string,
    desc?: string,
    createAt: string,
    amount: number,
    category: Category,
    type: 'Cost' | 'Profit'
}

const categories : Category[] = [
    {id: "fruits", name: "фрукты"}
]

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string) => {
    const products : Product[] = [
        {
            id : "p1", 
            name : "банан", 
            photo : "image1", 
            desc : "описание",
            createAt : createdAt, 
            oldPrice : 20, 
            price : 30, 
            category: categories.find(c=>c.id=="fruits")
        },
        {
            id : "p2", 
            name : "огурец", 
            photo : "image2", 
            desc : "описание",
            createAt : createdAt, 
            oldPrice : 20, 
            price : 30, 
            category: categories.find(c=>c.id=="vegetables")
        }
    ];    
    const i=getRandomInt(0,products.length-1);
    return products[i];
};

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string) => {
    const operations : Operation[] = [
        {
            id: "op1",
            name: "покупка",
            desc: "описание",
            createAt: createdAt,
            amount: 100,
            category: categories.find(c=>c.id=='vegetables'),
            type: 'Cost'
        },
        {
            id: "op2",
            name: "продажа",
            desc: "описание",
            createAt: createdAt,
            amount: 100,
            category: categories.find(c=>c.id=='fruits'),
            type: 'Profit'
        }
    ];
    const i=getRandomInt(0,operations.length-1);
    return operations[i];    
};
