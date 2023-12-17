import './game-cover.scss';

interface IProps {
    image: string;
}

const GameCover: React.FC<IProps> = ({ image }) => {
    return <div className="game-cover" style={{ backgroundImage: `url(${image})` }}></div>;
};

export default GameCover;
