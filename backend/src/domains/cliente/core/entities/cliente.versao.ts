export class ClienteVersao {

    constructor (versao: string, dataCadastro: Date) {
        this.actual_version = versao
        this._dateInput = dataCadastro
    }

    private actual_version: string
    private _dateInput!: Date

    public get versao(): string {
        return this.actual_version
    }
    public get dataCadastro(): Date {
        return this._dateInput
    }
}