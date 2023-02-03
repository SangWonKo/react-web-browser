import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeVariant?: 'medium' | 'large'
  variant?: 'rounded' | 'square'
}

const StyledInput = styled.input<Pick<InputProps, 'sizeVariant' | 'variant'>>`
  width: 100%;
  border-radius: ${(props) => (props.variant === 'rounded' ? '20px' : '8px')};
  padding: ${(props) =>
    props.sizeVariant === 'medium' ? '4px 10px' : '7px 14px'};
  color: ${(props) => props.theme.palette.dark};
  outline: 0;
`

const Input = forwardRef(function Input(
  { sizeVariant = 'medium', variant = 'rounded', ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <StyledInput
      ref={ref}
      {...props}
      sizeVariant={sizeVariant}
      variant={variant}
    />
  )
})

export default Input
