include .env

SHELL := /usr/bin/env bash
BIN := ./node_modules/.bin

build: node_modules
	bun run build

.PHONY: dev
dev: node_modules
	bun run dev --host 

.PHONY: check
check: node_modules
	bun run check

.PHONY: format
format: node_modules
	bun run format

node_modules:
	bun install --yarn