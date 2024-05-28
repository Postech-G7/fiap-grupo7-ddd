export class Email {
    private readonly value: string;

    constructor(value: string) {
        this.validate(value);
        this.value = value;
    }

    private validate(value: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error("Invalid email format");
        }
    }

    public getValue(): string {
        return this.value;
    }

    public equals(other: Email): boolean {
        return this.value === other.value;
    }
}
