export default class Utilits {
  travelTime = (min) => {
    const minuts = min % 60;
    const hour = (min - minuts) / 60;
    return `${this.setZero(hour)}ч ${this.setZero(minuts)}м`;
  };

  departureTime = (val) => {
    const date = new Date(val);

    return `${this.setZero(date.getHours())}:${this.setZero(date.getMinutes())}`;
  };

  arrivalTime = (date1, date2) => {
    const date = new Date(date1);
    const minuts = date2 % 60;
    const hour = (date2 - minuts) / 60;
    date.setHours(date.getHours() + hour);
    date.setMinutes(date.getMinutes() + +minuts);
    return this.departureTime(date);
  };

  setZero = (num) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };

  insertSpace = (str) => {
    const strBegin = str.toString().substring(0, 2);
    const strEnd = str.toString().substring(2);

    return `${strBegin}  ${strEnd}`;
  };

  deleteComma = (arr) => (arr.length ? arr.toString().split(',').join(' ') : null);

  countTransfer = (count) => {
    switch (count.length) {
      case 0:
        return 'без пересадок';
      case 1:
        return '1 пересадка';
      default:
        return `${count.length} пересадки`;
    }
  };
}
