const products = JSON.parse(open("./products.json"));

export function getRandomProduct() {
    return products[Math.floor(Math.random() * products.length)];
}
