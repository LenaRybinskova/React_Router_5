# Базовая версия

базовый синтаксис, пример использования useParam

# Варианты вложенности

1 вариант

````
    <NavLink to={"/propfile/settings"}>settings</NavLink>
    
    <Route path={"/propfile/*"} element={
          <div>
              propfile
              <Routes>
                  <Route path={"/settings"} element={<div>settings</div>}/>
           
          </div>
       }/>
````

2 вариант, c children

````
    <NavLink to={"/propfile/settings"}>settings</NavLink>
          <Route path={"/propfile"} element={
              <div>
                  pro
                  <Outlet/>
              </div>
              <Route path={"*"} element={<div>404 ОШИБКА</div>}/>
              <Route path={"settings"} element={<div>settings</div>}/>
              <Route path={"music"} element={<div>music</di
          </Route>
````

# синтаксис useParams

# стили для ссылок

````
    <NavLink to={"/propfile/settings"} style ={(param)=>
               {
                   return {color:param.isActive?"lime":"black"}
               }}>settings
    </NavLink>
````

или через className={}

````
     <NavLink to={"/propfile/settings"} 
         className={({isActive})=>isActive? "act":"default"}>
             settings
     </NavLink>
````

(<Link>) не поддерживает ни функцию style, ни className

````
      <a 
          href={"https://github.com/LenaRybinskova/React_Router_6/tree/master"} 
          target={"_blank"} 
          rel={"noreferrer nofollow noopener"}
              >
               xxx
      </a>
````

"noreferrer nofollow noopener" сайт куда переходим не сможет отследить откуда пришли, не копировались хедерсы и не
получит доступ к сессии
