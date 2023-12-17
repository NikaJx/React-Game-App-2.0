import GameBuy from '../../components/game-buy/GameBuy';
import GameCover from '../../components/game-cover/GameCover';
import GameGenre from '../../components/game-genre/GameGenre';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import './game-page.scss';

const GamePage = () => {
    const { currentGame } = useTypeSelector((state) => state.currentGame);

    if (!currentGame) return null;

    return (
        <div className="game-page">
            <h1 className="game-page__title">{currentGame?.title}</h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe
                        src={currentGame.video}
                        width={'90%'}
                        height={'400px'}
                        title="Youtube video"
                        frameBorder="0"></iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={currentGame.image} />
                    <p>{currentGame.description}</p>
                    <p className="secondary-text">Popular</p>
                    <div className="genres-game-page">
                        {currentGame.genres.map((genre) => (
                            <GameGenre key={genre} genre={genre} />
                        ))}
                    </div>
                    <div className="game-page__buy-game">
                        <GameBuy game={currentGame} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
