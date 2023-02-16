<h1 align="center"> Instagram Clone </h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-utilizar-em-sua-máquina">Como utilizar em sua máquina</a>
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias: 

- [React](https://pt-br.reactjs.org)
- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)

## 💻 Projeto

Este projeto consiste em um clone básico do [Instagram](https://www.instagram.com) utilizando React no front-end e, NodeJS e MongoDB no back-end onde, o mesmo conta com a maioria das características do Instagram original, como:
<ul>
  <li>Autenticação do usuário para executar determinadas tarefas.</li>
  <li>Criação, edição e exclusão de publicações próprias.</li>
  <li>Sistema de like e comentário em publicações.</li>
  <li>Pesquisa de publicações por título.</li>
  <li>Edição do perfil do usuário, inclusive alteração de senha.</li>
</ul>

## 🔗 Como utilizar em sua máquina

<ol>
  <li>
    Deverá clonar o repositório, utilizando o comando <code>git clone https://github.com/fco3lho/instagram-clone.git</code>
  </li>
  <li>
    Após realizar o clone, certifique-se de que você possui a versão mais recente do <a href="https://nodejs.org/en/">NodeJS</a> instalada em sua máquina.
  </li>
  <li>
    Na pasta do projeto, entre na pasta <code>/backend</code> e digite o comando <code>npm install</code> e aguarde enquanto as dependências do backend do projeto são instaladas.
  </li>
  <li>
    Na pasta do projeto, entre na pasta <code>/frontend</code> e digite o comando <code>npm install</code> e aguarde enquanto as dependências do frontend do projeto são instaladas.
  </li>
  <li>
    Resta agora apenas a conexão com o banco de dados, que você deve criar um para testes. E você pode fazer isso criando uma conta no <a href="https://account.mongodb.com/account/login">MongoDB</a> onde, pode ser criada usando sua conta Google ou sua conta Github.
  </li>
  <li>
    Após a criação da conta, crie um novo projeto clicando em <i>'New Project'</i>, dê um nome à ele e finalize o processo de criação.
  </li>
  <li>
    Ao terminar de criar o projeto, deverá agora criar o banco de dados, clicando em <i>'Build a Database'</i>. Configure-o da maneira que preferir e clique em <i>'Create'</i>.
  </li>
  <li>
    Você será redirecionado para uma página de configuração de segurança do banco de dados onde, deve criar um usuário e uma senha, que você deverá salvá-los para conectar ao banco de dados mais tarde.
  </li>
  <li>
    Mais abaixo você deverá inserir como entrada na lista de acesso o seu endereço IP clicando em <i>'Add My Current IP Address'</i>.
  </li>
  <li>
    Após criar o usuário e inserir o IP na lista de acesso, clique em <i>'Finish and Close'</i>.
  </li>
  <li>
    Você será redirecionado para a página de <i>'Database Deployments'</i> e deverá clicar em <i>'Connect'</i>, ao lado do nome do cluster criado.
  </li>
  <li>
    Clique na opção <i>'Connect your application'</i> e copie o código disponibilizado na sua tela.
  </li>
  <li>
    Para finalizar, vá até o arquivo <code>./backend/env</code> e troque as variáveis pelas fornecidas pelo projeto que você criou, exceto o <code>JWT_SECRET</code>. <br><br> Exemplo:
    
    PORT=5000
    DB_USER=test
    DB_PASSWORD=GniI5puBKnCZK1hs
    DB_IDCLUSTER=9fa9fvd
    JWT_SECRET=thisisoursecret

  <strong>Código exemplo de como ficaria com as variáveis usadas acima:</strong> <code>mongodb+srv://test:GniI5puBKnCZK1hs@cluster0.9fa9fvd.mongodb.net/?retryWrites=true&w=majority</code>

  <strong>Código exemplo:</strong> <code>mongodb+srv://&lt;user&gt;:&lt;password&gt;@cluster0.&lt;idcluster&gt;.mongodb.net/?retryWrites=true&w=majority</code>
  </li>
  <li>
    Sendo assim, você finalizou a configuração e pode executar o projeto executando o comando <code>npm run server</code> na pasta do backend, e logo em seguida, o comando <code>npm start</code> na pasta do frontend onde, será aberta uma página no seu navegador na porta em que o projeto está sendo executado.
  </li>
</ol>