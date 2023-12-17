import { useTypeDispatcht } from '../../hooks/useTypeDispatch';
import { IGame } from '../../interfaces/games.type';
import GameCover from '../game-cover/GameCover';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './order-item.scss';
import { deleteItemFromCart } from '../../redux/slices/cartSlice';

interface IProps {
    game: IGame;
}

const OrderItem: React.FC<IProps> = ({ game }) => {
    const dispatch = useTypeDispatcht();

    const handleDel = () => {
        dispatch(deleteItemFromCart(game.id));
    };

    return (
        <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={game.image} />
            </div>
            <div className="order-item__title">
                <span>{game.title}</span>
            </div>
            <div className="order-item__price">
                <span>${game.price}</span>
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item__del-icon"
                    onClick={handleDel}
                />
            </div>
        </div>
    );
};

export default OrderItem;
