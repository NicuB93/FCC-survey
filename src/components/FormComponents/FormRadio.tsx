import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { radioValues } from '../../../pages/api/formInputProps';

const FormRadio = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="recommend"
      control={control}
      defaultValue={''}
      rules={{ required: true }}
      render={({ field }) => (
        <FormControl
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
          }}
          component="fieldset"
        >
          <RadioGroup
            {...field}
            sx={{ height: '60%', justifyContent: 'space-around' }}
            aria-label="recommend"
            name="radio-buttons-group"
          >
            {radioValues.map((value, index) => (
              <FormControlLabel
                key={index}
                value={value}
                control={<Radio color="warning" sx={{ color: '#fff' }} />}
                label={value}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default FormRadio;
