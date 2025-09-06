
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import React from 'react';


type FormValues = {
  name: string;
  email: string;
  message: string;
  preference: string;
};

export const ProfileForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted:', data);
    };


    return(    
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Form</h2>

        <label htmlFor="name">Name:</label>
        <input
            id = "name"
            type="text"
            placeholder="Enter your name"
            className={clsx({ 'input-error': errors.name })}
            {...register('name',{
            required: 'Name is required',
            minLength: {
                value: 2,
                message: "Min Value 2"
            },
            maxLength: {
                value: 50,
                message: "Max Value 50"
            }
            })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            className={clsx({ 'input-error': errors.email })}
            placeholder="Enter your email"
            {...register('email',
            { required: 'Email is required' }
            )}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="message">Message:</label>
        <textarea
            id="message"
            className={clsx({ 'input-error': errors.message })}
            placeholder="Enter your message"
            {...register('message',{
            required: 'Message is required',
            minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
            },
            maxLength: {
                value: 500,
                message: 'Message must be less than 500 characters',
            },
            })}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}

        <fieldset>
            <legend>How did you hear about us?</legend>

            <label>
            <input
                type="radio"
                value="newsletters"
                className={clsx({ 'input-error': errors.preference })}
                {...register('preference',{ required: 'Please select one option' })}
            />

            Search Engine (Yandex, Google, Bing)
            </label>

            <label>
            <input
                type="radio"
                value="updates"
                className={clsx({ 'input-error': errors.preference })}
                {...register('preference',{ required: 'Please select one option' })}
            />
            Social Media
            </label>

            <label>
            <input
                type="radio"
                value="offers"
                className={clsx({ 'input-error': errors.preference })}
                {...register('preference',{ required: 'Please select one option' })}
            />
            Friend or Colleague
            </label>

            {errors.preference && <p className="error">{errors.preference.message}</p>}
        </fieldset>

        <button type="submit">Submit</button>
        </form>
    )
}