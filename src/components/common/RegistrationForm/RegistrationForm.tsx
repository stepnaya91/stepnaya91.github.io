import React, { useState } from "react";
import clsx from "clsx"
import { useForm } from "react-hook-form";
import "./RegistrationForm.scss";

type User = {
  login: string;
  password: string; 
  confirmPassword: string; 
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate: Date
};

export const RegistrationForm: React.FC = () => {
    const [registration, setRegistration] = useState<boolean>(false);

    const {
        register,
        unregister,
        reset,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<User>(); 
    
    const onSubmit = (data: User) => {
        console.log('User Data: ', data);
        reset();
    }    
    const showFields = () => {
        setRegistration(!registration);
        if(!registration){
            unregister("confirmPassword");
            unregister("email");
            unregister("birthDate");
            unregister("firstName");
            unregister("lastName");
            unregister("middleName");
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Вход</h2>
            <label htmlFor="login">Логин:</label>
            <input 
                id="login"
                type="text"
                className={clsx({ 'input-error': errors.login})}
                {...register('login',{
                    required: 'Укажите логин'
                })}            
            />
            {errors.login && <p className="error">{errors.login.message}</p>}

            <label htmlFor="password">Пароль: </label>
            <input 
                id="password"
                type="password"
                placeholder= "Пароль должен содержать буквы в верхнем и нижнем регистре, цифры и специальные символы: @$!%*?&"                    
                className={clsx({ 'input-error': errors.password})}
                {...register('password',{
                    required: 'Укажите пароль', 
                    minLength: { 
                        value: 8, 
                        message: "Пароль должен содержать минимум 8 символов" 
                    },      
                    pattern: { 
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                        message: "Пароль должен содержать буквы в верхнем и нижнем регистре, цифры и специальные символы: @$!%*?&" 
                    } 
                })}            
            />
            {errors.password && <p className="error">{errors.password.message}</p>}

            {!registration&&<a id="registration" onClick={showFields}>Зарегистрироваться</a>}
            {registration&&(
                <>
                    <label htmlFor="confirmPassword">Подтвердите пароль: </label>
                    <input 
                        id="confirmPassword"
                        type="password"
                        className={clsx({ 'input-error': errors.confirmPassword})}
                        {...register('confirmPassword',{
                            required: 'Подтвердите пароль',
                            validate: (val: string) => {
                                if (watch('password') != val) {
                                return "Пароль не совпадает";
                                }
                            },
                        })}            
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

                    <label htmlFor="email">Email: </label>
                    <input 
                        id="email"
                        type="email"
                        className={clsx({ 'input-error': errors.email})}
                        {...register('email',{
                            required: 'Укажите почту'
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}

                    <label htmlFor="firstName">Имя: </label>
                    <input 
                        id="firstName"
                        type="text"
                        className={clsx({ 'input-error': errors.firstName})}
                        {...register('firstName',{
                            required: 'Укажите имя'
                        })}
                    />
                    {errors.firstName && <p className="error">{errors.firstName.message}</p>}

                    <label htmlFor="lastName">Фамилия: </label>
                    <input 
                        id="lastName"
                        type="text"
                        className={clsx({ 'input-error': errors.lastName})}
                        {...register('lastName',{
                            required: 'Укажите фамилию'
                        })}
                    />
                    {errors.lastName && <p className="error">{errors.lastName.message}</p>}

                    <label htmlFor="middleName">Отчество: </label>
                    <input 
                        id="middleName"
                        type="text"
                        className={clsx({ 'input-error': errors.middleName})}
                    />
                    {errors.middleName && <p className="error">{errors.middleName.message}</p>}

                    <label htmlFor="birthDate">Дата рождения: </label>
                    <input 
                        id="birthDate"
                        type="date"
                        className={clsx({ 'input-error': errors.birthDate})}
                        {...register('birthDate',{
                            required: 'Укажите день рождения'
                        })}
                    />
                    {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
                    <a id="cancel" onClick={showFields}>Отмена</a>
                </>
            )}
            <button type="submit">Войти</button>

        </form>
    )
}