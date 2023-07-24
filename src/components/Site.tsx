import React from 'react';
import styles from './Site.module.css'
import {Route, Routes, Navigate, NavLink} from 'react-router-dom';
import {Error404} from "./pages/Error404";
import Page from "./pages/Page";
import {dataState} from "./dataState/dataState";



export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink to={"/Page/0"} className={({isActive})=>isActive? styles.active: styles.navLink}>Страница_1</NavLink>
                        <br/>
                        <NavLink to={"/Page/1"} className={({isActive})=>isActive? styles.active: styles.navLink}>Страница_2</NavLink>
                        <br/>
                        <NavLink to={"/Page/2"} className={({isActive})=>isActive? styles.active: styles.navLink}>Страница_3</NavLink>
                    </div>
                </div>
                <div className={styles.content}>

                    <Routes>
                        {/*для пареелинковки захода на старт страницу сразу на первую*/}
                        <Route path={"/"} element={<Navigate to={"/0"}/>}/>

                        <Route path={"/Page/:id"} element={<Page pages = {dataState.pages}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};


{/*NavLink аналог тегу а*/}
{/*в NavLink можно вставить коллбек в класснейм, а в Link нельзя*/}

{/*/ слеш - это и есть локалХост3000*/}
{/*Навигейт перебросит при первом заходе на страницу с локалхост300 сразу на /1 компоненту <PageOne/>*/}

{/*<Route path={"/1"} element={<PageOne/>}/>*/}
{/*<Route path={"/2"} element={<PageTwo/>}/>*/}
{/*<Route path={"/3"} element={<PageThree/>}/>*/}