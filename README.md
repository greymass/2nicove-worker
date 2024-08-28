# 2nicove-worker

### Configuration

This project uses InfluxDB v2. This service must be running externally and an `.env` file needs to be created in the root of the project containing the following information:

```
UNICOVE_API='https://eos.greymass.com'
UNICOVE_INFLUX_URL='http://localhost:8086'
UNICOVE_INFLUX_TOKEN='yourtoken'
UNICOVE_INFLUX_ORG='organization'
```

Additional parameters can be also added:

```
UNICOVE_HTTP_PORT=3000
UNICOVE_LOG_LEVEL='debug'
UNICOVE_LOG='unicove.log'
UNICOVE_ERROR_LOG='error.log'
```

### Development

This project uses `make`. To install dependencies:

```bash
make node_modules
```

To run in development mode

```bash
make dev
```

### Running

Bun can compile this application down to a binary which can be run on a production server alongside the InfluxDB database. Setup the `.env` file (or real environmental variables) and build the app with:

```
make
```

This will output an executable binary in `./dist/2nicove`.
