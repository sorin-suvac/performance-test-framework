import {getAllProducts} from "./tests/get_all_products.js";
import {getSingleProduct} from "./tests/get_single_product.js";
import {createProduct} from "./tests/create_product.js";
import {updateProduct} from "./tests/update_product.js";
import {deleteProduct} from "./tests/delete_product.js";
import {e2e} from "./tests/e2e_flow.js";

export const options = {
    scenarios: {
        load_test: {
            executor: "ramping-vus",
            exec: "e2eTest",
            startVUs: 0,
            stages: [
                {duration: "1m", target: 10},  // ramp-up
                {duration: "3m", target: 10},  // steady load
                {duration: "1m", target: 0},   // ramp-down
            ],
        },
        spike_test: {
            executor: "ramping-vus",
            exec: "e2eTest",
            startVUs: 0,
            stages: [
                {duration: "30s", target: 5},
                {duration: "10s", target: 50}, // sudden spike
                {duration: "30s", target: 5},
                {duration: "10s", target: 0},
            ],
        },
        endurance_test: {
            executor: "constant-vus",
            exec: "e2eTest",
            vus: 10,
            duration: "10m",
        },
        stress_test: {
            executor: "ramping-vus",
            exec: "e2eTest",
            startVUs: 0,
            stages: [
                {duration: "2m", target: 20},
                {duration: "2m", target: 50},
                {duration: "2m", target: 100},
                {duration: "1m", target: 0},
            ],
        },
    },

    thresholds: {
        http_req_failed: ["rate<0.01"],          // <1% failures
        http_req_duration: ["p(95)<800"],        // 95% under 800ms
    },
};

export function getAllProductsTest() {
    getAllProducts();
}

export function getSingleProductTest() {
    getSingleProduct();
}

export function createProductTest() {
    createProduct();
}

export function updateProductTest() {
    updateProduct();
}

export function deleteProductTest() {
    deleteProduct();
}

export function e2eTest() {
    e2e();
}
