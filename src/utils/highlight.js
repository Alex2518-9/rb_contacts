export const highLightText = (text, search) => {
  if (search.length === 0) {
    return [{ part: text, highlight: false }];
  }
  let result = [];

  for (const word of search) {
    const divorcedArray = [];
    for (let i = 0; i < text.length; i++) {
      const part = text.substring(i, i + word.length);
      if (part.toLowerCase() === word.toLowerCase()) {
        if (part.length > 0) {
          for (const char of part) {
            divorcedArray.push({ part: char, highlight: true });
          }
        } else {
          divorcedArray.push({ part, highlight: true });
        }
        i += word.length - 1;
      } else {
        divorcedArray.push({ part: text[i], highlight: false });
      }
    }

    result.push(divorcedArray);
  }
  // console.log(text);
  // console.log(result);

  let final = [...result[0]];
  for (let i = 1; i < result.length; i++) {
    for (let j = 0; j < final.length; j++) {
      if (result[i][j].highlight) {
        final[j] =  result[i][j];
        // final.splice(j, 1, result[i][j]);
      }
    }
  }
  // console.log(final);
  return final;
};
