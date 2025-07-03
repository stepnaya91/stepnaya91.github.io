import type { Story,Meta } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
    title: "components/Modal",
    component: Modal,
    args:{
        visible:true
    }
}

export default meta;

export const WithP = {
    args:{
        visible: true,
        children:<div><p>Первый элемент</p></div>
    }
}

export const WithInput = {
    args:{
        visible: true,
        children:<div><input value="Привет"></input></div>
    }
}
export const WithButton = {
    args:{
        visible: true,
        children:<div><button type="button">Кнопка</button></div>
    }
}
export const Unvisible = {
    args:{
        visible: false
    }
}

