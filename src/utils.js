const formatError = message => {
  const messageSplit = message.split(':')
  return messageSplit[messageSplit.length - 1].trim()
}

const errorHandler = (err, vm, info) => {
  console.log('Vue [error handler]:', err, info)
  const jwtErrors = ['jwt malformed', 'jwt expired', 'jwt not active', 'invalid token']
  if (jwtErrors.some(jwtError => err.message.includes(jwtError))) {
    vm.$router.push({
      path: { redirect: vm.$route.path }
    })
  }
}

export {
  errorHandler,
  formatError
}
