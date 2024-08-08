import React, { useState } from "react"
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
import Navbar from "./Navbar"
const Home = () => {
  const MenuItems = ["Home", "Projects", "Team", "Partners"]
  const swachActivity = {
    Location: "Elephanta Island, Mumbai",
    Day: "Sunday",
    Timing: "8.30am to 10.30am",
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
    navigateToModule({ name: MenuItems[index]?.toLowerCase() })
  }
  const navigateToModule = ({ name }) => {
    const donateDiv = document.getElementById(name)
    donateDiv.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div style={{ marginBottom: 116 }}>
      <Navbar
        handleClick={handleClick}
        navigateToModule={navigateToModule}
        selectedItem={selectedItem}
      />
      <section id="home" />
      <BannerSection
        image={BannerImage}
        className="flex-row-reverse max-lg:flex-col"
      />
      <section>
        <Goals />
      </section>

      <section id="projects" className="mb-[300px] sm:mb-[50px]">
        <ActivityComponent data={swachActivity} image={ActivityImg}>
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
      <OurTeam id="team" />
      <OurPartner id="partners" />
      <Donate id="donate" />
    </div>
  )
}

export default Home
