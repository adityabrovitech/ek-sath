import React from "react"
import "./Goals.css"
import VisionIcon from "../../../../assets/images/Vision.svg"
import MissionIcon from "../../../../assets/images/Mission.svg"
import AmbitionIcon from "../../../../assets/images/Ambition.svg"
import { Container } from "../../../../components/Container"
const Goals = () => {
  const items = [
    {
      title: "Vision",
      description:
        "Our vision is to create a better everyday life for many people.",
      svg: VisionIcon,
    },
    {
      title: "Mission",
      description:
        "Our mission is to provide the best customer service possible.",
      svg: MissionIcon,
    },
    {
      title: "Ambition",
      description: "Our ambition is to continuously improve and innovate.",
      svg: AmbitionIcon,
    },
  ]

  return (
    <Container>
      <div className="flex flex-row max-lg:flex-col justify-between mt-[96px]">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                index < items.length - 1
                  ? "border-r-2 goal-item  border-r-[#F9F484] max-lg:border-b-2 max-lg:border-r-0 max-lg:border-b-[#F9F484]"
                  : ""
              } 
              flex flex-col justify-start p-[64px] max-lg-p[0px] max-lg:px-[32px] 
               `}
              
            >
              <img src={item.svg} alt={item.title} className="goal-svg" />
              <h2 className="goal-title">{item.title}</h2>
              <p className="goal-description">{item.description}</p>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Goals
