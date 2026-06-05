const groupBy = (arr, prop) =>
  arr.reduce((acc, item) => {
    const key = item[prop];
    return { ...acc, [key]: [...(acc[key] || []), item] };
  }, {});

export default groupBy;
