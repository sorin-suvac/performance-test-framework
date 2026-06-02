import {getAllProducts} from "./tests/get_all_products.js";
import {getSingleProduct} from "./tests/get_single_product.js";
import {createProduct} from "./tests/create_product.js";
import {updateProduct} from "./tests/update_product.js";
import {deleteProduct} from "./tests/delete_product.js";
import {e2e} from "./tests/e2e_flow.js";

export const options = {
    scenarios: {
        // get_all_products: {
        //     executor: "constant-vus",
        //     exec: "getAllProductsTest",
        //     vus: 10,
        //     duration: "60s",
        // },
        // get_single_product: {
        //     executor: "constant-vus",
        //     exec: "getSingleProductTest",
        //     vus: 10,
        //     duration: "60s",
        // },
        // create_product: {
        //     executor: "constant-vus",
        //     exec: "createProductTest",
        //     vus: 10,
        //     duration: "60s",
        // },
        // update_product: {
        //     executor: "constant-vus",
        //     exec: "updateProductTest",
        //     vus: 10,
        //     duration: "60s",
        // },
        // delete_product: {
        //     executor: "constant-vus",
        //     exec: "deleteProductTest",
        //     vus: 1,
        //     duration: "10s",
        // },
        e2e_flow: {
            executor: "constant-vus",
            exec: "e2eTest",
            vus: 60,
            duration: "60s",
        }
    }
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
