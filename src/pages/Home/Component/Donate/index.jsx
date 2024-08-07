import React from "react"
import { Container } from "../../../../components/Container"
import DonateBanner from "../../../../assets/images/DonateBanner.png"
import Rectangle from "../../../../assets/images/Rectangle.png"
import "./Donate.css"
const Donate = () => {
  return (
    <section id="donate">
    <Container>
      <div className="mt-[398px] flex-row flex flex-wrap">
        <div className="w-[40%] max-lg:w-[100%] pr-[36px]">
          <img
            src={DonateBanner}
            alt="donate"
            className="w-[100%] object-contain"
          />
        </div>
        <div className="w-[60%] max-lg:w-[100%]">
          <div className="p-[36px]">
            <div className="flex justify-end">
              <img
                src={Rectangle}
                alt="Rectangle"
                className="w-[165px] object-contain"
              />
            </div>
            <h2 className="donate-title">Donate </h2>
            <p className="donate-description">
              Support us in the mission of creating an environment free from
              ignorance and exploitation by developing an eco-friendly
              environment through plantation of trees in urban and rural areas,
              by eradicating plastic pollution that harms human, aquatic, and
              wildlife, and to maximize reforestation to protect wildlife and
              bring people closer to nature.
            </p>
            <div style={{ marginTop: 40 }}>
              <input
                type="text"
                className="donate-input"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="donate-input mt-[19px]"
                placeholder="Email"
              />
              <input
                type="text"
                className="donate-input mt-[19px]"
                placeholder="Mobile Number"
              />
              <div className="flex justify-between mt-[19px]">
                <button className="donate-button">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </section>
  )
}

export default Donate
