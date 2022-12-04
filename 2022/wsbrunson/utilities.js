module.exports = {
  splitStringByNewLine: (string) => string.split(/\r?\n/),
  log: (message) => (data) => {
    console.log(message, data);

    return data;
  },
};
