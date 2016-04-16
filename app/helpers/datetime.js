const _months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

export default function secondsToDateString(seconds) {
  const date = new Date(seconds);
  return `${date.getDate()} ${_months[date.getMonth()]} ${date.getUTCFullYear()}`;
}
