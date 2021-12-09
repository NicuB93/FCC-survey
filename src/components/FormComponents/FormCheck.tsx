import { useFormContext, Controller } from 'react-hook-form';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { checkboxValues } from '../../../pages/api/formInputProps';

const FormCheck = () => {
  const { control, getValues } = useFormContext();

  const handleCheck = (checkedId: any) => {
    const { improve: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id: any) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    return newIds;
  };

  return (
    <Controller
      name="improve"
      control={control}
      defaultValue={[]}
      rules={{ required: true }}
      render={({ field }) => (
        <FormGroup sx={{ paddingBottom: '2rem' }}>
          {checkboxValues.map((v) => {
            return (
              <FormControlLabel
                {...field}
                control={
                  <Checkbox
                    color="warning"
                    onChange={() => field.onChange(handleCheck(v.value))}
                  />
                }
                key={v.id}
                label={v.value}
              />
            );
          })}
        </FormGroup>
      )}
    />
  );
};

export default FormCheck;
