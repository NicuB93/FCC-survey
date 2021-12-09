import React, { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { textFieldData } from '../../../pages/api/formInputProps';
import { keyframes } from '@emotion/react';

type FormStep = { step: number };

const FormInput: FC<FormStep> = ({ step }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {textFieldData
        .slice(...(step === 0 ? [0, 2] : step === 1 ? [2, 3] : [3]))
        .map((values, index) => {
          return (
            <Controller
              key={index}
              name={values.name}
              control={control}
              defaultValue={''}
              rules={values.rules}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={
                    step === 5
                      ? {
                          '& .MuiInputBase-root.Mui-focused': {
                            bgcolor: '#fff',
                          },
                        }
                      : {}
                  }
                  rows={values.rows}
                  multiline={values.multiline}
                  color="secondary"
                  type={values.type}
                  label={values.label}
                  variant="standard"
                  error={
                    values.name === 'email'
                      ? !!errors.email
                      : values.name === 'name'
                      ? !!errors.name
                      : !!errors.age
                  }
                  helperText={
                    values.name === 'email'
                      ? errors.email
                        ? values.errorText
                        : ''
                      : values.name === 'name'
                      ? errors.name
                        ? values.errorText
                        : ''
                      : errors.age
                      ? values.errorText
                      : ''
                  }
                />
              )}
            />
          );
        })}
    </>
  );
};

export default FormInput;
