import './items-in-cart.scss';

interface IProps {
    quantity: number;
}

const ItemsInCart: React.FC<IProps> = ({ quantity = 0 }) => {
    return quantity > 0 ? <div className="items-in-cart">{quantity}</div> : null;
};

export default ItemsInCart;
