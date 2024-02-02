import { MapPinLine } from 'phosphor-react';
import * as Styled from './styles';

export function AddressForm() {
  return (
    <Styled.Container>
      <Styled.TitleContent>
        <MapPinLine size={22} />
        <div>
          <p className="title">Delivery address</p>
          <p className="subtitle">Enter the address where you would like to receive your order</p>
        </div>
      </Styled.TitleContent>
      <Styled.InputsContainer>
        <Styled.Input width="200px" placeholder="ZIP Code" />
        <Styled.Input placeholder="Street" />
        <Styled.SideToSideContainer>
          <Styled.Input placeholder="Number" />
          <Styled.Input placeholder="Complement" />
        </Styled.SideToSideContainer>
        <Styled.SideToSideContainer>
          <Styled.Input placeholder="State" />
          <Styled.Input placeholder="Country" />
        </Styled.SideToSideContainer>
      </Styled.InputsContainer>
    </Styled.Container>
  );
}
