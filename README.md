# Projeto gerado com Angular-cli e Angular 6.1

Objetivo: prova de conceito
Função: Realiza chamada a um servidor backend e exibe na tela

Configuração:

```bash
./src/app/config.ts
```

Utilização:

Chamada por `get`
Será enviado uma base64 com `matricula:senha` no header `Authorization`

Caso seja authenticado receberá um token valido
Camada por `get`
Será enviado o token valido recebido no header `APP_TOKEN`

Observação:
Para exibir na tela com ngFor, foi criado pipe `keys` para converter o Object JSON em Array