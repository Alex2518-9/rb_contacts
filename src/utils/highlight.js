export const highLightText = (text, search) => {
  if (search.length === 0) {
    return [{ part: text, highlight: false }];
  }
  let result = [];
  let final = [];
  for (const word of search) {
    const arr = [];
    for (let i = 0; i < text.length; i++) {
      const part = text.substring(i, i + word.length);
      if (part.toLowerCase() === word.toLowerCase()) {
        if (part.length > 0) {
          for (const char of part) {
            arr.push({ part: char, highlight: true });
          }
        } else {
          arr.push({ part, highlight: true });
        }
        i += word.length - 1;
      } else {
        arr.push({ part: text[i], highlight: false });
      }
    }
    final = {...arr[0]}
    result.push(arr);
  }

  console.log(text);
  console.log(result);

  return result;
};
