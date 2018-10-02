const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

console.log('Hello, world!')
console.log(`Succesfully started app at ${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}.`)
console.log('Closing in 2 seconds...')

sleep(2000)
