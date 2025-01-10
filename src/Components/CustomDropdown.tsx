import Form from "react-bootstrap/Form";

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
  return (
    <div className="mb-2 mt-4">
      <Form.Select
        aria-label={defaultTitle}
        value={value ? value[fieldName] : ""}
        style={{
          backgroundColor: "transparent",
          border: "1px solid #3f3f3f",
          color: value ? "white" : "rgba(223, 217, 217, 0.4)",
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
