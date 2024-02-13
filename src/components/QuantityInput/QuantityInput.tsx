import { Minus, Plus } from 'phosphor-react';
import * as Styled from './styles';
import { useState } from 'react';

export default function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((currentValue) => currentValue + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantity((currentValue) => currentValue - 1);
  };

  return (
    <Styled.InputContainer>
      <button onClick={decreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </Styled.InputContainer>
  );
}
