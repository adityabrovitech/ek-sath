import React from "react"
import "./ActivitySection.css"
export const ActivitySection = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#13829B",
            width: "17px",
            height: "2px",
          }}
        />
        <p
          style={{
            display: "flex",
            marginLeft: 5,
            color: "#16139B",
            fontSize: 18,
          }}
        >
          Project
        </p>
      </div>
      <h2
        style={{
          display: "flex",
          marginLeft: 5,
          color: "#3C3C3B",
          fontSize: 48,
          fontWeight: 700,
          margin: 0,
        }}
      >
        Swachh Kokari Sundar Kokari
      </h2>
      <p className="activity-description">
        Ek Saath Foundation in collaboration with BMC F - North ward aims at
        turning the slum settlement in Kokari, Wadala, into a zero waste
        settlement.
      </p>
      <p className="activity-description">
        kokari Agar Baithi Chawl is a settlement that consists of 4500
        households with a population of 20,000+. Ward 174 and 176 of F - North
        ward is divided by a nullah which is a tributary of the Mithi River,
        filled with waste water and solid waste dumped by the people living
        around the nullah due to inadequate waste management facilities. This
        not only obstructs the flow of waste water but is also home to a number
        of diseases. During monsoon due to heavy waste dumping, the nullah
        overflows. Additionally, this nullah along with the waste meets the
        ocean in Mahul, located in the eastern suburbs of the city.
      </p>
      <p className="activity-description">
        Hence, it is a need of the hour to convert the community into a
        zero-waste settlement. Turning Kokari into a zero-waste settlement will
        not only prevent the waste from entering the landfill or staying in and
        around the community but will also improve the living conditions of
        people. 75% of the litter on Mumbai's city beaches is plastic. By making
        Kokari a zero-waste settlement, we will be preventing plastic waste from
        entering into the ocean through the nullah.
      </p>
    </>
  )
}
