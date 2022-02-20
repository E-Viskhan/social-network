import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
