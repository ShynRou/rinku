const n2w = require('number-to-words');

module.exports = (input, request) => {
  let date = new Date();

  let h = date.getHours();
  h = h === 0 ? 12 : (h - 1) % 12 + 1;
  let m = date.getMinutes();

  return request.reply({
    data: date.getTime(),
    text: date.toLocaleTimeString(),
    speech: `It's ${n2w.toWords(m)} past ${n2w.toWords(h)}`
  });
};