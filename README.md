# Albion - Projeto React Moderno

Projeto React com TypeScript, estruturado seguindo as melhores práticas de desenvolvimento web moderno, com foco em escalabilidade, manutenibilidade e type-safety.

## 🚀 Tecnologias

- **React 19.2.1+** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado de JavaScript com strict mode
- **React Router** - Navegação entre páginas
- **CSS Modules** - Estilos com escopo local
- **CSS Variables** - Design tokens para consistência visual
- **Create React App** - Tooling e configuração

## 📁 Estrutura do Projeto

```
albion/
├── public/                    # Arquivos estáticos
├── src/
│   ├── assets/               # Assets processados (icons, images, styles)
│   ├── components/           # Componentes reutilizáveis
│   │   ├── common/          # Componentes genéricos (Button, Input, Card)
│   │   ├── layout/          # Componentes estruturais (Header, Footer)
│   │   └── feedback/        # Feedback (Loading, ErrorBoundary)
│   ├── features/            # Funcionalidades por domínio
│   ├── pages/               # Componentes de página (rotas)
│   ├── hooks/               # Custom hooks globais
│   ├── services/            # Camada de comunicação com APIs
│   ├── domain/              # Lógica de negócio pura
│   │   ├── calculations/    # Cálculos isolados
│   │   ├── validators/      # Validações de negócio
│   │   ├── models/          # Classes/interfaces de domínio
│   │   └── constants/       # Constantes de domínio
│   ├── types/               # Definições de tipos TypeScript
│   ├── utils/               # Funções utilitárias genéricas
│   ├── context/             # React Context providers
│   ├── routes/              # Configuração de rotas
│   └── config/              # Configurações da aplicação
└── tsconfig.json            # Configuração TypeScript
```

## 🎯 Princípios de Organização

### Separação de Responsabilidades

- **`/components`** - Componentes reutilizáveis de UI, organizados por responsabilidade
- **`/features`** - Módulos auto-contidos organizados por domínio de negócio
- **`/domain`** - Lógica de negócio pura, sem dependências do React
- **`/services`** - Comunicação externa (APIs, HTTP)
- **`/utils`** - Funções utilitárias puras e genéricas
- **`/pages`** - Composições de componentes que representam rotas

### Convenções

- **Componentes**: PascalCase (`Button.tsx`, `LoginForm.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useAuth.ts`)
- **Utils**: camelCase (`formatDate.ts`)
- **CSS Modules**: `ComponentName.module.css`
- **Types**: `ComponentName.types.ts` ou `common.types.ts`

## 🛠️ Configuração Inicial

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Ajuste as variáveis conforme necessário.

### 3. Iniciar Servidor de Desenvolvimento

```bash
npm start
```

A aplicação abrirá em [http://localhost:3000](http://localhost:3000).

## 📜 Scripts Disponíveis

### `npm start`

Inicia o servidor de desenvolvimento.

### `npm test`

Executa os testes em modo watch.

### `npm run build`

Cria build otimizado para produção na pasta `build/`.

### `npm run type-check`

Executa verificação de tipos TypeScript sem emitir arquivos.

### `npm run eject`

**Atenção**: Operação irreversível! Remove a abstração do CRA.

## 🎨 Design System

O projeto utiliza CSS Variables para tokens de design:

- **Cores**: Primary, Neutral, Semantic
- **Espaçamentos**: xs, sm, md, lg, xl, 2xl, 3xl
- **Typography**: Tamanhos, pesos, line-heights
- **Shadows**: sm, md, lg, xl
- **Border Radius**: sm, md, lg, xl, full
- **Transitions**: fast, normal, slow

Acesse em: `src/assets/styles/variables.css`

## 🔗 Path Aliases

O projeto está configurado com path aliases para imports limpos:

```typescript
import Button from '@/components/common/Button';
import { calculateTax } from '@/domain/calculations/pricing';
import { ApiResponse } from '@/types/api.types';
```

Configurado em `tsconfig.json`.

## 🧪 Testes

Estrutura preparada para:

- Testes unitários ao lado dos arquivos (`.test.tsx`, `.test.ts`)
- Testes de integração em `src/tests/integration/`
- Setup global em `src/tests/setup.ts`

## 📝 Boas Práticas

### 1. Componentes não fazem cálculos complexos
```typescript
// ❌ Evitar
const MyComponent = () => {
  const total = calculateComplexLogic(data);
}

// ✅ Correto
// domain/calculations/pricing.ts
export const calculateComplexLogic = (data) => { ... }
```

### 2. Services não contêm regras de negócio
```typescript
// ❌ Evitar - Service com lógica
export const fetchUser = async (id) => {
  const user = await api.get(`/users/${id}`);
  user.isActive = user.status === 'active'; // ❌
  return user;
}

// ✅ Correto - Service apenas comunica
export const fetchUser = async (id) => {
  return await api.get(`/users/${id}`);
}
// Lógica fica em domain/models/User.ts
```

### 3. Utils são puros e testáveis
```typescript
// utils/format/currency.ts
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
```

## 🚀 Próximos Passos

1. Implementar componentes base em `/components/common` (Button, Input, Card)
2. Criar primeira feature em `/features`
3. Configurar ESLint + Prettier
4. Adicionar testes para utils e domain
5. Implementar ErrorBoundary global
6. Configurar CI/CD

## 📚 Recursos

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Router](https://reactrouter.com)

## 📄 Licença

Este projeto está sob a licença MIT.
