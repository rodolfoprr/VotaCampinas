angular.module('votaCampinas').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\r\n  <h1>404</h1>\r\n  <p>Page Not Found</p>\r\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\r\n  <h3>Contact Form</h3>\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n  <form ng-submit="sendContactForm()">\r\n    <label for="name">Name</label>\r\n    <input type="text" name="name" id="name" ng-model="contact.name" autofocus>\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" ng-model="contact.email">\r\n    <label for="message">Body</label>\r\n    <textarea name="message" id="message" rows="7" ng-model="contact.message"></textarea>\r\n    <br>\r\n    <button type="submit">Send</button>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('partials/footer.html','<div class="flex-footer">\r\n  <a href="http://minhacampinas.org.br" class="brand-logo footer-item" target="_blank">\r\n    <img src="img/logomc.png" alt="Logotipo Minha Campinas">\r\n  </a>\r\n  \r\n  <a href="http://doe.minhacampinas.org.br" class="waves-effect btn btn-doe footer-item">\r\n    <strong>Doe agora!</strong>\r\n  </a>\r\n\r\n  <span class="disclaimer footer-item">\r\n    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licen\xE7a Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Este trabalho est\xE1 licenciado com uma Licen\xE7a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons - Atribui\xE7\xE3o-N\xE3oComercial-CompartilhaIgual 4.0 Internacional</a>.\r\n  </span>\r\n  \r\n  <div class="footer-item">\r\n    <a href="https://www.facebook.com/minhacampinas/" target="_blank" class="social-link"><i class="white-text fa fa-facebook fa-2x" aria-hidden="true"></i></a>\r\n    <a href="https://twitter.com/minhacampinas" target="_blank" class="social-link"><i class="white-text fa fa-twitter fa-2x" aria-hidden="true"></i></a>\r\n  </div>\r\n</div>');
$templateCache.put('partials/forgot.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n\r\n  <form ng-submit="forgotPassword()">\r\n    <h4>Esqueci minha senha</h4>\r\n    <p>Digite seu email abaixo e n\xF3s lhe enviaremos instru\xE7\xF5es de redefini\xE7\xE3o de senha.</p>\r\n    <label for="email">E-mail</label>\r\n    <input type="email" name="email" id="email" placeholder="E-mail" ng-model="user.email" autofocus>\r\n  \r\n  <div class="row">\r\n    <div class="col s12 m4 l3 right">\r\n      <button type="submit" class="btn lg finalizar">Recuperar senha</button>\r\n    </div>\r\n  </div>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('partials/header.html','<nav class="page-header darken-4" ng-controller="HeaderCtrl">\r\n  <div class="nav-wrapper container">\r\n      <a href="/" class="brand-logo" style="height: 100%;">\r\n        <img src="img/logo.png" alt="" style="height: 100%;">\r\n      </a>\r\n      <a href="#" class="button-collapse" data-activates="mobile-demo" data-sidenav="left" data-menuwidth="500" data-closeonclick="false"><i class="material-icons">menu</i></a>\r\n\r\n      <ul class="right hide-on-med-and-down">\r\n        <li ng-class="{ active: isActive(\'/projeto\')}"><a href="/projeto" ng-click="closeNav()">O Projeto</a></li>\r\n        <li ng-class="{ active: isActive(\'/como-funciona\')}"><a href="/como-funciona" ng-click="closeNav()">Como funciona</a></li>\r\n        <li ng-class="{ active: isActive(\'/login\')}" ng-if="!isAuthenticated()"><a href="/login">Entrar</a></li>\r\n        <li ng-class="{ active: isActive(\'/cadastro\')}" ng-if="!isAuthenticated()"><a href="/cadastro">Cadastre-se</a></li>\r\n        <li ng-class="{ active: isActive(\'/account\')}" ng-if="isAuthenticated()"><a href="/account">Meu perfil</a></li>\r\n        <li ng-class="{ active: isActive(\'/perguntas\')}" ng-if="isAuthenticated()"><a href="/perguntas">Quest\xF5es</a></li>\r\n        <li ng-class="{ active: isActive(\'/ranking\')}" ng-if="isAuthenticated() && !currentUser.ehVereador && pagina >= 18"><a href="/ranking">Ranking</a></li>\r\n        <li ng-if="isAuthenticated()"><a href="#" ng-click="logout()">Sair</a></li>\r\n      </ul>\r\n       <ul class="side-nav" id="mobile-demo">\r\n        <li ng-class="{ active: isActive(\'/projeto\')}"><a href="/projeto" ng-click="closeNav()">O Projeto</a></li>\r\n        <li ng-class="{ active: isActive(\'/como-funciona\')}"><a href="/como-funciona" ng-click="closeNav()">Como funciona</a></li>\r\n        <li ng-class="{ active: isActive(\'/login\')}" ng-if="!isAuthenticated()"><a href="/login" ng-click="closeNav()">Entrar</a></li>\r\n        <li ng-class="{ active: isActive(\'/cadastro\')}" ng-if="!isAuthenticated()"><a href="/cadastro" ng-click="closeNav()">Cadastre-se</a></li>\r\n        <li ng-class="{ active: isActive(\'/account\')}" ng-if="isAuthenticated()"><a href="/account" ng-click="closeNav()">Meu Perfil</a></li>\r\n        <li ng-class="{ active: isActive(\'/perguntas\')}" ng-if="isAuthenticated()"><a href="/perguntas" ng-click="closeNav()">Quest\xF5es</a></li>\r\n        <li \r\n          ng-class="{ active: isActive(\'/ranking\')}" \r\n          ng-if="isAuthenticated()">\r\n          <a href="/ranking" ng-click="closeNav()" data-ng-show="isAuthenticated() && !currentUser.ehVereador && pagina >= 18">Ranking</a>\r\n        </li>\r\n        <li ng-if="isAuthenticated()"><a href="#" ng-click="logout()">Sair</a></li>\r\n       </ul>\r\n  </div>\r\n  <div class="col s10"></div>\r\n</nav>\r\n');
$templateCache.put('partials/login.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Log In</h4>\r\n\r\n  <form ng-submit="login()">\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\r\n    <label for="password">Password</label>\r\n    <input type="password" name="password" id="password" placeholder="Password" ng-model="user.password">\r\n    <p><a href="/forgot">Forgot your password?</a></p>\r\n    <button type="submit">Log in</button>\r\n  </form>\r\n\r\n  <hr>\r\n\r\n  <button ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\r\n  <br>\r\n\r\n  <p>Don\'t have an account? <a href="/signup">Sign up</a></p>\r\n</div>\r\n');
$templateCache.put('partials/profile.html','<div class="container paddingRow">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Meu perfil</h4>\r\n\r\n  <form ng-submit="updateProfile()">\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" ng-model="profile.email">\r\n\r\n    <label for="name">Nome</label>\r\n    <input type="text" name="name" id="name" ng-model="profile.name">\r\n\r\n    <button class="btn waves-effect waves-light" type="submit" name="action">Atualizar perfil\r\n      <i class="material-icons right">send</i>\r\n    </button>\r\n  </form>\r\n\r\n  <br>\r\n  <hr>\r\n\r\n  <h4>Alterar senha</h4>\r\n\r\n  <form ng-submit="changePassword()">\r\n    <div>\r\n      <label for="password">Nova senha</label>\r\n      <input type="password" name="password" id="password" ng-model="profile.password">\r\n    </div>\r\n    <div>\r\n      <label for="confirm">Confirme sua senha</label>\r\n      <input type="password" name="confirm" id="confirm" ng-model="profile.confirm">\r\n    </div>\r\n    <br>\r\n\r\n    <button class="btn waves-effect waves-light" type="submit" name="action">Atualizar senha\r\n      <i class="material-icons right">send</i>\r\n    </button>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('partials/reset.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Troca de senha</h4>\r\n\r\n  <form ng-submit="resetPassword()">\r\n    <label for="password">Nova senha</label>\r\n    <input type="password" name="password" id="password" placeholder="Nova senha" ng-model="user.password" autofocus>\r\n    <label for="confirm">Confirme sua nova senha</label>\r\n    <input type="password" name="confirm" id="confirm" placeholder="Confirmar senha" ng-model="user.confirm">\r\n  </form>\r\n  <div class="row">\r\n    <div class="col s12 m4 l3 right">\r\n      <button type="submit" class="btn lg finalizar">Trocar senha</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/signup.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Create an account</h4>\r\n\r\n  <form ng-submit="signup()">\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\r\n    <label for="name">Name</label>\r\n    <input type="text" name="name" id="name" placeholder="Name" ng-model="user.name">\r\n    <label for="password">Password</label>\r\n    <input type="password" name="password" id="password" placeholder="Password" ng-model="user.password">\r\n    <p>By signing up, you agree to the <a href="/">Terms of Service</a>.</p>\r\n    <button type="submit">Create an account</button>\r\n  </form>\r\n\r\n  <hr>\r\n\r\n  <button ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\r\n  <br>\r\n\r\n  <p>Already have an account? <a href="/login">Log in</a></p>\r\n</div>\r\n');
$templateCache.put('partials/cadastro/cadastro.html','<div class="loading-bar-container"></div>\r\n<div class="container">\r\n  <div class="row">\r\n    <div class="col s12">\r\n        <h1>Cadastro</h1>\r\n    </div>\r\n\r\n\r\n    <div ng-if="messages.error" role="alert" class="text-danger col s12">\r\n      <p class="center-align" ng-repeat="error in messages.error">{{error.msg}}</p>\r\n    </div>\r\n\r\n    <div class="col s12">\r\n      <form name="cadastro" ng-submit="enviar()">\r\n        <div class="dados-pessoais">\r\n          <div class="row">\r\n            <div class="input-field col s12">\r\n              <input id="nome" type="text" name="name" data-ng-model="user.name" ng-required="required" autofocus>\r\n              <label for="nome">Nome</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="col s12">\r\n              <input type="checkbox" id="sou-candidato" data-ng-model="user.ehVereador"/>\r\n              <label for="sou-candidato">Sou Candidato</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="exclusivo-candidato" data-ng-show="user.ehVereador">\r\n            <div class="row">\r\n              <div class="input-field col s6">\r\n                <select class="browser-default" data-ng-model="user.vereador.partidoId" data-ng-options="partido.id as partido.sigla for partido in partidos" ng-required="user.ehVereador">\r\n                  <option value="">Selecione um partido</option>\r\n                </select>\r\n              </div>\r\n              <div class="input-field col s6">\r\n                <input id="vereador-numero" type="number" class="validate" data-ng-model="user.vereador.numero" ng-required="user.ehVereador">\r\n                <label for="vereador-numero">N\xFAmero do candidato(a)</label>\r\n              </div>\r\n            </div>\r\n\r\n             <div class="row">\r\n               <div class="input-field col s12">\r\n                 <input id="cnpj" type="text" class="validate" data-ng-model="user.vereador.cnpj" ng-required="user.ehVereador" ng-minlength="18">\r\n                 <label for="cnpj">CNPJ</label>\r\n               </div>\r\n             </div>\r\n\r\n             <div class="row">\r\n              <div class="input-field col s12">\r\n                <textarea id="descricao" class="materialize-textarea" maxlength="255" data-ng-model="user.vereador.descricao" ng-required="user.ehVereador"></textarea>\r\n                <label for="descricao">Descri\xE7\xE3o - Esta ser\xE1 a descri\xE7\xE3o do seu perfil para o eleitor (No m\xE1ximo 255 caracteres)</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="dados-conta">\r\n          <!--<h4>Conta</h4>-->\r\n\r\n          <div class="row">\r\n            <div class="input-field col s12">\r\n              <input id="email" type="email" class="validate" data-ng-model="user.email" ng-required="required">\r\n              <label for="email">E-mail</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="input-field col s12">\r\n              <input id="senha" type="password" class="validate" data-ng-model="user.password" ng-required="required">\r\n              <label for="senha">Senha</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="input-field col s12">\r\n              <input id="confirme-senha" type="password" class="validate" data-ng-model="user.passwordConfirm" ng-required="required">\r\n              <label for="confirme-senha">Confirme sua Senha</label>\r\n              <span class="pink-text text-darken-2" data-ng-show="user.password !== user.passwordConfirm">As senhas n\xE3o coincidem</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="row">\r\n            <div class="col s12">\r\n              <input type="checkbox" id="emails-minha-campinas" data-ng-checked="true" data-ng-model="user.aceitaEmailsMobilizacao" />\r\n              <label for="emails-minha-campinas">Voc\xEA gostaria de receber e-mails de mobiliza\xE7\xE3o da Minha Campinas?</label>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <a href="/login">Voltar</a>\r\n        <button class="btn right waves-effect waves-light" name="action" data-ng-disabled="cadastro.$invalid || cadastro.$submitted">Cadastrar\r\n            <i class="material-icons right">send</i>\r\n        </button>\r\n\r\n      </form>\r\n    </div>\r\n    <div class="row">\r\n      <div class="col s12">\r\n        <h1>Se o sistema n\xE3o avan\xE7ar aguarde alguns minutos e\r\n          tente se logar com o e-mail e senha que cadastrou.</h1>\r\n      </div\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/candidato/candidato.html','<div class="loading-bar-container"></div>\r\n<div class="container perfil-candidato">\r\n  <div class="col s12">\r\n      <h1>Perfil do Candidato</h1>\r\n  </div>\r\n  <div class="dados-candidato">\r\n\t  <div class="col s12 m12">\r\n\t\t\t<div class="card">\r\n\t\t\t  <div class="card-panel large">\r\n\t\t\t  <div class="card-content row">\r\n          <div class="col s12 m3 foto-candidato">\r\n            <img src="{{candidato.foto ? candidato.foto : \'img/avatar.jpg\'}}" alt="Foto do cadidato {{candidato.nome}}">\r\n          </div>\r\n          <div class="col s12 m9">\r\n            <span class="card-title grey-text text-darken-4 nome-candidato">\r\n  \t\t\t  \t\t{{candidato.nome}} - {{candidato.numero}}\r\n  \t\t\t  \t</span>\r\n  \t\t\t  \t<p>{{candidato.partidoSigla}} ({{candidato.partidoNome}})</p>\r\n  \t\t\t  \t<p>{{candidato.descricao}}</p>\r\n          </div>\r\n\t\t\t  </div>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t  </div>\r\n  </div>\r\n  <div class="respostas-candidato">\r\n  \t<h2>Respostas</h2>\r\n\r\n    <div class="perguntasErespostas" ng-repeat="pergunta in perguntas">\r\n       <p class="pergunta">{{$index + 1}}. <strong>{{pergunta.pergunta}}</strong></p>\r\n       <p class="respostas">\r\n         <strong>Sua Resposta: </strong> <span>{{possiveisRespostas[respostasEleitor[$index].resposta]}}</span><br>\r\n         <strong>Resposta do candidato:</strong> <span>{{possiveisRespostas[candidato.respostas[$index].resposta]}}</span><br>\r\n         <strong ng-show="candidato.respostas[$index].justificativa">Justificativa do candidato:</strong> <span>{{candidato.respostas[$index].justificativa}}</span>\r\n       </p>\r\n       <hr>\r\n    </div>\r\n  </div>\r\n  <a href="/ranking" class="btn">Voltar</a>\r\n</div>\r\n');
$templateCache.put('partials/comofunciona/como-funciona.html','<div class="container-fluid fp">\r\n<div class="container">\r\n    <div class="row">\r\n        <div class="col s12 center-align">\r\n            <h1>Como Funciona</h1>\r\n        </div>\r\n     </div>\r\n     <div class="row paddingRowSmall">\r\n        <div class="col s12 m6 l3 center-align">\r\n            <img src="img/Fluxo-1.png" height="110px" alt="fluxo01"/>\r\n            <p>Voc\xEA responde um question\xE1rio de (no m\xEDnimo) 21 quest\xF5es</p>\r\n        </div>\r\n        <div class="col s12 m6 l3 center-align">\r\n            <img src="img/Fluxo-2.png" height="110px" alt="fluxo02"/>\r\n            <p> N\xF3s cruzamos as suas respostas com as das candidatas e candidatos cadastrados</p>\r\n        </div>\r\n        <div class="col s12 m6 l3 center-align">\r\n            <img src="img/Fluxo-3.png" height="110px" alt="fluxo03"/>\r\n            <p>Te informamos quem dos candidatos pensa mais parecido com voc\xEA.</p>\r\n        </div>\r\n        <div class="col s12 m6 l3 center-align">\r\n            <img src="img/Fluxo-4.png" height="110px" alt="fluxo04"/>\r\n            <p>Voc\xEA pode olhar as respostas e perfil de todas as candidatas e candidatos</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>');
$templateCache.put('partials/home/home.html','<div class="container-fluid home">\r\n<div class="row">\r\n\t<div class="col s12 center-align">\r\n        <div class="bg">\r\n            <img src="img/logohexagono.png" width="20%"/>\r\n            <h2>Voc\xEA j\xE1 sabe em quem votar para vereador(a)?</h2>\r\n            \r\n            <h5>Compare suas ideias com as das candidatas e candidatos a vereador(a). </h5>\r\n            <h5 style="color:#feb557; padding: 3%;"><strong>Encontre quem pensa como voc\xEA e decida seu voto!</strong></h5>\r\n            <br />\r\n            <p><a href="/prioridades" class="waves-effect waves-light btn"><font color="#57455c"> <strong>Iniciar</strong></font></a></p>\r\n        </div>\r\n\t</div>\r\n</div>\r\n    ');
$templateCache.put('partials/login/login.html','<div class="loading-bar-container"></div>\r\n<div class="container">\r\n  <div class="row">\r\n    <div class="col s12">\r\n      <h1>Login</h1>\r\n    </div>\r\n\r\n    <div ng-if="messages.error" role="alert" class="text-danger col s12">\r\n      <p class="center-align" ng-repeat="error in messages.error">{{error.msg}}</p>\r\n    </div>\r\n\r\n    <form data-ng-submit="enviar()" name="formLogin" class="col s8 pull-s2 center-align">\r\n      <div class="col s12 input-field">\r\n        <label for="email">E-mail</label>\r\n        <input id="email" name="email" type="email" data-ng-model="user.email" ng-required="true" autofocus>\r\n      </div>\r\n\r\n      <div class="col s12 input-field">\r\n        <label for="password">Senha</label>\r\n        <input id="password" name="password" type="password" data-ng-model="user.password" ng-required="true" ng-minlength="">\r\n      </div>\r\n\r\n      <div class="col s12 input-field">\r\n        <button type="submit" class="btn" ng-disabled="formLogin.$invalid || formLogin.$submitted">Entrar</button>\r\n      </div>\r\n    </form>\r\n\r\n\r\n    <div class="col s12">\r\n      <ul>\r\n        <li><a data-ng-href="/cadastro">Cadastre-se</a></li>\r\n        <li><a data-ng-href="/recuperar-senha">Esqueci minha senha</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/perguntas/perguntas.html','<div class="loading-bar-container"></div>\r\n<div class="container questoes">\r\n  <div class="row">\r\n    <div class="col s12" data-ng-hide="pagina === perguntas.length">\r\n        <h1>Analise as afirma\xE7\xF5es</h1>\r\n        <span>{{pagina + 3}} / {{perguntas.length + 3}}</span>\r\n    </div>\r\n    <div class="col s12">\r\n      <div class="progress">\r\n        <div\r\n          class="determinate"\r\n          style="width: {{((pagina + 3) / (perguntas.length + 3))*100}}%"\r\n          ng-class="pagina < 15 ? \'red\' : \'\'">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="col s12">\r\n      <form novalidate>\r\n          <h4 class="center-align" ng-show="pagina === perguntas.length">Voc\xEA finalizou as quest\xF5es, muito obrigado! :)</h4>\r\n          <p ng-show="pagina < perguntas.length">{{perguntas[pagina].pergunta}}</p>\r\n          <ul class="form-questoes" ng-show="pagina < perguntas.length">\r\n            <li>\r\n              <input ng-click="next()" ng-model="perguntas[pagina].resposta" name="resposta-{{perguntas[pagina]}}" id="resposta-2-{{perguntas[pagina]}}" type="radio" value="2" ng-disabled="enviando"/>\r\n              <label for="resposta-2-{{perguntas[pagina]}}">Concordo plenamente</label>\r\n             </li>\r\n             <li>\r\n               <input ng-click="next()" ng-model="perguntas[pagina].resposta" name="resposta-{{perguntas[pagina]}}" id="resposta-4-{{perguntas[pagina]}}" type="radio" value="4" ng-disabled="enviando"/>\r\n               <label for="resposta-4-{{perguntas[pagina]}}">Concordo</label>\r\n             </li>\r\n             <li>\r\n                <input ng-click="next()" ng-model="perguntas[pagina].resposta" name="resposta-{{perguntas[pagina]}}" id="resposta-1-{{perguntas[pagina]}}" type="radio" value="1" ng-disabled="enviando"/>\r\n                <label for="resposta-1-{{perguntas[pagina]}}">Discordo</label>\r\n             </li>\r\n             <li>\r\n               <input ng-click="next()" ng-model="perguntas[pagina].resposta" name="resposta-{{perguntas[pagina]}}" id="resposta-3-{{perguntas[pagina]}}" type="radio" value="3" ng-disabled="enviando"/>\r\n               <label for="resposta-3-{{perguntas[pagina]}}">Discordo plenamente</label>\r\n             </li>\r\n          </ul>\r\n\r\n          <br>\r\n\r\n          <div class="row" ng-show="currentUser.ehVereador && pagina !== perguntas.length">\r\n            <div class="col s12">\r\n              <label for="justificativa">Justificativa</label>\r\n              <input id="justificativa" name="justificativa" type="text" data-ng-model="perguntas[pagina].justificativa" maxlength="255">\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col s12 m12 l12">\r\n              \r\n\r\n              <div class="col s12 m4 l3 right">\r\n                <button class="btn right"\r\n                  type="button" \r\n                  ng-show="currentUser.ehVereador && pagina !== perguntas.length"\r\n                  ng-click="nextVereador(perguntas[pagina].resposta)"\r\n                  ng-disabled="!perguntas[pagina].resposta || enviando">\r\n                  Pr\xF3xima\r\n                </button>\r\n\r\n                <a class="btn right lg finalizar"\r\n                  ng-show="pagina === perguntas.length || pagina >= 18 && !currentUser.ehVereador"\r\n                  href="/ranking">\r\n                  Finalizar\r\n                </a>\r\n                \r\n              </div>\r\n              <div class="col s12 m4 l3">\r\n                <input ng-click="back()" ng-show="pagina > 0" type="button" class="btn lg" value="Voltar">\r\n\r\n                <button class="btn pular tooltipped lg right"\r\n                   type="button"\r\n                   data-position="left"\r\n                   data-delay="30"\r\n                   data-tooltip="{{pagina >= 15 ? \'Salvar resposta em branco\' : \'Voc\xEA s\xF3 pode pular a partir da 18\xAA quest\xE3o\'}}"\r\n                   ng-click="pular()"\r\n                   ng-hide="(currentUser.ehVereador) || pagina === perguntas.length"\r\n                   data-ng-disabled="enviando">\r\n                   * Pular\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class="row">\r\n          </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/prioridades/prioridades.html','<div class="loading-bar-container"></div>\r\n<div class="container questoes">\r\n  <div class="row">\r\n    <div class="col s12">\r\n        <h1>Para voc\xEA, quais s\xE3o as <b>3</b> principais prioridades para Campinas em ordem de import\xE2ncia? </h1>\r\n        <span>{{respostas.length}} / {{41 + 3}}</span>\r\n    </div>\r\n    <div class="col s12 prioridades">\r\n      <form id="opcoes" novalidate name="formPrioridades" data-ng-submit="submit()">\r\n        <div class="col s12">\r\n        <div class="progress">\r\n          <div\r\n            class="determinate red"\r\n            style="width: {{(respostas.length / 45)*100}}%">\r\n          </div>\r\n        </div>\r\n      </div>\r\n        <div class="opcoes">\r\n          <h3>Prioridade {{pagina}}</h3>\r\n          <div ng-if="opcoes" ng-repeat="opcao in opcoes | orderBy: \'prioridade\'">\r\n            <input ng-click="next()" ng-disabled="enviando" ng-model="model.prioridade" name="prioridade" type="radio" value="{{opcao.id}}" id="prioridade-{{$index}}" />\r\n            <label for="prioridade-{{$index}}">{{opcao.prioridade}}</label>\r\n          </div>\r\n        </div>\r\n        <div class="opt-btn">\r\n          <div class="col s12 l8">\r\n            <div class="col s12 m6 l6">\r\n              <input ng-click="back()" ng-if="pagina !== 1 && pagina < 4" type="button" class="btn" value="Voltar">\r\n            </div>\r\n            <div class="col s12 m6 l6">\r\n              <input ng-click="next()" ng-if="returned" type="button" class="btn right" value="Pr\xF3xima">\r\n              <button ng-show="submitOk" class="btn right finalizar" data-ng-disabled="formPrioridades.$invalid || formPrioridades.$submitted">Enviar</button>\r\n            </div>\r\n          </div>\r\n          <div class="col s12">\r\n            <h3>Na terceira prioridade existe o bot\xE3o enviar. Se o sistema n\xE3o avan\xE7ar ap\xF3s o clique\r\n              no bot\xE3o aguarde alguns segundos e clique em quest\xF5es no menu superior ou tecle shift+f5</h3>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/projeto/projeto.html','<div class="container">\r\n<div class="row">\r\n  <div class="col s22">\r\n    <h1>O Projeto</h1>\r\n    <h5>O que \xE9?</h5>\r\n    <p>\r\n        O projeto Vota Campinas nasceu com o objetivo de ajudar a popula\xE7\xE3o de Campinas a escolher os seus candidatos a vereador ou vereadora.\r\n        <br>\r\n        Atrav\xE9s de quest\xF5es objetivas os eleitores podem verificar suas afinidades com os candidatos.\r\n    </p>\r\n    <hr>\r\n    <br>\r\n    <h5>Realiza\xE7\xE3o</h5>\r\n    <p>\r\n        O projeto Vota Campinas foi desenvolvido por um grupo de programadores e programadoras independentes que utilizam tecnologia\r\n        <br>\r\n        para a constru\xE7\xE3o de um sociedade melhor. A organiza\xE7\xE3o Minha Campinas \xE9 respons\xE1vel por promov\xEA-lo.\r\n    </p>\r\n    <hr>\r\n    <br>\r\n    <h5>Time de Desenvolvimento do Projeto</h5>\r\n    <br>\r\n  </div>\r\n  <div class="container paddingRow time">\r\n    <div class="row">\r\n        <div class="col s2">\r\n          <img  src="img/danisoldera.png" height="100" width="100" alt="Danielle Soldera"/>\r\n          <p>Danielle Soldera<br />\r\n\t\t  <a href="https://twitter.com/danisoldera" target="_blank">@danisoldera</a></p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/victormiguez.png" height="100" width="100" alt="Victor Miguez"/>\r\n            <p>Victor Miguez</p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/victorperin.png" height="100" width="100" alt="Victor Perin"/>\r\n            <p>Victor Perin<br />\r\n            <a href="https://twitter.com/victor_perin" target="_blank">@victor_perin</a>\r\n            </p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/gabrielribeiro.png" height="100" width="100" alt="Gabriel Ribeiro"/>\r\n            <p>Gabriel Ribeiro<br />\r\n            <a href="https://www.facebook.com/biel.ribeiro90" target="_blank">Perfil do Face</a></p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/laixuancheng.png" height="100" width="100" alt="Lai Xuancheng"/>\r\n            <p>Lai Xuancheng</p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/guilhermeluchesi.png" height="100" width="100" alt="Guilherme Luchesi"/>\r\n            <p>Guilherme Luchesi<br />\r\n            <a href="https://www.linkedin.com/in/guilhermeluchesi" target="_blank">Perfil Linkedin</a>\r\n            </p>\r\n        </div>\r\n      </div>\r\n      <h5>Time da Organiza\xE7\xE3o Minha Campinas</h5>\r\n      <div class="row">\r\n        <div class="col s2">\r\n            <img  src="img/bordignon.png" height="100" width="100" alt="Andr\xE9 Bordignon"/>\r\n            <p>Andr\xE9 Bordignon</p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/claudiaoliveira.png" height="100" width="100" alt="Claudia Oliveira"/>\r\n            <p>Claudia Oliveira</p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/eduardosilva.png" height="100" width="100" alt="Eduardo"/>\r\n            <p>Eduardo Silva</p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/elisamueller.png" height="100" width="100" alt="Elisa"/>\r\n            <p>Elisa Mueller</p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/helenawhyte.png" height="100" width="100" alt="Helena"/>\r\n            <p>Helena Whyte</p>\r\n        </div>\r\n        <div class="col s2">\r\n            <img  src="img/julianapatete.png" height="100" width="100" alt="Juliana"/>\r\n            <p>Juliana Patete</p>\r\n        </div>\r\n        <div class="col s2 left-align">\r\n            <img  src="img/marcelonisida.png" height="100" width="100" alt="Marcelo"/>\r\n            <p>Marcelo Nisida</p>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <h5>Fale conosco</h5>\r\n    <div class="row">\r\n      Se quiser falar conosco envie um e-mail para &nbsp\r\n      <a href="mailto:contato@minhacampinas.org.br">\r\n         contato@minhacampinas.org.br\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n');
$templateCache.put('partials/ranking/ranking.html','<div class="loading-bar-container"></div>\r\n<div class="container">\r\n  <div class="row">\r\n    <div class="col s12">\r\n      <h1>Ranking</h1>\r\n    </div>\r\n    <div class="col s9">\r\n      <h4>Aqui est\xE3o os candidatos que combinam com suas escolhas </h4>\r\n      <p><span class="red-text"><b>(Caso os candidat@s n\xE3o apare\xE7am aguarde alguns minutos ou tecle shift+f5)</b></span></p>\r\n    </div>\r\n    <div class="col s3 right-align">\r\n      <div class="fb-share-button" data-href="http://votacampinas.org.br" data-layout="button" data-size="small" data-mobile-iframe="true">\r\n        <a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fvotacampinas.org.br%2F&amp;src=sdkpreparse">Compartilhar</a>\r\n      </div>\r\n      <a class="twitter-share-button" id="twitter-wjs"  href="https://twitter.com/intent/tweet?text=Descobri%20qual%20candidat@%20tem%20maior%20afinidade%20comigo.%20Descubra%20voc%C3%AA%20tamb%C3%A9m%20pelo%20%23VotaCampinas%20http://votacampinas.org.br">\r\n        <i class="bird"></i> Tweet</a>\r\n    </div>\r\n\r\n    <div class="col s12">\r\n      <ul class="collection">\r\n        <li class="collection-item" data-ng-repeat="candidato in candidatos | orderBy: \'-pontuacao\'">\r\n          <div class="row">\r\n            <div class="col s12 m2 center-align">\r\n              <img src="{{candidato.foto ? candidato.foto : \'img/avatar.jpg\'}}" alt="" style="width: 100%;">\r\n            </div>\r\n            <div class="col s12 m10">\r\n              <h4>{{candidato.nome}}</h4>\r\n              <div class="col s12 m8">\r\n                <p>\r\n                   Numero: <strong>{{candidato.numero}}</strong>\r\n                 </p>\r\n                <p>Afinidade: {{candidato.pontuacao | pontuacaoFilter}}%</p>\r\n              </div>\r\n\r\n              <div class="col s12 m4">\r\n                <a data-ng-href="/candidato/{{candidato.id}}" class="btn rank">Ver Perfil</a>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="col s12 offset-m9 m3">\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n');}]);