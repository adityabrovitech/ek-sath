import React, { useState } from "react"
import Logo from "../../assets/images/Logo.png"
import { Container } from "../../components/Container"

import Goals from "./Component/Goals/Goals"
import ActivityComponent from "../../components/ActivityComponent"
import { ActivitySection } from "./Component/ActivitySection/ActivitySection"
import "./Home.css"
import ActivityImg from "../../assets/images/Activity.png"
import ElephantImg from "../../assets/images/Elephant.png"
import CarterImg from "../../assets/images/Carter.png"

import { ElephantSection } from "./Component/ElephantSection/ElephantSection"
import { CarterSection } from "./Component/CarterSection/CarterSection"
import OurTeam from "./Component/OurTeam"
import OurPartner from "./Component/OurPartners/Index"
import Donate from "./Component/Donate"
import BannerSection from "./Component/BannerSection"
import BannerImage from "../../assets/images/BannerImage.png"
const Home = () => {
  const MenuItems = ["Home", "Projects", "Team", "Partners"]
  const swachActivity = {
    location: "Elephanta Island, Mumbai",
    day: "Sunday",
    timing: "8.30am to 10.30am",
  }
  const elephantActivity = {
    Location: "Kokari, Koliwada, Sion, Mumbai",
    "Meeting Point": "Gateway of India, Colaba, Mumbai",
    Timing: "Once a month",
    Duration: "2 hours",
  }
  const carterActivity = {
    Location: "Carte Road Beach",
    "Meeting Point": "Opposite Di Bella Coffee, Carter Road, Bandra",
    Timing: "Saturday",
    Duration: "7.30am to 9.30am",
  }
  const [selectedItem, setSelectedItem] = useState(0)
  const handleClick = (index) => {
    setSelectedItem(index)
    navigateToModule({name:MenuItems[index]?.toLowerCase()})
  }
  const navigateToModule=({name})=>{
    const donateDiv = document.getElementById(name);
    donateDiv.scrollIntoView({behavior: "smooth"})
  }
  return (
    <div style={{ marginBottom: 116 }}>
      <header
        style={{
          border: "1px solid #000",
          borderWidth: " 0 0 1px 0",
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#FFF",
        }}
      >
        
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            src={Logo}
            alt="ek-sath"
            style={{ width: 70, height: 70, margin: "21px 0 21px 0" }}
          />
          <div className="menu">
            {MenuItems?.map((item, index) => (
              <div
                key={index}
                className={`menu-item menu-typography ${
                  selectedItem === index ? "selected" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="donate-button" onClick={()=>navigateToModule({name:'donate'})}>Donate</button>
          </div>
        </Container>
      </header>
      <section id="home" />
      <BannerSection image={BannerImage} className="flex-row-reverse max-lg:flex-col"/>
      <section>
        <Goals />
      </section>
      

       <section id="projects">
      <ActivityComponent data={swachActivity} image={ActivityImg} >
        <ActivitySection />
      </ActivityComponent>
      

     <ActivityComponent
        data={elephantActivity}
        image={ElephantImg}
        className="flex-row-reverse max-lg:flex-col"
      >
        <ElephantSection />
      </ActivityComponent>

       <ActivityComponent data={carterActivity} image={CarterImg}>
        <CarterSection />
      </ActivityComponent>

      </section> 
    <OurTeam id="team"/>
      <OurPartner id="partners"/>
     <Donate id="donate" />
    </div>
  )
}

export default Home
