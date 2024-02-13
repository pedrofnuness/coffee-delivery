import { Trash } from 'phosphor-react';
import { coffeeListMock } from '@/mocks/coffeeMocks';
import { CardContainer } from '@/styles/shared';
import QuantityInput from '@/components/QuantityInput/QuantityInput';

import * as Styled from './styles';

export function ShoppingCart() {
  return (
    <CardContainer>
      <Styled.CartInsideContainer>
        <Styled.CartItemRow>
          <Styled.ItemContent>
            <img src={coffeeListMock[0].image} alt="coffee image" width={64} />

            <Styled.NameAndAmount>
              <Styled.CoffeeName>Expresso Tradicional</Styled.CoffeeName>

              <Styled.ButtonsContainer>
                <QuantityInput />
                <Styled.RemoveButton>
                  <Trash size={16} />
                  REMOVE
                </Styled.RemoveButton>
              </Styled.ButtonsContainer>
            </Styled.NameAndAmount>

            <Styled.Price>€ 9,90</Styled.Price>
          </Styled.ItemContent>
        </Styled.CartItemRow>

        <Styled.CartItemRow>
          <Styled.ItemContent>
            <img src={coffeeListMock[0].image} alt="coffee image" width={64} />

            <Styled.NameAndAmount>
              <Styled.CoffeeName>Expresso Tradicional</Styled.CoffeeName>

              <Styled.ButtonsContainer>
                <QuantityInput />
                <Styled.RemoveButton>
                  <Trash size={16} />
                  REMOVE
                </Styled.RemoveButton>
              </Styled.ButtonsContainer>
            </Styled.NameAndAmount>

            <Styled.Price>€ 9,90</Styled.Price>
          </Styled.ItemContent>
        </Styled.CartItemRow>

        <Styled.TotalPriceContainer>
          <Styled.PriceRow>
            <p>Total items</p>
            <span>€ 29,70</span>
          </Styled.PriceRow>

          <Styled.PriceRow>
            <p>Delivery</p>
            <span>€ 3,50</span>
          </Styled.PriceRow>

          <Styled.PriceRow>
            <p>Total</p>
            <span>€ 33,20</span>
          </Styled.PriceRow>
        </Styled.TotalPriceContainer>

        <Styled.ConfirmButton onClick={() => {}}>
          CONFIRM ORDER
        </Styled.ConfirmButton>
      </Styled.CartInsideContainer>
    </CardContainer>
  );
}
