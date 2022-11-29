export function validateProb(val: number) {
  if (val < 0 || val > 1)
    throw new Error('Probability must be between 0 and 1.')
  return val
}
