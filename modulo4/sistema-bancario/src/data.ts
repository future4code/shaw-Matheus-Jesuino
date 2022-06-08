export type Transacao = {
    valor:number,
    data:number,
    descrição:string
}

export type Conta = {
nome:string,
CPF:string,
datanascimento:Date,
saldo:number,
extrato:Array<Transacao> 
}

export const contas :Conta[] = []