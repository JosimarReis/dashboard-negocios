(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{184:function(e,a,t){"use strict";t.r(a);var n=t(37),r=t(38),o=t(40),s=t(39),l=t(41),c=t(2),m=t.n(c),i=t(21),u=t(42),p=t(200),b=t(350),d=t(351),f=t(352),E=t(203),h=t(353),g=t(207),v=t(204),N=t(205),w=t(359),j=t(206),U=t(228),O=t(245),y=t(246),F=Object(y.a)({form:"usuario",enableReinitialize:!0})(function(e){var a=e.handleSubmit,t=e.show,n=e.error;return t&&m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement("form",{onSubmit:a,className:"form"},m.a.createElement(d.a,{xs:"12",sm:"11",md:"9",lg:"8",xl:"5"},m.a.createElement(f.a,null,m.a.createElement(E.a,null,m.a.createElement("strong",null," ",e.pass?e.initialValues.nome:"Usu\xe1rio"),m.a.createElement("small",null," |",e.pass?" alterando senha":e.initialValues?" alterar":" novo")),m.a.createElement(h.a,null,!e.pass&&m.a.createElement(b.a,null,m.a.createElement(d.a,{xs:"12"},m.a.createElement(v.a,null,m.a.createElement(N.a,{htmlFor:"nome"},"Nome"),m.a.createElement(O.a,{type:"text",name:"nome",placeholder:"Nome",component:"input",className:"form-control",required:!0})))),!e.pass&&m.a.createElement(b.a,null,m.a.createElement(d.a,{xs:"12"},m.a.createElement(v.a,null,m.a.createElement(N.a,{htmlFor:"email"},"Email"),m.a.createElement(O.a,{type:"email",name:"email",placeholder:"email@provedor.com",component:"input",className:"form-control",required:!0})))),(!e.initialValues||e.pass)&&m.a.createElement(b.a,null,m.a.createElement(d.a,{xs:"6"},m.a.createElement(v.a,null,m.a.createElement(N.a,{htmlFor:"senha"},"Senha"),m.a.createElement(O.a,{type:"password",name:"senha",placeholder:"Digite a senha",component:"input",className:"form-control",required:!0}))),m.a.createElement(d.a,{xs:"6"},m.a.createElement(v.a,null,m.a.createElement(N.a,{htmlFor:"resenha"},"Repita a senha"),m.a.createElement(O.a,{type:"password",name:"resenha",placeholder:"Repita a senha",component:"input",className:"form-control",required:!0})))),!e.pass&&m.a.createElement(b.a,null,m.a.createElement(d.a,{xs:"7"},m.a.createElement(v.a,null,m.a.createElement(N.a,{htmlFor:"perfil"},"Perfil"),m.a.createElement(O.a,{component:"select",className:"form-control",name:"perfil"},m.a.createElement("option",null),m.a.createElement("option",{value:"ROLE_USER"},"Usu\xe1rio"),m.a.createElement("option",{value:"ROLE_ADMIN"},"Administrador")))),m.a.createElement(d.a,{xs:"5"},m.a.createElement(v.a,null,m.a.createElement(N.a,{htmlFor:"situacao"},"Situa\xe7\xe3o"),m.a.createElement(O.a,{component:"select",className:"form-control",name:"situacao"},m.a.createElement("option",null),m.a.createElement("option",{value:"true"},"Ativo"),m.a.createElement("option",{value:"false"},"Inativo"))))),!e.pass&&m.a.createElement(b.a,null,m.a.createElement(d.a,{xs:"12"},m.a.createElement(v.a,null,m.a.createElement(N.a,{htmlFor:"telefone"},"Telefone"),m.a.createElement(O.a,{type:"text",name:"telefone",placeholder:"(00) 00000-0000",component:"input",className:"form-control"})))),n&&m.a.createElement(b.a,null,m.a.createElement(d.a,{xs:"12"},m.a.createElement(w.a,{color:"danger"},n)))),m.a.createElement(j.a,null,m.a.createElement(O.a,{component:U.a,name:"submit",type:"submit",size:"sm",color:"primary"},m.a.createElement("i",{className:"fa fa-dot-circle-o"})," Salvar"),m.a.createElement("button",{onClick:function(){return e.onCancel()},className:"btn-square btn btn-danger btn-sm"}," ",m.a.createElement("i",{className:"fa close"})," Cancelar"))))))}),S=t(44),k=function(e){return function(a){return e(a.target.files[0])}},x=function(e){var a=e.input,t=(a.value,a.onChange),n=a.onBlur,r=(Object(S.a)(a,["value","onChange","onBlur"]),e.meta,Object(S.a)(e,["input","meta"]));return m.a.createElement("input",Object.assign({onChange:k(t),onBlur:k(n),accept:"*.jpg *.jpeg *.png",type:"file"},r.input,r))},C=Object(y.a)({form:"formImage",enableReinitialize:!0})(function(e){var a=e.handleSubmit;return e.show&&m.a.createElement("div",{className:"buttons fadein"},m.a.createElement("form",{onSubmit:a,className:"form"},m.a.createElement(f.a,null,m.a.createElement(E.a,null,m.a.createElement("strong",null," ",e.initialValues.nome),m.a.createElement("small",null," | Foto de perfil")),m.a.createElement(h.a,null,m.a.createElement(b.a,null,m.a.createElement(d.a,{xs:"12"},m.a.createElement(v.a,null,m.a.createElement(N.a,{htmlFor:"arquivo"},"Selecione uma imagem"),m.a.createElement(O.a,{name:"arquivo",component:x,type:"file"}))))),m.a.createElement(j.a,null,m.a.createElement(O.a,{component:U.a,name:"submit",type:"submit",size:"sm",color:"primary"},m.a.createElement("i",{className:"fa fa-dot-circle-o"})," Salvar"),m.a.createElement("button",{onClick:function(){return e.onCancel()},className:"btn-square btn btn-danger btn-sm"}," ",m.a.createElement("i",{className:"fa close"})," Cancelar")))))}),M=t(1),P=t(47),R=t(221);function T(e){var a,t=e.usuario;return m.a.createElement("tr",{key:t._id.toString()},m.a.createElement("td",{className:"text-center"},m.a.createElement("div",{className:"avatar"},m.a.createElement("img",{src:t.foto?P.a.urlUsuarios+t.foto:P.a.usuarioPadrao,className:"img-avatar",alt:t.email}))),m.a.createElement("td",null,t.nome),m.a.createElement("td",null,t.email),m.a.createElement("td",null,"ROLE_ADMIN"===t.perfil?"Administrador":"Usu\xe1rio"),m.a.createElement("td",{className:"text-center"},m.a.createElement(p.a,{color:(a=t.situacao,!0===a?"success":"secondary")},!0===t.situacao?"Ativo":"Inativo")),m.a.createElement("td",{className:"text-right"},m.a.createElement("button",{className:"btn-square btn btn-ghost-primary btn-sm",title:"Novo"},m.a.createElement("i",{className:"fa fa-plus"})),m.a.createElement("button",{onClick:function(){return e.alterarUsuario(t,!1)},className:"btn-square btn btn-ghost-warning btn-sm",title:"Alterar dados"},m.a.createElement("i",{className:"fa fa-pencil"})),m.a.createElement("button",{onClick:function(){return e.alterarUsuario(t,!1,!0)},className:"btn-square btn btn-ghost-dark btn-sm",title:"Trocar Foto"},m.a.createElement("i",{className:"fa fa fa-picture-o"})),m.a.createElement("button",{onClick:function(){return e.alterarUsuario(t,!0)},className:"btn-square btn btn-ghost-info btn-sm",title:"Alterar Senha"},m.a.createElement("i",{className:"fa fa-lock"})),m.a.createElement("button",{className:"btn-square btn btn-ghost-danger btn-sm",title:"Remover",usuario:t,onClick:function(){return e.removerUsuario(t)}},m.a.createElement("i",{className:"fa fa-minus"}))))}var q=function(e){function a(){var e,t;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(l)))).alterarUsuario=function(e,a){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.usuarioEstabelecimento.pass&&t.props.onPass(),a&&t.props.onPass(),n&&t.props.onFormUpload(),t.usuarioEstabelecimento.userFormShow||n||t.props.onShowForm(),t.props.onPopularUser(e)},t.alterarImagem=function(e){t.props.onPopularUser(e),t.usuarioEstabelecimento.userFormShow||t.props.onShowForm(),t.usuarioEstabelecimento.produtoShowForm&&t.props.onShowForm()},t.enviarImagem=function(e){e&&t.props.onImagemUpload(e),t.usuarioEstabelecimento.userFormImage&&t.props.onFormUpload(),M.b.push("/usuarios-estabelecimentos")},t.submit=function(e){if(new R.a({}),t.usuarioEstabelecimento.userUpdated)if(t.usuarioEstabelecimento.pass){if(e.senha!==e.resenha)throw new R.a({senha:"Erro ao confirmar as senhas",_error:"As senhas s\xe3o diferentes"});t.props.onUpdateUser(e)}else t.props.onUpdateUser(e);else{if(e.senha!==e.resenha)throw new R.a({senha:"Erro ao confirmar as senhas",_error:"As senhas s\xe3o diferentes"});t.props.onCreateUser(e)}t.usuarioEstabelecimento.userFormShow&&t.props.onShowForm(),t.usuarioEstabelecimento.pass&&t.props.onPass()},t.novoUsuario=function(){t.usuarioEstabelecimento.userFormShow||t.props.onShowForm(),t.usuarioEstabelecimento.pass||t.props.onPass()},t.removerUsuario=function(e){window.confirm("Deseja remover o usu\xe1rio '".concat(e.nome,"'"))&&t.props.onRemoveUser(e)},t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.usuarioEstabelecimento.estabelecimento;e||((e=JSON.parse(localStorage.getItem("estabelecimento")))?this.props.setEstabelecimento(e):M.b.push("/estabelecimentos")),this.props.onLoadUsers(e)}},{key:"render",value:function(){var e=this,a=this.props.usuarioEstabelecimento,t=a.userFormShow,n=a.pass,r=a.userFormImage,o=a.items,s=a.estabelecimento.dados;return console.log(this.props.usuarioEstabelecimento),m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(C,{show:r,initialValues:a.userUpdated,onCancel:this.props.onFormUpload,onSubmit:this.enviarImagem}),m.a.createElement(F,{initialValues:a.userUpdated,pass:n,onSubmit:this.submit,onCancel:this.props.onShowForm,show:a.userFormShow,xl:3,xs:3}),m.a.createElement(b.a,null,!t&&!r&&m.a.createElement(d.a,{xs:12,xl:12},m.a.createElement(f.a,null,m.a.createElement(E.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," ",m.a.createElement("strong",{className:"card-title"},"Usu\xe1rios de",s.razaoSocial),a.userFormShow?m.a.createElement("button",{onClick:function(){return e.props.onShowForm()},className:"btn-square btn btn-danger btn-sm"}," ",m.a.createElement("i",{className:"fa close"})," Fechar formu\xe1rio"):m.a.createElement("button",{onClick:function(){return e.alterarUsuario({})},className:"btn-square btn btn-ghost-primary btn-sm"},m.a.createElement("i",{className:"fa fa-plus"})," Novo")),m.a.createElement(h.a,null,m.a.createElement(g.a,{responsive:!0,hover:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{className:"text-center"},m.a.createElement("i",{className:"icon-people"})),m.a.createElement("th",{scope:"col"},"Nome"),m.a.createElement("th",{scope:"col"},"Email"),m.a.createElement("th",{scope:"col"},"Perfil"),m.a.createElement("th",{scope:"col"},"Situa\xe7\xe3o"),m.a.createElement("th",{scope:"col",className:"text-center"},"#"))),m.a.createElement("tbody",null,o&&o.map(function(a,t){return m.a.createElement(T,{key:t,usuario:a,alterarUsuario:e.alterarUsuario,removerUsuario:e.removerUsuario})}))))))))}}]),a}(c.Component);a.default=Object(i.b)(function(e){return{usuarioEstabelecimento:e.usuarioEstabelecimento,form:e.form}},function(e){return{onLoadUsers:function(){return e(u.g.getAll())},onShowForm:function(){return e(u.g.showForm())},onPass:function(){return e(u.g.pass())},onFormUpload:function(){return e(u.g.formUpload())},onCreateUser:function(a){return e(u.g.userCreate(a))},onRemoveUser:function(a){return e(u.g.userRemove(a))},onUpdateUser:function(a){return e(u.g.userUpdate(a))},onPopularUser:function(a){return e(u.g.userGet(a))},onImagemUpload:function(a){return e(u.g.imagemUpload(a))},setEstabelecimento:function(a){return e(u.g.setEstabelecimento(a))}}})(q)},200:function(e,a,t){"use strict";var n=t(16),r=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),m=t(191),i=t.n(m),u=t(192),p={color:c.a.string,pill:c.a.bool,tag:u.h,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,o=e.color,l=e.innerRef,c=e.pill,m=e.tag,p=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),b=Object(u.e)(i()(a,"badge","badge-"+o,!!c&&"badge-pill"),t);return p.href&&"span"===m&&(m="a"),s.a.createElement(m,Object(n.a)({},p,{className:b,ref:l}))};b.propTypes=p,b.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=b},203:function(e,a,t){"use strict";var n=t(16),r=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),m=t(191),i=t.n(m),u=t(192),p={tag:u.h,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,o=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.e)(i()(a,"card-header"),t);return s.a.createElement(o,Object(n.a)({},l,{className:c}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},204:function(e,a,t){"use strict";var n=t(16),r=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),m=t(191),i=t.n(m),u=t(192),p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.h,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,o=e.row,l=e.disabled,c=e.check,m=e.inline,p=e.tag,b=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),d=Object(u.e)(i()(a,!!o&&"row",c?"form-check":"form-group",!(!c||!m)&&"form-check-inline",!(!c||!l)&&"disabled"),t);return s.a.createElement(p,Object(n.a)({},b,{className:d}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},205:function(e,a,t){"use strict";var n=t(16),r=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),m=t(191),i=t.n(m),u=t(198),p=t.n(u),b=t(192),d=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:d,push:Object(b.c)(d,'Please use the prop "order"'),pull:Object(b.c)(d,'Please use the prop "order"'),order:d,offset:d})]),E={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:b.h,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,o=e.hidden,l=e.widths,c=e.tag,m=e.check,u=e.size,d=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),E=[];l.forEach(function(a,n){var r=e[a];if(delete f[a],r||""===r){var o,s=!n;if(p()(r)){var l,c=s?"-":"-"+a+"-";o=g(s,a,r.size),E.push(Object(b.e)(i()(((l={})[o]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l))),t)}else o=g(s,a,r),E.push(o)}});var h=Object(b.e)(i()(a,!!o&&"sr-only",!!m&&"form-check-label",!!u&&"col-form-label-"+u,E,!!E.length&&"col-form-label"),t);return s.a.createElement(c,Object(n.a)({htmlFor:d},f,{className:h}))};v.propTypes=E,v.defaultProps=h,a.a=v},206:function(e,a,t){"use strict";var n=t(16),r=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),m=t(191),i=t.n(m),u=t(192),p={tag:u.h,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,o=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.e)(i()(a,"card-footer"),t);return s.a.createElement(o,Object(n.a)({},l,{className:c}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b},207:function(e,a,t){"use strict";var n=t(16),r=t(193),o=t(2),s=t.n(o),l=t(3),c=t.n(l),m=t(191),i=t.n(m),u=t(192),p={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,inverse:Object(u.c)(c.a.bool,'Please use the prop "dark"'),dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.h,responsiveTag:u.h,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},b=function(e){var a=e.className,t=e.cssModule,o=e.size,l=e.bordered,c=e.borderless,m=e.striped,p=e.inverse,b=e.dark,d=e.hover,f=e.responsive,E=e.tag,h=e.responsiveTag,g=e.innerRef,v=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),N=Object(u.e)(i()(a,"table",!!o&&"table-"+o,!!l&&"table-bordered",!!c&&"table-borderless",!!m&&"table-striped",!(!b&&!p)&&"table-dark",!!d&&"table-hover"),t),w=s.a.createElement(E,Object(n.a)({},v,{ref:g,className:N}));if(f){var j=!0===f?"table-responsive":"table-responsive-"+f;return s.a.createElement(h,{className:j},w)}return w};b.propTypes=p,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b}}]);
//# sourceMappingURL=12.f6f1dca4.chunk.js.map