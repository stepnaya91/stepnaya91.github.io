/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

const categoryNames : string[] = ["fruits", "vegetables", "clothes", "shoes"];
const CNT_CATEGORIES = 4;
const CNT_PRODUCTS = 12;
const CNT_OPERATIONS = 10;
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

type OperationType = 'Cost' | 'Profit';

//Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
type Operation = {
    id: string,
    name: string,
    desc?: string,
    createAt: string,
    amount: number,
    category: Category,
    type: OperationType
}

const getRandomOperationType = (): OperationType => {
  const randomIndex = Math.floor(Math.random() * 2); // Генерируем случайный индекс 0 или 1
  return randomIndex === 0 ? 'Cost' : 'Profit';
}

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const categories : Category[] = categoryNames.map(name=>{return {id: `Category${getRandomInt(1,CNT_CATEGORIES)}`, name: name}})


const getRandomCategory = (): Category => {
    const catRendomId = `Category${getRandomInt(1,CNT_CATEGORIES)}`; 
    return categories.find(c=>c.id === catRendomId);
}
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    return {
        id: `Product${getRandomInt(1, CNT_PRODUCTS)}`,
        name: `SomeProduct${getRandomInt(1,100)}`,
        photo: `image${getRandomInt(1,100)}`,
        desc: "descr",
        createAt: createdAt,
        oldPrice: getRandomInt(10,5000),
        price: getRandomInt(10,5000),
        category: getRandomCategory()
    }
};


/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    return {
        id: `Operation${getRandomInt(1, CNT_OPERATIONS)}`,
        name: "SomeName",
        desc: "SomeDescription",
        createAt: createdAt,
        amount: getRandomInt(1, 100),
        category: getRandomCategory(),
        type: getRandomOperationType()
    }   
};
