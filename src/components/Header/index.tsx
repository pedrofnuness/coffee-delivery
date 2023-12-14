import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '/logo.svg'
import * as Styled from './styles'

export default function Header() {
  return (
    <Styled.Container>
      <img src={logo} alt="coffee delivery logo" />

      <Styled.RightContent>
        <Styled.LocationTag>
          <MapPin size={22} weight='fill' />
          Lisbon, PT
        </Styled.LocationTag>
        <Styled.CartButton onClick={() => {}}>
          <ShoppingCart size={22} weight='fill'/>
        </Styled.CartButton>
      </Styled.RightContent>
    </Styled.Container>
  )
}
