import styled from '@emotion/styled';
import { Button } from '@mui/material';

type Props = {
  step: number;
};

export const FlexForm = styled.form`
  display: grid;
  grid-template-rows: 1fr;
  background-color: #5490e9;
  color: white;
  padding: 6rem 5rem;
  min-height: 90vh;
  @media (max-width: 768px) {
    padding: 3rem 2.5rem;
  }
`;

export const StyledButton = styled(Button)`
  font-size: 1.2rem;
  align-self: flex-end;
  justify-self: end;
  padding: 0.8rem 3rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.5rem 2.3rem;
    align-self: center;
    justify-self: center;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.5rem 1.4rem;
  }
`;

export const StyledInputs = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${(props) => {
    if (props.step === 1 || props.step === 6) {
      return `
        justify-content: center;
      `;
    }
  }}
`;
