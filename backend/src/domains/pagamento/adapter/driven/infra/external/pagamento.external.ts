import { Pagamento } from "domains/pagamento/core/entities/pagamento";
import { MercadoPagoExternal } from "./mercadopago/mercadopago";
import QRCode from "qrcode";
import { PedidosExternal } from "./pedidos/pedidos";
import { HttpService } from "configuration/http.config";

export class PagamentoExternal {
  constructor() {}

  async gerarCobrancaPix(
    pagamento: Pagamento
  ): Promise<{ idExterno: string; QRCodeUrl: string } | null> {
    const mercadoPagoHttpService = new HttpService({
      baseURL: process.env.MERCADOPAGO_URL,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MERCADOPAGO_TOKEN}`,
      },
    });
    const external = new MercadoPagoExternal(
      mercadoPagoHttpService.HttpClient()
    );

    const responsePedido = await external.criarPedido(
      `Pedido de ${pagamento.getCpf()} em ${pagamento.getData()}`,
      pagamento.getVersao()?.versao || "",
      pagamento.getValor().valueOf()
    );

    const { in_store_order_id, qr_data } = responsePedido.data;

    const QRCodeUrl = await QRCode.toDataURL(qr_data).then();

    return {
      idExterno: in_store_order_id,
      QRCodeUrl,
    };
  }

  async webhookPagamentos(pagamento: Pagamento): Promise<Object | null> {
    const external = new PedidosExternal();

    const response = await external.webhookPagamento(
      pagamento.getIdentificadorExterno()
    );

    return response;
  }
}
