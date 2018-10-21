import getPrettyDateString from './date'

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

console.log('Hello, world!')
console.log(`Succesfully started app at ${getPrettyDateString()}.`)
console.log('Closing in 2 seconds...')

sleep(2000)
