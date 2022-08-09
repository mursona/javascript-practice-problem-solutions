function feetToMile(feet) {
    const mile = feet / 5280;
    const mileFixed = mile.toFixed(2);
    return mileFixed;
  }
  let feet = 100000;
  let fToM = feetToMile(feet);
  console.log(fToM);