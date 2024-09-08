include .env

SHELL := /usr/bin/env bash
BIN := ./node_modules/.bin
OS := $(shell uname)
PROTOC_GEN_TS_PATH = ./node_modules/.bin/protoc-gen-ts
PROTOC_GEN_JS_PATH = ./node_modules/.bin/protoc-gen-js
OUT_DIR = ./src/compiled_proto

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
	bunx @wharfkit/cli generate --url $(UNICOVE_API) --file ./src/contracts/delphioracle.ts delphioracle

proto:
	protoc --js_out="import_style=commonjs,binary:${OUT_DIR}" --ts_out="service=grpc-web:${OUT_DIR}" ./src/proto/antelope.proto ./src/proto/firehose.proto