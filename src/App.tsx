import AppRouter from './router/AppRouter';
import Header from './components/header/Header';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <AppRouter />
        </div>
    );
}

export default App;
