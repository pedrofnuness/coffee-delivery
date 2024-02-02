import { AddressForm } from './components/AddressForm/AddressForm';
import * as Styled from './styles';

export function CheckoutPage() {
  return (
    <Styled.CheckoutContainer>
      <Styled.GridContent>
        <Styled.LeftContent>
          <h3>Complete your order</h3>

          <AddressForm />
        </Styled.LeftContent>

        <Styled.RightContent className="cart-items">
          <h3>Selected Coffees</h3>
        </Styled.RightContent>
      </Styled.GridContent>
    </Styled.CheckoutContainer>
  );
}
