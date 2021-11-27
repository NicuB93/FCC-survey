import React, { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Typography } from '@mui/material';

const FormSubComponentAge: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name="age"
      control={control}
      defaultValue={''}
      render={({ field }) => (
        <TextField
          {...field}
          label="Age (optional)"
          variant="standard"
          error={!!errors.age}
          helperText={errors.age ? 'Age must be a number, less than 100' : ''}
        />
      )}
    />
  );
};

export default FormSubComponentAge;
