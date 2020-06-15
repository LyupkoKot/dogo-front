import { MONTHS } from './constants'

export const parseJwt = (token) => {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''))

  return JSON.parse(jsonPayload)
}

export const transformDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate()<10 ? `0${date.getDate()}` : date.getDate();
  const month = MONTHS[date.getMonth()];
  return `${day} ${month}`
}

export const replacePolish = input => {
  return input.replace(/ą/g, 'a').replace(/Ą/g, 'A')
  .replace(/ć/g, 'c').replace(/Ć/g, 'C')
  .replace(/ę/g, 'e').replace(/Ę/g, 'E')
  .replace(/ł/g, 'l').replace(/Ł/g, 'L')
  .replace(/ń/g, 'n').replace(/Ń/g, 'N')
  .replace(/ó/g, 'o').replace(/Ó/g, 'O')
  .replace(/ś/g, 's').replace(/Ś/g, 'S')
  .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
  .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
}
