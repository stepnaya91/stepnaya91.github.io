import clsx from "clsx"
import React from "react"
import { useForm } from 'react-hook-form';
import { categories as Categories, Product } from "../../ProductCreator";
import "./ProductAdd.scss";

export const ProductAdd: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Product>();

    const onSubmit = (data: Product) => {
        console.log('Product Add: ', data);
    }

    const categories = Categories;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Добавление товара</h2>
            <label htmlFor="name">Название: </label>
            <input
                id="name"
                type="text"
                placeholder="Введите название товара"
                className={clsx({ 'input-error': errors.name })}
                {...register('name',{
                    required: 'Необходимо ввести название'
                })}            
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <label htmlFor="price">Цена: </label>
            <input
                id="price"
                type="number"
                placeholder="Введите цену товара"
                className={clsx({ 'input-error': errors.price })}
                {...register('price',{
                    required: 'Необходимо ввести цену',
                    minLength: {
                        value: 0,
                        message: "Минимальная величина 0"
                    },
                    maxLength: {
                        value: 5000,
                        message: "Максимальная величина 5000"
                    }
                })}            
            />
            {errors.price && <p className="error">{errors.price.message}</p>}

            <label htmlFor="categoryName">Категория: </label>
            <select 
                id="categoryName"
                {...register("categoryName",{
                    required: "Необходимо выбрать категорию товара"
                })}
            >
                <option value="">Выберите категорию..</option>
                {categories.map((category)=>(<option key={category} value={category}>{category}</option>))}
            </select>
            {errors.categoryName && <p className="error">{errors.categoryName.message}</p>}

            <label htmlFor="image">Загрузите изображение товара: </label>
            <input 
                type="file"
                id="image"
                {... register("image",{
                    validate: {
                        fileType: (value) => {
                            if(value.length>0){
                                const acceptedTypes = ['image/jpeg', 'image/png'];
                                const file = value[0];
                                if(file&&!acceptedTypes.includes(file.type)){
                                        return 'Unsupported file type. Only JPEG and PNG are allowed.';
                                    }
                            }
                                return true;
                        },
                    },
                })}                          
            />
            {errors.image && <p className="error">{errors.image.message}</p>}

            <label htmlFor="description">Описание: </label>
            <textarea
                id="description"
                {... register("description")}
            />

            <button type="submit">Добавить товар</button>
        </form>
    )
}