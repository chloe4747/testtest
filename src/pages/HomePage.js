import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import LoginButton from '../components/LoginButton'
import { ThemeContextConsumer } from '../context/themeContext'
// import './a.css'
import './a.scss'
import store from '../store'

const HomePage = () => {
    console.log(store.getState())
    const [user, setUser] = useState(store.getState())

    useEffect(() => {
        store.subscribe(() => {
            const nextUser = store.getState()
            setUser(nextUser)
        })
    }, [])

    return (
        <ThemeContextConsumer>
            {({ theme, setTheme }) => {
                return (
                    <div>
                        {
                            user.isLogin
                                ? <div>{user.name}</div>
                                : <div>비로그인</div>
                        }
                    <NavBar/>
                        <div className={'home' + ` ${theme === 'DARK' ? 'dark' : ''}`}>
                            <p className="desc">English AVENUE.</p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
                            Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. 
                            Fames ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum dolor sit.
                        </div>
                        <LoginButton/>
                    </div>                
            )}}
        </ThemeContextConsumer>
    )
}

// const HomePage = () => {
//     const [theme, setTheme] = useState('dark')
//     return (
//         <div>
//             <NavBar/>
//             <div className={theme}>
//                 <button onClick={() => {
//                     if(theme === 'dark') {
//                         setTheme('light')
//                     } else {
//                         setTheme('dark')
//                     }
//                 }}>toggle</button>
//                 <p className="desc">English AVENUE.</p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
//                 Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. 
//                 Fames ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum dolor sit.
//             </div>
//         </div>
//     )
// }

export default HomePage