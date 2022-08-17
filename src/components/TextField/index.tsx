import {
  ChangeEvent,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useImperativeHandle,
  useRef,
} from 'react';
import * as S from './styles';

interface InputProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  type: React.HTMLInputTypeAttribute;
  value: any;
  placeholder: string;
}

const TextField = (
  { placeholder, value, onChange: customHandleChange, ...rest }: InputProps,
  ref,
) => {
  useImperativeHandle(ref, () => {
    focus: () => {
      inputRef.current?.focus();
    };
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentInput = inputRef.current;

    if (!currentInput) {
      return;
    }

    currentInput.classList.remove('active');

    if (!currentInput.classList.contains('active') && value !== '') {
      currentInput.classList.add('active');
    }

    customHandleChange(e);
  };

  return (
    <S.Container>
      <S.Ripple />
      <S.Label>{placeholder}</S.Label>
      <S.Input ref={inputRef} defaultValue={value} handleChange={handleChange} {...rest} />
      <S.Line />
    </S.Container>
  );
};

export default forwardRef(TextField);
