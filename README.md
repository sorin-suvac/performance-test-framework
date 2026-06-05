# 🚀 Performance Testing Framework

A containerized performance testing framework built with **k6**, **Prometheus**, and **Grafana**, designed for scalable, reproducible, and observable load testing.

It provides a full observability stack for executing performance tests, collecting metrics, and visualizing system behavior under load.

---

# 📌 Overview

This framework integrates multiple components to enable end-to-end performance testing and monitoring:
- **k6** → Load testing engine (JavaScript-based test scenarios)
- **Prometheus** → Metrics collection and time-series database
- **Grafana** → Visualization and dashboards for performance insights
- **Docker Compose** → Environment orchestration and reproducibility

---

## 📄 Project Structure

```text
.
├── docker                # docker compose scripts
├── monitoring            # prometheus and grafana config
├── sample_reports
├── src/main              # springboot application under test
├── src/test/k6           # k6 framework
└── pom.xml
└── README.md
```

---

# 🧪 Test Environment

## 🖥️ System Under Test (Spring Boot API)
The application under test runs in a container and exposes the following endpoints:
- `GET /api/products` → Retrieve all products
- `GET /api/product/{id}` → Retrieve a product by ID
- `POST /api/create` → Create a new product
- `PUT /api/update` → Update an existing product
- `DELETE /api/delete/{id}` → Delete a product by ID

**Base URL:** http://localhost:8080

---

## 📊 Observability Stack

### Prometheus
- URL: http://localhost:9090
- Config: `/config`
- Targets: `/targets`
- Query UI: `/query`

### Grafana
- URL: http://localhost:3000
- Dashboards: `/dashboards`
- Data sources: `/connections/datasources`

---

## ⚡ Load Testing (k6)

k6 is used to execute different performance test types:
- Smoke
- Load
- Stress
- Spike
- Soak

> ⚠️ k6 runs as a disposable container and is removed after execution.

---

# 🐳 Running with Docker

## ▶️ Start full environment
```bash
docker compose -f ./docker/docker-compose-env.yml up --build --pull always -d
```

## 🧪 Run k6 tests
Example (smoke test):
```bash
docker compose -f ./docker/docker-compose-k6.yml run --rm --pull always -e TEST=smoke k6 -v
```
You can replace smoke with:
- load
- stress
- spike
- soak

## ⛔ Stop environment
```bash
docker compose -f ./docker/docker-compose-env.yml down
```

---

# 📈 Reports
### Spike test:
![Alt text](sample_reports/spike/spike_grafana.png)
### Soak test:
![Alt text](sample_reports/soak/soak_grafana.png)
