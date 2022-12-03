import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';

export const formatDate = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export const tableDate = date => {
  return format(new Date(date), 'Pp');
};
