import dayjs, { ManipulateType } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/es';

dayjs.extend(utc);
dayjs.extend(timezone);

function getDayjs(date?: string) {
  return dayjs(date).tz('America/Lima').locale('es');
}

export function getDateFromString(date?: string) {
  return getDayjs(date);
}

export function isSunday(date: string) {
  return getDayjs(date).day() === 0;
}

export function isSaturday(date: string) {
  return getDayjs(date).day() === 6;
}

export function addSkippingSunday(
  date: string,
  amount: number,
  unit?: ManipulateType,
) {
  let newDate = getDayjs(date).add(amount, unit);

  while (newDate.day() === 0) {
    newDate = newDate.add(1, 'day');
  }

  return newDate;
}

export function subtractSkippingSunday(
  date: string,
  amount: number,
  unit?: ManipulateType,
) {
  let newDate = getDayjs(date).subtract(amount, unit);

  while (newDate.day() === 0) {
    newDate = newDate.subtract(1, 'day');
  }

  return newDate;
}
