import { AxiosInstance } from "axios";
import { CustomError } from "domains/suporte/entities/custom.error";

export enum StatusPagamentoMercadoPago {
  CRIACAO = 'payment.created',
  ATUALIZACAO = 'payment.updated',
  PAGAMENTO = 'state_FINISHED',
  CANCELAMENTO = 'state_CANCELED',
  ERRO = 'state_ERROR'
}

export class MercadoPagoExternal {
    constructor(private axiosInstance: AxiosInstance) {
        const {
            MERCADOPAGO_USERID,
            MERCADOPAGO_POS
        } = process.env;

        if (!MERCADOPAGO_USERID || !MERCADOPAGO_POS) {
            throw new CustomError("MercadoPago configuration error", 500, false, []);
        }
    }

    criarPedido(descricao: string, codigoPedido: string, total: number): Promise<any> {
        const payload = this.pedidoPayload(descricao, codigoPedido, total);
        return this.axiosInstance.post(`/instore/orders/qr/seller/collectors/${process.env.MERCADOPAGO_USERID}/pos/${process.env.MERCADOPAGO_POS}/qrs`, payload);
    }

    private pedidoPayload(descricao: string, codigoPedido: string, total: number): Object {
        return {
            description: descricao,
            external_reference: codigoPedido,
            items: [{
                sku_number: "",
                category: "marketplace",
                title: `Pedido ${codigoPedido}`,
                description: descricao,
                unit_price: total,
                quantity: 1,
                unit_measure: "unit",
                total_amount: total
            }],
            notification_url: `${process.env.MERCADOPAGO_WEBHOOK_URL}/api/pagamentos/v1/webhook/${codigoPedido}`,
            title: `Pedido ${codigoPedido}`,
            total_amount: total
        };
    }
}
