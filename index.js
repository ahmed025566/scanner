const Percentage = document.querySelector(".Percentage");
const volume = document.querySelector(".volume");
const get = document.querySelector(".get");
function displayPercenteage() {
  const today = new Date().getDate();
  const month = new Date().getMonth()+1;
  dt1 = new Date(`${month} ${today}, 2023 15:30:00`);
  dt2 = new Date();
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  const tim = Math.abs(Math.round(diff));
  const checkPercentage = (tim * (1 / 60) + 5).toFixed(2);

  return checkPercentage;
}
function displayVolume() {
  const today = new Date().getDate();
  const month = new Date().getMonth()+1;
  dt1 = new Date(`${month} ${today}, 2023 15:30:00`);
  dt2 = new Date();
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  const tim = Math.abs(Math.round(diff));

  const checkVolume = (tim * (4000000 / 390)).toFixed(0);
  return checkVolume;
}
const resP = displayPercenteage();
const resV = displayVolume();
const display = () => {
    Percentage.innerHTML = "";
    const per = document.createElement("p");
    per.append(document.createTextNode("Requried Percentage is " + resP + "%"));
    Percentage.append(per);
    volume.innerHTML = '';
    const v = document.createElement('p');
    v.append(document.createTextNode("Requried Volume is " + resV + "$$"))
    volume.append(v)
}

document.onload = display();
get.addEventListener('click', () => {
  display();
  
})
