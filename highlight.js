const text = "bleveragei";
let indexes = [];
const searchBar = "ev";
let highlight = "";
let newText = "";

for (let index = 0; index < text.length; index++) {
  if (searchBar.length === 1) {
    if (text[index].includes(searchBar[0])) {
      indexes.push(index);
    //   // highlight += text[index];
    //   // newText = text.substring(0, indexes[0]) +  highlight.toUpperCase() + text.substring(indexes[0] + highlight.length);

    }
  } else if (searchBar.length > 1) {
    for (let j = 0; j < searchBar.length; j++) {
      if (text[index].includes(searchBar[j])) {
        indexes.push(index);
        // highlight += text[indexes[j]];
        // newText = text.substring(0, indexes[0]) + highlight.toUpperCase() + text.substring(indexes[0] +highlight.length);
        j++;

      } else {
        break;
      }
    }
  } else {
    console.log("Pls tipe something to find something.");
    break;
  }
}



  for (let i = 0; i < searchBar.length; i++) {
    
    highlight += text[indexes[i]];
    newText = text.substring(0, indexes[0]) + highlight.toUpperCase() + text.substring(indexes[0] + highlight.length);
  }



console.log(highlight);
console.log(newText);
console.log(indexes);

// const replacement = text.substring(0, [indexes]);
// const change = () => {
//     const text = "bleveragei";
//     const changedText = setCharAt(text,indexes.values,'a');
//     console.log(changedText);
// }

// function setCharAt(str,index = [],chr) {
//     if(index > str.length-1) return str;
//     return str.substring(st,index) + chr + str.substring(index+1);
// }



