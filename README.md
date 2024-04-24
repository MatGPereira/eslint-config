# ESLint Config

Aqui consta-se configurações que eu uso no meu dia a dia para criar aplicações em Next, React e Node.
Tenho intenções que adicionar ainda configurações para Vue.js, Nuxt.js e Svelte.

## Como rodar

### React.js com Next.js

1. Instalar dependências
```bash
npm i -D eslint @rocketseat/eslint-config
```

2. Crie um arquivo `.eslintrc` ou `.eslintrc.json` e, dentro do arquivo, coloque
```json
{
  "extends": [
    "@matgpereira/eslint-config/next",
    "next/core-web-vitals"
  ]
}
```

### React.js sem Next.js

1. Instalar dependências
```bash
npm i -D eslint @rocketseat/eslint-config
```

2. Crie um arquivo `.eslintrc` ou `.eslintrc.json` e, dentro do arquivo, coloque
```json
{
  "extends": "@rocketseat/eslint-config/react"
}
```

### Node.js

1. Instalar dependências
```bash
npm i -D eslint @rocketseat/eslint-config
```

2. Crie um arquivo `.eslintrc` ou `.eslintrc.json` e, dentro do arquivo, coloque
```json
{
  "extends": "@rocketseat/eslint-config/node"
}
```
