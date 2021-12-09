import React, { useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Typography } from '@mui/material';
import { FlexForm, StyledButton, StyledInputs } from './styled';
import {
  FormInput,
  FormSelect,
  FormRadio,
  FormCheck,
  FormSent,
} from '../FormComponents/index';

type FormValues = {
  name: string;
  age: string;
  email: string;
  role: string;
  recommend: string;
  favoriteFeature: string;
  improve: string;
  comments: string;
};

const Form = () => {
  const methods = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    console.log(currentStep);
    setCurrentStep(currentStep + 1);
  };

  console.log('name: ', methods.watch('name'));
  console.log('role: ', methods.watch('role'));
  console.log('recommend: ', methods.watch('recommend'));
  console.log('favoriteFeature: ', methods.watch('favoriteFeature'));
  console.log(methods.formState.isValid);

  const formSubmitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
    setCurrentStep(currentStep + 1);
    alert(`form data is ${JSON.stringify(data)}`);
  };

  return (
    <main>
      <FormProvider {...methods}>
        <FlexForm>
          <StyledInputs step={currentStep}>
            {currentStep === 0 && (
              <>
                <Typography variant="h4" color="secondary">
                  By following a few simple steps you will successfully complete
                  the survey form
                </Typography>
                <FormInput step={currentStep} />
              </>
            )}
            {currentStep === 1 && <FormInput step={currentStep} />}
            {currentStep === 2 && (
              <>
                <Typography variant="h4" color="secondary">
                  Which option best describes your current role?
                </Typography>
                <FormSelect step={currentStep} />
              </>
            )}
            {currentStep === 3 && (
              <>
                <Typography variant="h4" color="secondary">
                  Would you recommend freeCodeCamp to a friend?
                </Typography>
                <FormRadio />
              </>
            )}
            {currentStep === 4 && (
              <>
                <Typography variant="h4" color="secondary">
                  What is your favorite feature of freeCodeCamp?
                </Typography>
                <FormSelect step={currentStep} />
                <Typography variant="h6" color="secondary">
                  What would you like to see improved? (Check all that apply)
                </Typography>
                <FormCheck />
              </>
            )}
            {currentStep === 5 && (
              <>
                <Typography variant="h4" color="secondary">
                  Do you have any comments or suggestions?
                </Typography>
                <FormInput step={currentStep} />
              </>
            )}
            {currentStep === 6 && <FormSent />}
          </StyledInputs>
          {currentStep <= 5 ? (
            <StyledButton
              size="large"
              variant="contained"
              color="warning"
              disabled={currentStep > 5 ? false : !methods.formState.isValid}
              onClick={
                currentStep < 5
                  ? nextStep
                  : methods.handleSubmit(formSubmitHandler)
              }
            >
              {currentStep < 5 ? `Next` : `Submit`}
            </StyledButton>
          ) : (
            ''
          )}
        </FlexForm>
      </FormProvider>
    </main>
  );
};

export default Form;
