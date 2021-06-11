import "rmc-tabs/assets/index.css";

import React from "react";
import ReactDOM from "react-dom";
import { Tabs, DefaultTabBar } from "rmc-tabs";

import css from "./BasicDemo.module.scss"

const tabData = [
  { title: "title 1" },
  { title: "title 2" },
  { title: "title 3" }
];

class BasicDemo extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      scData: JSON.stringify({ index: 0, tab: { title: "t1" } }),
      scData2: JSON.stringify({ index: 0, tab: { title: "t1" } }),
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
            onChange={(tab, index) => {
              this.setState({
                scData: JSON.stringify({ index: index + Math.random(), tab }),
              });
            }}
            renderTabBar={(props) => <DefaultTabBar {...props} />}
          >
            <div style={{ padding: 10, background: "#ADFFD7", height: 1000 }}>
              <p>single content</p>
              <p>{this.state.scData}</p>
              <p>single content</p>
              <p>single content</p>
              <p>single content</p>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default BasicDemo;