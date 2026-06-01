import http from "k6/http";
import {check} from "k6";
import {BASE_URL} from "../config.js";

export function getAllProducts() {
    const res = http.get(`${BASE_URL}/api/products`);

    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 500ms": (r) => r.timings.duration < 500,
        "body not empty": (r) => r.body.length > 0,
    });
}
