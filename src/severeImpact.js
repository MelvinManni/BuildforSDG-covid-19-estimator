import { estimateNumberOfInfected, timeToElapse } from './utilData';

const severeImpactEstimator = (data) => {
  const severeImpact = {};

  // CHALLENGE-1
  severeImpact.currentlyInfected = data.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected
  * estimateNumberOfInfected(data);
  // CHALLENGE-2
  severeImpact.severeCasesByRequestedTime = Math.trunc(
    severeImpact.infectionsByRequestedTime * 0.15
  );
  severeImpact.hospitalBedsByRequestedTime = Math.trunc(
    data.totalHospitalBeds * 0.35 - severeImpact.severeCasesByRequestedTime
  );
  // CHALLENGE-3
  severeImpact.casesForICUByRequestedTime = Math.trunc(
    severeImpact.infectionsByRequestedTime * 0.05
  );
  severeImpact.casesForVentilatorsByRequestedTime = Math.trunc(
    severeImpact.infectionsByRequestedTime * 0.02
  );
  severeImpact.dollarsInFlight = parseFloat(
    (severeImpact.infectionsByRequestedTime
    * data.region.avgDailyIncomeInUSD
    * data.region.avgDailyIncomePopulation
    * timeToElapse(data.periodType, data.timeToElapse)).toFixed(2)
  );

  return severeImpact;
};

export default severeImpactEstimator;
