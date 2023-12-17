import './cart-item.scss';

interface IProps {
    price: number;
    title: string;
    id: number;
}

const CartItem: React.FC<IProps> = ({ id, price, title }) => {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span>${price}</span>
            </div>
        </div>
    );
};

export default CartItem;
