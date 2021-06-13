import * as React from "react";
import css from "./index.module.scss";

import BasicDemo from "../components/BasicDemo";

const container = process.browser
  ? document.getElementById("index_container")
  : null;

const Home: React.FC = () => {
  React.useEffect(() => {
    let startCoordinates: { x: number; y: number };
    let endCoordinates: { x: number; y: number };

    const handleTouchStart = (e: TouchEvent) => {
      const touchObj = e.changedTouches[0];
      startCoordinates = { x: touchObj.pageX, y: touchObj.pageY };
    };

    const touchEndStopBubbling = (e: TouchEvent) => {
      const touchObj = e.changedTouches[0];
      endCoordinates = { x: touchObj.pageX, y: touchObj.pageY };

      // touchstartとtouchendの座標からスワイプ角度を計算
      const calcAngle = (startCoordinates, endCoordinates) => {
        const radian = Math.atan2(
          endCoordinates.y - startCoordinates.y,
          endCoordinates.x - startCoordinates.x
        );
        return radian * (180 / Math.PI);
      };
      const angle = Math.abs(calcAngle(startCoordinates, endCoordinates));

      if ((angle >= 15 && angle <= 165)) {
        // スワイプ角度が15°〜165°の場合は資産タブの切り替えを禁止
        // タブ切り替えのイベントへのバブリングをキャンセル
        e.stopPropagation();
      }
      console.log(`angle: ${angle}`);
    };

    if (container) {
      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      container.addEventListener("touchend", touchEndStopBubbling);
    }

    return (): void => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", touchEndStopBubbling);
      }
    };
  });
  return (
    <div className={css.container} id={"index_container"}>
      <BasicDemo></BasicDemo>
    </div>
  );
};

export default Home;
