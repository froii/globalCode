
const safeMod = (val: number, n: number): number => ((val % n) + n) % n;

export function hasSingleCycle(array: number[]): boolean {
  const seen: Set<number> = new Set();
  const n: number = array.length;
  let p: number = 0;

  while (!seen.has(p)) {
    seen.add(p);
    p = safeMod(p + array[p], n);
  }

  return (seen.size === n && p === 0);
}