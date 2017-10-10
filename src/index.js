import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SearchBar from './components/SearchBar'


const App = () => {
    
        return (
            <div>
                {<SearchBar />}
                {/* <h1>Hello there World!</h1>
                <p>I love saying hello world</p> */}
            </div>
        )
    }

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker();
