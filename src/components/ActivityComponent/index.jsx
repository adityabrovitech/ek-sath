import React from "react"
import { Container } from "../Container"
import "./Activity.css"
const ActivityComponent = ({
  image,
  data,
  children,
  containerStyle,
  className,
}) => {
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
          <img src={image} alt="Activity" style={{ width: "100%" }} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ display: "flex", flex: 1 }}></div>
            <div
              style={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h4 className="Activity-details">Activity Details</h4>
              {Object.entries(data).map(([key, value]) => (
                <div key={key} style={{ display: "flex", marginBottom: 10 }}>
                  <span style={{ width: "30%", fontWeight: 700 }}>{key}</span>
                  <span style={{ fontWeight: 400 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-[173px] flex flex-col flex-1">
          {children}
        </div>
      </div>
    </Container>
  )
}

export default ActivityComponent
