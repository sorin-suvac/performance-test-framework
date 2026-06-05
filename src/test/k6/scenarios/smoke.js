import {getAllProductsFlow} from "../flows/get-all-products.js";
import thresholds from "../config/thresholds.js";

export const options = {
    thresholds,
    vus: 1,
    iterations: 5
};

export function exec() {
    getAllProductsFlow();
}
