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