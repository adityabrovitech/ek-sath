import React from "react"

export const Container = ({ children,style={},containerStyle={} }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center',...containerStyle }}>
            <div style={{ width: '80%', maxWidth: 1200, ...style }}>
                {children}
            </div>
        </div>
    );
};
