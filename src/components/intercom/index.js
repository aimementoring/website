import React, { PureComponent } from "react";

const APP_ID = process.env.REACT_APP_INTERCOM_APP_ID;

class IntercomChat extends PureComponent {
  componentDidMount() {
    this.intercomChat();
  }

  intercomChat = () => {
    (() => {
      const w = window;
      const ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        // console.log("Loaded");
        const d = document;
        const i = (...args) => {
          i.c(args);
        };
        i.q = [];
        i.c = args => {
          i.q.push(args);
        };
        w.Intercom = i;
        const l = () => {
          const s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/" + APP_ID;
          const x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === "complete") {
          l();
        } else if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();
    window.Intercom('boot', {
      app_id: APP_ID,
      // change 'hide_default_launcher: false' if you want to show the round chat icon in bottom right of screen
      // then go to line 106 and comment that line.
      hide_default_launcher: true,
      custom_launcher_selector: ".intercom-button-nav",
      /*Styles*/
      alignment: "right",
      horizontal_padding: 20,
      vertical_padding: 20,
      background_color: "rgba(255,255,255, 0.7)"
    });
    // window.Intercom("onHide", () => {
      // window.Intercom("shutdown");
    // });
  };

  render() {
    return (
      <span />
    );
  }
}

export default IntercomChat;
