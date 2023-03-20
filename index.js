const Percentage = document.querySelector(".Percentage");
const volume = document.querySelector(".volume");
const get = document.querySelector(".get");
function displayPercenteage() {
  dt1 = new Date("March 20, 2023 15:30:00");
  dt2 = new Date();
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  const tim = Math.abs(Math.round(diff));
  const checkPercentage = (tim * (1 / 60) + 5).toFixed(2);

  return checkPercentage;
}
function displayVolume() {
  dt1 = new Date("March 20, 2023 15:30:00");
  dt2 = new Date();
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60;
  const tim = Math.abs(Math.round(diff));

  const checkVolume = (tim * (1000000 / 390)).toFixed(0);
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
get.onclick = display();
document.onload = display();