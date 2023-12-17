import { useEffect } from 'react';
import { useTypeDispatcht } from '../../hooks/useTypeDispatch';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getGames } from '../../redux/slices/gameSlices';
import GameItem from '../../components/game-item/GameItem';

import './home-page.scss';

const HomePage = () => {
    const dispatch = useTypeDispatcht();

    const { games } = useTypeSelector((state) => state.game);

    useEffect(() => {
        dispatch(getGames());
    }, []);

    return (
        <div className="home-page">
            {games?.map((game) => (
                <GameItem key={game.id} game={game} />
            ))}
        </div>
    );
};

export default HomePage;
