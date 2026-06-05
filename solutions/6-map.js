const getChildren = (users) => users.flatMap((user) => user.children);

export default getChildren;
