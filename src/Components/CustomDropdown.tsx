// import Form from "react-bootstrap/Form";
// import useThemes from "../Hooks/useThemes";
// import { useState } from "react";

import { ConfigProvider, Select } from "antd";
import { useState } from "react";
import useThemes from "../Hooks/useThemes";
import { RightOutlined } from "@ant-design/icons";

// type CustomDropdownProps = {
//   data: any[];
//   onChange: (val: any) => void;
//   defaultTitle?: string;
//   fieldName: string;
//   value?: any;
// };

// const CustomDropdown = ({
//   data,
//   onChange,
//   defaultTitle = "",
//   fieldName,
//   value,
// }: CustomDropdownProps) => {
//   const getThemeColors = useThemes();
//   const [isFocused, setIsFocused] = useState(false);

//   console.log(isFocused, "isFocused");

//   return (
//     <div className="mb-2 mt-4">
//       <Form.Select
//         aria-label={defaultTitle}
//         value={value ? value[fieldName] : ""}
//         style={{
//           height: "38px",
//           fontSize: "14px",
//           fontFamily: "var(--regular)",
//           backgroundColor: "transparent",
//           border: isFocused
//             ? `1px solid ${getThemeColors.primaryColor} !important`
//             : "1px solid #3f3f3f !important",
//           color: value ? getThemeColors.textColor : "rgba(223, 217, 217, 0.4)",
//         }}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         onChange={(e) => {
//           const selectedValue = e.target.value;
//           const selectedItem = data.find(
//             (item) => item[fieldName] === selectedValue
//           );
//           if (selectedItem) {
//             onChange(selectedItem);
//           }
//         }}
//       >
//         <option
//           value=""
//           style={{
//             backgroundColor: "transparent",
//             color: "#fff",
//             fontSize: "14px",
//           }}
//         >
//           {defaultTitle}
//         </option>

//         {data?.map((ele, ind) => (
//           <option
//             key={ind}
//             value={ele[fieldName]}
//             style={{ backgroundColor: "transparent", color: "black" }}
//           >
//             {ele[fieldName]}
//           </option>
//         ))}
//       </Form.Select>
//     </div>
//   );
// };

// export default CustomDropdown;

// interface OptionType {
//   label: string; // Label displayed in the dropdown list
//   value: string; // Unique value for the option
//   [key: string]: any; // Support additional fields (e.g., dynamic fieldName)
// }

interface CustomDropdownProps {
  value?: any | null;
  onChange?: (value: any) => void;
  options: any[];
  size?: "middle" | "large" | "small";
  className?: string;
  style?: React.CSSProperties;
  allowClear?: boolean;
  mode?: "multiple" | "tags" | "";
  disabled?: boolean;
  loading?: boolean;
  Placeholder?: string;
  showSearch?: boolean;
  autoFocus?: boolean;
  fieldName?: string;
  valueName?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  value,
  onChange,
  options,
  size = "middle",
  className,
  style,
  allowClear = false,
  // mode = "",
  disabled = false,
  loading = false,
  Placeholder,
  showSearch = false,
  autoFocus = false,
  fieldName,
  valueName,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const getThemeColors = useThemes();

  const handleSelect = (selected: any) => {
    console.log(selected, "selected");

    const fullObject = options
      .map((ele) => {
        return {
          ...ele,
          label: ele[fieldName],
          value: ele[valueName],
        };
      })
      .find((option) => option[valueName] === selected.value);

    console.log("Full Selected Object:", fullObject);
    if (onChange) {
      onChange(fullObject); // Pass the entire object to the parent
    }
  };

  return (
    <div className="mb-2 mt-4">
      <ConfigProvider
        theme={{
          components: {
            Select: {
              zIndexPopup: 9999,
            },
          },
        }}
      >
        <div className="w-100" style={{ width: "100%" }}>
          <Select
            placeholder={Placeholder}
            value={value}
            onChange={handleSelect}
            // labelInValue={true}
            autoFocus={autoFocus}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              width: "100%",
              height: "38px",
              fontSize: "14px",
              fontFamily: "var(--regular)",
              borderRadius: "6px",
              border: `1px solid ${
                isFocused ? getThemeColors.primaryColor : "rgb(63, 63, 63)"
              }`,
              // ...style,
            }}
            options={options.map((opt) => {
              return {
                ...opt,
                label: opt[fieldName],
                value: opt[valueName],
              };
            })}
            size={size}
            allowClear={allowClear}
            className={className}
            // mode={mode}
            disabled={disabled}
            loading={loading}
            showSearch={showSearch}
            suffixIcon={
              <RightOutlined
                style={{
                  color: getThemeColors.isMode ? "black" : "white",
                  fontSize: "14px",
                  transform: "rotate(90deg)",
                }}
              />
            }
          />
        </div>
        <style>{`

        :where(.css-dev-only-do-not-override-w92l2h).ant-select-outlined:not(
    .ant-select-customize-input
  )
  .ant-select-selector {
    border-color: ${
      isFocused ? getThemeColors.primaryColor : "rgb(63, 63, 63)"
    };
  background: transparent;
  color: ${getThemeColors.isMode ? "black" : "white"} !important;
}

:where(.css-dev-only-do-not-override-w92l2h).ant-select-outlined:not(
    .ant-select-customize-input
  )
  .ant-select-selector {
  border: none;
}



.ant-select-selection-item{
 color: ${getThemeColors.isMode ? "black" : "white"} !important;
}

        :where(
        .css-dev-only-do-not-override-thsd5k
        ).ant-select-single.ant-select-show-arrow
        .ant-select-selection-item {
            color: ${getThemeColors.isMode ? "black" : "white"} !important
        }


         .ant-select-focused:where(
    .css-dev-only-do-not-override-thsd5k
  ).ant-select-outlined:not(.ant-select-disabled):not(
    .ant-select-customize-input
  ):not(.ant-pagination-size-changer)
  .ant-select-selector {
  box-shadow: none;
   border-color: rgb(63, 63, 63)
}

         .ant-select .ant-select-selection-placeholder {
            color:${
              getThemeColors.isMode
                ? "rgb(153, 144, 144)"
                : "rgb(148, 133, 133)"
            } 
        }



       :where(.css-dev-only-do-not-override-thsd5k).ant-select-outlined:not(
    .ant-select-disabled
  ):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover
  .ant-select-selector {
  border-color: rgb(63, 63, 63);
    color: ${getThemeColors.isMode ? "black" : "white"} !important;
}  
         

:where(.css-dev-only-do-not-override-d7ggsd).ant-select-single
  .ant-select-selector {
  color: ${getThemeColors.isMode ? "black" : "white"}
}




      :where(.css-dev-only-do-not-override-thsd5k).ant-select-outlined:not(
            .ant-select-disabled
          ):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover
          .ant-select-selector {
             border-color:  rgb(63, 63, 63) !important;
          } 

:where(.css-dev-only-do-not-override-w92l2h).ant-select-outlined:not(
    .ant-select-disabled
  ):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover
  .ant-select-selector {
  border-color: rgb(63, 63, 63);
}

            

   


        `}</style>
      </ConfigProvider>
    </div>
  );
};

export default CustomDropdown;
