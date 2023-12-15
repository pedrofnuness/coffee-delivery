import React from 'react'
import * as Styled from './styles';
import coffeeImage from '../../assets/coffeeImage.png'

export default function Home() {
  return (
    <Styled.TopSection>
      <Styled.Content>
        <Styled.InfoContent>
          <Styled.Title>
            Find the perfect coffee for any time of day
          </Styled.Title>
          <Styled.Description>
            With Coffee Delivery you receive your coffee wherever you are, anytime
          </Styled.Description>
        </Styled.InfoContent>

        <Styled.Aside>
          <img 
            src={coffeeImage} 
            alt="cup of coffee with yellow background"
            className="coffee-image"
            />
        </Styled.Aside>
      </Styled.Content>
    </Styled.TopSection>
  )
}
