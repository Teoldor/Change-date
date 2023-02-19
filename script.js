let inputDate = document.querySelector('#date');
let pushButton = document.querySelector('.push');

let str = null;
 
// function dateChange() {
//   text.value = `${newDay}.${newMonth}.${newYear}`;
// }

pushButton.addEventListener('click', () => {
  let newDay = str.slice(0, 2);
  let newMonth = str.slice(2, 4);
  let newYear = str.slice(4);
  inputDate.value = `${newDay}.${newMonth}.${newYear}`
})

inputDate.addEventListener('change',(e)=> {
  str = e.target.value
}) 
