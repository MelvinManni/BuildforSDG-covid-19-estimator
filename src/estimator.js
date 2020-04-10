import impactEstimator from './impact';
import severeImpactEstimator from './severeImpact';

const covid19ImpactEstimator = (data) => ({
  data: { ...data },
  impact: impactEstimator(data),
  severeImpact: severeImpactEstimator(data)
});

export default covid19ImpactEstimator;
