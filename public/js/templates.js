angular.module('votaCampinas').run(['$templateCache', function($templateCache) {$templateCache.put('partials/404.html','<div class="container text-center">\n  <h1>404</h1>\n  <p>Page Not Found</p>\n</div>');
$templateCache.put('partials/contact.html','<div class="container">\n  <h3>Contact Form</h3>\n  <div ng-if="messages.error" role="alert" class="text-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n  <div ng-if="messages.success" role="alert" class="text-success">\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\n  </div>\n  <form ng-submit="sendContactForm()">\n    <label for="name">Name</label>\n    <input type="text" name="name" id="name" ng-model="contact.name" autofocus>\n    <label for="email">Email</label>\n    <input type="email" name="email" id="email" ng-model="contact.email">\n    <label for="message">Body</label>\n    <textarea name="message" id="message" rows="7" ng-model="contact.message"></textarea>\n    <br>\n    <button type="submit">Send</button>\n  </form>\n</div>\n');
$templateCache.put('partials/footer.html','<div class="footer-copyright">\n  <div class="container">\n    \xA9 2016 Copyright Text\n  </div>\n</div>\n');
$templateCache.put('partials/forgot.html','<div class="container">\n  <div ng-if="messages.error" role="alert" class="text-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n  <div ng-if="messages.success" role="alert" class="text-success">\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\n  </div>\n  <form ng-submit="forgotPassword()">\n    <h4>Forgot Password</h4>\n    <p>Enter your email address below and we\'ll send you password reset instructions.</p>\n    <label for="email">Email</label>\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\n    <br>\n    <button type="submit">Reset Password</button>\n  </form>\n</div>\n');
$templateCache.put('partials/header.html','<nav class="page-header" ng-controller="HeaderCtrl">\n  <div class="nav-wrapper container">\n      <a href="/" class="brand-logo" style="height: 100%;">\n        <img src="http://placehold.it/200x100" alt="" style="height: 100%;">\n      </a>\n      <a href="#" class="button-collapse" data-activates="mobile-demo" data-sidenav="left" data-menuwidth="500" data-closeonclick="false"><i class="material-icons">menu</i></a>\n\n      <ul class="right hide-on-med-and-down">\n        <li ng-class="{ active: isActive(\'/projeto\')}" ng-if="!isAuthenticated()"><a href="/projeto" ng-click="closeNav()">O Projeto</a></li>\n        <li ng-class="{ active: isActive(\'/como-funciona\')}" ng-if="!isAuthenticated()"><a href="/como-funciona" ng-click="closeNav()">Como funciona</a></li>\n        <li ng-class="{ active: isActive(\'/login\')}" ng-if="!isAuthenticated()"><a href="/login">Entrar</a></li>\n        <li ng-class="{ active: isActive(\'/cadastro\')}" ng-if="!isAuthenticated()"><a href="/cadastro">Cadastre-se</a></li>\n        <li ng-class="{ active: isActive(\'/account\')}" ng-if="isAuthenticated()"><a href="/account">My Account</a></li>\n        <li ng-if="isAuthenticated()"><a href="#" ng-click="logout()">Logout</a></li>\n      </ul>\n       <ul class="side-nav" id="mobile-demo">\n        <li ng-class="{ active: isActive(\'/projeto\')}" ng-if="!isAuthenticated()"><a href="/projeto" ng-click="closeNav()">O Projeto</a></li>\n        <li ng-class="{ active: isActive(\'/como-funciona\')}" ng-if="!isAuthenticated()"><a href="/como-funciona" ng-click="closeNav()">Como funciona</a></li>\n        <li ng-class="{ active: isActive(\'/\')}" ng-if="!isAuthenticated()"><a href="/" ng-click="closeNav()">Entrar</a></li>\n        <li ng-class="{ active: isActive(\'/cadastro\')}" ng-if="!isAuthenticated()"><a href="/cadastro" ng-click="closeNav()">Cadastre-se</a></li>\n        <li ng-class="{ active: isActive(\'/account\')}" ng-if="isAuthenticated()"><a href="/account" ng-click="closeNav()">My Account</a></li>\n        <li ng-if="isAuthenticated()"><a href="#" ng-click="logout()">Logout</a></li>        \n       </ul>\n  </div>\n  <div class="col s10"></div>\n</nav>\n');
$templateCache.put('partials/home.html','<div class="container">\n  <div class="row">\n    <div class="col-sm">\n      <h3>AAA</h3>\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n        Donec sed odio dui.</p>\n      <a href="#" role="button">View details</a>\n    </div>\n    <div class="col-sm">\n      <h3>Heading</h3>\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n        Donec sed odio dui.</p>\n      <a href="#" role="button">View details</a>\n    </div>\n    <div class="col-sm">\n      <h3>Heading</h3>\n      <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris\n        condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.\n        Donec sed odio dui.</p>\n      <a href="#" role="button">View details</a>\n    </div>\n  </div>\n</div>\n');
$templateCache.put('partials/login.html','<div class="container">\n  <div ng-if="messages.error" role="alert" class="text-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n\n  <h4>Log In</h4>\n\n  <form ng-submit="login()">\n    <label for="email">Email</label>\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\n    <label for="password">Password</label>\n    <input type="password" name="password" id="password" placeholder="Password" ng-model="user.password">\n    <p><a href="/forgot">Forgot your password?</a></p>\n    <button type="submit">Log in</button>\n  </form>\n\n  <hr>\n\n  <button ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\n  <br>\n\n  <p>Don\'t have an account? <a href="/signup">Sign up</a></p>\n</div>\n');
$templateCache.put('partials/profile.html','<div class="container">\n  <div ng-if="messages.error" role="alert" class="text-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n  <div ng-if="messages.success" role="alert" class="text-success">\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\n  </div>\n\n  <h4>Profile Information</h4>\n\n  <form ng-submit="updateProfile()">\n    <label for="email">Email</label>\n    <input type="email" name="email" id="email" ng-model="profile.email">\n    <label for="name">Name</label>\n    <input type="text" name="name" id="name" ng-model="profile.name">\n    <label>Gender</label>\n    <input type="radio" name="gender" id="male" value="male" ng-checked="profile.gender === \'male\'">\n    <label for="male">Male</label>\n    <input type="radio" name="gender" id="female" value="female" ng-checked="profile.gender === \'female\'">\n    <label for="female">Female</label>\n    <label for="location">Location</label>\n    <input type="text" name="location" id="location" ng-model="profile.location">\n    <label for="website">Website</label>\n    <input type="text" name="website" id="website" ng-model="profile.website">\n    <label>Gravatar</label>\n    <img ng-src="{{profile.gravatar}}" class="gravatar" width="100" height="100">\n    <br>\n    <button type="submit">Update Profile</button>\n  </form>\n\n  <h4>Change Password</h4>\n\n  <form ng-submit="changePassword()">\n    <label for="password">New Password</label>\n    <input type="password" name="password" id="password" ng-model="profile.password">\n    <label for="confirm">Confirm Password</label>\n    <input type="password" name="confirm" id="confirm" ng-model="profile.confirm">\n    <br>\n    <button type="submit">Change Password</button>\n  </form>\n\n  <h4>Linked Accounts</h4>\n\n  <p>\n    <a href="#" ng-click="unlink(\'facebook\')" ng-if="currentUser.facebook" class="text-danger">Unlink your Facebook account</a>\n    <a href="#" ng-click="link(\'facebook\')" ng-if="!currentUser.facebook">Link your Facebook account</a>\n  </p>\n\n  <h4>Delete Account</h4>\n\n  <form ng-submit="deleteAccount()">\n    <p>You can delete your account, but keep in mind this action is irreversible.</p>\n    <button type="submit">Delete my account</button>\n  </form>\n</div>\n');
$templateCache.put('partials/reset.html','<div class="container">\n  <div ng-if="messages.error" role="alert" class="text-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n  <div ng-if="messages.success" role="alert" class="text-success">\n    <div ng-repeat="success in messages.success">{{success.msg}}</div>\n  </div>\n\n  <h4>Reset Password</h4>\n\n  <form ng-submit="resetPassword()">\n    <label for="password">New Password</label>\n    <input type="password" name="password" id="password" placeholder="New password" ng-model="user.password" autofocus>\n    <label for="confirm">Confirm Password</label>\n    <input type="password" name="confirm" id="confirm" placeholder="Confirm password" ng-model="user.confirm">\n    <br>\n    <button type="submit">Change Password</button>\n  </form>\n</div>\n');
$templateCache.put('partials/signup.html','<div class="container">\n  <div ng-if="messages.error" role="alert" class="text-danger">\n    <div ng-repeat="error in messages.error">{{error.msg}}</div>\n  </div>\n\n  <h4>Create an account</h4>\n\n  <form ng-submit="signup()">\n    <label for="email">Email</label>\n    <input type="email" name="email" id="email" placeholder="Email" ng-model="user.email" autofocus>\n    <label for="name">Name</label>\n    <input type="text" name="name" id="name" placeholder="Name" ng-model="user.name">\n    <label for="password">Password</label>\n    <input type="password" name="password" id="password" placeholder="Password" ng-model="user.password">\n    <p>By signing up, you agree to the <a href="/">Terms of Service</a>.</p>\n    <button type="submit">Create an account</button>\n  </form>\n\n  <hr>\n\n  <button ng-click="authenticate(\'facebook\')">Sign in with Facebook</button>\n  <br>\n\n  <p>Already have an account? <a href="/login">Log in</a></p>\n</div>\n');
$templateCache.put('partials/cadastro/cadastro.html','<div class="row">\n  <div class="col s12">\n      <h1>Cadastro</h1>\n  </div>\n\n  <div class="col s12">\n    <form name="cadastro" ng-submit="enviar()">\n      <div class="dados-pessoais">\n        <h4>Pessoais</h4>\n        <div class="row">\n          <div class="input-field col s12">\n            <input id="nome" type="text" name="name" data-ng-model="user.name" ng-required="required">\n            <label for="nome">Nome</label>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="input-field col s12">\n            <input id="data-nascimento" type="text" class="validate" data-ng-model="user.birthDate" ng-required="required">\n            <label for="data-nascimento">Data de Nascimento</label>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="input-field col s12">\n            <select id="sexo" data-ng-model="user.gender">\n              <option value="" selected>Selecione</option>\n              <option value="F">Feminino</option>\n              <option value="M">Masculino</option>\n            </select>\n             <label>Sexo</label>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="col s12">\n            <input type="checkbox" id="sou-candidato" data-ng-model="user.ehVereador"/>\n            <label for="sou-candidato">Sou Candidato</label>\n          </div>\n        </div>\n\n        <div class="exclusivo-candidato" data-ng-show="user.ehVereador">\n          <div class="row">\n            <div class="input-field col s6">\n              <input id="cod-j-e" type="text" class="validate" data-ng-model="user.vereador.partido" maxlength="5" ng-required="user.ehVereador">\n              <label for="cod-j-e">Partido</label>\n            </div>\n            <div class="input-field col s6">\n              <input id="cod-j-e" type="number" class="validate" data-ng-model="user.vereador.numero" ng-required="user.ehVereador">\n              <label for="cod-j-e">N\xFAmero</label>\n            </div>\n          </div>\n\n           <div class="row">\n             <div class="input-field col s12">\n               <input id="cod-j-e" type="number" class="validate" data-ng-model="user.vereador.codigoJusticaEleitoral" ng-required="user.ehVereador">\n               <label for="cod-j-e">Cod. Justi\xE7a Eleitoral</label>\n             </div>\n           </div>\n\n           <div class="row">\n            <div class="input-field col s12">\n              <textarea id="descricao" class="materialize-textarea" length="120" data-ng-model="user.vereador.descricao" ng-required="user.ehVereador"></textarea>\n              <label for="descricao">Descri\xE7\xE3o</label>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="dados-conta">\n        <h4>Conta</h4>\n\n        <div class="row">\n          <div class="input-field col s12">\n            <input id="email" type="email" class="validate" data-ng-model="user.email" ng-required="required">\n            <label for="email">E-mail</label>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="input-field col s12">\n            <input id="senha" type="password" class="validate" data-ng-model="user.password" ng-required="required">\n            <label for="senha">Senha</label>\n          </div>\n        </div>\n\n        <div class="row">\n          <div class="input-field col s12">\n            <input id="confirme-senha" type="password" class="validate" data-ng-model="user.passwordConfirm" ng-required="required">\n            <label for="confirme-senha">Confirme sua Senha</label>\n            <span class="pink-text text-darken-2" data-ng-show="user.password !== user.passwordConfirm">As senhas n\xE3o coincidem</span>\n          </div>\n        </div>\n\n      </div>\n\n      <a href="/login">Voltar</a>\n      <button class="btn right waves-effect waves-light" type="submit" name="action" data-ng-disabled="cadastro.$invalid">Cadastrar\n          <i class="material-icons right">send</i>\n      </button>\n    </form>\n  </div>\n</div>\n');
$templateCache.put('partials/comofunciona/como-funciona.html','<div class="row">\n  <div class="col s12">\n    <h1>Como Funciona</h1>\n  </div>\n </div>\n');
$templateCache.put('partials/home/home.html','<div class="row">\n\t<div class="col s12 center-align">\n\t\t<br />\n\t\t<br />\n\t\t<br />\n\t\t<h2>Voc\xEA j\xE1 sabe em quem votar para vereador?</h2>\n\t\t<h5>Que tal comparar sua ideias com as dos candidatos e candidatas para verificar quais s\xE3o parecidas. </h5>\n\t\t<h5>\xC9 isso que o Vota Campinas faz !</h5>\n\t\t<br />\n\t\t<p><a href="/login" class="waves-effect waves-light btn">Iniciar</a></p>\n\t</div>\n</div>\n');
$templateCache.put('partials/login/login.html','<div class="row">\n  <div class="col s12">\n    <h1>Login</h1>\n  </div>\n  <div class="col s12">\n    <button class="btn">Logar com Facebook</button>\n  </div>\n\n  <div class="col s12 center-align">\n    <hr>\n  </div>\n\n  <form data-ng-submit="enviar()" name="formLogin">\n    <div class="col s12 input-field">\n      <label for="email">E-mail</label>\n      <input id="email" name="email" type="email" data-ng-model="user.email" ng-required="true">\n    </div>\n\n    <div class="col s12 input-field">\n      <label for="password">Senha</label>\n      <input id="password" name="password" type="password" data-ng-model="user.password" ng-required="true" ng-minlength="">\n    </div>\n\n    <div class="col s12 input-field">\n      <button type="submit" class="btn" ng-disabled="formLogin.$invalid">Entrar</button>\n    </div>\n  </form>\n\n\n  <div class="col s12">\n    <ul>\n      <li><a data-ng-href="/cadastro">Cadastre-se</a></li>\n      <li><a data-ng-href="">Esqueci minha senha</a></li>\n    </ul>\n  </div>\n</div>\n');
$templateCache.put('partials/perfil/perfil.html','<div class="row">\n  <div class="col s12">\n      <h1>Perfil do Candidato</h1>\n  </div>\n  <div class="dados-candidato">\n\t  <div class="col s12 m12">\n\t\t\t<div class="card">\n\t\t\t  <div class="card-panel large">\n\t\t\t  <div class="card-content">\n\t\t\t  \t<img src="http://placehold.it/150x150" alt="">\n\t\t\t  \t<span class="card-title activator grey-text text-darken-4">\n\t\t\t  \t\tNome do Candidato\n\t\t\t  \t</span>\n\t\t\t  \t<p>Partido</p>\n\t\t\t  \t<p>Numero do Candidato</p>\n\t\t\t  \t<p>Descri\xE7\xE3o</p>\n\t\t\t  </div>\n\t\t\t  </div>\n\t\t\t</div>\n\t  </div>\t\n  </div>\n  <div class="respostas-candidato">\n  \t<h2>Respostas</h2>\n  </div>\n  <a href="/login">Voltar</a>\n</div>\n');
$templateCache.put('partials/prioridades/prioridades.html','<div class="row">\n  <div class="col s12">\n      <h1>Quest\xF5es</h1>\n      <h2>Para voc\xEA, quais s\xE3o as principais prioridades para Campinas?</h2>\n  </div>\n  <div class="col s12">\n    <form novalidate>\n      <div>\n        <input name="prioridade" type="radio" id="prioridade-1" />\n        <label for="prioridade-1">Prioridade 1</label>\n      </div>\n\n      <div>\n        <input name="prioridade" type="radio" id="prioridade-2" />\n        <label for="prioridade-2">Prioridade 2</label>\n      </div>\n\n      <div>\n        <input name="prioridade" type="radio" id="prioridade-3" />\n        <label for="prioridade-3">Prioridade 3</label>\n      </div>\n\n      <div>\n        <input name="prioridade" type="radio" id="prioridade-4" />\n        <label for="prioridade-4">Prioridade 4</label>\n      </div>\n    </form>\n  </div>\n</div>');
$templateCache.put('partials/projeto/projeto.html','<div class="row">\n  <div class="col s12">\n    <h1>O Projeto</h1>\n  </div>\n</div>\n');
$templateCache.put('partials/questoes/questoes.html','<div class="row">\n  <div class="col s12">\n      <h1>Quest\xF5es</h1>\n      <h2>Para voc\xEA, quais s\xE3o as principais prioridades para Campinas?</h2>\n  </div>\n  <div class="col s12">\n    <form novalidate>\n      <h3>Prioridade n\xEDvel {{pagina}}</h3>\n      <div ng-repeat="opcao in opcoes">\n        <input ng-click="next()" ng-model="model.prioridade" name="prioridade" type="radio" value="{{opcao}}" id="prioridade-{{$index}}" />\n        <label for="prioridade-{{$index}}">{{opcao}}</label>\n      </div>\n\n      <input ng-click="back()" ng-if="pagina !== 1" type="button" class="btn" style="margin-top: 30px;" value="Voltar">\n    </form>\n  </div>\n</div>\n');
$templateCache.put('partials/ranking/ranking.html','<div class="row">\n  <div class="col s12">\n    <h1>Ranking</h1>\n  </div>\n  <div class="col s12">\n    Aqui est\xE3o os candidatos que combina com suas escolhas\n  </div>\n\n  <div class="col s12">\n    <ul class="collection">\n      <li class="collection-item">\n        <div class="row">\n          <div class="col s12 m2 center-align">\n            <img src="http://placehold.it/150x150" alt="" style="width: 100%;">\n          </div>\n          <div class="col s12 m10">\n            <h4>Nome</h4>\n            <p>Partido - Numero: 1234</p>\n            <p>% Afinidade: 80%</p>\n\n          </div>\n\n          <div class="col s12 offset-m9 m3">\n            <button class="btn" style="width: 100%;">Ver Perfil</button>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>');}]);