import Header from "./Header/Header"
import NavBar from "./NavBar/NavBar"
import Features from "./Features/Features"
import Services from "./Services/Services"
import services from "./Services/Service.js"

export default function Homepage(){
  return(
    <>
      <Header />
      <NavBar />
      <Features />
      <Services services={services} />
    </>
  )
}
