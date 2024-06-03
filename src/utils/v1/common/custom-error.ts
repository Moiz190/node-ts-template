export class CustomError extends Error {
    message: string;
    code = 500;
    constructor(message: string, code?: number) {
        super(message)
        this.message = message
        if (code) {
            this.code = code
        }
    }
}