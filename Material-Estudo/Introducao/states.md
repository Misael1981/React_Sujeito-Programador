# States

 As **states** "estados" do React.js são um conceito fundamental para criar aplicativos dinâmicos e interativos. Imagine que você está construindo um formulário de login. Os "estados" permitem que você armazene e atualize os valores dos campos de e-mail e senha na medida que o usuário os digita.

## O que são "estados" no React?

Em termos simples, "estados" são objetos JavaScript que contêm dados que podem mudar ao longo do tempo. Esses dados controlam o comportamento e a renderização de um componente React. Quando o estado de um componente muda, o React atualiza automaticamente a interface do usuário (UI) para refletir essas alterações.

## Por que usar "states"?

- **Interatividade**: Os "states" permitem que os componentes respondam às interações do usuário, como cliques, digitação e envio de formulários.
- **Dados dinâmicos**: Elas permitem que você exiba dados que mudam ao longo do tempo, como resultados de pesquisas, contadores e mensagens de erro.
- **Atualizações da UI**: O React atualiza automaticamente a UI quando o estado de um componente muda, garantindo que a interface esteja sempre sincronizada com os dados.

## Como usar "states" em componentes de função (Hooks):

A partir do React 16.8, os "Hooks" foram introduzidos, simplificando o uso de "states" em componentes de função. O "Hook" mais comum para gerenciar estados é o `useState`.

### Exemplo:

```
import React, { useState } from 'react';

function ExemploContador() {
  // Declara uma variável de estado chamada "contador"
  // e uma função para atualizá-la chamada "setContador"
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
      <button onClick={() => setContador(contador - 1)}>
        Decrementar
      </button>
    </div>
  );
}

export default ExemploContador;
```

### Explicação:

1. `useState(0)`: Inicializa a variável de estado "contador" com o valor 0.
2. `const [contador, setContador]`: Retorna um array com duas entradas: o valor atual do estado ("contador") e uma função para atualizá-lo ("setContador").
3. `onClick={() => setContador(contador + 1)}`: Quando o botão "Incrementar" é clicado, a função "setContador" é chamada com o novo valor do estado (contador + 1). O React então atualiza a UI para exibir o novo valor.

### Pontos importantes:

- Como “estados” são imutáveis. Isso significa que você não deve modificar o estado diretamente. Em vez disso, use a função de atualização de estado (por exemplo, "setContador") para criar uma nova versão do estado.
- O React pode agrupar várias chamadas "setState()" em uma única atualização para melhorar o desempenho.
- É importante lembrar que `useState` é apenas um dos ganchos de estado que podem ser usados, e existem outras formas de gerenciamento de estados, como o `useReducer` que é muito utilizado para estados mais complexos.

### [Voltar ao Menu Introdução e Conceitos Básicos](./menu.md)