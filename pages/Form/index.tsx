import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { ReactForm, Flex } from './styled';
import FormSubComponentName from '../../src/components/FormSubComponentName';
import FormSubComponentAge from '../../src/components/FormSubComponentAge';
import FormSubComponentEmail from '../../src/components/FormSubComponentEmail';

const { yupResolver } = require('@hookform/resolvers/yup');

type FormValues = {
  name: string;
  age: string;
  email: string;
  currentRole: string;
  recommend: string;
  favoriteFeature: string;
  comments: string;
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, 'Please enter valid name')
    .max(40)
    .required(),
  age: yup.number().max(100).required(),
  email: yup.string().email().required(),
});

const Form = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  console.log('watch variable name', methods.watch('name'));
  const formSubmitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
    +data.age;
    console.log(`form data is`, data);
  };

  const validHandler = (value: number) => console.log(value);

  return (
    <main>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
          <FormSubComponentName isValidHandler={validHandler} />
          <FormSubComponentAge />
          <FormSubComponentEmail />
          <input type="submit" value="Submit" />

          <br />
          <br />
        </form>
      </FormProvider>
    </main>
  );
};

export default Form;
