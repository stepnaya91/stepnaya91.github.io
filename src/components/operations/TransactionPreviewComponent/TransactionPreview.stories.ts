import type { Meta } from '@storybook/react';
import { TransactionPreview } from './TransactionPreview';

const meta: Meta<typeof TransactionPreview> = {
    title: "operations/TransactionPreview",
    component: TransactionPreview,
}

export default meta;

export const LongDescription = {
    args:{        
        title: "Перевод на другой счет",
        amount: "100р",
        category: "Перевод",
        description: "Динное описание, которое будет обрезано"    
    }
}

export const SmallDescription = {
    args:{
        title: "Перевод на другой счет",
        amount: "100р",
        category: "Перевод",
        description: "Короткое описание"
    }
}
