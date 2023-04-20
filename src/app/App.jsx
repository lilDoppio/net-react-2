import React from 'react'
import IndexPage from '../pages/IndexPage';
import './index.css'
import ErrorMessage from '../processes/error/ErrorMessage';
import LoaderScreen from '../processes/loader/ScreenLoader';

function App() {
    return (
        <div className="App">
            <IndexPage/>
            <ErrorMessage/>
            <LoaderScreen/>
        </div>
    );
}

export default App;
