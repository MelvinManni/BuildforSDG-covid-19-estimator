export const timeToElapse = (data) => {
  let period;

  if (data.periodType === 'days') {
    period = data.timeToElapse;
  } else if (data.periodType === 'weeks') {
    period = data.timeToElapse * 7;
  } else {
    period = data.timeToElapse * 30;
  }

  return period;
};

export const estimateNumberOfInfected = (data) => {
  let factor;

  if (data.periodType === 'days') {
    factor = Math.trunc(data.timeToElapse / 3);
  } else if (data.periodType === 'weeks') {
    factor = Math.trunc((data.timeToElapse * 7) / 3);
  } else {
    factor = Math.trunc((data.timeToElapse * 30) / 3);
  }

  return 2 ** factor;
};
