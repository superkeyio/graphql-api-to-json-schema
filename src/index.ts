import {Command, flush, Errors} from '@oclif/core'
import {getIntrospectionQuery, IntrospectionQuery} from 'graphql'
import {request} from 'graphql-request'
import {fromIntrospectionQuery} from 'graphql-2-json-schema'

export default class GraphQLAPIToJSONSchema extends Command {
  static description = 'Say hello'

  static args = [
    {
      name: 'apiUrl',
      description: 'URL of the the GraphQL API',
      required: true,
    },
  ]

  async run(): Promise<void> {
    const {args} = await this.parse(GraphQLAPIToJSONSchema)

    const options = {
      ignoreInternals: true,
      nullableArrayItems: true,
    }

    // schema is your GraphQL schema.
    const query = getIntrospectionQuery()

    const introspection: IntrospectionQuery = await request(args.apiUrl, query)

    const jsonSchema = fromIntrospectionQuery(introspection, options)

    console.log(JSON.stringify(jsonSchema, null, 4))
  }
}

// Start the CLI
GraphQLAPIToJSONSchema.run().then(flush, Errors.handle)
