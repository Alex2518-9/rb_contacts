export const highLightText = (text, search) => {
  if (search.length === 0) {
    return [{ part: text, highlight: false }];
  }
  let result = [];
  for (let i = 0; i < text.length; i++) {
    for (const word of search) {
      const part = text.substring(i, i + word.length);
      if (part.toLowerCase() === word.toLowerCase()) {
        result.push({ part, highlight: true });
        i += word.length - 1;
      } else {
        result.push({ part: text[i], highlight: false });
      }
    }
  }
  console.log(result);
  return result;
};
