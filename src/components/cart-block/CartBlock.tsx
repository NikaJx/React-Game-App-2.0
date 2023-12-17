import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import ItemsInCart from '../items-in-cart/ItemsInCart';
import { BiCartAlt } from 'react-icons/bi';
import CartMenu from '../cart-menu/CartMenu';

import './cart-block.scss';

const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState<boolean>(false);

    const navigate = useNavigate();

    const { itemsInCart } = useTypeSelector((state) => state.cart);
    const totalPrice = itemsInCart.reduce((acc, game) => (acc += game.price), 0);

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/order');
    }, [navigate]);

    return (
        <div className="cart-block">
            <ItemsInCart quantity={itemsInCart.length} />
            <BiCartAlt
                size={25}
                className="cart-block__icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? <span className="cart-block__total-price">${totalPrice}</span> : null}
            {isCartMenuVisible && <CartMenu itemsInCart={itemsInCart} onClick={handleClick} />}
        </div>
    );
};

export default CartBlock;
