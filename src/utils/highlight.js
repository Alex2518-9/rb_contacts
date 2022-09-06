export const highLightText = (text, search) => {
  if (search.length === 0) {
    return [{ part: text, highlight: false }];
  }
  let result = [];

  // divorce the input data
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

  // merge the final array
  let final = [...result[0]];
  for (let i = 1; i < result.length; i++) {
    for (let j = 0; j < final.length; j++) {
      if (result[i][j].highlight) {
        final[j] = result[i][j];
        // final.splice(j, 1, result[i][j]);
      }
    }
  }

  let finalResult = [];
  let highlight = final[0].highlight;
  let chunk = final[0].part;

  for (let i = 1; i < final.length; i++) {
    if (final[i].highlight === highlight) {
      chunk += final[i].part;
    } else {
      finalResult.push({ part: chunk, highlight });
      chunk = final[i].part;
      highlight = !highlight;
    }
  }
  finalResult.push({ part: chunk, highlight });

  return finalResult;
};
