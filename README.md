# graphql-api-to-json-schema ![npm](https://img.shields.io/npm/v/graphql-api-to-json-schema)

### CLI to extract the schema from a GraphQL API and convert it to [JSON Schema](https://json-schema.org/) format. 

## Usage

```
graphql-api-to-json-schema GRAPHQL_API_URL >> schema.json
```


## Installation

```
npm install -g graphql-api-to-json-schema
```

## Why???

I couldn't find a GraphQL schema to JSON schema converter for Python so I hacked a CLI together using [`oclif`](https://oclif.io/) and [`graphql-to-json-schema`](https://github.com/charlypoly/graphql-to-json-schema).