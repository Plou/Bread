export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'fr-FR',
) => {
  const date = new Date(dateStr);
  
  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit'
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};
export const formatRelativeDay = (
  dateStr: string,
  baseDateStr: string,
) => {

  const date = new Date(dateStr);
  const baseDate = new Date(baseDateStr);

  const relativeDay = Math.floor((date.getTime() - baseDate.getTime()) / 1000 / 3600 / 24);

  return relativeDay;
};