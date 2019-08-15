const express = require('express')
const expressGraphQL = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType
} = require('graphql')
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Helloworld',
    fields: () => ({
      message: { 
        type: GraphQLString,
        resolve: () => 'Hello world'  
      },
      name: {
        type: GraphQLString,
        resolve: () => 'Ashish Rao'
      }
    })
  })
})
const app = express()

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

app.listen(5000, () => console.log("app is up and running"))