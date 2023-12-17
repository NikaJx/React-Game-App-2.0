import OrderItem from '../../components/order-item/OrderItem';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './order-page.scss';

const OrderPage = () => {
    const { itemsInCart } = useTypeSelector((state) => state.cart);
    const totalPrice = itemsInCart.reduce((acc, game) => (acc += game.price), 0);

    if (itemsInCart.length < 1) {
        return <h1>Cart is empy</h1>;
    }

    return (
        <div className="order-page">
            <div className="order-page__left">
                {itemsInCart.map((game) => (
                    <OrderItem key={game.id} game={game} />
                ))}
            </div>
            <div className="order-page-right">
                <div className="order-page__total-price">
                    <span>
                        {itemsInCart.length} goods worth ${totalPrice}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
