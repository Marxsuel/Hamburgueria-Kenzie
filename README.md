<h1><strong> <img align="top" alt="Js" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">  Hamburgueria Kenzie - React</strong></h1>

<p><strong>Visão Geral:</strong></p>

<p>A aplicação <strong>Hamburgueria Kenzie</strong> simula um carrinho de compras, oferecendo uma experiência interativa para explorar produtos, adicionar itens ao carrinho e visualizar totais. A estilização responsiva garante uma navegação agradável em diferentes dispositivos.</p>
<hr>
<p><strong>Como Utilizar:</strong></p>
<p><strong>Instalação das Dependências:</strong></p>

<p>Para começar, clone o repositório e, em seguida, instale as dependências utilizando o seguinte comando no terminal:</p>


$ git clone https://github.com/Marxsuel/Hamburgueria-Kenzie.git
<br>
$ cd nome-do-repositorio
<br>
$ npm install
<br>
<p>Agora, a aplicação está pronta para ser utilizada! Execute o comando <code>npm start</code> ou <code>npm run dev</code> para iniciar a aplicação localmente.</p>

<hr>

<h1>Informações sobre a aplicação:</h1>

<p><strong>1. Estilização</strong></p>
<p>A estilização foi desenvolvida usando SASS para proporcionar uma experiência visual atrativa. A responsividade está integrada, garantindo uma interface adaptada a diversos tamanhos de tela.</p>
<p><strong>2. Trazendo Produtos da API | Busca</strong></p>
<p>Ao acessar a aplicação, a lista de produtos é automaticamente carregada a partir de uma API. Utilize o formulário de busca para encontrar produtos específicos, fornecendo o nome desejado. Os resultados são atualizados em tempo real.</p>
<p><strong>3. Gerenciamento do Carrinho | Modal</strong></p>
<p><strong>Adicionar e Remover Itens</strong></p>
<ul>
  <li>Explore a lista de produtos e adicione itens ao carrinho clicando no botão "Adicionar ao Carrinho".</li>
  <li>Remova itens do carrinho clicando no botão de remoção correspondente (ícone da lixeira).</li>
</ul>
<p><strong>Totais</strong></p>
<p>Os totais, incluindo o subtotal e o total geral, são automaticamente atualizados à medida que itens são adicionados ou removidos do carrinho.</p>
<p><strong>Persistência de Dados</strong></p>
<p>As informações do carrinho são automaticamente salvas no localStorage, garantindo que seus itens permaneçam mesmo ao recarregar a página.</p>
<p><strong>4. Modal</strong></p>
<p>O modal proporciona uma experiência intuitiva de abertura e fechamento. Ao clicar no botão "Ver Carrinho", o modal é exibido, mostrando uma visão resumida do conteúdo do carrinho. Clique fora do modal ou no botão "Fechar" para ocultá-lo.</p>

<br>
<h1>Tecnologias e Conceitos Utilizados:</h1>

<p>A <strong>Hamburgueria Kenzie</strong> utiliza as seguintes tecnologias e conceitos:</p>

<ul>
  <li>React</li>
  <li>SASS para estilização</li>
  <li>Responsividade para adaptação a diferentes dispositivos</li>
  <li>Manipulação de API para obtenção da lista de produtos</li>
  <li>Utilização do localStorage para persistência dos dados do carrinho</li>
  <li>Controle de estados com React Hooks, incluindo o <code>useEffect</code></li>
  <li>O <code>useEffect</code> é utilizado para trazer os produtos da API durante a montagem do componente, garantindo que a lista esteja disponível assim que o usuário acessar a aplicação. Além disso, é empregado para atualizar dinamicamente os resultados da busca à medida que o usuário insere o nome desejado.</li>
</ul>

