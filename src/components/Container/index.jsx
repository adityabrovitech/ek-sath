import React from "react"

export const Container = ({ children,style={},containerStyle={} }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center',...containerStyle }}>
            <div style={{  ...style }} className="min-w-full max-w-[1200px] px-[39px]" >
                {children}
            </div>
        </div>
    );
};
