import { Navbar } from "../components/navbar/Navbar"
import { UserInfo } from "../components/userInfo/UserInfo";
import { OfferPage } from "../pages/OfferPage";

export const OfferLayout = () => {
 

  return (
    <div>
      <Navbar  />
      <UserInfo />
      <OfferPage />
      
    </div>
  )
}
