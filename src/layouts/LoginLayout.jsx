import { Navbar } from "../components/navbar/Navbar"
import  LoginComponent  from '../components/loginComponent/LoginComponent';

export const LoginLayout = () => {

  return (
    <div>
      <Navbar/>
      <LoginComponent />
    </div>
  )
}
