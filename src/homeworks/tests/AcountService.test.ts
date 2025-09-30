import { Product, ProductTypeName } from "./ProductType";
import { Account, AccountTypeName} from "./AccountCreator"
import { AccountService } from "./AcountService"
import { dbMethods } from "./AcountService";

let mockBadDB: dbMethods;
let mockDB: dbMethods;
let accService: AccountService;
let standardAccount: Account;
let goldAccount: Account;
let carProduct: Product;
let toyProduct: Product;

beforeAll(()=>{
    standardAccount = {
        id: '1',
        fio: 'Account 1',
        accountType: "Standard"
    }
    carProduct = {
        id: '1233234',
        name: 'Car1',
        price: 5000,
        category: "Car"
    }
    goldAccount = {
        id: '1',
        fio: 'Account 1',
        accountType: "Gold"
    }
    toyProduct = {
        id: '1233234',
        name: 'Toy1',
        price: 5000,
        category: "Toy"
    }
});


beforeEach(()=>{
    mockDB = {
        getAccountTypeFromDB: jest.fn().mockImplementation((name: AccountTypeName)=>{
            if(name=="Standard") {
                return{
                    name: "Standard",
                    discount: 10
                }
            }else{
                return{
                    name: "Gold",
                    discount: 25
                }
            }
        }),
        getProductTypeFromDB: jest.fn().mockImplementation((name: ProductTypeName)=>{
            if(name=="Car"){
                return {
                    typeName: "Car", 
                    concreteDiscount:[
                            {name:"Free",discount:40},
                            {name:"Premium",discount:20},
                            {name:"Standard",discount:10}
                        ] 
                    }
            }else{
                return{
                    typeName: "Toy"
                }
            }   
        }),
        updateAccountTypeInDB: jest.fn(),
        updateProductTypeInDB: jest.fn()
    }

    mockBadDB = {
        getAccountTypeFromDB: jest.fn().mockReturnValue(undefined),
        getProductTypeFromDB: jest.fn().mockReturnValue(undefined),
        updateAccountTypeInDB: jest.fn(),
        updateProductTypeInDB: jest.fn()
    }
})

describe('setAccountTypeDiscount tests',()=>{
    test('success',()=>{
        accService = new AccountService(mockDB);
        accService.setAccountTypeDiscount("Standard", 10);

        expect(mockDB.getAccountTypeFromDB).toBeCalled();
        expect(mockDB.updateAccountTypeInDB).toBeCalled();
        expect(mockDB.getProductTypeFromDB).not.toBeCalled();
        expect(mockDB.updateProductTypeInDB).not.toBeCalled();
    });
    test('exception no such accountType arized',()=>{
        accService = new AccountService(mockBadDB);       
        
        expect(()=>{accService.setAccountTypeDiscount("Standard", 10)}).toThrow("No such accountType (Standard) in db");
        expect(mockBadDB.getAccountTypeFromDB).toBeCalled();
        expect(mockBadDB.updateAccountTypeInDB).not.toHaveBeenCalled();
        expect(mockBadDB.getProductTypeFromDB).not.toHaveBeenCalled();
        expect(mockBadDB.updateProductTypeInDB).not.toHaveBeenCalled();
    })
});

describe("setProductTypeDiscount test", ()=>{
    test("success", () => {
        accService = new AccountService(mockDB);
        accService.setProductTypeDiscount("Car", "Free", 60);
        
        expect(mockDB.getProductTypeFromDB).toBeCalled();
        expect(mockDB.updateProductTypeInDB).toBeCalled();
        expect(mockDB.getAccountTypeFromDB).not.toBeCalled();
        expect(mockDB.updateAccountTypeInDB).not.toBeCalled();
    });
    test("new discount for product type without discount",()=>{
        accService = new AccountService(mockDB);
        accService.setProductTypeDiscount("Car", "Gold", 60);
        
        expect(mockDB.getProductTypeFromDB).toBeCalled();
        expect(mockDB.updateProductTypeInDB).toBeCalled();
        expect(mockDB.getAccountTypeFromDB).not.toBeCalled();
        expect(mockDB.updateAccountTypeInDB).not.toBeCalled(); 
    });
    test("exception no such productType arized", () => {
        accService = new AccountService(mockBadDB);
        

        expect(()=>{accService.setProductTypeDiscount("Car", "Free", 60)}).toThrow("No such productType (Car) in db");
        
        expect(mockBadDB.getAccountTypeFromDB).not.toBeCalled();
        expect(mockBadDB.updateAccountTypeInDB).not.toBeCalled();
        expect(mockBadDB.getProductTypeFromDB).toBeCalled();
        expect(mockBadDB.updateProductTypeInDB).not.toBeCalled();        
    });
})

describe("getAccountDiscount tests", ()=>{
    test("success", ()=>{
        accService = new AccountService(mockDB);
        
        const discount = accService.getAccountDiscount(standardAccount, carProduct);
        expect(discount).toBe(20);
        expect(mockDB.getProductTypeFromDB).toBeCalled();
        expect(mockDB.getAccountTypeFromDB).toBeCalled();
        expect(mockDB.updateAccountTypeInDB).not.toBeCalled();
        expect(mockDB.updateProductTypeInDB).not.toBeCalled();
    });

    test("producttype without discount for accounttype", () => {
        accService = new AccountService(mockDB);
        const discount = accService.getAccountDiscount(goldAccount, carProduct);
        expect(discount).toBe(25);
    })

    test("producttype without null concretediscount", () => {
        accService = new AccountService(mockDB);
        const discount = accService.getAccountDiscount(goldAccount, toyProduct);
        expect(discount).toBe(25);
    })

    test("exception arized", ()=>{
        accService = new AccountService(mockBadDB);
        expect(()=>{accService.getAccountDiscount(standardAccount, carProduct)}).toThrow("Can't define discount for product 1233234 with type Car");
        
        expect(mockBadDB.getProductTypeFromDB).toBeCalled();
        expect(mockBadDB.getAccountTypeFromDB).not.toBeCalled();
        expect(mockBadDB.updateAccountTypeInDB).not.toBeCalled();
        expect(mockBadDB.updateProductTypeInDB).not.toBeCalled();
    });
})