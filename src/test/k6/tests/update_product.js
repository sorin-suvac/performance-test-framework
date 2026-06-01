import http from "k6/http";
import {check} from "k6";
import {BASE_URL} from "../config.js";

export function updateProduct() {
    const payload = JSON.stringify({
        id: 1,
        name: "test",
        description: `Updated prod ${Date.now()}`,
        price: 10,
        available: true
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = http.put(`${BASE_URL}/api/update`, payload, params);

    check(res, {
        "status is 200": (r) => r.status === 200,
        "response time < 500ms": (r) => r.timings.duration < 500,
    });
}
