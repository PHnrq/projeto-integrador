import placeholderImg from '../../assets/placeholder-Img.svg'
import { Container } from './styles'


export function CardItemList() {
    return (
        <Container>
            <div className="product-img-wrapper">
                <img src={placeholderImg} alt="rice" className="list-item-img" />
            </div>

            <p className="list-item-name">Arroz Branco</p>

            <div className="amount-container">
                <span>
                    QTD: 2
                </span>
            </div>
        </Container>
    )
}
