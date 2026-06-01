import http from "k6/http";
import {check} from "k6";

export function singleProduct() {
    const id = Math.floor(Math.random() * 4) + 1;

    const res = http.get(`${BASE_URL}/api/product/${id}`);

    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 300ms": (r) => r.timings.duration < 300,
    });
}
