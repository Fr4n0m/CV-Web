export function getMonthName(monthIndex: number): string {
  const months = [
    "ene.",
    "feb.",
    "mar.",
    "abr.",
    "may.",
    "jun.",
    "jul.",
    "ago.",
    "sep.",
    "oct.",
    "nov.",
    "dic.",
  ];
  return months[monthIndex] || "";
}

export function formatDateRange(
  startDate: string,
  endDate: string | null
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;

  const startMonth = getMonthName(start.getMonth());
  const startYear = start.getFullYear();
  const endMonth = end ? getMonthName(end.getMonth()) : "";
  const endYear = end ? end.getFullYear() : "Actual";

  return end
    ? `${startMonth} ${startYear} - ${endMonth} ${endYear}`
    : `${startMonth} ${startYear} - Actual`;
}
