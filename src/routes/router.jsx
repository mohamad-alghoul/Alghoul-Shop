import { createBrowserRouter } from "react-router-dom"
import {LoginLayout} from "../layouts/LoginLayout"
import { RegisterLayout} from "../layouts/RegisterLayout"
import { HomeLayout } from "../layouts/HomeLayout"
import { ProfileLayout } from "../layouts/ProfileLayout"
import { OfferLayout } from "../layouts/OfferLayout"
import {FavoritesLayout} from "../layouts/FavoritesLayout"
import { CartLayout } from "../layouts/CartLayout"

export const router = createBrowserRouter([
  {
  path: "/",
  element: <LoginLayout />
}, 
{
  path: "/register",
  element: <RegisterLayout />
},
{
  path: "/home",
  element: <HomeLayout />
},{
  path: "/profile",
  element: <ProfileLayout />
},
{
  path: "/offers",
  element: <OfferLayout />
},
{
  path: "/favorites",
  element: <FavoritesLayout />
},
{
  path: "/cart",
  element: <CartLayout />
},
])
