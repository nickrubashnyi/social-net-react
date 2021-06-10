import React from "react"
import './App.css'
import {Route, BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/profile'
                           render={()=> <Profile profilePageтзь ={props.state.profilePage}
                                                 addPost={props.addPost}
                                                 updateNewPostText={props.updateNewPostText}
                           />}/>
                    <Route path='/dialogs'
                           render={()=> <Dialogs state={props.state.dialogsPage}

                           />}/>
                    <Route path='/news' render={()=> <News/>}/>
                    <Route path='/music' render={()=> <Music/>}/>
                    <Route path='/settings' render={()=> <Settings/>}/>

                </div>
                {/*<ProfileInfo/>*/}
            </div>
        </BrowserRouter>
    )
}


export default App