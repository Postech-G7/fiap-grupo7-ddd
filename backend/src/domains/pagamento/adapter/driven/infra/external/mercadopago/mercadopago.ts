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
            MERCADO_PAGO_USERID,
            MERCADO_PAGO_POS
        } = process.env;

        if (!MERCADO_PAGO_USERID || !MERCADO_PAGO_POS) {
            throw new CustomError("MercadoPago configuration error", 500, false, []);
        }
    }

    criarPedido(descricao: string, codigoPedido: string, total: number): Promise<any> {
        const payload = this.pedidoPayload(descricao, codigoPedido, total);
        const token = process.env.MERCADO_PAGO_TOKEN;

        return this.axiosInstance.post(
            `${process.env.MERCADO_PAGO_URL}/instore/orders/qr/seller/collectors/${process.env.MERCADO_PAGO_USERID}/pos/${process.env.MERCADO_PAGO_POS}/qrs`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
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
            notification_url: `${process.env.MERCADO_PAGO_WEBHOOK_URL}/api/pagamentos/v1/webhook/${codigoPedido}`,
            title: `Pedido ${codigoPedido}`,
            total_amount: total
        };
    }
}
