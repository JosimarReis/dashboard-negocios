(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{183:function(e,a,t){"use strict";t.r(a);var r=t(37),n=t(38),o=t(40),s=t(39),l=t(41),c=t(2),i=t.n(c),u=t(21),m=t(42),p=t(211),f=t(200),d=t(350),b=t(351),h=t(352),E=t(203),v=t(353),g=t(207),N=t(204),y=t(205),w=t(359),O=t(206),j=t(228),U=t(245),k=t(246),F=Object(k.a)({form:"usuario",enableReinitialize:!0})(function(e){var a=e.handleSubmit,t=e.show,r=e.error;return t&&i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement("form",{onSubmit:a,className:"form"},i.a.createElement(b.a,{xs:"12",sm:"11",md:"9",lg:"8",xl:"5"},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement("strong",null," ",e.pass?e.initialValues.nome:"Usu\xe1rio"),i.a.createElement("small",null," |",e.pass?" alterando senha":e.initialValues?" alterar":" novo")),i.a.createElement(v.a,null,!e.pass&&i.a.createElement(d.a,null,i.a.createElement(b.a,{xs:"12"},i.a.createElement(N.a,null,i.a.createElement(y.a,{htmlFor:"nome"},"Nome"),i.a.createElement(U.a,{type:"text",name:"nome",placeholder:"Nome",component:"input",className:"form-control",required:!0})))),!e.pass&&i.a.createElement(d.a,null,i.a.createElement(b.a,{xs:"12"},i.a.createElement(N.a,null,i.a.createElement(y.a,{htmlFor:"email"},"Email"),i.a.createElement(U.a,{type:"email",name:"email",placeholder:"email@provedor.com",component:"input",className:"form-control",required:!0})))),(!e.initialValues||e.pass)&&i.a.createElement(d.a,null,i.a.createElement(b.a,{xs:"6"},i.a.createElement(N.a,null,i.a.createElement(y.a,{htmlFor:"senha"},"Senha"),i.a.createElement(U.a,{type:"password",name:"senha",placeholder:"Digite a senha",component:"input",className:"form-control",required:!0}))),i.a.createElement(b.a,{xs:"6"},i.a.createElement(N.a,null,i.a.createElement(y.a,{htmlFor:"resenha"},"Repita a senha"),i.a.createElement(U.a,{type:"password",name:"resenha",placeholder:"Repita a senha",component:"input",className:"form-control",required:!0})))),!e.pass&&i.a.createElement(d.a,null,i.a.createElement(b.a,{xs:"7"},i.a.createElement(N.a,null,i.a.createElement(y.a,{htmlFor:"perfil"},"Perfil"),i.a.createElement(U.a,{component:"select",className:"form-control",name:"perfil"},i.a.createElement("option",null),i.a.createElement("option",{value:"ROLE_USER"},"Usu\xe1rio"),i.a.createElement("option",{value:"ROLE_ADMIN"},"Administrador")))),i.a.createElement(b.a,{xs:"5"},i.a.createElement(N.a,null,i.a.createElement(y.a,{htmlFor:"situacao"},"Situa\xe7\xe3o"),i.a.createElement(U.a,{component:"select",className:"form-control",name:"situacao"},i.a.createElement("option",null),i.a.createElement("option",{value:"true"},"Ativo"),i.a.createElement("option",{value:"false"},"Inativo"))))),!e.pass&&i.a.createElement(d.a,null,i.a.createElement(b.a,{xs:"12"},i.a.createElement(N.a,null,i.a.createElement(y.a,{htmlFor:"telefone"},"Telefone"),i.a.createElement(U.a,{type:"text",name:"telefone",placeholder:"(00) 00000-0000",component:"input",className:"form-control"})))),r&&i.a.createElement(d.a,null,i.a.createElement(b.a,{xs:"12"},i.a.createElement(w.a,{color:"danger"},r)))),i.a.createElement(O.a,null,i.a.createElement(U.a,{component:j.a,name:"submit",type:"submit",size:"sm",color:"primary"},i.a.createElement("i",{className:"fa fa-dot-circle-o"})," Salvar"),i.a.createElement("button",{onClick:function(){return e.onCancel()},className:"btn-square btn btn-danger btn-sm"}," ",i.a.createElement("i",{className:"fa close"})," Cancelar"))))))}),x=t(44),S=function(e){return function(a){return e(a.target.files[0])}},C=function(e){var a=e.input,t=(a.value,a.onChange),r=a.onBlur,n=(Object(x.a)(a,["value","onChange","onBlur"]),e.meta,Object(x.a)(e,["input","meta"]));return i.a.createElement("input",Object.assign({onChange:S(t),onBlur:S(r),accept:"*.jpg *.jpeg *.png",type:"file"},n.input,n))},R=Object(k.a)({form:"formImage",enableReinitialize:!0})(function(e){var a=e.handleSubmit;return e.show&&i.a.createElement("div",{className:"buttons fadein"},i.a.createElement("form",{onSubmit:a,className:"form"},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement("strong",null," ",e.initialValues.nome),i.a.createElement("small",null," | Foto de perfil")),i.a.createElement(v.a,null,i.a.createElement(d.a,null,i.a.createElement(b.a,{xs:"12"},i.a.createElement(N.a,null,i.a.createElement(y.a,{htmlFor:"arquivo"},"Selecione uma imagem"),i.a.createElement(U.a,{name:"arquivo",component:C,type:"file"}))))),i.a.createElement(O.a,null,i.a.createElement(U.a,{component:j.a,name:"submit",type:"submit",size:"sm",color:"primary"},i.a.createElement("i",{className:"fa fa-dot-circle-o"})," Salvar"),i.a.createElement("button",{onClick:function(){return e.onCancel()},className:"btn-square btn btn-danger btn-sm"}," ",i.a.createElement("i",{className:"fa close"})," Cancelar")))))}),P=t(1),T=t(47),q=t(221);function M(e){var a,t=e.usuario;return i.a.createElement("tr",{key:t._id.toString()},i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:t.foto?T.a.urlUsuarios+t.foto:T.a.usuarioPadrao,className:"img-avatar",alt:t.email}))),i.a.createElement("td",null,t.nome),i.a.createElement("td",null,t.email),i.a.createElement("td",null,"ROLE_ADMIN"===t.perfil?"Administrador":"Usu\xe1rio"),i.a.createElement("td",{className:"text-center"},i.a.createElement(f.a,{color:(a=t.situacao,!0===a?"success":"secondary")},!0===t.situacao?"Ativo":"Inativo")),i.a.createElement("td",{className:"text-right"},i.a.createElement(p.a,{to:"/usuarios/cadastrar"},i.a.createElement("button",{className:"btn-square btn btn-ghost-primary btn-sm",title:"Novo"},i.a.createElement("i",{className:"fa fa-plus"}))),i.a.createElement("button",{onClick:function(){return e.alterarUsuario(t,!1)},className:"btn-square btn btn-ghost-warning btn-sm",title:"Alterar dados"},i.a.createElement("i",{className:"fa fa-pencil"})),i.a.createElement("button",{onClick:function(){return e.alterarUsuario(t,!1,!0)},className:"btn-square btn btn-ghost-dark btn-sm",title:"Trocar Foto"},i.a.createElement("i",{className:"fa fa fa-picture-o"})),i.a.createElement("button",{onClick:function(){return e.alterarUsuario(t,!0)},className:"btn-square btn btn-ghost-info btn-sm",title:"Alterar Senha"},i.a.createElement("i",{className:"fa fa-lock"})),i.a.createElement("button",{className:"btn-square btn btn-ghost-danger btn-sm",title:"Remover",usuario:t,onClick:function(){return e.removerUsuario(t)}},i.a.createElement("i",{className:"fa fa-minus"}))))}var z=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(l)))).alterarUsuario=function(e,a){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.props.users.pass&&t.props.onPass(),a&&t.props.onPass(),r&&t.props.onFormUpload(),t.props.users.userFormShow||r||t.props.onShowForm(),t.props.onPopularUser(e)},t.alterarImagem=function(e){t.props.onPopularUser(e),t.props.users.userFormShow||t.props.onShowForm(),t.props.users.produtoShowForm&&t.props.onShowForm()},t.enviarImagem=function(e){e&&t.props.onImagemUpload(e),t.props.users.userFormImage&&t.props.onFormUpload(),P.b.push("/usuarios")},t.submit=function(e){if(new q.a({}),t.props.users.userUpdated)if(t.props.users.pass){if(e.senha!==e.resenha)throw new q.a({senha:"Erro ao confirmar as senhas",_error:"As senhas s\xe3o diferentes"});t.props.onUpdateUser(e)}else t.props.onUpdateUser(e);else{if(e.senha!==e.resenha)throw new q.a({senha:"Erro ao confirmar as senhas",_error:"As senhas s\xe3o diferentes"});t.props.onCreateUser(e)}t.props.users.userFormShow&&t.props.onShowForm(),t.props.users.pass&&t.props.onPass()},t.novoUsuario=function(){t.props.users.userFormShow||t.props.onShowForm(),t.props.users.pass||t.props.onPass()},t.removerUsuario=function(e){window.confirm("Deseja remover o usu\xe1rio '".concat(e.nome,"'"))&&t.props.onRemoveUser(e)},t}return Object(l.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.onLoadUsers()}},{key:"render",value:function(){var e=this,a=this.props.users,t=a.userFormShow,r=a.pass,n=a.userFormImage,o=a.items;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(R,{show:n,initialValues:a.userUpdated,onCancel:this.props.onFormUpload,onSubmit:this.enviarImagem}),i.a.createElement(F,{initialValues:a.userUpdated,pass:r,onSubmit:this.submit,onCancel:this.props.onShowForm,show:a.userFormShow,xl:3,xs:3}),i.a.createElement(d.a,null,!t&&!n&&i.a.createElement(b.a,{xs:12,xl:12},i.a.createElement(h.a,null,i.a.createElement(E.a,null,i.a.createElement("i",{className:"fa fa-align-justify"})," ",i.a.createElement("strong",{className:"card-title"},"Usu\xe1rios "),a.userFormShow?i.a.createElement("button",{onClick:function(){return e.props.onShowForm()},className:"btn-square btn btn-danger btn-sm"}," ",i.a.createElement("i",{className:"fa close"})," Fechar formu\xe1rio"):i.a.createElement("button",{onClick:function(){return e.alterarUsuario({})},className:"btn-square btn btn-ghost-primary btn-sm"},i.a.createElement("i",{className:"fa fa-plus"})," Novo")),i.a.createElement(v.a,null,i.a.createElement(g.a,{responsive:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"text-center"},i.a.createElement("i",{className:"icon-people"})),i.a.createElement("th",{scope:"col"},"Nome"),i.a.createElement("th",{scope:"col"},"Email"),i.a.createElement("th",{scope:"col"},"Perfil"),i.a.createElement("th",{scope:"col"},"Situa\xe7\xe3o"),i.a.createElement("th",{scope:"col",className:"text-center"},"#"))),i.a.createElement("tbody",null,o&&o.map(function(a,t){return i.a.createElement(M,{key:t,usuario:a,alterarUsuario:e.alterarUsuario,removerUsuario:e.removerUsuario})}))))))))}}]),a}(c.Component);a.default=Object(u.b)(function(e){return{users:e.users,form:e.form}},function(e){return{onLoadUsers:function(){return e(m.f.getAll())},onShowForm:function(){return e(m.f.showForm())},onPass:function(){return e(m.f.pass())},onFormUpload:function(){return e(m.f.formUpload())},onCreateUser:function(a){return e(m.f.userCreate(a))},onRemoveUser:function(a){return e(m.f.userRemove(a))},onUpdateUser:function(a){return e(m.f.userUpdate(a))},onPopularUser:function(a){return e(m.f.userGet(a))},onImagemUpload:function(a){return e(m.f.imagemUpload(a))}}})(z)},200:function(e,a,t){"use strict";var r=t(16),n=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),i=t(191),u=t.n(i),m=t(192),p={color:c.a.string,pill:c.a.bool,tag:m.h,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.color,l=e.innerRef,c=e.pill,i=e.tag,p=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),f=Object(m.e)(u()(a,"badge","badge-"+o,!!c&&"badge-pill"),t);return p.href&&"span"===i&&(i="a"),s.a.createElement(i,Object(r.a)({},p,{className:f,ref:l}))};f.propTypes=p,f.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=f},203:function(e,a,t){"use strict";var r=t(16),n=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),i=t(191),u=t.n(i),m=t(192),p={tag:m.h,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),c=Object(m.e)(u()(a,"card-header"),t);return s.a.createElement(o,Object(r.a)({},l,{className:c}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},204:function(e,a,t){"use strict";var r=t(16),n=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),i=t(191),u=t.n(i),m=t(192),p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:m.h,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.row,l=e.disabled,c=e.check,i=e.inline,p=e.tag,f=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),d=Object(m.e)(u()(a,!!o&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!l)&&"disabled"),t);return s.a.createElement(p,Object(r.a)({},f,{className:d}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},205:function(e,a,t){"use strict";var r=t(16),n=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),i=t(191),u=t.n(i),m=t(198),p=t.n(m),f=t(192),d=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:d,push:Object(f.c)(d,'Please use the prop "order"'),pull:Object(f.c)(d,'Please use the prop "order"'),order:d,offset:d})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.h,className:c.a.string,cssModule:c.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:c.a.array},E={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.hidden,l=e.widths,c=e.tag,i=e.check,m=e.size,d=e.for,b=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),h=[];l.forEach(function(a,r){var n=e[a];if(delete b[a],n||""===n){var o,s=!r;if(p()(n)){var l,c=s?"-":"-"+a+"-";o=v(s,a,n.size),h.push(Object(f.e)(u()(((l={})[o]=n.size||""===n.size,l["order"+c+n.order]=n.order||0===n.order,l["offset"+c+n.offset]=n.offset||0===n.offset,l))),t)}else o=v(s,a,n),h.push(o)}});var E=Object(f.e)(u()(a,!!o&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),t);return s.a.createElement(c,Object(r.a)({htmlFor:d},b,{className:E}))};g.propTypes=h,g.defaultProps=E,a.a=g},206:function(e,a,t){"use strict";var r=t(16),n=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),i=t(191),u=t.n(i),m=t(192),p={tag:m.h,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),c=Object(m.e)(u()(a,"card-footer"),t);return s.a.createElement(o,Object(r.a)({},l,{className:c}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},207:function(e,a,t){"use strict";var r=t(16),n=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),i=t(191),u=t.n(i),m=t(192),p={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,inverse:Object(m.c)(c.a.bool,'Please use the prop "dark"'),dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:m.h,responsiveTag:m.h,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},f=function(e){var a=e.className,t=e.cssModule,o=e.size,l=e.bordered,c=e.borderless,i=e.striped,p=e.inverse,f=e.dark,d=e.hover,b=e.responsive,h=e.tag,E=e.responsiveTag,v=e.innerRef,g=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),N=Object(m.e)(u()(a,"table",!!o&&"table-"+o,!!l&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!(!f&&!p)&&"table-dark",!!d&&"table-hover"),t),y=s.a.createElement(h,Object(r.a)({},g,{ref:v,className:N}));if(b){var w=!0===b?"table-responsive":"table-responsive-"+b;return s.a.createElement(E,{className:w},y)}return y};f.propTypes=p,f.defaultProps={tag:"table",responsiveTag:"div"},a.a=f},211:function(e,a,t){"use strict";var r=t(2),n=t.n(r),o=t(3),s=t.n(o),l=t(9),c=t.n(l),i=t(12),u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};function m(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function a(){var t,r;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=r=m(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var a=r.context.router.history,t=r.props,n=t.replace,o=t.to;n?a.replace(o):a.push(o)}},m(r,t)}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),a.prototype.render=function(){var e=this.props,a=(e.replace,e.to),t=e.innerRef,r=function(e,a){var t={};for(var r in e)a.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==a,'You must specify the "to" property');var o=this.context.router.history,s="string"===typeof a?Object(i.b)(a,null,null,o.location):a,l=o.createHref(s);return n.a.createElement("a",u({},r,{onClick:this.handleClick,href:l,ref:t}))},a}(n.a.Component);f.propTypes={onClick:s.a.func,target:s.a.string,replace:s.a.bool,to:s.a.oneOfType([s.a.string,s.a.object]).isRequired,innerRef:s.a.oneOfType([s.a.string,s.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:s.a.shape({history:s.a.shape({push:s.a.func.isRequired,replace:s.a.func.isRequired,createHref:s.a.func.isRequired}).isRequired}).isRequired},a.a=f}}]);
//# sourceMappingURL=10.dfbe6914.chunk.js.map