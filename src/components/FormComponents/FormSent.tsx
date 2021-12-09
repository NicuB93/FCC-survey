import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const Sent = styled.div`
  height: 20%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 1024px) {
    height: 50%;
  }
  @media (max-width: 768px) {
    height: 70%;
  }
`;

const FormSent = () => {
  return (
    <Sent>
      <Typography variant="h4">
        Your message has been sent successfully.
      </Typography>
      <Typography>
        We will send our answer and the loyalty bonus to your e-mail address.{' '}
        <br />
        Thank you!
      </Typography>
    </Sent>
  );
};

export default FormSent;
