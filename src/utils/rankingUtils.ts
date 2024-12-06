export const calculateOverallScore = (metrics: {
  presence: number;
  visibility: number;
  transparency: number;
  excellence: number;
  impact: number;
  openness: number;
}): number => {
  // Weights based on Webometrics methodology
  const weights = {
    visibility: 0.5,    // 50% weight
    excellence: 0.35,   // 35% weight
    transparency: 0.1,  // 10% weight
    presence: 0.05      // 5% weight
  };

  return (
    metrics.visibility * weights.visibility +
    metrics.excellence * weights.excellence +
    metrics.transparency * weights.transparency +
    metrics.presence * weights.presence
  );
};