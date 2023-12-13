export class Timestamp {
  getDateFromTimestamp(timestamp: number | null) {
    const date = new Date(timestamp as number);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  }
}
