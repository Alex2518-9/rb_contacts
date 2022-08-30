import HighLightText from "../components/highlightText/HightLightText";

export const highLightText = (text, search) => {
  if (search.length > 0) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const part = text.substring(i, i + search.length);
      if (part === search) {
        const up = part.toUpperCase();
        result += up;
        i += search.length - 1;
      } else {
        result += text[i];
      }
    }
    return result;
  } else {
    
    // return text;
  }
};
