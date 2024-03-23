import {TextReader} from '../TextrReaderInt'

import SmartTextReader from './SmartTextReader'

class SmartTextChecker implements TextReader {
	private reader: SmartTextReader

	constructor(reader: SmartTextReader) {
		this.reader = reader
	}

	readTextFile(filename: string): string[][] {
		console.log('Opening file:', filename)
		const content = this.reader.readTextFile(filename)
		console.log('File read successfully.')
		console.log('Total lines:', content.length)
		console.log(
			'Total characters:',
			content.reduce((acc, line) => acc + line.length, 0)
		)
		console.log('Closing file:', filename)
		return content
	}
}
export default SmartTextChecker