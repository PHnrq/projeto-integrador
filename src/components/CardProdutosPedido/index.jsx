import React from "react";
import trash from "../../assets/trash.png";
import flour from "../../assets/flour.png";



export function CardProduto () {
    return (
            <div className="donor-demand-others-data">
                <div className="item-img-container">
                  <img src={flour} alt="flour" className="item-img" />
                </div>
                <div className="item-name-qtd-container">
                  <p className="demand-item-name">Farinha de trigo</p>
                  <div className="qtd-sign-trash-container">
                    <span className="qtd">QTD</span>
                    <div className="sign-value-container">
                      <button className="minus-sign">-</button>
                      <span className="qtd-value">2</span>
                      <button className="plus-sign">+</button>
                    </div>
                    <button className="trash-icon">
                      <img src={trash} alt="trash-icon" />
                    </button>
                  </div>
                </div>
            </div>
            
            )
}