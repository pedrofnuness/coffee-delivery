import React from 'react'
import logo from '/logo.svg'
import * as Styled from './styles'

export default function Header() {
  return (
    <Styled.Container>
      <img src={logo} alt="coffee delivery logo" />

      <Styled.RightContent>
        <p>Lisbon</p>
        <p>cart icon</p>
      </Styled.RightContent>
    </Styled.Container>
  )
}
