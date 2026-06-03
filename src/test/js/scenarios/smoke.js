import {check} from "k6";

import {getAllProducts} from "../services/product-api.js";

export const options = {
    vus: 1,
    iterations: 5
};

export default function () {
    const res = getAllProducts();
    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 500ms": (r) => r.timings.duration < 500,
        "body not empty": (r) => r.body.length > 0,
    });
}
