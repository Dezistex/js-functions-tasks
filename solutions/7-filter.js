const getGirlFriends = (users) =>
  users.flatMap((user) => user.friends).filter((f) => f.gender === 'female');

export default getGirlFriends;
