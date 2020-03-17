// from https://stackoverflow.com/a/35447370/4298274
const leadingZero = num => `0${num}`.slice(-2);

export const parseTimeToString = date =>
  [date.getHours(), date.getMinutes()].map(leadingZero).join(':');

export const parseDateToString = (rawDate, withTime) => {
  const date = new Date(rawDate);
  let formattedDate = date.getFullYear();
  formattedDate += `-${[date.getMonth() + 1, date.getDate()]
    .map(leadingZero)
    .join('-')}`;
  if (withTime) {
    formattedDate += ` ${parseTimeToString(date)}`;
  }
  return formattedDate;
};