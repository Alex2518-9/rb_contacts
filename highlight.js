const text = "bleveragei";
let indexes = [];
const searchBar = "ve";

for (let index = 0; index < text.length; index++) {
  if (searchBar.length === 1) {
    if (text[index].includes(searchBar[0])) {
      indexes.push(index);
    }
  } else if (searchBar.length > 1) {
    for (let j = 0; j < searchBar.length; j++) {
      if (text[index].includes(searchBar[j])) {
        indexes.push(index);
        index++;
      } else {
        break;
      }
    }
  } else {
    console.log("Pls tipe something to find something.");
    break;
  }
}

// const change = () => {
//     const text = "bleveragei";
//     const changedText = setCharAt(text,indexes.values,'a');
//     console.log(changedText);
// }

// function setCharAt(str,index = [],chr) {
//     if(index > str.length-1) return str;
//     return str.substring(st,index) + chr + str.substring(index+1);
// }

console.log(indexes);
