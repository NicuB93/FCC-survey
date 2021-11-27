import React, { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const FormSubComponentEmail: FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      name="email"
      control={control}
      defaultValue={''}
      render={({ field }) => (
        <TextField
          {...field}
          label="Email"
          type="email"
          variant="standard"
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ''}
        />
      )}
    />
  );
};

export default FormSubComponentEmail;
