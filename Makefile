start-app:
	npm start

build-app:
	npm i
	npm start

build-docker:
	docker-compose -f docker/docker-compose.yml up --build -d