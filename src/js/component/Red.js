import React from 'react'

const Red = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  return (
    <div className={`light red ${selectedColor === "red" ? "shineRed" : "red"}`}>
      <button className='light'></button>
    </div>
  )
}

export default Red