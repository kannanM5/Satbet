// import { Form, FormControlProps } from "react-bootstrap";
// import useThemes from "../Hooks/useThemes";
// import { useState } from "react";

// type CustomDatePickerProps = {
//   selectedValue: string;
//   onChange: (e: FormControlProps) => void;
//   title?: string;
// };

// const CustomDatePicker = ({
//   selectedValue,
//   onChange,
//   title,
// }: CustomDatePickerProps) => {
//   const getThemeColors = useThemes();
//   const [isFocused, setIsFocused] = useState(false);
//   return (
//     <div className="mt-4 mb-2">
//       {title && <Form.Label>Select Date</Form.Label>}
//       <Form.Control
//         type="date"
//         name="doj"
//         defaultValue={selectedValue}
//         placeholder="Date of Joining"
//         onChange={(e) => onChange(e)}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         style={{
//           fontSize: "14px",
//           height: "38px",
//           backgroundColor: "transparent",
//           color: getThemeColors.isMode ? "black" : "white",
//           border: `1px solid ${
//             isFocused ? getThemeColors.primaryColor : "#3f3f3f"
//           }`,
//           transition: "border 0.3s ease",
//         }}
//       />
//     </div>
//   );
// };

// export default CustomDatePicker;

// import type { DatePickerProps } from "antd";
import { ConfigProvider, DatePicker } from "antd";
import { useState } from "react";
import useThemes from "../Hooks/useThemes";
import { CalendarFilled } from "@ant-design/icons";
import dayjs, { Dayjs } from "dayjs";

type CustomDatePickerProps = {
  format?: string;
  value: Dayjs | null;
  onChange: (date: Dayjs, dateString: string | string[]) => void;
  Placeholder?: string;
  picker?: "date" | "month" | "week" | "year";
};

const CustomDatePicker = ({
  value,
  format = "YYYY-MM-DD",
  onChange,
  Placeholder = "Select dob",
  picker = "date",
}: CustomDatePickerProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const getThemeColors = useThemes();

  return (
    <div className="mt-4">
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {},
          },
        }}
      >
        <DatePicker
          onChange={onChange}
          value={value ? dayjs(value) : null}
          placeholder={Placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          picker={picker}
          style={{
            boxShadow: "none",
            background: "transparent",
            height: "38px",
            width: "100%",
            fontSize: "14px",
            fontFamily: "var(--regular)",
            border: `1px solid ${
              isFocused ? getThemeColors.primaryColor : "#3f3f3f"
            }`,
          }}
          format={format}
          inputReadOnly
          allowClear={false}
          suffixIcon={
            <CalendarFilled
              style={{
                color: getThemeColors.isMode ? "black" : "white",
                fontSize: "18px",
              }}
            />
          }
        />
        <style>{`
          .ant-picker .ant-picker-input > input{
              color : ${getThemeColors.isMode ? "black" : "white"}
           }
          .ant-picker-input input::placeholder {
              color:${
                getThemeColors.isMode
                  ? "rgb(153, 144, 144)"
                  : "rgb(148, 133, 133)"
              } !important
           }

        `}</style>
      </ConfigProvider>
    </div>
  );
};

export default CustomDatePicker;
