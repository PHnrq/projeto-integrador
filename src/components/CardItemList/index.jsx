import placeholderImg from '../../assets/placeholder-Img.svg'
import { Container } from './styles'


export function CardItemList({nameProduct, amount}) {
    return (
        <Container>
            <div className="product-img-wrapper">
                <img src={placeholderImg} alt="rice" className="list-item-img" />
            </div>

            <p className="list-item-name">{nameProduct}</p>

            <div className="amount-container">
                <span>
                    QTD: {amount}
                </span>
            </div>
        </Container>
    )
}
