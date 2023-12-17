import { IGame } from '../../interfaces/games.type';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import './cart-menu.scss';

interface IProps {
    itemsInCart: IGame[];
    onClick: () => void;
}

const CartMenu: React.FC<IProps> = ({ itemsInCart, onClick }) => {
    const totalPrice = itemsInCart.reduce((acc, game) => (acc += game.price), 0);

    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {itemsInCart.length > 0
                    ? itemsInCart.map((game) => (
                          <CartItem
                              key={game.id}
                              price={game.price}
                              title={game.title}
                              id={game.id}
                          />
                      ))
                    : 'Cart is empty'}
            </div>
            {itemsInCart.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Total:</span>
                        <span>${totalPrice}</span>
                    </div>
                    <Button type="primary" size="m" onClick={onClick}>
                        checkout
                    </Button>
                </div>
            ) : null}
        </div>
    );
};

export default CartMenu;
