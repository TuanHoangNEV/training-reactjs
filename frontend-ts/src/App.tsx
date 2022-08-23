import * as React from 'react';
import { BrowserRouter as Router, Route, Link , Routes} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import DashPlayer from "./components/VideoPlayer/dash.video";
import LinkVideo from "./components/VideoPlayer/link.video";
import MpegVideo from "./components/VideoPlayer/mpeg.video";
import Calculator from "./components/calculator/Calculator";
import FilmPlayer from "./components/VideoPlayer/film.player";
import I18nHome from './components/i18n/i18n.home';
import Musique from './components/music';
import QuizGameHome from "./components/quiz";
import WsPlayer from "./components/VideoPlayer/ws.player";

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/dashPlayer'} className="nav-link">Dash stream</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/linkVideo'} className="nav-link">Online video</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/videoFeed'} className="nav-link">Video Feed</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/calculator'} className="nav-link">Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/meomeo'} className="nav-link">Meow Meow</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/i18n'} className="nav-link">I18n</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/music'} className="nav-link">Play music</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/quiz'} className="nav-link">Quiz</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/ws'} className="nav-link">WS Player</Link>
                            </li>
                        </ul>
                    </div>
                </nav> <br/>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/dashPlayer' element={<DashPlayer/>}/>
                    <Route path='/linkVideo' element={<LinkVideo/>}/>
                    <Route path='/videoFeed' element={<MpegVideo/>}/>
                    <Route path='/calculator' element={<Calculator/>}/>
                    <Route path='/meomeo' element={<FilmPlayer/>}/>
                    <Route path='/i18n' element={<I18nHome/>}/>
                    <Route path='/music' element={<Musique/>}/>
                    <Route path='/quiz' element={<QuizGameHome/>}/>
                    <Route path='/ws' element={<WsPlayer/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
