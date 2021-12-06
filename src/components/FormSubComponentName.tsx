import React, { FC, useState } from 'react';
import { useFormContext, useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const FormSubComponentName: FC = ({ ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name="name"
      control={control}
      defaultValue={''}
      rules={{ required: true, pattern: /^[a-zA-Z]+$/ }}
      render={({ field }) => (
        <TextField
          {...field}
          label="Name"
          variant="standard"
          error={!!errors.name}
          helperText={errors.name ? 'Please enter a name' : ''}
        />
      )}
    />
  );
};

export default FormSubComponentName;
