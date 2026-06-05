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

export default {
    http_req_failed: [
        "rate<0.01"
    ],
    checks: [
        "rate>0.99"
    ],
    http_req_duration: [
        "p(95)<500",
        "p(99)<1000"
    ],
    'http_req_duration{endpoint:get_all_products}': [
        'p(95)<300'
    ],
    'http_req_duration{endpoint:get_product}': [
        'p(95)<200'
    ],
    'http_req_duration{endpoint:create_product}': [
        'p(95)<500'
    ],
    'http_req_duration{endpoint:update_product}': [
        'p(95)<500'
    ],
    'http_req_duration{endpoint:delete_product}': [
        'p(95)<500'
    ]
}
