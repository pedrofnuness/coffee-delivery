import React from 'react'
import coffeeImage from '../../assets/coffeeImage.png'
import * as Styled from './styles';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

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

          <Styled.AboutService>
            <Styled.AboutItem>
              <Styled.ColorIcon bgColor="yellow-dark">
                <ShoppingCart size={16} weight='fill' color="white"/>
              </Styled.ColorIcon>
              <p>Easy and secure purchase</p>
            </Styled.AboutItem>
            <Styled.AboutItem>
              <Styled.ColorIcon bgColor="base-text">
                <Package size={16} weight='fill' color="white"/>
              </Styled.ColorIcon>
              <p>Packaging keeps the coffee intact</p>
            </Styled.AboutItem>
            <Styled.AboutItem>
              <Styled.ColorIcon bgColor="yellow">
                <Timer size={16} weight='fill' color="white"/>
              </Styled.ColorIcon>
              <p>Fast and tracked delivery</p>
            </Styled.AboutItem>
            <Styled.AboutItem>
              <Styled.ColorIcon bgColor="purple">
                <Coffee size={16} weight='fill' color="white" />
              </Styled.ColorIcon>
              <p>The coffee arrives fresh to you</p>
            </Styled.AboutItem>
          </Styled.AboutService>
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
