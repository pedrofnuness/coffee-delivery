import { ReactNode } from 'react'
import * as Styled from './styles'

interface CardContainerProps {
  children: ReactNode
} 

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}
