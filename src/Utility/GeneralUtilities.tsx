export const getSubStringText = (text = "", txtLength = 15) => {
  if (text) {
    return text.length > txtLength
      ? text.substring(0, txtLength) + "..."
      : text;
  }
  return "";
};
