import styles from "./Home.module.scss";
import {
  stateWithMemoizedTitle,
  stateWithMemoizedTitleTitle,
  stateWithObject,
  stateWithObjectWithMemo,
  stateWithoutMemo,
  stateWithTwoSwitchers,
  stateWithTwoSwitchersWithMemo,
} from "./constants";
import React from "react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { StateWithoutMemo } from "./components/StateWithoutMemo/StateWithoutMemo";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { StateWithMemoizedTitle } from "./components/StateWithMemoizedTitle/StateWithMemoizedTitle";
import { StateWithTwoSwitchers } from "./components/StateWithTwoSwitchers/StateWithTwoSwitchers";
import { StateWithTwoSwitchersWithMemo } from "./components/StateWithTwoSwitchersWithMemo/StateWithTwoSwitchersWithMemo";
import { StateWithObject } from "./components/StateWithObject/StateWithObject";
import { StateWithObjectWithMemo } from "./components/StateWithObjectWithMemo/StateWithObjectWithMemo";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <h1>
        Performance com <code>React.memo</code> & <code>useMemo</code> &{" "}
        <code>useCallback</code>
      </h1>
      <p>
        Primeiramente, a gente tem que entender como que funciona o processo de
        re-renderização do React, e aí sim entender quando e como que a
        memorização pode ser útil.
      </p>
      <p>
        Basicamente, podemos dizer que toda re-renderização do React.js é
        causada por conta de um estado que foi alterado.
      </p>
      <p>
        Mas isso não significa que apenas o estado do componente é responsável
        por uma re-renderização. Calma! Vamos entender isso com calma.
      </p>

      <p>
        A mudança de estado é o inicio de tudo, mas muita coisa acontece por
        conta disso e a gente tem que entender como que o React.js funciona por
        baixo dos panos.
      </p>
      <p>
        Vamos focar em dois principais gatilhos que fazem um componente ser
        re-renderizado;
      </p>
      <h3>Quando uma propriedade do componente muda;</h3>
      <p>
        Se um estado que ta sendo passado por propriedade pra um componente é
        alterado, logo, esse componente precisa ser re-renderizado também, por
        conta disso sempre que uma propriedade de um componente muda, ele é
        re-renderizado.
      </p>
      <h3>Quando o componente pai é re-renderizado;</h3>
      <p>
        Quando um componente é re-renderizado, tudo nele é “recriado“ novamente,
        e isso inclui tudo que está no <code>return</code> também, então se um
        componente pai é re-renderizado, todos os seus filhos também são
        re-renderizados.
      </p>

      <h3>Na prática</h3>
      <p>
        É um pouco confuso no começo, mas na prática é um pouco mais fácil de
        entender o que está acontecendo por trás dos panos.
      </p>

      <p>Então vamos iniciar pensando em um componente assim:</p>
      <CodeBlock code={stateWithoutMemo} />
      <StateWithoutMemo />

      <p>
        Nesse exemplo a gente consegue perceber o básico do react funcionando.
      </p>
      <p>
        O componente <code>App</code> está sendo renderizado toda vez que o{" "}
        <code>switcherValue</code> é alterado.
      </p>
      <p>
        O componente <code>SwitcherContainer</code> está sendo renderizado toda
        vez que o estado <code>switcherValue</code> é alterado, por que o{" "}
        <code>switcherValue</code> está sendo passado como propriedade pra ele,
        logo ele realmente precisa ser re-renderizado!
      </p>
      <p>
        E a gente consegue perceber também, que o <code>Title</code> também foi
        re-renderizado, apenas por ser um componente filho de um componente que
        está sendo re-renderizado.
      </p>
      <h3>Primeiro caso de memorização;</h3>
      <p>
        Nesse momento já conseguimos pensar no nosso primeiro caso de
        memorização.
        <br />
        Afinal, não tem a menor necessidade do componente <code>
          Title
        </code>{" "}
        renderizar junto, sendo que ele é basicamente um “componente estático“,
        nenhuma propriedade dele foi alterada.
      </p>
      <p>
        É aí que entra a primeira mágica, o <code>React.memo</code>, que
        basicamente faz com que um componente só seja re-renderizado se alguma
        propriedade que ele recebe for alterada. Mesmo que o componente pai seja
        re-renderizado.
      </p>
      <p>Logo, isso resolveria nosso problema:</p>
      <CodeBlock code={stateWithMemoizedTitleTitle} />
      <p>
        E o componente <code>App</code> continuaria igual
      </p>
      <CodeBlock code={stateWithMemoizedTitle} />
      <StateWithMemoizedTitle />
      <p>
        Agora, o <code>Title</code> não é re-renderizado mais, por que nenhuma
        propriedade nem estado dele estão sendo alterados.
      </p>
      <p>
        O <code>SwitcherContainer</code> continua re-renderizando por que ele
        realmente depende do estado, não é um re-render desnecessário.
      </p>

      <h3>Fácil demais;</h3>
      <p>
        Até então ta muito fácil, na vida real nem sempre é assim tão simples,
        vamos complicar um pouco mais agora. E se nesse componente, a gente
        conseguisse alterar o estado a partir de dois lugares diferentes...
      </p>

      <CodeBlock code={stateWithTwoSwitchers} />
      <StateWithTwoSwitchers />

      <p>
        Bom... O mesmo problema que tivemos com o <code>Title</code> certo? Um{" "}
        <code>SwitcherContainer</code> está sendo re-renderizado quando eu
        altero o valor do outro. Só adicionar um <code>React.memo</code> que vai
        ser resolvido.
      </p>
      <p>
        E se eu te falasse que o <code>SwitcherContainer</code> já está usando o{" "}
        <code>React.memo</code>?
      </p>
      <p>
        Então o que está acontecendo? Nesse caso, o problema é um pouco
        diferente...
      </p>
      <p>
        Note que uma das propriedades que está sendo passada pro{" "}
        <code>SwitcherContainer</code> é uma função (<code>onToggle</code>).
      </p>
      <p>
        Quando comparamos duas funções javascript, elas são consideradas iguais
        apenas se elas tiverem a mesma referência.
        <br />
        Ou seja, mesmo se o conteúdo das funções forem exatamente IGUAL, se ela
        tiver sido “recriada“, o javascript vai considerar que são funções
        diferentes.
      </p>
      <p>Exemplo:</p>
      <CodeBlock
        code={`
const function1 = () => console.log("Hello World");
const function2 = () => console.log("Hello World");

console.log(function1 === function2); // false

const function3 = function1;

console.log(function1 === function3); // true
      `}
      />
      <p>Então o que está acontecendo é:</p>
      <ul>
        <li>
          1. Componente <code>App</code> é re-renderizado;
        </li>
        <li>
          2. Funções de <code>onToggle</code> são recriadas;
        </li>
        <li>3. As referências delas são alteradas;</li>
        <li>
          4. O React identifica que as propriedades dos componentes{" "}
          <code>SwitcherContainer</code> foram alteradas;
        </li>
        <li>
          5. Re-renderiza os componentes <code>SwitcherContainer</code>;
        </li>
      </ul>

      <p>
        Como resolver isso? Aí que entra o segundo feitiço, o{" "}
        <code>useCallback</code>
      </p>
      <p>
        O <code>useCallback</code> basicamente memoriza a função e faz com que
        ela não seja re-criada toda vez que o componente é re-renderizado,
        preservando a referência da função e assim evitando re-render
        desnecessário por conta do React achar que alguma propriedade mudou.
      </p>

      <p>
        É como se em cada re-render, o React invés de “recriar“ a função, ele
        reutilizasse a mesma que ele guardou na memória (caso nenhuma
        dependencia tenha sido alterada)
      </p>

      <CodeBlock code={stateWithTwoSwitchersWithMemo} />
      <StateWithTwoSwitchersWithMemo />

      <p>
        Agora sim! Agora o React consegue identificar exatamente quando a função
        é alterada de fato e a gente consegue evitar o re-render desnecessário!
      </p>
      <p>
        <strong>
          OBS: É obrigatório o uso do <code>React.memo</code>, caso contrário,
          nessa situação, o <code>useCallback</code> não terá efeito nenhum, sem
          o <code>React.memo</code> cairá na mesma situação do primeiro cenário,
          o <code>SwitcherContainer</code> vai re-renderizar apenas por que o
          componente pai re-renderizou...
        </strong>
      </p>
      <h3>Complicando um pouco mais...</h3>
      <p>
        Ok, agora que entedemos como o <code>useCallback</code> funciona, vamos
        complicar um pouco mais o nosso componente...
      </p>
      <p>
        Na vida real, trabalhamos com dados vindo de diversos lugares e é muito
        comum utilizar estruturas como Array e Objetos pra transportar esses
        dados
      </p>
      <p>
        E se o nosso componente passasse um objeto ou um array como propriedade
        pra algum filho?
      </p>

      <CodeBlock code={stateWithObject} />
      <StateWithObject />

      <p>
        Bom, o mesmo problema que tivemos com as funções, acontece com os
        objetos/arrays também...
        <br />
        Com o javascript é a mesma coisa, se você criar um objeto novo, ele vai
        ter uma referência diferente do objeto anterior, mesmo que o conteúdo
        seja o mesmo.
      </p>
      <p>Exemplo:</p>
      <CodeBlock
        code={`
const object1 = { name: "John", age: 25 };
const object2 = { name: "John", age: 25 };

console.log(object1 === object2); // false

const object3 = object1;

console.log(object1 === object3); // true
        `}
      />

      <p>Então o que está acontecendo é:</p>
      <ul>
        <li>
          1. Componente <code>App</code> é re-renderizado;
        </li>
        <li>
          2. O objeto <code>user</code> é recriado;
        </li>
        <li>3. A referência dele é alterada;</li>
        <li>
          4. O React identifica que as propriedades do componente{" "}
          <code>User</code> foram alteradas;
        </li>
        <li>
          5. Re-renderiza o componente <code>User</code>;
        </li>
      </ul>

      <p>
        Mas dessa vez não podemos usar o <code>useCallback</code> pra resolver
        isso, por sorte temos um cara tão bom quanto chamado{" "}
        <code>useMemo</code> que faz exatamente a mesma coisa, mas para dados
        estáticos como objetos e arrays. (Ou qualquer coisa que não seja uma
        função)
      </p>

      <CodeBlock code={stateWithObjectWithMemo} />
      <StateWithObjectWithMemo />

      <p>
        Agora sim! O <code>User</code> não é re-renderizado mais
      </p>
      <p>Agora o que está acontecendo é:</p>
      <ul>
        <li>
          1. Componente <code>App</code> é re-renderizado;
        </li>
        <li>
          2. O objeto <code>user</code> não é recriado, por conta do{" "}
          <code>useMemo</code>;
        </li>
        <li>3. A referência dele continua a mesma;</li>
        <li>
          4. O React identifica que as propriedades do componente{" "}
          <code>User</code> não foram alteradas;
        </li>
        <li>
          5. O componente <code>User</code> não é re-renderizado novamente;
        </li>
      </ul>
      <p>
        <strong>
          OBS: Mesma coisa do <code>useCallback</code>. É obrigatório o uso do{" "}
          <code>React.memo</code>, caso contrário, nessa situação, não terá
          efeito nenhum, sem o <code>React.memo</code> cairá na mesma situação
          do primeiro cenário lá em cima, o <code>User</code> vai acabar sendo
          re-renderizado apenas por que o componente pai re-renderizou...
        </strong>
      </p>

      <h3>
        Mas não é só pra isso que serve o <code>useMemo</code> e o{" "}
        <code>useCallback</code>
      </h3>

      <p>
        Terão vezes que a gente vai precisar usar o <code>useMemo</code> e o{" "}
        <code>useCallback</code> pra resolver outras coisas que não sejam apenas
        evitar re-renderizações desnecessárias.
      </p>
      <p>
        Os exemplos que eu dei eram todos focados em evitar re-renderizações em
        conjunto com o <code>React.memo</code>, mas eles tem outras utilidades
        também.
      </p>
      <p>
        Por exemplo, o <code>useMemo</code> pode ser usado pra fazer cálculos
        pesados e evitar que eles sejam refeitos toda vez que o componente é
        re-renderizado.
      </p>
      <CodeBlock
        code={`
const sum = useMemo(() => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}, [])
      `}
      />

      <p>
        Imagina toda hora que um componente re-renderizar (agora que você sabe
        como funciona) ele ter que re-fazer esse cálculo de novo... Não é muito
        legal né?
      </p>
      <p>
        O <code>useCallback</code> e <code>useMemo</code> também pode ser usado
        pra evitar disparar um <code>useEffect</code> desnecessariamente, por
        exemplo.
      </p>
      <CodeBlock
        code={`
const handleFunction = useCallback(() => {
  console.log("Hello World");
}, []);

useEffect(() => {
  handleFunction();
}, [handleFunction]);
        `}
      />
      <p>
        Sem o <code>useCallback</code> nesse caso, toda vez que o componente
        re-renderizar, o<code>handleFunction</code> seria recriado, e o{" "}
        <code>useEffect</code> seria disparado, por que ele não conseguiria
        identificar que a função é a mesma. Por conta que a referência da função
        mudou.
      </p>
      <p>
        E o mesmo vale pro <code>useMemo</code>, se você tiver colocando objetos
        ou arrays como dependências de um <code>useEffect</code>, por exemplo, e
        toda vez que o componente re-renderizar, ele vai recriar o objeto e o{" "}
        <code>useEffect</code> vai ser disparado, por que ele não vai conseguir
        identificar que o objeto é o mesmo.
      </p>
      <p>
        Mas isso foi apenas pra mostrar que o <code>useCallback</code> e o{" "}
        <code>useMemo</code> não server apenas pra serem utilizado em conjunto
        com o <code>React.memo</code>, eles tem outras utilidades também.
      </p>

      {/* ------------ */}
      <h2>Considerações finais</h2>
      <p>
        Claro que os exemplos que eu dei aqui são bem simples e não refletem
        necessariamente a realidade de todas as aplicações, mas a ideia é
        mostrar como o <code>React.memo</code>, <code>useMemo</code> e o{" "}
        <code>useCallback</code> podem ser úteis em situações do dia a dia.
      </p>
      <p>
        Muitas vezes acabam usando o <code>useMemo</code> e o{" "}
        <code>useCallback</code> sem realmente entender o que está acontecendo,
        e a longo prazo isso pode acabar se tornando um problema. Por mais que o
        custo seja pequeno, o <code>useMemo</code> e o <code>useCallback</code>{" "}
        tem um custo de performance, afinal, eles estão fazendo um trabalho
        extra por trás dos panos.
      </p>
      <p>
        Então é sempre bom entender como eles funcionam de verdade pra saber
        quando realmente é necessário usá-los.
      </p>
      <p>Mas também não adianta fazer um terror em cima disso...</p>
      <p>
        Na minha humilde opinião, na maioria das vezes,{" "}
        <strong>em aplicações pequenas</strong>, o uso de
        <code>useMemo</code> e <code>useCallback</code> em excesso não vai
        causar um impacto tão grande na performance... Teria que ser um uso
        muito grande pra isso começar realmente a ficar perceptível.
      </p>
      <p>
        É mais fácil um problema de performance ser causado por conta da
        ausencia deles do que pelo excesso deles. Mas use com moderação! 😂
      </p>

      <p>
        Fique a vontade pra instalar o{" "}
        <a href="https://github.com/lucasca2/state-poc">repositório</a> e fazer
        mais testes por conta própria!
      </p>
      <div className={styles.alert}>
        <span>
          Um detalhe importante que vale ser mencionado é que o React está
          trabalhando em um{" "}
          <a href="https://react.dev/learn/react-compiler" target="_blank">
            compilador
          </a>{" "}
          muito mais robusto, que será capaz de fazer muitas dessas memorizações
          automáticamente sem precisar ficar passando <code>React.memo</code>,
          etc... O novo{" "}
          <a href="https://react.dev/learn/react-compiler" target="_blank">
            compilador
          </a>{" "}
          até então está em beta, mas já da pra ser testado por quem quiser.
          <br />
          Mais informações:{" "}
          <a href="https://react.dev/learn/react-compiler" target="_blank">
            React Compiler
          </a>
        </span>
      </div>
      <Footer />
    </div>
  );
};
