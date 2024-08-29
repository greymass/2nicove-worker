include .env

SHELL := /usr/bin/env bash
BIN := ./node_modules/.bin

build: node_modules codegen
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

codegen:
	bunx @wharfkit/cli generate --url $(UNICOVE_API) --file ./src/contracts/system.ts eosio
	bunx @wharfkit/cli generate --url $(UNICOVE_API) --file ./src/contracts/token.ts eosio.token
	# Contract generation fixes
	sed -i "" "s/(Bool/('bool'/g" src/contracts/system.ts
	sed -i "" "s/: Bool/: boolean/g" src/contracts/system.ts
