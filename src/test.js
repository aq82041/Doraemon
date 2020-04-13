import string from "./css.js";

const player = {
  id: undefined, //在外边相当于先声明一个id
  n: 1,
  time: 30,
  init: () => {
    player.bindEvents();
    player.play();
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  bindEvents: () => {
    for (let key in player.events) {
      //有可能遍历到继承来的属性，所以先判断
      if (player.events.hasOwnProperty(key)) {
        let value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    demo1.innerText = string.substring(0, player.n);
    demo2.innerHTML = string.substring(0, player.n);
    demo1.scrollTop = demo1.scrollHeight;
    player.n += 1;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 30;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
