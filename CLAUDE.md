# Mariane Rodrigues — Landing Page Institucional

Landing page para advogada com foco em apresentação de serviços e captação de contato.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS v4
- GitHub Pages (deploy via `gh-pages`)

## Arquitetura

SPA estática sem backend. Seções isoladas em componentes.

```
src/
├── components/    # Hero, Sobre, Servicos, Contato
├── assets/        # Imagens, ícones, fontes
├── index.css      # Tokens de tema via @theme (Tailwind v4)
└── App.tsx        # Composição das seções
```

## Regras de código

**Sem comentários.** O código deve se explicar pelos nomes.

**Semântico.** Use elementos HTML com significado real: `<section>`, `<article>`, `<header>`, `<nav>`, `<main>`, `<footer>`, `<address>`. Nunca `<div>` onde existe elemento semântico adequado.

**Declarativo.** Descreva o que renderizar, não como. Componentes pequenos, nomes que revelam intenção, sem lógica imperativa desnecessária.

**Nomes revelam intenção.** `ServiceCard`, `ContactForm`, `HeroHeadline` — nunca `Box`, `Wrapper`, `Component1`.

**Um componente, uma responsabilidade.** Se um componente precisa de comentário para ser entendido, ele precisa ser dividido ou renomeado.

## Convenções

- Componentes em `PascalCase`
- Arquivos de componente: `NomeDoComponente.tsx`
- Imports absolutos a partir de `src/`
- Tailwind para todos os estilos — sem CSS externo
- Tokens de design definidos via `@theme` em `src/index.css`

## Deploy

**O deploy nunca deve ser feito automaticamente.** Só pode ser executado manualmente pelo usuário.

Nunca rode `npm run deploy` ou qualquer comando que publique na branch `gh-pages` sem instrução explícita do usuário.

```bash
npm run deploy   # publica na branch gh-pages — somente quando o usuário pedir
```
