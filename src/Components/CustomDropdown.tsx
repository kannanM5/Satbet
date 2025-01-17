import Form from "react-bootstrap/Form";
import useThemes from "../Hooks/useThemes";

type CustomDropdownProps = {
  data: any[];
  onChange: (val: any) => void;
  defaultTitle?: string;
  fieldName: string;
  value?: any;
};

const CustomDropdown = ({
  data,
  onChange,
  defaultTitle = "",
  fieldName,
  value,
}: CustomDropdownProps) => {
  const getThemeColors = useThemes();
  return (
    <div className="mb-2 mt-4">
      <Form.Select
        aria-label={defaultTitle}
        value={value ? value[fieldName] : ""}
        style={{
          height: "38px",
          fontSize: "14px",
          fontFamily: "var(--regular)",
          backgroundColor: "transparent",
          border: "1px solid #3f3f3f",
          color: value ? getThemeColors.textColor : "rgba(223, 217, 217, 0.4)",
        }}
        onChange={(e) => {
          const selectedValue = e.target.value;
          const selectedItem = data.find(
            (item) => item[fieldName] === selectedValue
          );
          if (selectedItem) {
            onChange(selectedItem);
          }
        }}
      >
        <option
          value=""
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            fontSize: "14px",
          }}
        >
          {defaultTitle}
        </option>

        {data?.map((ele, ind) => (
          <option
            key={ind}
            value={ele[fieldName]}
            style={{ backgroundColor: "transparent", color: "black" }}
          >
            {ele[fieldName]}
          </option>
        ))}
      </Form.Select>
    </div>
  );
};

export default CustomDropdown;
