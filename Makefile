# ==========================================================================
# TASKFLOW AUTOMATION MAKEFILE
# ==========================================================================

.PHONY: help install dev test build docker-build docker-run python-tools clean

help:
	@echo "TaskFlow SaaS Automation Commands:"
	@echo "  make install       Install npm dependencies"
	@echo "  make dev           Start local development server"
	@echo "  make test          Run Vitest unit test suites"
	@echo "  make build         Build production bundled static dist/"
	@echo "  make docker-build  Build Docker container image"
	@echo "  make docker-run    Launch Docker container on port 8080"
	@echo "  make python-tools  Run Python seed generator, schema validator & benchmark"
	@echo "  make clean         Clean dist and node_modules"

install:
	npm install

dev:
	npm run dev

test:
	npm test

build:
	npm run build

docker-build:
	docker build -t taskflow-saas .

docker-run:
	docker-compose up -d

python-tools:
	python scripts/seed_generator.py
	python scripts/task_validator.py
	python scripts/analytics_exporter.py
	python scripts/benchmark_storage.py

clean:
	rm -rf dist node_modules scripts/__pycache__ scripts/generated_seed.json
