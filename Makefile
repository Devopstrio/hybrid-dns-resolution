.PHONY: help build up down test lint migrate sync

help:
	@echo "Hybrid DNS Resolution Platform - Management Commands"
	@echo "---------------------------------------------------"
	@echo "build    : Build all containers"
	@echo "up       : Start all services"
	@echo "down     : Stop all services"
	@echo "test     : Run all tests"
	@echo "lint     : Run linting checks"
	@echo "migrate  : Run database migrations"
	@echo "sync     : Trigger zone synchronization"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

sync:
	docker-compose exec api python scripts/sync/sync_all.py
