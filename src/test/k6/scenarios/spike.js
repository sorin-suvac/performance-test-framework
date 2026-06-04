import {e2eFlow} from "../flows/e2e.js";
import thresholds from "../config/thresholds.js";

export const options = {
    thresholds,
    scenarios: {
        spike: {
            executor: "ramping-vus",
            startVUs: 10,
            stages: [
                {duration: "1m", target: 50},
                {duration: "30s", target: 1000},
                {duration: "1m", target: 50}
            ]
        }
    }
};

export default function () {
    return e2eFlow();
}
