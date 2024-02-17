export const getFirstLine = (text) => {
  if (!text) return "";
  return text.length > 50 ? text.substring(0, 100) + "..." : text;
};
