import type { Meta } from '@storybook/react';
import { TransactionPreview } from './TransactionPreview';

const meta: Meta<typeof TransactionPreview> = {
    title: "operations/TransactionPreview",
    component: TransactionPreview,
}

export default meta;

export const Primary = {
    args:{        
        title: "Перевод на другой счет",
        amount: "100р",
        category: "Перевод",
        description: "Описание операции"    
    }
}