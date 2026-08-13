export function hoursUnit(hours: number) {
  return hours === 1 ? "hr" : "hrs";
}

export function formatHours(hours: number) {
  return `${hours}${hoursUnit(hours)}`;
}
