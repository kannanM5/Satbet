// const Captcha = ({ captchaData }) => {
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [captchaError, setCaptchaError] = useState("");

//   // Construct image source from Base64
//   const captchaSrc = `data:image/png;base64,${captchaData.captchaImage}`;

//   const handleInputChange = (e) => {
//     setCaptchaInput(e.target.value);
//   };

//   const handleSubmit = async () => {
//     const payload = {
//       captchaToken: captchaData.captchaToken,
//       userInput: captchaInput,
//     };

//     try {
//       const response = await fetch("/api/verify-captcha", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.json();
//       if (result.success) {
//         alert("Captcha validated successfully!");
//         setCaptchaError("");
//       } else {
//         setCaptchaError("Invalid Captcha. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error validating captcha:", error);
//       setCaptchaError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       <h3>Please complete the captcha</h3>
//       <img src={captchaSrc} alt="Captcha" />
//       <div>
//         <input
//           type="text"
//           placeholder="Enter Captcha"
//           value={captchaInput}
//           onChange={handleInputChange}
//           style={{
//             marginTop: "10px",
//             padding: "8px",
//             borderRadius: "4px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <button
//           onClick={handleSubmit}
//           style={{
//             marginLeft: "10px",
//             padding: "8px 16px",
//             borderRadius: "4px",
//             backgroundColor: "#007BFF",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//           }}
//         >
//           Submit
//         </button>
//       </div>
//       {captchaError && (
//         <div style={{ color: "red", marginTop: "10px" }}>{captchaError}</div>
//       )}
//     </div>
//   );
// };

// export default Captcha;
