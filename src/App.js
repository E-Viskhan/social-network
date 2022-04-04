import './App.css';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { useEffect } from "react";

const App = props => {
    const initialized = useSelector(state => state.app.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, []);

    if (!initialized) return <></>;

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'>
                        <Route path='' element={<Profile/>}/>
                        <Route path=':userId' element={<Profile/>}/>
                    </Route>
                    <Route path='/dialogs/*' element={<Dialogs/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/users' element={<Users/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
