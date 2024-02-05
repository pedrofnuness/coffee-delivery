import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';
import { Container } from '@/styles/shared';
import * as Styled from './styles';
import { useState } from 'react';

const PAYMENT_METHODS = {
  CREDIT_CARD: 'CREDIT CARD',
  DEBIT_CARD: 'DEBIT CARD',
  CASH: 'CASH',
};

export function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState('');

  const selectPaymentMethod = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Container>
      <Styled.CustomTitleContent>
        <CurrencyDollar size={22} />
        <div>
          <p className="title">Payment</p>
          <p className="subtitle">
            Payment is made upon delivery. Choose the way you want to pay
          </p>
        </div>
      </Styled.CustomTitleContent>

      <Styled.PaymentMethodsContainer>
        <Styled.PaymentMethodButton
          onClick={() => selectPaymentMethod(PAYMENT_METHODS.CREDIT_CARD)}
          className={
            selectedOption === PAYMENT_METHODS.CREDIT_CARD ? 'selected' : ''
          }
        >
          <CreditCard size={16} />
          {PAYMENT_METHODS.CREDIT_CARD}
        </Styled.PaymentMethodButton>

        <Styled.PaymentMethodButton
          onClick={() => selectPaymentMethod(PAYMENT_METHODS.DEBIT_CARD)}
          className={
            selectedOption === PAYMENT_METHODS.DEBIT_CARD ? 'selected' : ''
          }
        >
          <Bank size={16} />
          {PAYMENT_METHODS.DEBIT_CARD}
        </Styled.PaymentMethodButton>

        <Styled.PaymentMethodButton
          onClick={() => selectPaymentMethod(PAYMENT_METHODS.CASH)}
          className={selectedOption === PAYMENT_METHODS.CASH ? 'selected' : ''}
        >
          <Money size={16} />
          {PAYMENT_METHODS.CASH}
        </Styled.PaymentMethodButton>
      </Styled.PaymentMethodsContainer>
    </Container>
  );
}
