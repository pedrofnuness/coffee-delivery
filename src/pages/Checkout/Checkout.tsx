import { AddressForm } from './components/AddressForm/AddressForm';
import { PaymentOptions } from './components/PaymentOptions/PaymentOptions';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import * as Styled from './styles';

export function CheckoutPage() {
  return (
    <Styled.CheckoutContainer>
      <Styled.GridContent>
        <Styled.LeftContent>
          <h3>Complete your order</h3>

          <AddressForm />
          <PaymentOptions />
        </Styled.LeftContent>

        <Styled.RightContent className="cart-items">
          <h3>Selected Coffees</h3>

          <ShoppingCart />
        </Styled.RightContent>
      </Styled.GridContent>
    </Styled.CheckoutContainer>
  );
}
