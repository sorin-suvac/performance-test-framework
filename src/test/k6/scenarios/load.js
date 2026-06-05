import {e2eFlow} from "../flows/e2e.js";
import thresholds from "../config/thresholds.js";

export const options = {
    thresholds,
    scenarios: {
        load: {
            executor: "ramping-arrival-rate",
            startRate: 10,
            timeUnit: "1s",
            preAllocatedVUs: 50,
            maxVUs: 300,
            stages: [
                {target: 50, duration: "2m"},
                {target: 100, duration: "5m"},
                {target: 100, duration: "10m"},
                {target: 0, duration: "2m"}
            ]
        }
    }
};

export function exec() {
    e2eFlow();
}
