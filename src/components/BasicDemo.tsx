import "rmc-tabs/assets/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Tabs, DefaultTabBar } from "rmc-tabs";

import css from "./BasicDemo.module.scss";

const tabData = [
  { key: "t1", title: "title 1" },
  { key: "t2", title: "title 2" },
  { key: "t3", title: "title 3" },
];

class BasicDemo extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      scData: JSON.stringify({ index: 0, tab: { title: "t1" } }),
      scData2: JSON.stringify({ index: 1, tab: { title: "t2" } }),
      dynamicTabs: [] as { title: string }[],
    };
  }

  render() {
    const baseStyle = {
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
      marginBottom: 10,
      fontSize: 14,
    } as React.CSSProperties;

    return (
      <div>
        <div style={{ ...baseStyle }}>
          <Tabs
            tabs={tabData}
            useOnPan={false}
            onChange={(tab, index) => {
              this.setState({
                scData: JSON.stringify({ index: index + Math.random(), tab }),
              });
            }}
            renderTabBar={(props) => <DefaultTabBar {...props} page={3} />}
            destroyInactiveTab={true}
            tabBarActiveTextColor={"#917100"}
            tabBarUnderlineStyle={{ border: "1px #dbab00 solid" }}
            tabBarTextStyle={{ color: "#666666" }}
          >
            <div style={{ padding: 10, background: "#ADFFD7", height: 1000 }}>
              <p>single content</p>
              <p>{this.state.scData}</p>
              <p>single content</p>
              <p>single content</p>
              <p>single content</p>
              <p>main content</p>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default BasicDemo;
