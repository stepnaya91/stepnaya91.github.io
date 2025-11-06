import React from "react";
import clsx from "clsx"
import { useForm } from "react-hook-form";
import "../auth.scss";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { loginActions } from "../../../../store/slices/login";
import { useDispatch } from "react-redux";

interface LoginFormProps{
    onClick?: () => void;
}

const formSchema = z.object({
        login: z.string().min(1, 'Укажите логин'),
        password: z.string()
            .min(1,'Укажите пароль')
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                "Пароль не менее 8 символов, должен содержать буквы в верхнем и нижнем регистре, цифры и специальные символы: @$!%*?&")
    })

type User = z.infer<typeof formSchema>;

export const LoginForm: React.FC<LoginFormProps> = ({onClick}:LoginFormProps) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({ 
        resolver: zodResolver(formSchema) 
    }); 

    const dispatch = useDispatch();
    
    const onSubmit = (data: User) => {
        console.log('User Data: ', data);
        reset();
        dispatch(loginActions.set(data.login));
        onClick();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Вход</h2>
            <label htmlFor="login">Логин:</label>
            <input 
                id="login"
                type="text"
                className={clsx({ 'input-error': errors.login})}
                {...register('login')}            
            />
            {errors.login && <p className="error">{errors.login.message}</p>}

            <label htmlFor="password">Пароль: </label>
            <input 
                id="password"
                type="password"
                placeholder= "Пароль должен содержать буквы в верхнем и нижнем регистре, цифры и специальные символы: @$!%*?&"                    
                className={clsx({ 'input-error': errors.password})}
                {...register('password')}            
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
            <button type="submit">Войти</button>
        </form>
    )
}
