import {check, fail, group, sleep} from "k6";
import {createProduct, deleteProduct, getProduct, updateProduct} from "../services/product-service.js";
import {getRandomProduct} from "../data/products.js";

export function e2eFlow() {
    let id;

    group("Create Product", () => {
        const product = getRandomProduct();
        const res = createProduct(product);
        const body = JSON.parse(res.body);

        check(res, {
            "status is 201": (r) => r.status === 201,
            "response time < 500ms": (r) => r.timings.duration < 500,
            "id returned": () => !!body.id,
        });

        id = body.id;
        if (!id) {
            fail("Create endpoint did not return an id");
        }
    });

    group("Verify Product Creation", () => {
        const res = getProduct(id);

        check(res, {
            "status is 200": (r) => r.status === 200,
            "response time < 200ms": (r) => r.timings.duration < 200,
        });
    });

    group("Update Product", () => {
        const res = updateProduct({
            id: id,
            name: "Test Product",
            description: "Updated Product",
            price: 999,
            available: false,
        });

        check(res, {
            "status is 201": (r) => r.status === 201,
            "response time < 500ms": (r) => r.timings.duration < 500,
        });
    });

    group("Verify Product Update", () => {
        const res = getProduct(id);
        const body = JSON.parse(res.body);

        check(res, {
            "status is 201": (r) => r.status === 201,
            "response time < 200ms": (r) => r.timings.duration < 200,
            "name updated": () => body.name === "Test Product",
            "description updated": () => body.description === "Updated Product",
            "available updated": () => body.available === false,
        });
    });

    group("Delete Product", () => {
        const res = deleteProduct(1);

        check(res, {
            "status is 410": (r) => r.status === 410,
            "response time < 500ms": (r) => r.timings.duration < 500,
        });
    });

    group("Verify Product Deletion", () => {
        const res = getProduct(id);

        check(res, {
            "status is 404": (r) => r.status === 404,
            "response time < 200ms": (r) => r.timings.duration < 200,
        });
    });

    sleep(1);
}
