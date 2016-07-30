angular.module('votaCampinas').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\r\n  <h1>404</h1>\r\n  <p>Page Not Found</p>\r\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\r\n  <h3>Contact Form</h3>\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n  <form ng-submit="sendContactForm()">\r\n    <label for="name">Name</label>\r\n    <input type="text" name="name" id="name" ng-model="contact.name" autofocus>\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" ng-model="contact.email">\r\n    <label for="message">Body</label>\r\n    <textarea name="message" id="message" rows="7" ng-model="contact.message"></textarea>\r\n    <br>\r\n    <button type="submit">Send</button>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('partials/footer.html','<div class="container">\r\n  <div class="row">\r\n    <div class="col l8 s12">\r\n      <p class="white-text"><strong>Vota Campinas</strong> \xE9 uma plataforma livre e n\xE3o se responsabiliza pelas informa\xE7\xF5es fornecidas pelos candidatos, bem como a presta\xE7\xE3o de contas do mesmo.</p>\r\n\t\t\t<p class="white-text">Este projeto \xE9 distribuido sob a licen\xE7a <a href="https://github.com/Minhacps/VotaCampinas" target="_blank">Affero General Public License</a>.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="container">\r\n  <div class="row">\r\n    <div class="col l6 m6 s12">\r\n\t\t\t<p class="white-text">\xA9 2016 Vota Campinas</p>\r\n\t\t</div>\r\n\t\t<div class="col l6 m6 s12">\r\n\t\t\t<ul class="footer-links">\r\n\t\t\t\t<li class="white-text">Siga-nos</li>\r\n\t\t\t\t<li><a href="https://www.facebook.com/minhacampinas/" target="_blank"><i class="white-text fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>\r\n\t\t\t\t<li><a href="https://twitter.com/minhacampinas" target="_blank"><i class="white-text fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>\r\n\t\t\t\t<li><a href="https://www.youtube.com/channel/UCRMS35ZIph6mLTtt9Hbzb7A" target="_blank"><i class="white-text fa fa-youtube fa-2x" aria-hidden="true"></i></a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n');
$templateCache.put('partials/forgot.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n  <form ng-submit="forgotPassword()">\r\n    <h4>Forgot Password</h4>\r\n    <p>Enter your email address below and we\'ll send you password reset instructions.</p>\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\r\n    <br>\r\n    <button type="submit">Reset Password</button>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('partials/header.html','<nav class="page-header" ng-controller="HeaderCtrl">\r\n  <div class="nav-wrapper container">\r\n      <a href="/" class="brand-logo" style="height: 100%;">\r\n        <!--img src="http://placehold.it/200x100" alt="" style="height: 100%;"-->\r\n        <img src="http://votacampinas.kinghost.net/img/logo.png" alt="" style="height: 100%;">\r\n      </a>\r\n      <a href="#" class="button-collapse" data-activates="mobile-demo" data-sidenav="left" data-menuwidth="500" data-closeonclick="false"><i class="material-icons">menu</i></a>\r\n\r\n      <ul class="right hide-on-med-and-down">\r\n        <li ng-class="{ active: isActive(\'/projeto\')}"><a href="/projeto" ng-click="closeNav()">O Projeto</a></li>\r\n        <li ng-class="{ active: isActive(\'/como-funciona\')}"><a href="/como-funciona" ng-click="closeNav()">Como funciona</a></li>\r\n        <li ng-class="{ active: isActive(\'/login\')}" ng-if="!isAuthenticated()"><a href="/login">Entrar</a></li>\r\n        <li ng-class="{ active: isActive(\'/cadastro\')}" ng-if="!isAuthenticated()"><a href="/cadastro">Cadastre-se</a></li>\r\n        <li ng-class="{ active: isActive(\'/account\')}" ng-if="isAuthenticated()"><a href="/account">My Account</a></li>\r\n        <li ng-if="isAuthenticated()"><a href="#" ng-click="logout()">Logout</a></li>\r\n      </ul>\r\n       <ul class="side-nav" id="mobile-demo">\r\n        <li ng-class="{ active: isActive(\'/projeto\')}"><a href="/projeto" ng-click="closeNav()">O Projeto</a></li>\r\n        <li ng-class="{ active: isActive(\'/como-funciona\')}"><a href="/como-funciona" ng-click="closeNav()">Como funciona</a></li>\r\n        <li ng-class="{ active: isActive(\'/login\')}" ng-if="!isAuthenticated()"><a href="/" ng-click="closeNav()">Entrar</a></li>\r\n        <li ng-class="{ active: isActive(\'/cadastro\')}" ng-if="!isAuthenticated()"><a href="/cadastro" ng-click="closeNav()">Cadastre-se</a></li>\r\n        <li ng-class="{ active: isActive(\'/account\')}" ng-if="isAuthenticated()"><a href="/account" ng-click="closeNav()">My Account</a></li>\r\n        <li ng-if="isAuthenticated()"><a href="#" ng-click="logout()">Logout</a></li>\r\n       </ul>\r\n  </div>\r\n  <div class="col s10"></div>\r\n</nav>\r\n');
$templateCache.put('partials/login.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Log In</h4>\r\n\r\n  <form ng-submit="login()">\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\r\n    <label for="password">Password</label>\r\n    <input type="password" name="password" id="password" placeholder="Password" ng-model="user.password">\r\n    <p><a href="/forgot">Forgot your password?</a></p>\r\n    <button type="submit">Log in</button>\r\n  </form>\r\n\r\n  <hr>\r\n\r\n  <button ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\r\n  <br>\r\n\r\n  <p>Don\'t have an account? <a href="/signup">Sign up</a></p>\r\n</div>\r\n');
$templateCache.put('partials/profile.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Profile Information</h4>\r\n\r\n  <form ng-submit="updateProfile()">\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" ng-model="profile.email">\r\n    <label for="name">Name</label>\r\n    <input type="text" name="name" id="name" ng-model="profile.name">\r\n    <label>Gender</label>\r\n    <input type="radio" name="gender" id="male" value="male" ng-checked="profile.gender === \'male\'">\r\n    <label for="male">Male</label>\r\n    <input type="radio" name="gender" id="female" value="female" ng-checked="profile.gender === \'female\'">\r\n    <label for="female">Female</label>\r\n    <label for="location">Location</label>\r\n    <input type="text" name="location" id="location" ng-model="profile.location">\r\n    <label for="website">Website</label>\r\n    <input type="text" name="website" id="website" ng-model="profile.website">\r\n    <label>Gravatar</label>\r\n    <img ng-src="{{profile.gravatar}}" class="gravatar" width="100" height="100">\r\n    <br>\r\n    <button type="submit">Update Profile</button>\r\n  </form>\r\n\r\n  <h4>Change Password</h4>\r\n\r\n  <form ng-submit="changePassword()">\r\n    <label for="password">New Password</label>\r\n    <input type="password" name="password" id="password" ng-model="profile.password">\r\n    <label for="confirm">Confirm Password</label>\r\n    <input type="password" name="confirm" id="confirm" ng-model="profile.confirm">\r\n    <br>\r\n    <button type="submit">Change Password</button>\r\n  </form>\r\n\r\n  <h4>Linked Accounts</h4>\r\n\r\n  <p>\r\n    <a href="#" ng-click="unlink(\'facebook\')" ng-if="currentUser.facebook" class="text-danger">Unlink your Facebook account</a>\r\n    <a href="#" ng-click="link(\'facebook\')" ng-if="!currentUser.facebook">Link your Facebook account</a>\r\n  </p>\r\n\r\n  <h4>Delete Account</h4>\r\n\r\n  <form ng-submit="deleteAccount()">\r\n    <p>You can delete your account, but keep in mind this action is irreversible.</p>\r\n    <button type="submit">Delete my account</button>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('partials/reset.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n  <div ng-if="messages.success" role="alert" class="text-success">\r\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Reset Password</h4>\r\n\r\n  <form ng-submit="resetPassword()">\r\n    <label for="password">New Password</label>\r\n    <input type="password" name="password" id="password" placeholder="New password" ng-model="user.password" autofocus>\r\n    <label for="confirm">Confirm Password</label>\r\n    <input type="password" name="confirm" id="confirm" placeholder="Confirm password" ng-model="user.confirm">\r\n    <br>\r\n    <button type="submit">Change Password</button>\r\n  </form>\r\n</div>\r\n');
$templateCache.put('partials/signup.html','<div class="container">\r\n  <div ng-if="messages.error" role="alert" class="text-danger">\r\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\r\n  </div>\r\n\r\n  <h4>Create an account</h4>\r\n\r\n  <form ng-submit="signup()">\r\n    <label for="email">Email</label>\r\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\r\n    <label for="name">Name</label>\r\n    <input type="text" name="name" id="name" placeholder="Name" ng-model="user.name">\r\n    <label for="password">Password</label>\r\n    <input type="password" name="password" id="password" placeholder="Password" ng-model="user.password">\r\n    <p>By signing up, you agree to the <a href="/">Terms of Service</a>.</p>\r\n    <button type="submit">Create an account</button>\r\n  </form>\r\n\r\n  <hr>\r\n\r\n  <button ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\r\n  <br>\r\n\r\n  <p>Already have an account? <a href="/login">Log in</a></p>\r\n</div>\r\n');
$templateCache.put('partials/cadastro/cadastro.html','<div class="row">\r\n  <div class="col s12">\r\n      <h1>Cadastro</h1>\r\n  </div>\r\n\r\n  <div class="col s12">\r\n    <form name="cadastro" ng-submit="enviar()">\r\n      <div class="dados-pessoais">\r\n        <h4>Pessoais</h4>\r\n        <div class="row">\r\n          <div class="input-field col s12">\r\n            <input id="nome" type="text" name="name" data-ng-model="user.name" ng-required="required">\r\n            <label for="nome">Nome</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n          <div class="input-field col s12">\r\n            <input id="data-nascimento" type="text" class="validate" data-ng-model="user.birthDate" ng-required="required">\r\n            <label for="data-nascimento">Data de Nascimento</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n          <div class="input-field col s12">\r\n            <select id="sexo" data-ng-model="user.gender">\r\n              <option value="" selected>Selecione</option>\r\n              <option value="F">Feminino</option>\r\n              <option value="M">Masculino</option>\r\n            </select>\r\n             <label>Sexo</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n          <div class="col s12">\r\n            <input type="checkbox" id="sou-candidato" data-ng-model="user.ehVereador"/>\r\n            <label for="sou-candidato">Sou Candidato</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="exclusivo-candidato" data-ng-show="user.ehVereador">\r\n          <div class="row">\r\n            <div class="input-field col s6">\r\n              <input id="cod-j-e" type="text" class="validate" data-ng-model="user.vereador.partido" maxlength="5" ng-required="user.ehVereador">\r\n              <label for="cod-j-e">Partido</label>\r\n            </div>\r\n            <div class="input-field col s6">\r\n              <input id="cod-j-e" type="number" class="validate" data-ng-model="user.vereador.numero" ng-required="user.ehVereador">\r\n              <label for="cod-j-e">N\xFAmero</label>\r\n            </div>\r\n          </div>\r\n\r\n           <div class="row">\r\n             <div class="input-field col s12">\r\n               <input id="cod-j-e" type="number" class="validate" data-ng-model="user.vereador.codigoJusticaEleitoral" ng-required="user.ehVereador">\r\n               <label for="cod-j-e">Cod. Justi\xE7a Eleitoral</label>\r\n             </div>\r\n           </div>\r\n\r\n           <div class="row">\r\n            <div class="input-field col s12">\r\n              <textarea id="descricao" class="materialize-textarea" length="120" data-ng-model="user.vereador.descricao" ng-required="user.ehVereador"></textarea>\r\n              <label for="descricao">Descri\xE7\xE3o</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="dados-conta">\r\n        <h4>Conta</h4>\r\n\r\n        <div class="row">\r\n          <div class="input-field col s12">\r\n            <input id="email" type="email" class="validate" data-ng-model="user.email" ng-required="required">\r\n            <label for="email">E-mail</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n          <div class="input-field col s12">\r\n            <input id="senha" type="password" class="validate" data-ng-model="user.password" ng-required="required">\r\n            <label for="senha">Senha</label>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="row">\r\n          <div class="input-field col s12">\r\n            <input id="confirme-senha" type="password" class="validate" data-ng-model="user.passwordConfirm" ng-required="required">\r\n            <label for="confirme-senha">Confirme sua Senha</label>\r\n            <span class="pink-text text-darken-2" data-ng-show="user.password !== user.passwordConfirm">As senhas n\xE3o coincidem</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <a href="/login">Voltar</a>\r\n      <button class="btn right waves-effect waves-light" type="submit" name="action" data-ng-disabled="cadastro.$invalid">Cadastrar\r\n          <i class="material-icons right">send</i>\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/comofunciona/como-funciona.html','<div class="row">\n  <div class="col s12">\n    <h1>Como Funciona</h1>\n  </div>\n</div>\n');
$templateCache.put('partials/home/home.html','<div class="row">\n\t<div class="col s12 center-align">\n\t\t<br />\n\t\t<br />\n\t\t<br />\n\t\t<h2>Voc\xEA j\xE1 sabe em quem votar para vereador?</h2>\n\t\t<h5>Que tal comparar sua ideias com as dos candidatos e candidatas para verificar quais s\xE3o parecidas. </h5>\n\t\t<h5>\xC9 isso que o Vota Campinas faz !</h5>\n\t\t<br />\n\t\t<p><a href="/perguntas" class="waves-effect waves-light btn">Iniciar</a></p>\n\t</div>\n</div>\n');
$templateCache.put('partials/login/login.html','<div class="row">\r\n  <div class="col s12">\r\n    <h1>Login</h1>\r\n  </div>\r\n  <div class="col s12">\r\n    <button class="btn">Logar com Facebook</button>\r\n  </div>\r\n\r\n  <div class="col s12 center-align">\r\n    <hr>\r\n  </div>\r\n\r\n  <form data-ng-submit="enviar()" name="formLogin">\r\n    <div class="col s12 input-field">\r\n      <label for="email">E-mail</label>\r\n      <input id="email" name="email" type="email" data-ng-model="user.email" ng-required="true">\r\n    </div>\r\n\r\n    <div class="col s12 input-field">\r\n      <label for="password">Senha</label>\r\n      <input id="password" name="password" type="password" data-ng-model="user.password" ng-required="true" ng-minlength="">\r\n    </div>\r\n\r\n    <div class="col s12 input-field">\r\n      <button type="submit" class="btn" ng-disabled="formLogin.$invalid">Entrar</button>\r\n    </div>\r\n  </form>\r\n\r\n\r\n  <div class="col s12">\r\n    <ul>\r\n      <li><a data-ng-href="/cadastro">Cadastre-se</a></li>\r\n      <li><a data-ng-href="">Esqueci minha senha</a></li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/perfil/perfil.html','<div class="row">\r\n  <div class="col s12">\r\n      <h1>Perfil do Candidato</h1>\r\n  </div>\r\n  <div class="dados-candidato">\r\n\t  <div class="col s12 m12">\r\n\t\t\t<div class="card">\r\n\t\t\t  <div class="card-panel large">\r\n\t\t\t  <div class="card-content">\r\n\t\t\t  \t<img src="http://placehold.it/150x150" alt="">\r\n\t\t\t  \t<span class="card-title activator grey-text text-darken-4">\r\n\t\t\t  \t\tNome do Candidato\r\n\t\t\t  \t</span>\r\n\t\t\t  \t<p>Partido</p>\r\n\t\t\t  \t<p>Numero do Candidato</p>\r\n\t\t\t  \t<p>Descri\xE7\xE3o</p>\r\n\t\t\t  </div>\r\n\t\t\t  </div>\r\n\t\t\t</div>\r\n\t  </div>\t\r\n  </div>\r\n  <div class="respostas-candidato">\r\n  \t<h2>Respostas</h2>\r\n  </div>\r\n  <a href="/login">Voltar</a>\r\n</div>\r\n');
$templateCache.put('partials/prioridades/prioridades.html','<div class="row">\r\n  <div class="col s12">\r\n      <h1>Quest\xF5es</h1>\r\n      <h2>Para voc\xEA, quais s\xE3o as principais prioridades para Campinas?</h2>\r\n  </div>\r\n  <div class="col s12">\r\n    <form novalidate>\r\n      <div>\r\n        <input name="prioridade" type="radio" id="prioridade-1" />\r\n        <label for="prioridade-1">Prioridade 1</label>\r\n      </div>\r\n\r\n      <div>\r\n        <input name="prioridade" type="radio" id="prioridade-2" />\r\n        <label for="prioridade-2">Prioridade 2</label>\r\n      </div>\r\n\r\n      <div>\r\n        <input name="prioridade" type="radio" id="prioridade-3" />\r\n        <label for="prioridade-3">Prioridade 3</label>\r\n      </div>\r\n\r\n      <div>\r\n        <input name="prioridade" type="radio" id="prioridade-4" />\r\n        <label for="prioridade-4">Prioridade 4</label>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>');
$templateCache.put('partials/projeto/projeto.html','<div class="row">\n  <div class="col s12">\n    <h1>O Projeto</h1>\n  </div>\n</div>\n');
$templateCache.put('partials/questoes/questoes.html','<div class="row">\r\n  <div class="col s12">\r\n      <h1>Quest\xF5es</h1>\r\n      <h3>Responda as perguntas</h3>\r\n  </div>\r\n  <div class="col s12">\r\n    <form novalidate>\r\n        <p>{{perguntas[pagina].pergunta}}</p>\r\n        <ul class="form-questoes">\r\n          <li>\r\n            <input ng-click="next()" ng-model="perguntas[pagina].resposta" name="resposta-{{perguntas[pagina]}}" id="resposta-2-{{perguntas[pagina]}}" type="radio" value="2"/>\r\n            <label for="resposta-2-{{perguntas[pagina]}}">Concordo plenamente</label>\r\n           </li>\r\n           <li>\r\n             <input ng-click="next()" ng-model="perguntas[pagina].resposta" name="resposta-{{perguntas[pagina]}}" id="resposta-4-{{perguntas[pagina]}}" type="radio" value="4"/>\r\n             <label for="resposta-4-{{perguntas[pagina]}}">Concordo</label>\r\n           </li>\r\n           <li>\r\n              <input ng-click="next()" ng-model="perguntas[pagina].resposta" name="resposta-{{perguntas[pagina]}}" id="resposta-1-{{perguntas[pagina]}}" type="radio" value="1"/>\r\n              <label for="resposta-1-{{perguntas[pagina]}}">Discordo plenamente</label>           \r\n           </li>\r\n           <li>\r\n             <input ng-click="next()" ng-model="perguntas[pagina].resposta" name="resposta-{{perguntas[pagina]}}" id="resposta-3-{{perguntas[pagina]}}" type="radio" value="3"/>\r\n             <label for="resposta-3-{{perguntas[pagina]}}">Discordo</label>\r\n           </li>\r\n        </ul>\r\n        <div class="row">\r\n          <div class="col s6 m6 l6">\r\n            <input ng-click="back()" ng-if="pagina !== 1" type="button" class="btn" value="Voltar">    \r\n          </div>\r\n          <div class="col s6 m6 l6">\r\n            <a class="red-text pular tooltipped" data-position="left" data-delay="30" data-tooltip="Voc\xEA s\xF3 pode pular a partir da 18\xAA quest\xE3o" href="" disabled>* Pular</a>        \r\n          </div>\r\n        </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('partials/ranking/ranking.html','<div class="row">\r\n  <div class="col s12">\r\n    <h1>Ranking</h1>\r\n  </div>\r\n  <div class="col s12">\r\n    Aqui est\xE3o os candidatos que combina com suas escolhas\r\n  </div>\r\n\r\n  <div class="col s12">\r\n    <ul class="collection">\r\n      <li class="collection-item">\r\n        <div class="row">\r\n          <div class="col s12 m2 center-align">\r\n            <img src="http://placehold.it/150x150" alt="" style="width: 100%;">\r\n          </div>\r\n          <div class="col s12 m10">\r\n            <h4>Nome</h4>\r\n            <p>Partido - Numero: 1234</p>\r\n            <p>% Afinidade: 80%</p>\r\n\r\n          </div>\r\n\r\n          <div class="col s12 offset-m9 m3">\r\n            <button class="btn" style="width: 100%;">Ver Perfil</button>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>');}]);