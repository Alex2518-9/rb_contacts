export const highLightText = (text, search) => {
  if (search.length === 0) {
    return [text];
  }
  let result = [];
  let highlight = true;
  for (let i = 0; i < text.length; i++) {
    const part = text.substring(i, i + search.length);
    if (part.toLowerCase() === search.toLowerCase()) {
      const up = part.toUpperCase();
      result.push({char: up, highlight});
      i += search.length - 1;
    } else {
      result.push({char: text[i], higlight:!highlight});
    }
  }
  console.log(result);
  return result;
  
};
