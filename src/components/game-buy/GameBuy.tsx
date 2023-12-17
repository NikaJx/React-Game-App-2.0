import { useTypeDispatcht } from '../../hooks/useTypeDispatch';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { IGame } from '../../interfaces/games.type';
import { deleteItemFromCart, setItemInCart } from '../../redux/slices/cartSlice';
import Button from '../button/Button';
import './game-buy.scss';

interface IProps {
    game: IGame;
}

const GameBuy: React.FC<IProps> = ({ game }) => {
    const dispatch = useTypeDispatcht();

    const { itemsInCart } = useTypeSelector((state) => state.cart);
    const isItemInCart = itemsInCart.some((item) => item.id === game.id);

    const handleAddToCart = (e: any) => {
        e.stopPropagation();

        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
    };

    return (
        <div className="game-buy">
            <span className="game-buy__price">${game.price}</span>
            <Button type={isItemInCart ? 'secondary' : 'primary'} onClick={handleAddToCart}>
                {isItemInCart ? 'Remove from cart' : 'Add to Cart'}
            </Button>
        </div>
    );
};

export default GameBuy;
