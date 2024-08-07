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
      description:"Our vision is to create a better everyday life for many people.",
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop:"96px"
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`goal-item ${
                index < items.length - 1 ? "border-right" : ""
              }`}
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                margin: "64px 0",
                padding:"0 64px"
              }}
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
