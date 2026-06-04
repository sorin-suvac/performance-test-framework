import {e2eFlow} from "../flows/e2e.js";
import thresholds from "../config/thresholds.js";

export const options = {
    thresholds,
    scenarios: {
        stress: {
            executor: "ramping-vus",
            startVUs: 10,
            stages: [
                {duration: "2m", target: 100},
                {duration: "5m", target: 300},
                {duration: "5m", target: 500},
                {duration: "5m", target: 1000}
            ]
        }
    }
};

export default function () {
    return e2eFlow();
}
