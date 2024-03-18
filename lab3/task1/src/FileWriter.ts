class FileWriter {
	write(data: string) {
		console.log('Запис ДАННИХ в файл');
		console.log(`В файл записалось\n ${data}\n`);
		
	}
	
	writeLine(data: string) {
		console.log('Запис РЯДКА в файл');
		console.log(`В файл записалось\n ${data}\n`);
	}
}

export default FileWriter
