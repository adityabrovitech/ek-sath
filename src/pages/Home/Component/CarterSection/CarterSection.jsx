import React from "react"
import "./CarterSection.css"
import UserDetail from "../../../../components/UserDetail"
import AswinImg from "../../../../assets/images/UserImage/Ashwin.png"
import FreishiaImg from "../../../../assets/images/UserImage/Freishia.png"
import HaroldImg from "../../../../assets/images/UserImage/Harold.png"
import MansiImg from "../../../../assets/images/UserImage/Mansi.png"
import NupurImg from "../../../../assets/images/UserImage/Nupur.png"

export const CarterSection = () => {
  const userList = [
    { name: "Harold Fernandes", img: HaroldImg },
    { name: "Ashwin Malwade", img: AswinImg },
    { name: "Nupur Agarwal", img: NupurImg },
    { name: "Freishia B", img: FreishiaImg },
    { name: "Maansi Ahuja.", img: MansiImg },
  ]
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
        Carter Cleanup
      </h2>
      <p className="activity-description ">
        Carter Clean Up, started on 24th June 2021, is a movement that believes
        in minimizing the plastic footprint, so that we can enjoy mother nature
        in her most natural form. Carter Road is a popular 3.5km long stretch in
        Bandra with a beach and mangroves on one side along the coast in Mumbai.
        This stretch warrants attention for two main reasons- The beach part is
        drowning in plastic and illegally dumped construction debris. The
        mangroves are choked in plastic to the extent that trees are dying and
        the spread is getting limited.
      </p>
      <p className="activity-description">
        Mr. Harold Fernandes started cleaning the Carter Road beach during the
        lockdown. He would clean the beach and adjoining mangroves nearly every
        day. Inspired by his work, Carter Clean Up was founded. In one year,
        nearly 10000+ kgs of illegal construction debris and marine waste have
        been cleared from the beach and the surrounding mangroves.
      </p>
      <h3 className="activity-subHeading my-[10px]">Five core members</h3>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4"
      >
        {userList?.map((user, index) => (
          <UserDetail userImg={user?.img} title={user?.name} />
        ))}
      </div>
      <p className="activity-description mt-[40px]">
        Through beach clean-ups, the Marine waste collected is segregated into
        different categories and the plastic which cannot be recycled is sent to
        a cement factory as Refuse Derived Fuel (RDF). Religious idols found on
        the beach are also sent every fortnight to a recycler in Nashik. Nearly
        75 residents of Bandra now drop off their waste at Carter Road beach
        every Saturday. By harnessing the collective efforts of the community,
        we aim to significantly reduce the amount of waste sent to landfills
        while promoting environmental sustainability. Additionally, we have also
        expanded our cleanup activities beyond Carter Beach towards the
        children’s park and Chimbai Beach.
      </p>
    </>
  )
}
