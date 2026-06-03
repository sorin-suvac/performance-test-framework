import {check, sleep} from "k6";
import {createProduct, deleteProduct, getAllProducts, getProduct, updateProduct} from "../services/product-api.js";

const products = JSON.parse(open("../data/products.json"));

export default function () {
    const random = Math.random();
    let response;

    if (random < 0.50) {
        response = getAllProducts();
        check(response, {
            "status is 200": (r) => r.status === 200,
            "response time < 300ms": (r) => r.timings.duration < 300
        });
    } else if (random < 0.75) {
        const id = Math.floor(Math.random() * 100) + 1;
        response = getProduct(id);
        const body = JSON.parse(response.body);
        check(response, {
            "status is 200": (r) => r.status === 200,
            "response time < 200ms": (r) => r.timings.duration < 200,
            "correct id": () => body.id === id,
        });
    } else if (random < 0.85) {
        const product = products[Math.floor(Math.random() * products.length)];
        response = createProduct(product);
        const body = JSON.parse(response.body);
        check(response, {
            "status is 201": (r) => r.status === 201,
            "response time < 500ms": (r) => r.timings.duration < 500,
            "id returned": () => !!body.id,
            "name matches": () => body.name === product.name,
        });
    } else if (random < 0.95) {
        response = updateProduct({
            id: 1,
            name: "Updated Product",
            description: "Updated Product",
            price: 999,
            available: false,
        });
        check(response, {
            "status is 201": (r) => r.status === 201,
            "response time < 500ms": (r) => r.timings.duration < 500,
        });
    } else {
        response = deleteProduct(1);
        check(response, {
            "status is 410": (r) => r.status === 410,
            "response time < 300ms": (r) => r.timings.duration < 300,
        });
    }
    sleep(1);
}
