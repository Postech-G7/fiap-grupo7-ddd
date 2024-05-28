import { EventosPedido } from "domains/pedido/core/entities/pedido"

export const post_pedido = {
    $cpf: "12345678909",
    $itens: [
        {
            $codigoProduto: "000001",
            $quantidade: 1 ,
            $observacao: "N/A"
        }
    ]
} 

export const put_pedido = {
    $cpf: "12345678909",
    $itens: [
        {
            $codigoProduto: "000001",
            $quantidade: 1 ,
            $observacao: "sem picles"
        }
    ]
}

export const post_webhook_pedido = {
    $codigoPedido: '20242705_000001',
    $evento: EventosPedido.PAGO
}

export const put_pedido_status = {
    $statusPedido: "Em Preparação",
}
