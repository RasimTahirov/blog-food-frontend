export const formatHours = (hours: number) => {
  switch (hours) {
    case 1:
      return `${hours} час`;
    case 2:
    case 3:
    case 4:
      return `${hours} часа`;
    case 5:
    case 6:
    case 7:
    case 8:
    case 10:
    case 11:
    case 12:
      return `${hours} часов`;
    default:
      return 'Ошибка';
  }
};
