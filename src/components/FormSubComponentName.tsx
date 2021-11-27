import React, { FC, useState } from 'react';
import { useFormContext, useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

type Props = {
  isValidHandler: any;
};

const FormSubComponentName: FC<Props> = ({ ...props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {
    formState: { isValid },
  } = useForm();
  const value = 5;
  props.isValidHandler(value);

  console.log(isValid);
  return (
    <>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            defaultValue={''}
            label="Name"
            variant="standard"
            error={!!errors.name}
            helperText={errors.name ? errors.name?.message : ''}
          />
        )}
      />
    </>
  );
};

export default FormSubComponentName;
