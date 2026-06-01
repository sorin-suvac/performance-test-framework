# shutdown the environment
docker compose -f ./docker/docker-compose-env.yml down -v
# start the environment
docker compose -f ./docker/docker-compose-env.yml up --build -d
# run k6 tests
docker compose -f ./docker/docker-compose-k6.yml run --rm k6
