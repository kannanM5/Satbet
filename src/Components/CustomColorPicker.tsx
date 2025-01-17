import { useState } from "react";
import ColorPicker from "@rc-component/color-picker";
import "@rc-component/color-picker/assets/index.css";

type CustomColorPickerProps = {
  value: string;
  defaultValue?: string;
  onChange: (color: string) => void;
};

const CustomColorPicker = ({
  value,
  defaultValue,
  onChange,
}: CustomColorPickerProps) => {
  const [color, setColor] = useState(defaultValue);

  const handleChange = (color: string) => {
    console.log("Selected Color:", color.toHexString());
    setColor(color.toHexString());
    onChange(color.toHexString());
  };

  return (
    <div style={{ padding: "5px" }}>
      <ColorPicker
        value={value}
        // disabledAlpha
        onChangeComplete={() => {}}
        onChange={handleChange}
        panelRender={(panel) => (
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "100%",
            }}
          >
            {panel}
          </div>
        )}
      />
      <div
        style={{
          marginTop: "20px",
          width: "100px",
          height: "50px",
          backgroundColor: color,
          border: "1px solid #ccc",
          textAlign: "center",
          lineHeight: "50px",
          color: "#fff",
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default CustomColorPicker;
