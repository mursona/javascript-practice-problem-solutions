function centimeterToMeter(centimeter) {
  const meter = centimeter/100;
  return meter;
}
let centimeter = 1000;
let cToM = centimeterToMeter(centimeter);
console.log(cToM);