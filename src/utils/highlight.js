export const highLightText = (text, search) => {
  if (search.length === 0) {
    return [{ part: text, highlight: false }];
  }
  let result = [];
  for (let i = 0; i < text.length; i++) {
    const part = text.substring(i, i + search.length);
    if (part.toLowerCase() === search.toLowerCase()) {
      result.push({ part, highlight: true });
      i += search.length - 1;
    } else {
      result.push({ part: text[i], highlight: false });
    }
  }
  console.log(result);
  return result;
};
