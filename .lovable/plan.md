# Plano de ajustes visuais e estruturais

## 1. Contraste e legibilidade (global)

Atualizar `src/styles.css` para reforçar o contraste:

- Escurecer `--foreground` (de `oklch(0.25 0.04 240)` para algo próximo a `oklch(0.18 0.05 245)`) — texto principal mais firme sobre fundo branco.
- Escurecer `--muted-foreground` para melhorar leitura dos textos secundários (descrições dos cards).
- Tornar `--primary` mais saturado/escuro (de pastel claro para um azul pastel com mais profundidade), mantendo a paleta educacional, mas garantindo contraste AA em texto e botões.
- Ajustar `--gradient-hero` para iniciar em um tom mais profundo, mantendo o degradê suave para o verde menta/pêssego — preserva a psicologia das cores, mas dá presença.
- Reforçar `--border` levemente para que cards e divisórias fiquem visíveis.
- Revisar `gradient-text` para que o degradê resultante tenha contraste suficiente sobre fundo branco (escurecer a primeira parada do gradiente).

Resultado: mesma identidade pastel, porém com hierarquia visual e leitura claras.

## 2. Header redesenhado (`src/components/layout/Header.tsx`)

### 2.1. Nome correto
Trocar “Instituto CriarAtivaMente” por **“Instituto Criar Ativa Mente”** (três palavras separadas) tanto no `<span>` quanto no `alt` do logo.

### 2.2. Destaque para logo + tagline
- Aumentar o logo (de `h-9 w-9` para algo como `h-12 w-12`).
- Nome do instituto em `font-display`, peso bold, tamanho maior (ex.: `text-lg`/`text-xl`).
- Logo abaixo do nome, em linha menor (`text-xs`, `text-muted-foreground`, tracking levemente aumentado), adicionar a tagline: **“Transformando vidas pela educação”** (frase de efeito já usada no Hero).

### 2.3. Estrutura em duas linhas
Reorganizar o header em duas faixas:

```text
┌───────────────────────────────────────────────┐
│  [logo grande]  Instituto Criar Ativa Mente   │  ← linha 1 (faixa branca)
│                 Transformando vidas pela ...  │     + botão "Apoie" à direita
├───────────────────────────────────────────────┤
│  Início · Quem Somos · Soluções · Impacto · Parcerias · Transparência · Contato │  ← linha 2 (faixa secundary/30)
└───────────────────────────────────────────────┘
```

- Linha 1: logo + bloco de texto (nome + tagline) à esquerda, botão **Apoie** (gradient-hero) à direita. Em mobile, botão hambúrguer substitui a navegação.
- Linha 2: barra de navegação horizontal centralizada, fundo `bg-secondary/40` com `border-t border-b`, links com hover/active mantendo o padrão atual. Continua `sticky` no topo.
- Mobile (`lg:hidden`): apenas a linha 1 fica visível com o botão hambúrguer abrindo o `Sheet` lateral (sem a faixa de menu inferior).

### 2.4. Itens do menu (remoções)
Reduzir `navItems` removendo: **Metodologia**, **Escolas e Prefeituras**, **Conteúdos**.

Menu final:
- Início
- Quem Somos
- Soluções
- Impacto
- Parcerias
- Transparência
- Contato (mantido no menu mobile; no desktop continua acessível pelo botão Apoie / footer)

Observação: os arquivos de rota (`metodologia.tsx`, `escolas-prefeituras.tsx`, `conteudos.tsx`) e quaisquer links internos a essas páginas serão mantidos — apenas saem da navegação principal, para não quebrar links existentes no Footer ou em CTAs internas. Se preferir removê-las por completo, posso fazer em seguida.

## 3. Verificações finais

- Conferir visualmente o header em desktop e mobile (sticky, contraste, alinhamento da tagline).
- Garantir que o aumento do header não cubra conteúdo (ajustar padding/altura conforme necessário).
- Validar contraste de textos principais e secundários nas seções já existentes após o ajuste de tokens.

## Arquivos afetados

- `src/styles.css` — tokens de cor (foreground, muted-foreground, primary, border, gradient-hero).
- `src/components/layout/Header.tsx` — nova estrutura em duas linhas, logo destacado, tagline, lista de itens reduzida, correção do nome.
