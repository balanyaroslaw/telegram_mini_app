import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/navbar"
import { ROUTER_KEYS } from "../shared/keys/routes"
import FirstPage from "../pages/first/first.page"
import SecondPage from "../pages/second/second.page"
import { useSelector } from "react-redux"
import { RootState } from "../store/wallet.store"
import ThirdPage from "../pages/third/third.page"

const Router = () =>{
  const walletAddress = useSelector((state: RootState) => state.wallet.address);
  return(
    <BrowserRouter>

      {walletAddress&&<Navbar/>}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={ROUTER_KEYS.FIRST} element={<FirstPage/>} />
          <Route path={ROUTER_KEYS.SECOND} element={<SecondPage/>} />
          <Route path={ROUTER_KEYS.THIRD} element={<ThirdPage/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router;