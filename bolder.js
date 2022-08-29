const text = "occurrence";
const search = "e";
let result = "";
let isUp = false;
for (let i = 0; i < text.length; i++) {
  const part = text.substring(i, i + search.length);
  if (part === search) {
    const up = part.toUpperCase();
    result += up;
    isUp = true;
  } else if (isUp === false) {
    result += part[0];
  } else {
    isUp = false;
  }
}

console.log(result);
