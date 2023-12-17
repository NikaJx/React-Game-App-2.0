import { Routes, Route } from 'react-router-dom';
import HomePage from '../page/home-page/HomePage';
import GamePage from '../page/game-page/GamePage';
import OrderPage from '../page/order-page/OrderPage';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/app/:title" element={<GamePage />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>
        </>
    );
};

export default AppRouter;
