const five = require('johnny-five');
const Tessel = require('tessel-io');

module.exports = {
  interface: require('./interfaces/LCDButtons'),
  board: new five.Board({
    io: new Tessel()
  }),
  pins: {
    goBtn: 'b2',
    otherBtn: 'a6',
    downBtn: 'b6',
    upBtn: 'b7',
    led: 'b5',
    metaBtn: 'a5',
    lcd: ['a0', 'a1', 'a2', 'a3', 'a4', 'a7']
  }
};
