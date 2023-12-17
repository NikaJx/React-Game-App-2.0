import { useNavigate } from 'react-router-dom';
import { useTypeDispatcht } from '../../hooks/useTypeDispatch';
import { IGame } from '../../interfaces/games.type';
import GameBuy from '../game-buy/GameBuy';
import GameCover from '../game-cover/GameCover';
import GameGenre from '../game-genre/GameGenre';

import './game-item.scss';
import { setCurrentGame } from '../../redux/slices/gameSlice';

interface IProps {
    game: IGame;
}

const GameItem: React.FC<IProps> = ({ game }) => {
    const dispatch = useTypeDispatcht();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setCurrentGame(game));

        navigate(`/app/${game.title}`);
    };

    return (
        <div className="game-item" onClick={handleClick}>
            <GameCover image={game.image} />
            <div className="game-item__details">
                <span className="game-item-title">{game.title}</span>
                <div className="game-item_genre">
                    {game.genres.map((genre) => (
                        <GameGenre key={genre} genre={genre} />
                    ))}
                </div>
            </div>
            <div className="game-item__buy">
                <GameBuy game={game} />
            </div>
        </div>
    );
};

export default GameItem;
