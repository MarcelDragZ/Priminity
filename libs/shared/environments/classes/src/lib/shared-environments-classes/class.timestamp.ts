export class Timestamp {
  getDateFromTimestamp(timestamp: string | number | null) {
    const date = new Date(timestamp as number);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  }

  getTimeFromTimestamp(timestamp: string | number | null) {
    const date = new Date(timestamp as number);

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  getIsoDateFromTimestamp(timestamp: string | number | null) {
    const date = new Date(timestamp as number);
    const pad = (num: number) => (num < 10 ? `0${num}` : num.toString());
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate(),
    )}`;
  }

  getTimestampFromDate(date: string | number | null) {
    return new Date(date as string).getTime();
  }

  getWednesdayInTwoWeeks() {
    const today = new Date();
    const daysUntilNextWednesday = (3 - today.getDay() + 7) % 7;

    const wednesdayInTwoWeeks = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + daysUntilNextWednesday + 14,
    );

    return wednesdayInTwoWeeks.getTime();
  }

  getWednesdayInOneWeek() {
    const today = new Date();
    const daysUntilNextWednesday = (3 - today.getDay() + 7) % 7;

    const wednesdayInTwoWeeks = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + daysUntilNextWednesday + 7,
    );

    return wednesdayInTwoWeeks.getTime();
  }

  getNextWednesday() {
    const today = new Date();
    const daysUntilNextWednesday = (3 - today.getDay() + 7) % 7;

    const wednesdayInTwoWeeks = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + daysUntilNextWednesday,
    );

    return wednesdayInTwoWeeks.getTime();
  }
}
