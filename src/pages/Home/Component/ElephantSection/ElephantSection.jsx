import React from "react"
import "./ElephantSection.css"
import UserDetail from "../../../../components/UserDetail"
import userImg from "../../../../assets/images/UserImage/Niroppama.png"
export const ElephantSection = () => {
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
        Preserving Heritage - Elephanta Island
      </h2>
      <p className="activity-description">
        Elephanta Island, also known as Gharapuri Island, nestled in Mumbai
        Harbor, shines as a vibrant showcase of India's diverse cultural
        heritage. Renowned for its ancient rock-cut temples, notably the UNESCO
        World Heritage Site, Elephanta Caves, the island draws thousands of
        visitors daily, making it one of Maharashtra's top 10 tourist
        destinations. Despite its historical significance, the island faces a
        critical issue- waste management challenges endanger its delicate
        ecosystem.
      </p>
      <p className="activity-description">
        To address this, our project proposes a holistic approach with waste
        management at its core. By prioritizing waste management as the main
        focus and integrating it with water management, infrastructure
        development, biodiversity conservation, community engagement and
        livelihood generation, we aim to create a sustainable solution.
        Establishing effective waste management systems not only preserves
        Elephanta's natural beauty and safeguards its cultural heritage but also
        ensures environmental sustainability for future generations. Public
        Sector Unit (PSU) recognized as Jawaharlal Nehru Port Authority (JNPA)
        has proposed to partner with Ek Saath Foundation to support our waste
        management initiatives, further enhancing our efforts to create a
        lasting impact.
      </p>
      <h3 className="activity-subHeading">Research Expert</h3>
      <UserDetail userImg={userImg} title="Ms. Niroppama Sawant" />
      <p className="activity-description">
        With the assistance of research expert Ms. Niroppama Sawant, we have
        extensively studied Elephanta Island, revealing insights into its
        demographics and livelihoods. While official records indicate a
        population of 1100 residents, locals suggest a figure closer to 500-600
        individuals. Traditionally, the island's inhabitants engaged in farming,
        fishing, and boat repairing. However, with the younger generation
        migrating to mainland Mumbai for employment opportunities, the remaining
        residents rely on various small businesses, including food
        stalls, antique jewellery shops, and restaurants, for their livelihoods.
      </p>
    </>
  )
}
