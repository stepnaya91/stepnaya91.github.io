
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import React from 'react';
import { z } from 'zod';
import './ProfileForm.css'
import { useTheme } from 'src/components/ThemeProvider';
import { useLanguage } from 'src/components/LanguageProvider';
import { useSelector } from 'react-redux';
import { profileSelectors } from '../../../store/slices/profile';


const formSchema = z
  .object({
    name: z.string()
      .min(2, { message: 'Min Value 2' })
      .max(50, 'Max Value 50'),
    email: z.email('Wrong email format'),
    message: z.string()
        .min(10, { message: 'Message must be at least 10 characters' })
        .max(500, 'Message must be less than 500 characters'), 
    preference: z.enum(['newsletters', 'updates', 'offers' ], {
        message: 'Please select one option'
    })
  })

type FormData = z.infer<typeof formSchema>;

export const ProfileForm: React.FC = () => {
    const {theme} = useTheme();
    const {t} = useLanguage();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(formSchema) });

    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        console.log('Form submitted:', data);
    };

    const profile = useSelector(profileSelectors.get);

    return(    
        <form className={theme} onSubmit={handleSubmit(onSubmit)}>
        <h2>Contact Form</h2>

        <label htmlFor="name">Name:</label>
        <input
            id = "name"
            type="text"
            value={profile.name}
            placeholder="Enter your name"
            className={clsx({ 'input-error': errors.name }, theme)}
            {...register('name')}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <label htmlFor="email">Email:</label>
        <input
            type="email"
            value={profile.email}
            id="email"
            className={clsx({ 'input-error': errors.email}, theme)}
            placeholder="Enter your email"
            {...register('email')}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="message">Message:</label>
        <textarea
            id="message"
            value={profile.message}
            className={clsx({ 'input-error': errors.message}, theme )}
            placeholder="Enter your message"
            {...register('message')}
        />
        {errors.message && <p className="error">{errors.message.message}</p>}

        <fieldset className={"fieldset-"+theme}>
            <legend>How did you hear about us?</legend>

            <label>
            <input
                type="radio"
                value="newsletters"
                checked={profile.preference=="newsletters"}
                className={clsx({ 'input-error': errors.preference}, theme )}
                {...register('preference')}
            />
            Search Engine (Yandex, Google, Bing)
            </label>

            <label>
            <input
                type="radio"
                value="updates"
                checked={profile.preference=="updates"}
                className={clsx({ 'input-error': errors.preference}, theme )}
                {...register('preference')}
            />
            Social Media
            </label>

            <label>
            <input
                type="radio"
                value="offers"
                checked={profile.preference=="offers"}
                className={clsx({ 'input-error': errors.preference}, theme )}
                {...register('preference')}
            />
            Friend or Colleague
            </label>

            {errors.preference && <p className="error">{errors.preference.message}</p>}
        </fieldset>

        <button type="submit" className={theme}>{t('confirm')}</button>
        </form>
    )
}