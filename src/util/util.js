function convertDate(date) {
  let output;

  if (date === null) {
    return;
  } else {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    output = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
  }

  return output;
}

function dateCompareTwo(date1, date2) {
  let output;

  const x = new Date(date1);
  const y = new Date(date2);

  const xMilliseconds = x.getTime();
  const yMilliseconds = y.getTime();

  if (xMilliseconds < yMilliseconds) {
    output = true;
  } else {
    output = false;
  }

  return output;
}

export { convertDate, dateCompareTwo };
