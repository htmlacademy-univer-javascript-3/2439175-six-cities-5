export function convertRatingToWidth(rating: number): string {
  return `${rating * 20}%`;
}

export function getMonthAndYear(date: Date): string {
  return date.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

export function formatDateToYMD(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
