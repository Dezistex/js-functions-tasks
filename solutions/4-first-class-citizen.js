const run = (text) => {
  const takeLast = (str, n) => {
    if (!str || str.length < n) return null;
    return str.slice(-n).split('').reverse().join('');
  };

  return takeLast(text, 4);
};

export default run;
