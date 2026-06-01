import {allProducts} from "./all_products.js";
import {singleProduct} from "./single_product.js";

export const BASE_URL = "http://springboot-app:8080";
export const options = {
    scenarios: {
        all_products: {
            executor: "constant-vus",
            exec: "allProductsTest",
            vus: 5,
            duration: "60s",
        },
        single_product: {
            executor: "constant-vus",
            exec: "singleProductTest",
            vus: 10,
            duration: "60s",
        },
    },
};

export function allProductsTest() {
    allProducts();
}

export function singleProductTest() {
    singleProduct();
}
