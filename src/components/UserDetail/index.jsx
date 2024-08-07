import React from "react"
import "./userDetail.css"
const UserDetail = ({ userImg, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginRight: 10,
        marginTop: 23,
      }}
    >
      <img
        src={userImg}
        alt="userIcon"
        style={{ width: 67, height: 67, borderRadius: 67 }}
      />
      <span className="user mt-[8px]">{title}</span>
    </div>
  )
}

export default UserDetail
