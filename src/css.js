const string = `*,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*
 * 首先，准备哆啦A梦的背景
 */
.doraemon {
  background: rgb(212, 236, 249);
  position: relative;
  height: 100vh;
  z-index: -3;
}
/*
 * 画哆啦A梦的脸
 */
.doraemon .face {
  border: 4px solid black;
  width: 330px;
  height: 313px;
  position: absolute;
  left: 50%;
  margin-left: -165px;
  top: 70px;
  border-radius: 50%;
  background: rgb(1, 159, 233);
}
.doraemon .face .smallface {
  width: 290px;
  height: 267px;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  bottom: 3px;
  left: 50%;
  margin-left: -145px;
  background: white;
}
/*
 * 然后是鼻子
 */
.doraemon .face .nose {
  width: 33px;
  height: 33px;
  border: 2px solid black;
  position: absolute;
  left: 50%;
  margin-left: -16.5px;
  top: 66px;
  border-radius: 50%;
  background: red;
}
.doraemon .face .nose::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  position: absolute;
  left: 5px;
  top: 3px;
}
/*
 * 接下来是眼睛
 */
.doraemon .face .eye {
  width: 64px;
  height: 80px;
  border: 2px solid black;
  position: absolute;
  left: 50%;
  margin-left: -32px;
  top: 2.6px;
  background: white;
  border-radius: 50%;
}
.doraemon .face .eye.left {
  transform: translateX(-32px);
}
.doraemon .face .eye.right {
  transform: translateX(32px);
}
/*
 * 这个是眼珠
 */
.doraemon .face .eye .eyeball {
  width: 26px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  bottom: 12px;
  left: 2px;
  background: black;
}
@keyframes scroll {
  0% {
    bottom: 12px;
    left: 2px;
  }
  25% {
    bottom: 5px;
    left: 8px;
  }
  50% {
    bottom: 10px;
    left: 18px;
  }
  100% {
    bottom: 12px;
    left: 2px;
  }
}
.doraemon .face .eye .eyeball::before {
  content: "";
  display: block;
  width: 8.6px;
  height: 8.6px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 8px;
}
.eye .eyeball {
  animation: scroll 4s ease infinite alternate;
}
/*
 * 哆啦A梦的嘴巴
 */
.doraemon .face .mouth {
  width: 200px;
  height: 66px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 190px;
  overflow: hidden;
}
.doraemon .face .mouth > .smile {
  width: 213px;
  height: 186px;
  border: 3px solid black;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -106.5px;
  border-radius: 50%;
}
.doraemon .face .line {
  border: 2px solid black;
  width: 154px;
  height: 0;
  position: absolute;
  left: 50%;
  margin-left: -77px;
  top: 174px;
  transform: rotate(90deg);
}
/*
 * 接下来是胡子
 */
.doraemon .face .moustache {
  width: 120px;
  height: 100px;
  position: absolute;
  left: 50%;
  margin-left: -60px;
  top: 66.66px;
}
.doraemon .face .moustache.left {
  transform: translateX(-66.66px);
}
.doraemon .face .moustache.right {
  transform: translateX(66.66px);
}
.doraemon .face .moustache .up {
  position: absolute;
  border: 1.5px solid black;
  width: 95px;
  top: 26.66px;
}
.doraemon .face .moustache.left .up {
  transform: rotate(15deg);
  right: 17px;
}
.doraemon .face .moustache.right .up {
  transform: rotate(-15deg);
  left: 17px;
}
.doraemon .face .moustache .mid {
  position: absolute;
  border: 1.5px solid black;
  width: 95px;
  top: 46.66px;
}
.doraemon .face .moustache.left .mid {
  right: 16px;
}
.doraemon .face .moustache.right .mid {
  left: 16px;
}
.doraemon .face .moustache .down {
  position: absolute;
  border: 1.5px solid black;
  width: 95px;
  top: 76.66px;
}
.doraemon .face .moustache.left .down {
  transform: rotate(-18deg);
  right: 17px;
}
.doraemon .face .moustache.right .down {
  transform: rotate(18deg);
  left: 17px;
}
/*
 * 接下来是项链
 */
.doraemon .face .necklace {
  width: 190px;
  height: 22px;
  border: 3px solid black;
  position: absolute;
  left: 50%;
  margin-left: -95px;
  bottom: -3px;
  border-radius: 20px;
  background: red;
}
/*
 * 铃铛
 */
.necklace .bell {
  border: 3px solid black;
  width: 33px;
  height: 33px;
  position: absolute;
  left: 50%;
  margin-left: -16.5px;
  top: -8px;
  border-radius: 50%;
  background: rgb(236, 200, 26);
  animation: wave 500ms infinite linear;
  transform-origin: center top;
}
.necklace .bell::before {
  border: 2px solid black;
  content: "";
  display: block;
  width: 36px;
  height: 6.66px;
  position: absolute;
  left: 50%;
  margin-left: -18px;
  top: 4px;
  border-radius: 5px;
  background: rgb(236, 200, 26);
}
.necklace .bell .hole {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: black;
  position: absolute;
  top: 12px;
  left: 8px;
}
.necklace .bell .hole::before {
  content: "";
  display: block;
  border: 1px solid black;
  width: 12px;
  position: absolute;
  top: 100%;
  transform: rotate(90deg);
  left: -1px;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(8deg);
  }
  75% {
    transform: rotate(-8deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.fly {
  width: 8px;
  height: 20px;
  border: 2px solid black;
  background: rgb(236, 200, 26);
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -4px;
}
.fly .wrapper {
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 100%;
  left: 50%;
  margin-left: -15px;
  overflow: hidden;
}
.fly .wrapper .hat {
  width: 30px;
  height: 30px;
  border: 2px solid black;
  background: rgb(221, 186, 9);
  position: absolute;
  border-radius: 50%;
  bottom: -60%;
}
@keyframes fly {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.fly .rot {
  border: 1px solid black;
  background: rgb(221, 186, 9);
  position: absolute;
  width: 150px;
  height: 5px;
  top: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 10px;
  animation: fly 200ms infinite linear;
}
/*
 * 这是胳膊
 */
.face .arm {
  z-index: -2;
  width: 100px;
  height: 120px;
  position: absolute;
  border: 2px solid black;
  border-radius: 50%;
  left: 50%;
  margin-left: -50px;
  bottom: -10px;
  background: rgb(1, 159, 233);
}
.face .arm.left {
  transform: translateX(-100px) rotate(-40deg);
}
.face .arm.right {
  transform: translateX(100px) rotate(40deg);
}
/*
 * 小圆手
 */
.face .arm::before {
  content: "";
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  background: white;
  border: 2px solid black;
  border-radius: 50%;
  top: -45px;
}
.face .arm.left::before {
  left: -15px;
}
.face .arm.right::before {
  right: -15px;
}
/*
 *这只哆啦A梦送给你
 */
`;
export default string;
