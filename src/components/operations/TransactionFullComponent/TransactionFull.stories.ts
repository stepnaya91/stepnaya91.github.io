import type { Meta } from '@storybook/react';
import { TransactionFull } from './TransactionFull';

const meta: Meta<typeof TransactionFull> = {
    title: "operations/TransactionFull",
    component: TransactionFull,
}

export default meta;

export const Primary = {
    args:{
        title: "Перевод на другой счет",
        date: "29.06.2025",
        amount: "100р",
        category: "Перевод",
        description: "Описание операции"        
    }
}