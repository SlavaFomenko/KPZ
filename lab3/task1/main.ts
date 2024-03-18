import FileLoggerAdapter from './src/FileLoggerAdapter'
import FileWriter from './src/FileWriter'

const fileWriter = new FileWriter()
const fileLoggerAdapter = new FileLoggerAdapter(fileWriter)

fileLoggerAdapter.log('This is a log message')
console.log('')
fileLoggerAdapter.error('This is an error message')
console.log('')
fileLoggerAdapter.warn('This is a warning message')
