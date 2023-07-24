import React from 'react';
import {NavLink, Route, Routes, Outlet, useParams} from "react-router-dom";


const Profile=()=>{
    const params = useParams<"id" | "id2">()
    const some = params
    console.log(some)
    return(
        <div>profile</div>
    )
}

const SiteIgnat = () => {
    return (
        <div>
            <NavLink to={"/"}>main---</NavLink>
            <NavLink to={"/login"}>login---</NavLink>
            <NavLink to={"/propfile"}>profile---</NavLink>
            <NavLink to={"/propfile/1"}>profile/1</NavLink>

            <Routes>
                <Route path={"/*"} element={<div>404</div>}/>
                <Route path={"/"} element={<div>main</div>}/>
                <Route path={"/login"} element={<div>login</div>}/>
                <Route path={"/propfile/:id/:id2"} element={<Profile/>}>
                </Route>
            </Routes>
        </div>
    );
};

export default SiteIgnat;


// первый вариант вложенности:--------------------
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


// второй вариант вложенности ---------------
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
//                     <Route path={"*"} element={<div>404 ОШИБКА</div>}/>
//
//                 </Route>
//             </Routes>
//         </div>
//     );
// };
//
// export default SiteIgnat;



// useParam
// const Profile=()=>{
//     const params = useParams<"id" | "id2">()
//     const some = params
//     console.log(some)
//     return(
//         <div>profile</div>
//     )
// }
//
// const SiteIgnat = () => {
//     return (
//         <div>
//             <NavLink to={"/"}>main---</NavLink>
//             <NavLink to={"/login"}>login---</NavLink>
//             <NavLink to={"/propfile"}>profile---</NavLink>
//             <NavLink to={"/propfile/1"}>profile/1</NavLink>
//
//             <Routes>
//                 <Route path={"/*"} element={<div>404</div>}/>
//                 <Route path={"/"} element={<div>main</div>}/>
//                 <Route path={"/login"} element={<div>login</div>}/>
//                 <Route path={"/propfile/:id/:id2"} element={<Profile/>}>
//                 </Route>
//             </Routes>
//         </div>
//     );
// };
//
// export default SiteIgnat;
