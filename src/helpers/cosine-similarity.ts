export default function cosineSimilarity(A: number[], B: number[]): number {
  if (A.length !== B.length) {
    throw new Error("Vectors A and B should be of the same length");
  }

  let dotProduct = 0;
  let mA = 0;
  let mB = 0;

  for (let i = 0; i < A.length; i++) {
    dotProduct += A[i] * B[i];
    mA += A[i] * A[i];
    mB += B[i] * B[i];
  }

  mA = Math.sqrt(mA);
  mB = Math.sqrt(mB);

  // Check for zero magnitude
  if (mA === 0 || mB === 0) {
    return 0;
  }

  const similarity = dotProduct / (mA * mB);
  return similarity;
}
