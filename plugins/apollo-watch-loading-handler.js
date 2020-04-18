/* eslint-disable no-undef */
/* eslint-disable no-console */
export default (_, countModifier) => {
  let loading = null
  loading += countModifier
  console.log('Global loading', loading, countModifier)
}
