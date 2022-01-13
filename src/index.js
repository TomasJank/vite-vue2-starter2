import * as components from "./components";

import { createHComponents } from "./install";

export const createHostingerVue = (options = {}) =>
  createHComponents({ components, ...options });
