import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
// import * as yup from 'yup';
import { Flex } from './styled';
import { Button } from '@mui/material';
import FormSubComponentName from '../../src/components/FormSubComponentName';
import FormSubComponentAge from '../../src/components/FormSubComponentAge';
import FormSubComponentEmail from '../../src/components/FormSubComponentEmail';

// const { yupResolver } = require('@hookform/resolvers/yup');

type FormValues = {
  name: string;
  age: string;
  email: string;
  // currentRole: string;
  // recommend: string;
  // favoriteFeature: string;
  // comments: string;
};

// const schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(/^[aA-zZ\s]+$/, 'Please enter valid name')
//     .max(40),
//   age: yup.string(),
//   email: yup.string().email(),
// });

const Form = () => {
  const methods = useForm<FormValues>({
    // resolver: yupResolver(schema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  console.log('name: ', methods.watch('name'));
  console.log(methods.formState.isValid);

  const formSubmitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(`form data is`, data);
  };

  return (
    <main>
      <FormProvider {...methods}>
        <Flex>
          {currentStep === 0 && (
            <>
              <h2>
                By following a few simple steps you will successfully complete
                the survey form
              </h2>
              <FormSubComponentName />
              <FormSubComponentAge />
            </>
          )}
          {currentStep === 1 && <FormSubComponentEmail />}
          {currentStep === 5 ? (
            <Button onClick={methods.handleSubmit(formSubmitHandler)}>
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              color="warning"
              disabled={!methods.formState.isValid}
              onClick={nextStep}
            >
              Next
            </Button>
          )}
          <br />
          <br />
        </Flex>
      </FormProvider>
    </main>
  );
};

export default Form;
