import React from "react"
import "./OurPartner.css"
import Partner1 from "../../../../assets/images/partners/partner.jpg"
import Partner2 from "../../../../assets/images/partners/partner2.png"
import Partner3 from "../../../../assets/images/partners/partner3.png"
import Partner4 from "../../../../assets/images/partners/partner4.png"
import Partner5 from "../../../../assets/images/partners/partner5.png"
import Partner6 from "../../../../assets/images/partners/partner6.png"
import Partner7 from "../../../../assets/images/partners/partner7.png"
import Partner8 from "../../../../assets/images/partners/partner8.png"
import Partner9 from "../../../../assets/images/partners/partner9.png"
import Partner10 from "../../../../assets/images/partners/partner10.png"
import Partner11 from "../../../../assets/images/partners/partner11.png"
import Partner12 from "../../../../assets/images/partners/partner12.png"
import Partner13 from "../../../../assets/images/partners/partner13.png"
import ParnterBanner from "../../../../assets/images/partners/OurPartner.png"
import { Container } from "../../../../components/Container"

const OurPartner = () => {
  const partnerImages = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
    Partner9,
    Partner10,
    Partner11,
    Partner12,
    Partner13,
  ]

  return (
    <section id="partners">
      <Container>
        <div className="mt-[398px] flex-row flex flex-wrap">
          <div className="w-[40%] max-lg:w-[100%] pr-[36px]">
            <img
              src={ParnterBanner}
              alt="Our Partners"
              className="w-[100%] object-contain"
            />
          </div>
          <div className="w-[60%] max-lg:w-[100%] p-[36px]">
            <h2 className="section-title">Our Partners and Supporters </h2>

            <div className="grid grid-cols-4" style={{ gap: "40px 40px" }}>
              {partnerImages.map((partner, index) => (
                <img
                  key={index}
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="object-contain aspect-auto h-20"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurPartner
