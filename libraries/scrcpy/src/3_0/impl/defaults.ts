import { omit } from "../../utils/index.js";

import type { Init } from "./init.js";
import { CaptureOrientation } from "./init.js";
import { PrevImpl } from "./prev.js";

export const Defaults = /* #__PURE__ */ (() =>
    ({
        ...omit(PrevImpl.Defaults, "lockVideoOrientation"),
        captureOrientation: CaptureOrientation.Unlocked,
        angle: 0,
        screenOffTimeout: undefined,
        listApps: false,
        newDisplay: undefined,
        vdSystemDecorations: true,
    }) as const satisfies Required<Init>)();