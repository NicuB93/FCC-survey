import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import { selectValues } from '../../../pages/api/formInputProps';

type FormStep = { step: number };

const FormSelect: FC<FormStep> = ({ step }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={step !== 4 ? selectValues[0].name : selectValues[1].name}
      control={control}
      defaultValue={''}
      rules={{ required: true }}
      render={({ field }) => (
        <FormControl variant="standard" color="secondary">
          <InputLabel color="secondary">
            {step !== 4
              ? selectValues[0].inputLabel
              : selectValues[1].inputLabel}
          </InputLabel>
          <Select {...field}>
            {step !== 4
              ? selectValues[0].menuItem.map((item, index) => (
                  <MenuItem
                    disabled={index === 0 ? true : false}
                    key={index}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))
              : selectValues[1].menuItem.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default FormSelect;
