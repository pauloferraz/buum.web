import React from 'react'
import {
  CardWrap,
  CardImgWrap,
  CardBody,
  CardCategory,
  CardTitle,
  CardDescription,
  CardFrom,
  CardValue
} from './styles'

const ProductCard: React.FC = () => {
  return (
    <>
      <CardWrap>
        <CardImgWrap image='https://cutt.ly/KhCp3bZ' />
        <CardBody>
          <CardCategory>Bolos decorados</CardCategory>
          <CardTitle>Bolos decorados, 25cm recheios diversos</CardTitle>
          <CardDescription>
            Bolo de Festas sob encomenda com entregas no metrô. Diversos modelos e
            recheios variados
          </CardDescription>
          <CardFrom>À partir de:</CardFrom>
          <CardValue>R$35,00</CardValue>
        </CardBody>
      </CardWrap>
      <CardWrap>
        <CardImgWrap image='https://cutt.ly/JhCac0i' />
        <CardBody>
          <CardCategory>Bolos temáticos</CardCategory>
          <CardTitle>Bolos temáticos, 20cm recheios diversos</CardTitle>
          <CardDescription>
            Bolo de Festas sob encomenda com entregas no metrô. Diversos temas e
            recheios variados
          </CardDescription>
          <CardFrom>À partir de:</CardFrom>
          <CardValue>R$35,00</CardValue>
        </CardBody>
      </CardWrap>
      <CardWrap></CardWrap>
    </>
  )
}

export default ProductCard
