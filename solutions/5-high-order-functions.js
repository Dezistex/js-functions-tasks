import _ from 'lodash';

const takeOldest = (users, n = 1) => {
  const sorted = _.sortBy(users, (u) => Date.parse(u.birthday));
  return sorted.slice(0, n);
};

export default takeOldest;
