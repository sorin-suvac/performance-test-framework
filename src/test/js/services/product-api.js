import http from "k6/http";
import {BASE_URL} from "../config/env.js";

export function getAllProducts() {
    return http.get(
        `${BASE_URL}/api/products`,
        {
            tags: {
                endpoint: "get_all_products"
            }
        }
    );
}

export function getProduct(id) {
    return http.get(
        `${BASE_URL}/api/product/${id}`,
        {
            tags: {
                endpoint: "get_product"
            }
        }
    );
}

export function createProduct(payload) {
    return http.post(
        `${BASE_URL}/api/create`,
        JSON.stringify(payload),
        {
            headers: {
                "Content-Type": "application/json"
            },
            tags: {
                endpoint: "create_product"
            }
        }
    );
}

export function updateProduct(payload) {
    return http.put(
        `${BASE_URL}/api/update`,
        JSON.stringify(payload),
        {
            headers: {
                "Content-Type": "application/json"
            },
            tags: {
                endpoint: "update_product"
            }
        }
    );
}

export function deleteProduct(id) {
    return http.del(
        `${BASE_URL}/api/delete/${id}`,
        {
            tags: {
                endpoint: "delete_product"
            }
        }
    );
}
