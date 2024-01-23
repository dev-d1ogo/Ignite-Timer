import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { History } from "./pages/History/History";
import { DefaultLayout } from "./layouts/DefaultLayout";


export const Router= () => {
  return (
    <Routes>
        {/* Aplicando o Layout padrao para todas as rotas da nossa aplicacao */}
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="/history" element={<History/>}/>
        </Route>
    </Routes>
  )
}
