import http from "k6/http";
import {check, fail, group} from "k6";
import {BASE_URL} from "../config.js";

export function e2e() {
    const productName = `Product-e2e-${Date.now()}`;

    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    let id;
    let updatedDescription;

    group("Create Product", () => {
        const payloadCreate = JSON.stringify({
            name: productName,
            description: "Product description e2e",
            price: 10,
            available: true,
        });

        const res = http.post(
            `${BASE_URL}/api/create`,
            payloadCreate,
            params
        );

        const body = JSON.parse(res.body);

        check(res, {
            "status is 201": (r) => r.status === 201,
            "response time < 500ms": (r) => r.timings.duration < 500,
            "id returned": () => !!body.id,
            "name matches": () => body.name === productName,
        });

        id = body.id;

        if (!id) {
            fail("Create endpoint did not return an id");
        }
    });

    group("Get Product After Create", () => {
        const res = http.get(`${BASE_URL}/api/product/${id}`);
        const body = JSON.parse(res.body);

        check(res, {
            "status is 200": (r) => r.status === 200,
            "response time < 300ms": (r) => r.timings.duration < 300,
            "correct id": () => body.id === id,
            "available is true": () => body.available === true,
        });
    });

    group("Update Product", () => {
        updatedDescription = `Updated prod ${Date.now()}`;

        const payloadUpdate = JSON.stringify({
            id,
            name: "test-e2e",
            description: updatedDescription,
            price: 10,
            available: false,
        });

        const res = http.put(
            `${BASE_URL}/api/update`,
            payloadUpdate,
            params
        );

        check(res, {
            "status is 200": (r) => r.status === 200,
            "response time < 500ms": (r) => r.timings.duration < 500,
        });
    });

    group("Verify Product Update", () => {
        const res = http.get(`${BASE_URL}/api/product/${id}`);
        const body = JSON.parse(res.body);

        check(res, {
            "status is 200": (r) => r.status === 200,
            "response time < 300ms": (r) => r.timings.duration < 300,
            "name updated": () => body.name === "test-e2e",
            "description updated": () =>
                body.description === updatedDescription,
            "available updated": () => body.available === false,
        });
    });

    group("Delete Product", () => {
        const res = http.del(`${BASE_URL}/api/delete/${id}`);

        check(res, {
            "status is 200": (r) => r.status === 200,
            "response time < 300ms": (r) => r.timings.duration < 300,
        });
    });

    group("Verify Product Deletion", () => {
        const res = http.get(`${BASE_URL}/api/product/${id}`);

        check(res, {
            "status is 404": (r) => r.status === 404,
            "response time < 300ms": (r) => r.timings.duration < 300,
        });
    });
}
