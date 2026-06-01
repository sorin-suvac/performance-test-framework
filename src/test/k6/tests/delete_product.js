import http from "k6/http";
import {check} from "k6";
import {BASE_URL} from "../config.js";

export function deleteProduct() {
    const res = http.del(`${BASE_URL}/api/delete/1`);

    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 300ms": (r) => r.timings.duration < 300,
    });
}
