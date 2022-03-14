import React from "react";

import { createDevTools } from "@redux-devtools/core";

import { LogMonitor } from "@redux-devtools/log-monitor";
import { DockMonitor } from "@redux-devtools/dock-monitor";
import { SliderMonitor } from "@redux-devtools/slider-monitor";

export const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
    defaultIsVisible={true}
  >
    <LogMonitor theme="tomorrow" />
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
);

export default DevTools;
