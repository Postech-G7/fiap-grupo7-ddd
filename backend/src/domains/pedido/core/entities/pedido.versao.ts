export class PedidoVersao {

    constructor (versao: string, dataCadastro: Date, codigoPedido: string) {
        this.actual_version = versao
        this._dateInput = dataCadastro
        this._codigoPedido = codigoPedido
    }

    private _codigoPedido: string
    private actual_version: string
    private _dateInput!: Date

    public get versao(): string {
        return this.actual_version
    }
    public get dataCadastro(): Date {
        return this._dateInput
    }

    public get codigoPedido(): string {
        return this._codigoPedido
    }    
}