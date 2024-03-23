import SmartTextChecker from './src/SmartTextChecker'
import SmartTextReader from './src/SmartTextReader'
import SmartTextReaderLocker from './src/SmartTextReaderLocker'



const basicReader = new SmartTextReader()
const checker = new SmartTextChecker(basicReader)
const restrictedReader = new SmartTextReaderLocker(
	basicReader,
	'restricted_files.*'
)

console.log('Using basic reader:')
checker.readTextFile('example.txt')

console.log('\nUsing restricted reader:')
restrictedReader.readTextFile('example.txt')
restrictedReader.readTextFile('restricted_files.txt')
