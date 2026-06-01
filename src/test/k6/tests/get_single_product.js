import http from "k6/http";
import {check} from "k6";
import {BASE_URL, INITIAL_PRODUCTS_COUNT} from "../config.js";

export function getSingleProduct() {
    const id = Math.floor(Math.random() * {INITIAL_PRODUCTS_COUNT}) + 1;
    const res = http.get(`${BASE_URL}/api/product/${id}`);

    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 300ms": (r) => r.timings.duration < 300,
    });
}
