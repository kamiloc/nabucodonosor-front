/* eslint-disable no-console */
export default ({ graphQLErrors, networkError, operation, forward }) => {
  console.log('Global error handler')
  console.log(graphQLErrors, networkError, operation, forward)
}