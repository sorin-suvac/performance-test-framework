import {check, sleep} from "k6";
import {getAllProducts} from "../services/product-api.js";

export function getAllProductsFlow() {
    const res = getAllProducts();
    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 500ms": (r) => r.timings.duration < 500,
        "body not empty": (r) => r.body.length > 0,
    });

    sleep(1);
}
