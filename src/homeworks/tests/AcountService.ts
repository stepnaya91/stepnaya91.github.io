import { Account, AccountTypeName, AccountType} from "./AccountCreator"
import { ProductType, ProductTypeName, Product } from "./ProductType";

export interface dbMethods{
    getAccountTypeFromDB: (name:string) => AccountType;
    getProductTypeFromDB: (name:string) => ProductType;
    updateProductTypeInDB: (pType:ProductType) => void;
    updateAccountTypeInDB: (accType:AccountType) => void;
}

export class AccountService{
    public _db: dbMethods;

    constructor(db: dbMethods){
        this._db=db;
    }

    setAccountTypeDiscount = (name:AccountTypeName, discount: number) => {
        const accountType = this._db.getAccountTypeFromDB(name);
        if(!accountType) throw new Error (`No such accountType (${name}) in db`);
        
        accountType.discount = discount;
        this._db.updateAccountTypeInDB(accountType);
    }

    setProductTypeDiscount = (productName: ProductTypeName, accountName: AccountTypeName, newDiscount: number) => {
        let productType = this._db.getProductTypeFromDB(productName);
        if(!productType) throw new Error (`No such productType (${productName}) in db`);
        
        let discountList = productType.concreteDiscount;
        
        const index = discountList.findIndex(d=>d.name==accountName);
        if(!index){
            discountList.push({
                name: accountName,
                discount: newDiscount        
            })
        }else{
            discountList.splice(index, 1, {
                name: accountName,
                discount: newDiscount
            });
        }
        productType.concreteDiscount=discountList;
        this._db.updateProductTypeInDB(productType);
    }

    getAccountDiscount = (account: Account, product: Product) => {
        const productType = this._db.getProductTypeFromDB(product.category);
        if(!productType) throw new Error (`Can't define discount for product ${product.id} with type ${product.category})`);
        let discount = 0;
        const productDiscount = productType.concreteDiscount?.findLast(p=>p.name==account.accountType);
        discount = productDiscount?productDiscount.discount:0;
        const accountDiscount = this._db.getAccountTypeFromDB(account.accountType)?.discount;
        if(!accountDiscount) throw new Error (`Can't define accountDiscount for accountType ${account.accountType}`);
        return accountDiscount+discount;
    }
}