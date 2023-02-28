import React from 'react'

const Avatar = ({children, backgroundColor, color, px, py, fontSize, borderRadius, cursor}) => {
    const style={
        backgroundColor,
        color: color || 'black',
        padding: `${py} ${px}`,
        textAline: "center",
        borderRadius,
        fontSize,
        cursor: cursor || null,
        textDecoration: "none"
    
      }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar
