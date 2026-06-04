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
