include .env

SHELL := /usr/bin/env bash
BIN := ./node_modules/.bin
OS := $(shell uname)

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
	$(BIN)/grpc_tools_node_protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/compiled_proto --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false --proto_path=./src/proto ./src/proto/antelope.proto
	$(BIN)/grpc_tools_node_protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./src/compiled_proto --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false --proto_path=./src/proto ./src/proto/firehose.proto