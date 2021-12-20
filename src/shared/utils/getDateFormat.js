import { format, addHours } from 'date-fns';

export function getDateFormat(value) {
  const finishTime = format(addHours(new Date(value), 1), 'h aaa');
  const formatDate = format(new Date(value), 'ccc MMM dd, yyyy h aaa');
  return `${formatDate} - ${finishTime}`;
}
