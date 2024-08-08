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
        "To build an eco-friendly sustainable world collectively for the future of humankind and wildlife.",
      svg: VisionIcon,
    },
    {
      title: "Mission",
      description:
        "To create an environment free from ignorance and exploitation by developing an eco-friendly environment through plantation of trees in urban and rural areas, by eradicating plastic pollution that harms humans, aquatic and wild life and to maximize reforestation to protect wild life and bring people closer to nature. To do this by engaging people at the grassroots level through education and awareness about the environment.",
      svg: MissionIcon,
    },
    {
      title: "Ambition",
      description:
        "To create a bond between humans and nature, and get society involved in preserving and understanding nature by bridging the gap that separates us.",
      svg: AmbitionIcon,
    },
  ]

  return (
    <Container>
      <div className="grid grid-cols-3 max-lg:grid-cols-1  mt-[96px]">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                index < items.length - 1
                  ? "border-r-2 goal-item  border-r-[#F9F484] max-lg:border-b-2  max-lg:border-r-0 max-lg:border-b-[#F9F484]"
                  : ""
              } 
              flex flex-col justify-start px-[64px] max-lg-px[0px] max-lg:p-[32px] 
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
