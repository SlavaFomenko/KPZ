import {TextReader} from '../TextrReaderInt'
import SmartTextReader from './SmartTextReader'

class SmartTextReaderLocker implements TextReader {
	private reader: SmartTextReader;
	private restrictedFilesRegex: RegExp;

	constructor(reader: SmartTextReader, restrictedFilesRegex: string) {
			this.reader = reader;
			this.restrictedFilesRegex = new RegExp(restrictedFilesRegex);
	}

	readTextFile(filename: string): string[][] {
			if (this.restrictedFilesRegex.test(filename)) {
					console.log("Access denied!");
					return [];
			} else {
					return this.reader.readTextFile(filename);
			}
	}
}

export default SmartTextReaderLocker