
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;


let newIndexString = `${text[12]}${text[6]}${text[18]}${text[25]}`;
console.log(newIndexString);


let lowerCaseText = text.toLowerCase();
console.log(lowerCaseText);


let positions = [];
let searchStr = 'in';
let index = text.indexOf(searchStr);
while (index !== -1) {
    positions.push(index);
    index = text.indexOf(searchStr, index + 1);
}
console.log(positions);


let wordsArray = text.split(' ');
console.log(wordsArray);


let invertedText = text.split('').reverse().join('');
console.log(invertedText);


function ucFirst(txt) {
    let newTxt = txt.charAt(0).toUpperCase() + txt.slice(1);
    return newTxt;
}
console.log(ucFirst('some text'));
