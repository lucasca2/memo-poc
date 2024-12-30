# Memo POC

Esse projeto basicamente ajuda a entender como a memorização do React com `useMemo`, `useCallback` e `React.memo` podem ajudar a deixar uma aplicação React mais performática.

### 🚀 Propósito

Este repositório foi criado para:

- Demonstrar um pouco de como a renderização do React funciona;
- Comparar a performance usando memorização e não usando;
- Servir como um guia prático para ajudar desenvolvedores a decidir quando e como usar a memorização do React;

---------

### 📁 Estrutura do Projeto

O repositório contém exemplos práticos utilizando três melhorias de performance:

1.	`useMemo`: Memoriza a referência de uma variável;
2.	`useCallback`: Memoriza a referência de uma função;
3.	`React.memo`: Faz com que o componente só seja re-renderizado após uma comparação de suas propriedades;

---------

### 📦 Instalação

Siga os passos abaixo para rodar o projeto localmente:
1.	Clone o repositório:
```bash
git clone https://github.com/lucasca2/memo-poc.git
cd memo-poc
```
	
2.	Instale as dependências:
```bash
npm install
```

3.	Rode o projeto:
```bash
npm run dev
```

4.	Acesse no navegador: http://localhost:3000

---------

### 📚 Recursos Adicionais

Links úteis sobre memorização no React:
- [Documentação oficial do React - Memo](https://react.dev/reference/react/memo)
- [Documentação oficial do React - useMemo](https://react.dev/reference/react/useMemo)
- [Documentação oficial do React - useCallback](https://react.dev/reference/react/useCallback)
- [Novo compilador React.js (Beta)](https://react.dev/learn/react-compiler)

---------

### 💡 Autor

Criado por [Lucas Costa Amaral](https://lucas.amaral.dev.br).
Se você achou útil, não esqueça de dar uma ⭐ no repositório e compartilhar com outros devs!
