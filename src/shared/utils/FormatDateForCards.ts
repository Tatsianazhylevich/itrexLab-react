import { format, addHours } from 'date-fns';

export function FormatDateForCards(value: string) {
  const finishTime = format(addHours(new Date(value), 1), 'h aaa');
  const formatDate = format(new Date(value), 'ccc MMM dd, yyyy h aaa');
  return `${formatDate} - ${finishTime}`;
}
