import { useState } from "react";

export default function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState({ hex: null, name: null });
  const [focusedIndex, setFocusedIndex] = useState(null);

  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
  ];

  function handleClick(color) {
    setSelectedColor({ hex: color.hex, name: color.name });
  }

  function handleMouseEnter(color) {
    setSelectedColor({ hex: color.hex, name: color.name });
  }

  function handleMouseLeave() {
    setSelectedColor({ hex: null, name: null });
  }

  function handleFocus(index) {
    setFocusedIndex(index);
  }

  function handleBlur() {
    setFocusedIndex(null);
  }

  function handleKeyDown(e, index) {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      const nextIndex = Math.min(index + 1, colors.length - 1);
      setFocusedIndex(nextIndex);
      document.querySelectorAll(".color-item")[nextIndex]?.focus();
    }

    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      const prevIndex = Math.max(index - 1, 0);
      setFocusedIndex(prevIndex);
      document.querySelectorAll(".color-item")[prevIndex]?.focus();
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(colors[index]);
    }
  }

  return (
    <div className="color-picker">
      <h1>Color Picker</h1>
      <div className="color-list">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-item ${focusedIndex === index ? "focused" : ""}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleClick(color)}
            onMouseEnter={() => handleMouseEnter(color)}
            onMouseLeave={handleMouseLeave}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            onKeyDown={(e) => handleKeyDown(e, index)}
            tabIndex={0}
          >
            {selectedColor.hex === color.hex && (
              <span className="color-code">{selectedColor.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}