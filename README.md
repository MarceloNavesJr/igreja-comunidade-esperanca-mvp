# Comunidade Esperança — MVP

Projeto acadêmico das Experiências Práticas I, II e III da disciplina Projeto de Software. **A Igreja Comunidade Esperança é um estudo de caso fictício**, inspirado em atividades comunitárias e solidárias; não representa uma implantação ou entrevista real.

## Problema e objetivo

A organização simulada utiliza anotações e mensagens dispersas para organizar voluntários, eventos e tarefas. O MVP propõe uma interface web responsiva para centralizar essas informações e apoiar campanhas e atividades comunitárias.

## Funcionalidades

- Cadastrar e excluir voluntários (nome e contato opcional).
- Cadastrar e excluir eventos (nome e data).
- Cadastrar e excluir tarefas (descrição e responsável opcional).
- Marcar tarefas como concluídas ou pendentes.
- Visualizar indicadores básicos no painel inicial.
- Persistir dados localmente no navegador com localStorage.

## Tecnologias

JavaScript, HTML, CSS, Vite, Vitest e GitHub Actions. MVP sem backend, autenticação ou banco remoto. **Não inserir dados pessoais reais**; os dados permanecem no navegador do usuário e não são compartilhados entre dispositivos.

## Como executar

Requisitos: Node.js 22+ e npm.

```bash
npm install
npm run dev
```

Acesse o endereço local exibido pelo Vite.

## Testes e build

```bash
npm test
npm run build
```

O workflow `.github/workflows/ci.yml` executa instalação, testes unitários e build automaticamente a cada push e pull request na branch main. Consulte a aba **Actions** para verificar os resultados.

## Escopo e validação

Este é um protótipo funcional de uso acadêmico. A validação proposta deve ser realizada com participantes simulados ou voluntários reais devidamente informados, sem registrar dados sensíveis. A coleta de feedback e os testes de aceitação em campo não devem ser apresentados como realizados antes de sua execução.

## Estrutura

- `src/main.js`: interface e interações.
- `src/data.js`: regras de cadastro, remoção, conclusão e persistência.
- `src/style.css`: layout responsivo.
- `tests/data.test.js`: testes automatizados.
- `.github/workflows/ci.yml`: integração contínua.
