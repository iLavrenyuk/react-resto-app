import React from 'react';
import './menu-list-item.scss';
import pizza from "./pizza.svg"
import food from "./meal.svg"
import salads from "./salad.svg"
import meat from "./steak.svg"

const MenuListItem = ({ menuItem, onAddToCart }) => {
    const { title, price, url, category } = menuItem;
    let src;

    switch (category) {
        case 'pizza':
            src = pizza;
            break;
        case 'salads':
            src = salads;
            break;
        case 'meat':
            src = meat;
            break;
        default:
            src = food;;
    }

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span>
                <img width="40" height="40" alt={food} src={src} />
            </div>
            <button onClick={() => onAddToCart()} className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;