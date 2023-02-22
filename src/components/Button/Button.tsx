import React from 'react';
import styled from '@emotion/styled';

export interface ButtonPropsInterface {
  children?: React.ReactNode;
  variant?: boolean;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonPropsInterface>((props) => ({
  border: 'none',
  borderRadius: '10px',
  width: '150px',
  height: '70px',
  color: 'red',
  backgroundColor: props.variant ? 'aqua' : '',
}));

const Button = (props: ButtonPropsInterface) => {
  const { variant, children, onClick } = props;
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};
export default Button;
