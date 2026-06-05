import thresholds from "../config/thresholds.js";
import {getAllProductsFlow} from "../flows/get-all-products.js";

export const options = {
    thresholds,
    scenarios: {
        spike: {
            executor: "ramping-vus",
            startVUs: 10,
            stages: [
                {duration: "2m", target: 50},
                {duration: "30s", target: 1000},
                {duration: "2m", target: 50}
            ]
        }
    }
};

export function exec() {
    getAllProductsFlow();
}
