import http from "k6/http";
import {check} from "k6";

export function allProducts() {
    const res = http.get(`${BASE_URL}/api/products`);

    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 500ms": (r) => r.timings.duration < 500,
    });
}
