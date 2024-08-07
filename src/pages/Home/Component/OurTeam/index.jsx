import React from "react"
import { Container } from "../../../../components/Container"
import PragyaImg from "../../../../assets/images/UserImage/Pragya.png"
import AshwinImg from "../../../../assets/images/UserImage/Ashwin.png"
import AshokImg from "../../../../assets/images/UserImage/Ashok.png"
import MayankImg from "../../../../assets/images/UserImage/Mayank.png"
import VidhiImg from "../../../../assets/images/UserImage/Vidhi.png"
import AncilaImg from "../../../../assets/images/UserImage/Ancila.png"
import Nizamuddin from "../../../../assets/images/UserImage/Nizamuddin.png"
import TanviImg from "../../../../assets/images/UserImage/Tanvi.png"
import HemangiImg from "../../../../assets/images/UserImage/Hemangi.png"
import FreishiaImg from "../../../../assets/images/UserImage/Freishia.png"
import NupurImg from "../../../../assets/images/UserImage/Nupur.png"
import MaansiImg from "../../../../assets/images/UserImage/Mansi.png"
import ApurvaImg from "../../../../assets/images/UserImage/Apurva.png"
import NishadImg from "../../../../assets/images/UserImage/Nishad.png"
import "./OurTeam.css"
const OurTeam = () => {
  const teamMembers = [
    {
      image: PragyaImg,
      name: "Pragya Kapoor",
      project: "",
      designation: "Founder & CEO",
    },
    {
      image: AshwinImg,
      name: "Ashwin Malwade",
      project: "",
      designation: "Managing Director",
    },
    {
      image: AshokImg,
      name: "Ashok",
      project: "",
      designation: "Chief Operations Officer",
    },
    {
      image: MayankImg,
      name: "Mayank Bannashi",
      project: "",
      designation: "Finance Head",
    },
    {
      image: VidhiImg,
      name: "Vidhi",
      project: "",
      designation: "Human Resource",
    },
    {
      image: AncilaImg,
      name: "Ancila John",
      project: "(Kokari Project)",
      designation: "Partnership and Collaborations Manager ",
    },
    {
      image: Nizamuddin,
      name: "Nizamuddin Shah",
      project: "(Kokari Project)",
      designation: "Project Manager",
    },
    {
      image: TanviImg,
      name: "Tanvi Patankar",
      project: "(Kokari Project)",
      designation: "Project Manager",
    },
    {
      image: HemangiImg,
      name: "Hemangi Sawant",
      project: "(Elephanta Project)",
      designation: "Partnership and Collaborations Manager ",
    },
    {
      image: FreishiaImg,
      name: "Freishia Bomanbehram",
      project: "(Carter Cleanup)",
      designation: "Co-founder, Carter CleanUp",
    },
    {
      image: NupurImg,
      name: "Nupur Agarwal",
      project: "(Carter Cleanup)",
      designation: "Co-founder, Carter CleanUp",
    },
    {
      image: MaansiImg,
      name: "Maansi Desai",
      project: "(Carter Cleanup)",
      designation: "Co-founder, Carter CleanUp",
    },
    {
      image: ApurvaImg,
      name: "Apurva Prabhu",
      project: "Social Media Executive",
      designation: "Developer",
    },
    {
      image: NishadImg,
      name: "Nishad Ghadi",
      project: "Project N",
      designation: "Office Admin",
    },
  ]

  return (
    <section
      id="team"
      style={{ background: "rgba(22, 19, 155, 0.20)", padding: "164px 0" }}
    >
      <Container>
        <h2 className="section-title">Ek Saath Team</h2>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-12"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-contain"
              />
              <h3 className="user-name">{member.name}</h3>
              {member.project ? (
                <p className="user-name project">{member.project}</p>
              ) : null}
              <p className="user-designation">{member.designation}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default OurTeam
