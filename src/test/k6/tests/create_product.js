import http from "k6/http";
import {check} from "k6";
import {BASE_URL} from "../config.js";

export function createProduct() {
    const payload = JSON.stringify({
        name: `Product-${Date.now()}`,
        description: "Product description",
        price: 10,
        available: true
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = http.post(`${BASE_URL}/api/create`, payload, params);

    check(res, {
        "status is 201": (r) => r.status === 201,
        "response time < 500ms": (r) => r.timings.duration < 500,
    });
}
