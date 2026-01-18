export function toTime(t: any): number {
  if (!t) return 0;
  if (t.date) {
    const d = Date.parse(t.date);
    if (!Number.isNaN(d)) return d;
  }
  return 0;
}

export function sortByDateDesc(list: any[]) {
  return [...(list || [])].sort((a, b) => toTime(b) - toTime(a));
}

export function latestN(list: any[], n = 3) {
  return sortByDateDesc(list).slice(0, n);
}
