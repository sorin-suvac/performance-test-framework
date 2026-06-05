/*
 * Copyright (c) 2026 Sorin Suvac
 *
 * Author: Sorin Suvac <suvacsorin@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to use,
 * copy, modify, and distribute the Software, subject to the following conditions:
 *
 * - The Software may not be sold or used for commercial purposes.
 * - The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
