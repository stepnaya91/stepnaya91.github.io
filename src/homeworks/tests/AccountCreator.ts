export type AccountTypeName = 'Standard' | 'Premium' | 'Gold' | 'Free';
export type Account = {
    id: string;
    fio: string;
    accountType: AccountTypeName;
}

export type AccountType = {
    name: AccountTypeName,
    discount: number
}

export const AccountTypeNames  : string[] = ['Standard', 'Premium', 'Gold', 'Free'];
export const CNT_AccountTypeNames = 4;

