import { estimateNumberOfInfected, timeToElapse } from './utilData';

const impactEstimator = (data) => {
  const impact = {};

  // CHALLENGE-1
  impact.currentlyInfected = data.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * estimateNumberOfInfected(data);
  // CHALLENGE-2
  impact.severeCasesByRequestedTime = Math.trunc(
    impact.infectionsByRequestedTime * 0.15
  );
  impact.hospitalBedsByRequestedTime = Math.trunc(
    data.totalHospitalBeds * 0.35 - impact.severeCasesByRequestedTime
  );
  // CHALLENGE-3
  impact.casesForICUByRequestedTime = Math.trunc(
    impact.infectionsByRequestedTime * 0.5
  );
  impact.casesForVentilatorsByRequestedTime = Math.trunc(
    impact.infectionsByRequestedTime * 0.2
  );
  impact.dollarsInFlight = (impact.infectionsByRequestedTime
      * data.region.avgDailyIncomeInUSD
      * data.region.avgDailyIncomePopulation
      * timeToElapse(data)).toFixed(2);

  return impact;
};

export default impactEstimator;
