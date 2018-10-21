const getPrettyDateString = (): string => new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

export default getPrettyDateString
