import React from 'react';
import {NavLink, Route, Routes, Outlet} from "react-router-dom";

const SiteIgnat = () => {
    return (
        // 2й вариант вложенности через Чилдрен
        <div>
            <NavLink to={"/"}>main---</NavLink>
            <NavLink to={"/login"}>login---</NavLink>
            <NavLink to={"/propfile"}>profile---</NavLink>
            <NavLink to={"/propfile/settings"}>settings</NavLink>

            <Routes>
                <Route path={"/*"} element={<div>404</div>}/>
                <Route path={"/"} element={<div>main</div>}/>
                <Route path={"/login"} element={<div>login</div>}/>
                <Route path={"/propfile"} element={
                    <div>
                        propfile

                        <Outlet/>
                    </div>}>

                    <Route path={"*"} element={<div>404 ОШИБКА</div>}/>
                    <Route path={"settings"} element={<div>settings</div>}/>
                    <Route path={"music"} element={<div>music</div>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default SiteIgnat;


// первый вариант вложенности:
// const SiteIgnat = () => {
//     return (
//         <div>
//             <NavLink to={"/"}>main---</NavLink>
//             <NavLink to={"/login"}>login---</NavLink>
//             <NavLink to={"/propfile"}>profile---</NavLink>
//             <NavLink to={"/propfile/settings"}>settings</NavLink>
//
//             <Routes>
//                 <Route path={"/*"} element={<div>404</div>}/>
//                 <Route path={"/"} element={<div>main</div>}/>
//                 <Route path={"/login"} element={<div>login</div>}/>
//                 <Route path={"/propfile/*"} element={
//                     <div>
//                         propfile
//                         <Routes>
//                             <Route path={"/settings"} element={<div>settings</div>}/>
//                         </Routes>
//
//                     </div>
//                 }/>
//
//             </Routes>
//         </div>
//     );
// };
//
// export default SiteIgnat;


// второй вариант вложенности
// const SiteIgnat = () => {
//     return (
//         // 2й вариант вложенности через Чилдрен - чилдрен отрисуется вместо Outlet
//         <div>
//             <NavLink to={"/"}>main---</NavLink>
//             <NavLink to={"/login"}>login---</NavLink>
//             <NavLink to={"/propfile"}>profile---</NavLink>
//             <NavLink to={"/propfile/settings"}>settings</NavLink>
//
//             <Routes>
//                 <Route path={"/*"} element={<div>404</div>}/>
//                 <Route path={"/"} element={<div>main</div>}/>
//                 <Route path={"/login"} element={<div>login</div>}/>
//                 <Route path={"/propfile"} element={
//                     <div>
//                         propfile
//
//                         <Outlet/>
//                     </div>}>
//
//                     <Route path={"settings"} element={<div>settings</div>}/>
//
//                 </Route>
//             </Routes>
//         </div>
//     );
// };
//
// export default SiteIgnat;