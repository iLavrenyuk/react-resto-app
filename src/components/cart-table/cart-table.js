import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFormCart } from '../../actions';


const CartTable = ({ items, deleteFormCart }) => {
    let allItemCart = [];
    let totalMass = [];

    items.forEach(item => {
        allItemCart.push(item);
    })

    function uniqByKeepLast(a, key) {
        return [
            ...new Map(
                a.map(x => [key(x), x])
            ).values()
        ]
    }

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    uniqByKeepLast(allItemCart, allItemCart => allItemCart.title).map(item => {
                        const { title, price, url, id, qty } = item;
                        const sum = +price * qty;
                        totalMass.push(sum);
                        // const total = eval(totalMass.join('+'))

                        // console.log(total);

                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-title">qty: {qty}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFormCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
};

const mapStateToProps = ({ items }) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFormCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
