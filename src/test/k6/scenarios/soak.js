import {e2eFlow} from "../flows/e2e.js";
import thresholds from "../config/thresholds.js";

export const options = {
    thresholds,
    scenarios: {
        soak: {
            executor: "constant-vus",
            vus: 100,
            duration: "4h"
        }
    }
};

export default function () {
    return e2eFlow();
}
