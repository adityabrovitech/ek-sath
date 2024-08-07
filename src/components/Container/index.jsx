import React from "react"

export const Container = ({
  children,
  style = {},
  containerStyle = {},
  className,
  parentClassName = "",
}) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", ...containerStyle }}
      className={`${parentClassName}`}
    >
      <div
        style={{ ...style }}
        className={`w-full max-w-[1200px] px-[39px] ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
