import rice from "../../assets/rice.png";
import buyAdd from "../../assets/buy-add.png";

export function CardItemList() {
    return (
        <li className="product-list-item">
            <div className="product-item-date">
                <img src={rice} alt="rice" className="list-item-img" />
                <p className="list-item-validity">VAL: 13 / 08 / 2022</p>
            </div>

            <p className="list-item-name">Arroz Branco</p>

            <div className="buy-add-icon-container">
                <button className="buy-add-icon">
                    <img src={buyAdd} alt="buy-add-icon" />
                </button>
            </div>
        </li>
    )
}
