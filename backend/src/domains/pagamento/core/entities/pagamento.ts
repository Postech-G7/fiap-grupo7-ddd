
import { CPF } from "../value-objects/cpf";
import { Email } from "../value-objects/email";
import { PagamentoVersao } from "./pagamento.versao";

export enum ParceiroNegocioPagamento {
  MERCADOPAGO = "MERCADO_PAGO",
}

export enum TipoPagamento {
  PIX = "PIX",
}

export enum StatusPagamento {
  PENDENTE = "PENDENTE",
  RECEBIDO = "RECEBIDO",
  EXPIRADO = "EXPIRADO",
  RECUSADO = "RECUSADO",
}

export interface PagamentoDados {
  cpf: CPF;
  nome: string;
  email: Email;
  valor: number;
  parcelamento: number;
  tipo: string;
  identificadorExterno: string;
}
export class Pagamento {
  constructor(dados: PagamentoDados) {
    const {
      cpf,
      email,
      valor,
      nome,
      parcelamento,
      tipo,
      identificadorExterno,
    } = dados;

    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.valor = valor;
    this.parcelamento = parcelamento;
    this.tipo = tipo;
    this.identificadorExterno = identificadorExterno;
    this.data = new Date();
    this.parceiroNegocio = null;
    this.status = null;
    this.metadata = null;
    this.versao = null;
  }

  private nome: string;
  public getNome(): string {
    return this.nome;
  }

  private cpf: CPF;
  public getCpf(): CPF {
    return this.cpf;
  }

  private email: Email;
  public getEmail(): Email {
    return this.email;
  }

  private valor: number;
  public getValor(): number {
    return this.valor;
  }

  private parcelamento: number;
  public getParcelamento(): number {
    return this.parcelamento;
  }

  private tipo: string;
  public getTipo(): string {
    return this.tipo;
  }

  private identificadorExterno: string;
  public getIdentificadorExterno(): string {
    return this.identificadorExterno;
  }

  private data: Date;
  public getData(): Date {
    return this.data;
  }

  private versao: PagamentoVersao | null;
  public getVersao(): PagamentoVersao | null {
    return this.versao;
  }
  public setVersao(versao: PagamentoVersao): void {
    this.versao = versao;
  }

  private parceiroNegocio: string | null;
  public getParceiroNegocio(): string | null {
    return this.parceiroNegocio;
  }
  public setParceiroNegocio(parceiroNegocio: string): void {
    this.parceiroNegocio = parceiroNegocio;
  }

  private metadata: Object | null;
  public getMetadata(): Object | null {
    return this.metadata;
  }
  public setMetadata(metadata: Object | null): void {
    this.metadata = metadata;
  }

  private status: string | null;
  public getStatus(): string | null {
    return this.status;
  }
  public setStatus(status: StatusPagamento): void {
    this.status = status;
  }

  /**
   * Compara este pagamento com outro para verificar se são iguais.
   * @param comparable O outro pagamento a ser comparado.
   * @returns true se todos os campos são iguais, caso contrário false.
   */
  public equals(comparable: Pagamento): boolean {
    return (
      this.nome === comparable.nome &&
      this.cpf.equals(comparable.cpf) &&
      this.email.equals(comparable.email) &&
      this.valor === comparable.valor &&
      this.parcelamento === comparable.parcelamento &&
      this.tipo === comparable.tipo &&
      this.identificadorExterno === comparable.identificadorExterno &&
      this.data.getTime() === comparable.data.getTime() &&
      this.parceiroNegocio === comparable.parceiroNegocio &&
      this.status === comparable.status &&
      JSON.stringify(this.metadata) === JSON.stringify(comparable.metadata)
    );
  }
}
