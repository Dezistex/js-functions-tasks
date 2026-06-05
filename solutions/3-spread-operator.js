const convert = (...dates) => {
  if (dates.length === 0) return [];
  return dates.map(([year, month, day]) => new Date(year, month, day).toDateString());
};

export default convert;
