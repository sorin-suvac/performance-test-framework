# start the environment
docker compose -f ./docker/docker-compose-env.yml up  --pull always --build -d
# run k6 tests
docker compose -f ./docker/docker-compose-k6.yml run --rm --pull always -e TEST=smoke k6 -v
# shutdown the environment
docker compose -f ./docker/docker-compose-env.yml down
