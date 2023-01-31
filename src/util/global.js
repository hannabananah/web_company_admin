export const g = {};

g.base_url = 'http://localhost:3001/';
// g.base_url = 'https://admin-api.anychat.com/';

export const dateFormat = (utc) => {
  return utc?.replace(/T/, " ").replace(/\..+/, "").substr(0, 16);
  // return utc
};
// 생년월일 하이픈 적용
export const renderBirth = (birth) => {
  return birth?.replace(/^(\d{4})(\d{2})(\d{2})$/, `$1-$2-$3`);
};
export const dateFormatNoTime = (date) => {
  return date?.replace(/T/, " ").replace(/\..+/, "").substr(0, 10);
  // return date
};
