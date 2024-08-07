import React from "react"
import { Container } from "../../../../components/Container"
import "./BannerSection.css"
import PojectTitle from "../../../../components/PojectTitle"
import ProjectHeading from "../../../../components/ProjectHeading"
const BannerSection = ({ image, containerStyle, className, onClick }) => {
  return (
    <Container>
      <div
        style={{ ...containerStyle }}
        className={`flex flex-row  max-lg:flex-col ${className}`}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            padding: "0 26px 0 26px",
            flexDirection: "column",
          }}
          className="mt-[173px]"
        >
          {image ? (
            <img src={image} alt="Activity" style={{ width: "100%" }} />
          ) : null}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", flex: 1 }}
          className="mt-[173px]"
        >
          <PojectTitle title="Ek Saath- The Earth Foundation" />
          <ProjectHeading title="Ek Saath is a movement that celebrates our love for nature,earth & life with acts of sustainability" />
          <p className="activity-description">
            Founded in 2020 by Pragya Kapoor, Ek Saath- The Earth Foundation is
            an NGO working in the field of environment and sustainability with
            an aim to sensitise and build a sense of responsibility towards the
            environment among the locals. Learning to co-exist with nature and
            making it our biggest ally, Ek Saath wishes to become a movement and
            voice in our fight against climate change and accomplishing
            sustainable development goals.
          </p>
          <div className="flex flex-row mt-[64px]">
            <button className="donate-button" onClick={onClick}>
              Donate
            </button>
            <div className="ml-[60px] flex flex-row justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <circle cx="24" cy="24" r="24" fill="#F9F484" />
                <path
                  d="M20.25 32.25V15.75L33 24L20.25 32.25Z"
                  fill="#3C3C3B"
                />
              </svg>
              <span className="ml-[5px] learn-more">Learn More</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default BannerSection
