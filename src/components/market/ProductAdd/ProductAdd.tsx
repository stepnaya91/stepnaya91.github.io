import clsx from "clsx"
import React from "react"
import { useForm } from 'react-hook-form';
import { categories as Categories } from "../../ProductCreator";
import "./ProductAdd.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "src/components/ProductType";
import { useTheme } from "src/components/ThemeProvider";

const formSchema = z
  .object({
        name: z.string().min(1, "Введите название товара"),
        price: z.number('Укажите цену').min(1,'Введите цену').max(5000, 'Не более 5000'),
        categoryName: z.string().min(1,'Необходимо выбрать категорию'),
        image: z.instanceof(FileList).refine((files) => ['image/jpeg', 'image/png'].includes(files?.[0]?.type), 'Не верный тип файла. Только JPEG и PNG').optional(),
        description: z.string().optional()
    })


type ProductSchema = z.infer<typeof formSchema>;

export const ProductAdd: React.FC<Partial<Product>> = ({name,price,categoryName,image,description}) => {
    const {theme} = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(formSchema) });

    const onSubmit = (data: ProductSchema) => {
        console.log('Product Add: ', data);
    }


    const categories = Categories;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Добавление товара</h2>
            <label htmlFor="name">Название: </label>
            <input
                value={name?name:undefined}
                id="name"
                type="text"
                placeholder="Введите название товара"
                className={clsx({ 'input-error': errors.name })}
                {...register('name')}            
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <label htmlFor="price">Цена: </label>
            <input
                value={price?price:undefined}
                id="price"
                type="number"
                placeholder="Введите цену товара"
                className={clsx({ 'input-error': errors.price })}
                {...register('price',{ valueAsNumber: true })}            
            />
            {errors.price && <p className="error">{errors.price.message}</p>}

            <label htmlFor="categoryName">Категория: </label>
            <select 
                value={categoryName?categoryName:undefined}
                id="categoryName"
                {...register("categoryName")}            >
                <option value="">Выберите категорию..</option>
                {categories.map((category)=>(<option key={category} value={category}>{category}</option>))}
            </select>
            {errors.categoryName && <p className="error">{errors.categoryName.message}</p>}

            <label htmlFor="image">Загрузите изображение товара: </label>
            <input 
                value={image?image:undefined}
                type="file"
                id="image"
                {... register("image")}                          
            />
            {errors.image && <p className="error">{errors.image.message}</p>}

            <label htmlFor="description">Описание: </label>
            <textarea
                value={description?description:undefined}
                id="description"
                {... register("description")}
            />

            <button className={"button-"+theme} type="submit">Добавить товар</button>
        </form>
    )
}