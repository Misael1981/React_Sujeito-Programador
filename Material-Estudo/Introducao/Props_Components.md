# Mergulhando no coração do React: um guia sobre Props e Components

## Componentes: a espinha dorsal da sua aplicação

Imagine que sua aplicação React é um Lego. Cada peça que você encaixa para construir algo maior é um Componente . Eles são como **blocos de código independentes** que você pode **reutilizar** e **combinar** para criar interfaces complexas.

### Tipos de Components

- **Funcionais**: São como funções JavaScript que recebem dados (props) e retornam elementos HTML.

```
function BemVindo(props) {
  return <h1>Olá, {props.nome}!</h1>;
}
```

- **De Classe**: São como classes JavaScript com um método `render()` que recebe dados (props) e retorna elementos HTML.

```
class BemVindo extends React.Component {
  render() {
    return <h1>Olá, {this.props.nome}!</h1>;
  }
}
```

### Por que usar Componentes?

- **Reutilização**: Crie um componente uma vez e use-o em várias partes de sua aplicação.
- **Organização**: Divida sua interface em menores partes e mais, facilitando o desenvolvimento e a manutenção.
- **Abstração**: Esconda a complexidade por trás de componentes simples, tornando seu código mais legível.

## Props: a mágica da comunicação

**As Props** são como ingredientes que você passa para um componente. Eles permitem que os **components** recebam dados e se comportem de maneira diferente dependendo desses dados.

### Exemplo

```
<BemVindo nome="Luke" />
```

Neste exemplo, **"Luke"** é um **prop** chamado `nome` que está sendo passado para o **Component** `BemVindo`.

### Props são imutáveis

Uma vez que um componente receba um prop, ele **não poderá ser alterado**. Isso garante que o componente seja comportado de maneira **previsível** e **evite efeitos colaterais indesejados**.

### Por que usar Props?

- **Personalização**: Passe dados diferentes para um componente e faça com que ele se adapte a diferentes situações.
- **Comunicação**: Envie dados de um Componente pai para um Componente filho.
- **Flexibilidade**: Crie componentes genéricos que podem ser usados ​​em diferentes contextos.

### Exemplo completo

```
function BemVindo(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

function App() {
  return (
    <div>
      <BemVindo nome="Luke" />
      <BemVindo nome="Leia" />
    </div>
  );
}
```

Neste exemplo, o Component `App` renderiza dois Components `BemVindo`, cada um com um prop `nome` diferente.

### Dicas de mestre Jedi

- Comece com Componentes **pequenos** e **simples** e vá combinando-os para criar interfaces maiores.
- Use **nomes descritivos** para seus Componentes e Props.
- Pense em Componentes como **funções** que recebem dados e retornam elementos HTML.
- Não tenha medo de **experimentar** e **explorar** as possibilidades!

### [Voltar ao Menu Introdução e Conceitos Básicos](./menu.md)