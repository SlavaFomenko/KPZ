import {TextReader} from '../TextrReaderInt'

class SmartTextReader implements TextReader {
	readTextFile(filename: string): string[][] {
		return [
			['H', 'e', 'l', 'l', 'o'],
			['W', 'o', 'r', 'l', 'd'],
		]
	}
}
export default SmartTextReader