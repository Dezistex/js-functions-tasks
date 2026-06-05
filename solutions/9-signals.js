import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const getFreeDomainsCount = (emails) =>
  emails.reduce((acc, email) => {
    const domain = email.split('@')[1];
    if (!freeEmailDomains.includes(domain)) return acc;
    return { ...acc, [domain]: (get(acc, domain, 0)) + 1 };
  }, {});

export default getFreeDomainsCount;
