import Logger from './Logger';
import FileWriter from './FileWriter';

class FileLoggerAdapter {
    private fileWriter: FileWriter;
    private logger: Logger;

    constructor(fileWriter: FileWriter) {
        this.fileWriter = fileWriter;
        this.logger = new Logger();
    }

    log(message: string) {
        this.fileWriter.writeLine(`[LOG] ${message}`);
    }

    error(message: string) {
        this.fileWriter.writeLine(`[ERROR] ${message}`);
    }

    warn(message: string) {
        this.fileWriter.writeLine(`[WARN] ${message}`);
    }
}

export default FileLoggerAdapter;
