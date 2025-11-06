import clsx from "clsx"
import React from "react"
import { useForm } from 'react-hook-form';
import { categories as Categories } from "../../ProductCreator";
import "./ProductAdd.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "src/components/ProductType";
import { useTheme } from "src/components/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { productsActions, productsSelectors } from "../../../../store/slices/products";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";

const formSchema = z
  .object({
        name: z.string().min(1, "Введите название товара"),
        price: z.number('Укажите цену').min(1,'Введите цену').max(5000, 'Не более 5000'),
        categoryName: z.string().min(1,'Необходимо выбрать категорию'),
        description: z.string().optional()
    })


type ProductSchema = z.infer<typeof formSchema>;

export const ProductAdd: React.FC = () => {
    const {theme} = useTheme();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(formSchema) });

    const dispatch = useDispatch();
    const addItem = (product: Product) => {
        dispatch(productsActions.add({product: product}));
    };
    const updateItem = (product: Product) => {
        dispatch(productsActions.update({product:product}));
    }
    
    const navigate = useNavigate();

    const {productId} = useParams();
    const onSubmit = (data: ProductSchema) => {
        console.log('Product Add: ', data);
        
        const product: Product = {
            id:productId?productId:uuidv4(),
            categoryName:data.categoryName,
            name:data.name,
            price:data.price,
            description:data.description?data.description:undefined
        }

        if(productId){
            updateItem(product);
        }
        else{
            addItem(product);
        }   
        navigate(-1); // Возвращает на предыдущую страницу            
    }

    const categories = Categories;

    const product = useSelector(productsSelectors.getProduct(productId));
    const name = product?product.name:undefined;
    const price = product?product.price:undefined;
    const categoryName = product?product.categoryName:undefined;
    const image = product?product.image:undefined;
    const description = product?product.description:undefined;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Добавление/изменение товара</h2>
            <label htmlFor="name">Название: </label>
            <input
                defaultValue={name?name:undefined}
                id="name"
                type="text"
                placeholder="Введите название товара"
                className={clsx({ 'input-error': errors.name })}
                {...register('name')}            
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <label htmlFor="price">Цена: </label>
            <input
                defaultValue={price?price:undefined}
                id="price"
                type="number"
                placeholder="Введите цену товара"
                className={clsx({ 'input-error': errors.price })}
                {...register('price',{ valueAsNumber: true })}            
            />
            {errors.price && <p className="error">{errors.price.message}</p>}

            <label htmlFor="categoryName">Категория: </label>
            <select 
                defaultValue={categoryName?categoryName:undefined}
                id="categoryName"
                {...register("categoryName")}            >
                <option value="">Выберите категорию..</option>
                {categories.map((category)=>(<option key={category} value={category}>{category}</option>))}
            </select>
            {errors.categoryName && <p className="error">{errors.categoryName.message}</p>}

            <label htmlFor="description">Описание: </label>
            <textarea
                defaultValue={description?description:undefined}
                id="description"
                {... register("description")}
            />

            <button className={"button-"+theme} type="submit" >Добавить товар</button>
        </form>
    )
}

