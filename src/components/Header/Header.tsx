import { MapPin, ShoppingCart } from 'phosphor-react';
import logo from '/logo.svg';
import * as Styled from './styles';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Styled.Container>
      <Styled.InsideContent>
        <NavLink to="/">
          <img src={logo} alt="coffee delivery logo" />
        </NavLink>

        <Styled.RightContent>
          <Styled.LocationTag>
            <MapPin size={22} weight="fill" />
            Lisbon, PT
          </Styled.LocationTag>

          <NavLink to="/checkout">
            <Styled.CartButton>
              <ShoppingCart size={22} weight="fill" />
            </Styled.CartButton>
          </NavLink>
        </Styled.RightContent>
      </Styled.InsideContent>
    </Styled.Container>
  );
}
