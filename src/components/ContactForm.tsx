import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Button } from './Button/Button';
import { Input } from './Input';
import { TextArea } from './TextArea';

type Contact = {
  email?: string;
  message?: string;
  name?: string;
};

const StoreInformationSchema = Yup.object({
  email: Yup.string().required('Required').email('Invalid email'),
  message: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
});

export const ContactForm = () => {
  const methods = useForm<any, Contact>({
    resolver: yupResolver(StoreInformationSchema),
  });

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
    reset,
    register,
  } = methods;

  const onSubmit: SubmitHandler<Contact> = async (values) => {
    try {
      toast.success(
        'Your message has been sent successfully, and you will receive feedback shortly'
      );
      reset();
    } catch (error) {
      toast.error('The message was not sent due to an error');
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Name"
          {...register('name')}
          disabled={isSubmitting}
          // error={errors.name?.message}
          size="lg"
        />
        <Input
          // error={errors.email?.message}
          placeholder="Email"
          {...register('email')}
          disabled={isSubmitting}
          size="lg"
        />
        <TextArea
          placeholder="text message"
          {...register('message')}
          disabled={isSubmitting}
          // error={errors.message?.message}
        />

        <Button className="mt-10" disabled={isSubmitting} type="submit">
          Let’s work together
        </Button>
      </form>
    </FormProvider>
  );
};
