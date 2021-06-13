import * as React from "react";
import css from "./index.module.scss";

import BasicDemo from "../components/BasicDemo";
import { parseBody } from "next/dist/next-server/server/api-utils";

const Home: React.FC = () => {
  React.useEffect(() => {
    let touchStartX: number;
    let touchStartY: number;

    let touchEndX: number;
    let touchEndY: number;

    const getStartCoordinate = (e: TouchEvent) => {
      const touchObj = e.changedTouches[0];
      touchStartX = touchObj.pageX;
      touchStartY = touchObj.pageY;
    };

    const getEndCoordinate = (e: TouchEvent) => {
      const touchObj = e.changedTouches[0];
      touchEndX = touchObj.pageX;
      touchEndY = touchObj.pageY;
    };

    // 角度を計算
    const calcDegree = (x1, y1, x2, y2) => {
      const radian = Math.atan2(y2 - y1, x2 - x1);
      return radian * (180 / Math.PI);
    };

    // 上下左右の方向が曖昧なスクロールを禁止
    const limitSwipe = (e: TouchEvent) => {
      getEndCoordinate(e);
      const degree = calcDegree(touchStartX, touchStartY, touchEndX, touchEndY);
      const degreeAbs = Math.abs(degree);
      if (degreeAbs >= 30 && degreeAbs <= 60) {
        e.stopImmediatePropagation();
      } else if (degreeAbs >= 120 && degreeAbs <= 150) {
        e.stopImmediatePropagation();
      }
      console.log(`degree: ${degree}`);
    };

    if (process.browser) {
      const body = document.querySelector("body");
      const next = document.getElementById("index_container");

      next.addEventListener("touchstart", getStartCoordinate, {
        passive: false,
      });
      next.addEventListener("touchend", limitSwipe);
      return () => {};
    }
  });
  return (
    <div className={css.container} id={"index_container"}>
      <BasicDemo></BasicDemo>
    </div>
  );
};

export default Home;
