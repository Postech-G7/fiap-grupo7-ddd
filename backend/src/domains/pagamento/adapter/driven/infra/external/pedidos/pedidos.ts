import { AxiosResponse, create } from "axios";
import * as os from 'os';

export class PedidosExternal {
    private axios;

    constructor() {
        const host = os.hostname();
        const port = process.env.PORT || 3000;  // Defina a porta do seu servidor aqui ou use uma variável de ambiente para configurá-la

        const baseURL = `http://${host}:${port}`;

        this.axios = create({
            baseURL,
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    webhookPagamento(codigoPedido: string): Promise<AxiosResponse> {
        const payload = {
            codigoPedido,
            evento: 'PAGO'
        };

        return this.axios.post(`/api/pedidos/v1/webhook`, payload);
    }
}
