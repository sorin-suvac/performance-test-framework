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

package io.github.ptf.controller;

import io.github.ptf.model.Product;
import io.github.ptf.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    private final Random random = new Random();

    @PostMapping("/create")
    @ResponseBody
    public ResponseEntity<Product> create(@RequestBody Product product) {
        simulateRandomDelay();
        Product prod = productService.createProduct(product);
        return prod == null
                ? new ResponseEntity<>(HttpStatus.BAD_REQUEST)
                : new ResponseEntity<>(prod, HttpStatus.CREATED);
    }

    @GetMapping("/product/{id}")
    @ResponseBody
    public ResponseEntity<Product> getById(@PathVariable int id) {
        simulateRandomDelay();
        Product prod = productService.getProductById(id);
        return prod == null
                ? new ResponseEntity<>(HttpStatus.NOT_FOUND)
                : new ResponseEntity<>(prod, HttpStatus.OK);
    }

    @PutMapping("/update")
    @ResponseBody
    public ResponseEntity<Product> update(@RequestBody Product product) {
        simulateRandomDelay();
        Product prod = productService.updateProduct(product);
        return prod == null
                ? new ResponseEntity<>(HttpStatus.BAD_REQUEST)
                : new ResponseEntity<>(prod, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseBody
    public ResponseEntity<Product> deleteById(@PathVariable int id) {
        simulateRandomDelay();
        return productService.deleteProductById(id)
                ? new ResponseEntity<>(HttpStatus.GONE)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/products")
    @ResponseBody
    public ResponseEntity<List<Product>> getProducts() {
        simulateRandomDelay();
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    private void simulateRandomDelay() {
        try {
            long delay = random.nextLong(0, 2000);
            Thread.sleep(delay);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
