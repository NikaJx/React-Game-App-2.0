import './game-genre.scss';

interface IProps {
    genre: string;
}

const GameGenre: React.FC<IProps> = ({ genre }) => {
    return <div className="game-genre">{genre}</div>;
};

export default GameGenre;
