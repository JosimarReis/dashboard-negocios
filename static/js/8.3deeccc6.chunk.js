(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{182:function(e,a,t){"use strict";function r(e){throw new Error('"'+e+'" is read-only')}t.r(a);var o=t(37),n=t(38),l=t(40),s=t(39),c=t(41),i=t(2),m=t.n(i),u=t(21),p=t(42),d=t(200),g=t(350),b=t(351),E=t(352),f=t(203),v=t(353),h=t(207),N=t(206),O=t(339),C=t(340),j=t(228),w=t(204),I=t(205),S=t(359),A=t(245),F=t(246),T=Object(F.a)({form:"categoria",enableReinitialize:!0})(function(e){var a=e.handleSubmit,t=e.show,r=e.error;return t&&m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement("form",{onSubmit:a,className:"form"},m.a.createElement(b.a,{xs:"12",sm:"11",md:"9",lg:"8",xl:"5"},m.a.createElement(E.a,null,m.a.createElement(f.a,null,m.a.createElement("strong",null," ",e.pass?e.initialValues.nome:"Categoria"),m.a.createElement("small",null," | ",e.initialValues?" alterar":" novo")),m.a.createElement(v.a,null,m.a.createElement(g.a,null,m.a.createElement(b.a,{xs:"12"},m.a.createElement(w.a,null,m.a.createElement(I.a,{htmlFor:"grupo"},"Grupo"),m.a.createElement(A.a,{component:"select",className:"form-control",name:"grupo",required:!0},m.a.createElement("option",{value:""},"Selecione um grupo"),m.a.createElement("option",{value:"A\xc7OUGUE"},"A\xc7OUGUE"),m.a.createElement("option",{value:"BAZAR"},"BAZAR"),m.a.createElement("option",{value:"BEB\xca"},"BEB\xca"),m.a.createElement("option",{value:"BEBIDAS"},"BEBIDAS"),m.a.createElement("option",{value:"CONGELADO"},"CONGELADO"),m.a.createElement("option",{value:"CONGELADOS"},"CONGELADOS"),m.a.createElement("option",{value:"ELETRO"},"ELETRO"),m.a.createElement("option",{value:"FRIOS E LATIC\xcdNIOS"},"FRIOS E LATIC\xcdNIOS"),m.a.createElement("option",{value:"HIGIENE E BELEZA"},"HIGIENE E BELEZA"),m.a.createElement("option",{value:"HORTIFRUTI"},"HORTIFRUTI"),m.a.createElement("option",{value:"INFANTIL"},"INFANTIL"),m.a.createElement("option",{value:"LIMPEZA"},"LIMPEZA"),m.a.createElement("option",{value:"MERCEARIA"},"MERCEARIA"),m.a.createElement("option",{value:"PADARIA"},"PADARIA"),m.a.createElement("option",{value:"PETSHOP"},"PETSHOP"))))),m.a.createElement(g.a,null,m.a.createElement(b.a,{xs:"12"},m.a.createElement(w.a,null,m.a.createElement(I.a,{htmlFor:"nome"},"Nome"),m.a.createElement(A.a,{type:"text",name:"nome",placeholder:"Nome",component:"input",className:"form-control",required:!0})))),m.a.createElement(g.a,null,m.a.createElement(b.a,{xs:"12"},m.a.createElement(w.a,null,m.a.createElement(I.a,{htmlFor:"situacao"},"Situa\xe7\xe3o"),m.a.createElement(A.a,{component:"select",className:"form-control",name:"situacao"},m.a.createElement("option",{value:"true"},"Ativo"),m.a.createElement("option",{value:"false"},"Inativo"))))),r&&m.a.createElement(g.a,null,m.a.createElement(b.a,{xs:"12"},m.a.createElement(S.a,{color:"danger"},r)))),m.a.createElement(N.a,null,m.a.createElement(A.a,{component:j.a,name:"submit",type:"submit",size:"sm",color:"primary"},m.a.createElement("i",{className:"fa fa-dot-circle-o"})," Salvar"),m.a.createElement("button",{onClick:function(){return e.onCancel()},className:"btn-square btn btn-danger btn-sm"}," ",m.a.createElement("i",{className:"fa close"})," Cancelar"))))))}),y=t(1);function M(e){var a,t=e.categoria;return m.a.createElement("tr",{key:t._id.toString()},m.a.createElement("td",null,t.grupo),m.a.createElement("td",null,t.nome),m.a.createElement("td",{className:"text-center"},m.a.createElement(d.a,{color:(a=t.situacao,!0===a?"success":"secondary")},!0===t.situacao?"Ativo":"Inativo")),m.a.createElement("td",{className:"text-right"},m.a.createElement("button",{onClick:function(){return e.novoCategoria()},className:"btn-square btn btn-ghost-primary btn-sm",title:"Novo"},m.a.createElement("i",{className:"fa fa-plus"})),m.a.createElement("button",{onClick:function(){return e.alterarCategoria(t,!1)},className:"btn-square btn btn-ghost-warning btn-sm",title:"Alterar dados"},m.a.createElement("i",{className:"fa fa-pencil"})),m.a.createElement("button",{className:"btn-square btn btn-ghost-danger btn-sm",title:"Remover",categoria:t,onClick:function(){return e.removerCategoria(t)}},m.a.createElement("i",{className:"fa fa-minus"}))))}var k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(n)))).alterarCategoria=function(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a&&t.props.onFormUpload(),t.props.categorias.categoriaFormShow||a||t.props.onShowForm(),t.props.onPopularCategoria(e)},t.alterarImagem=function(e){t.props.onPopularCategoria(e),t.props.categorias.categoriaFormShow||t.props.onShowForm(),t.props.categorias.produtoShowForm&&t.props.onShowForm()},t.enviarImagem=function(e){e&&t.props.onImagemUpload(e),t.props.categorias.categoriaFormImage&&t.props.onFormUpload(),y.b.push("/categorias")},t.submit=function(e){t.props.categorias.categoriaUpdated?t.props.onUpdateCategoria(e):t.props.onCreateCategoria(e),t.props.categorias.categoriaFormShow&&t.props.onShowForm()},t.removerCategoria=function(e){window.confirm("Deseja remover o categoria de atividade '".concat(e.nome,"'"))&&t.props.onRemoveCategoria(e)},t.prevPage=function(){},t.nextPage=function(){},t}return Object(c.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e={situacao:"todos",grupo:"todos",limit:30,order:"asc",pagina:1},a=JSON.parse(localStorage.getItem("filtrosCategorias"));e=a||e,this.props.onLoadCategorias(e)}},{key:"render",value:function(){var e=this,a=this.props.categorias,t=a.categoriaFormShow,o=a.categoriaFormImage;return a.items&&(r("page"),a.items.page,r("pages"),a.items.pages),m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(T,{initialValues:a.categoriaUpdated,onSubmit:this.submit,onCancel:this.props.onShowForm,show:a.categoriaFormShow}),m.a.createElement(g.a,{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"},!t&&!o&&m.a.createElement(b.a,{xs:12,xl:12},m.a.createElement(E.a,null,m.a.createElement(f.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," ",m.a.createElement("strong",{className:"card-title"},"Categorias"),a.categoriaFormShow?m.a.createElement("button",{onClick:function(){return e.props.onShowForm()},className:"btn-square btn btn-danger btn-sm"}," ",m.a.createElement("i",{className:"fa close"})," Fechar formu\xe1rio"):m.a.createElement("button",{onClick:function(){return e.props.onShowForm()},className:"btn-square btn btn-ghost-primary btn-sm"},m.a.createElement("i",{className:"fa fa-plus"})," Novo")),m.a.createElement(v.a,null,m.a.createElement(h.a,{responsive:!0,hover:!0},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",{scope:"col"},"Grupo"),m.a.createElement("th",{scope:"col"},"Categoria"),m.a.createElement("th",{scope:"col"},"Situa\xe7\xe3o"),m.a.createElement("th",{scope:"col",className:"text-center"}))),m.a.createElement("tbody",null,a.items&&a.items.docs.map(function(a,t){return m.a.createElement(M,{key:t,categoria:a,alterarCategoria:e.alterarCategoria,removerCategoria:e.removerCategoria,novoCategoria:e.props.onShowForm})}))),m.a.createElement(N.a,null,m.a.createElement(O.a,{size:"sm"},m.a.createElement(C.a,null,m.a.createElement(j.a,{disabled:1===this.page,onClick:function(){return e.prevPage()}},"<")),m.a.createElement(C.a,null,m.a.createElement(j.a,null,this.page,"/",this.pages)),m.a.createElement(C.a,null,m.a.createElement(j.a,{disabled:this.page===this.pages,onClick:function(){return e.nextPage()}},">")))))))))}}]),a}(i.Component);a.default=Object(u.b)(function(e){return{categorias:e.categorias,form:e.form}},function(e){return{onLoadCategorias:function(a){return e(p.b.getAll(a))},onShowForm:function(){return e(p.b.showForm())},onFormUpload:function(){return e(p.b.formUpload())},onCreateCategoria:function(a){return e(p.b.categoriaCreate(a))},onRemoveCategoria:function(a){return e(p.b.categoriaRemove(a))},onUpdateCategoria:function(a){return e(p.b.categoriaUpdate(a))},onPopularCategoria:function(a){return e(p.b.categoriaGet(a))},onImagemUpload:function(a){return e(p.b.imagemUpload(a))}}})(k)},200:function(e,a,t){"use strict";var r=t(16),o=t(193),n=t(2),l=t.n(n),s=t(3),c=t.n(s),i=t(191),m=t.n(i),u=t(192),p={color:c.a.string,pill:c.a.bool,tag:u.h,innerRef:c.a.oneOfType([c.a.object,c.a.func,c.a.string]),children:c.a.node,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,n=e.color,s=e.innerRef,c=e.pill,i=e.tag,p=Object(o.a)(e,["className","cssModule","color","innerRef","pill","tag"]),d=Object(u.e)(m()(a,"badge","badge-"+n,!!c&&"badge-pill"),t);return p.href&&"span"===i&&(i="a"),l.a.createElement(i,Object(r.a)({},p,{className:d,ref:s}))};d.propTypes=p,d.defaultProps={color:"secondary",pill:!1,tag:"span"},a.a=d},203:function(e,a,t){"use strict";var r=t(16),o=t(193),n=t(2),l=t.n(n),s=t(3),c=t.n(s),i=t(191),m=t.n(i),u=t(192),p={tag:u.h,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),c=Object(u.e)(m()(a,"card-header"),t);return l.a.createElement(n,Object(r.a)({},s,{className:c}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},204:function(e,a,t){"use strict";var r=t(16),o=t(193),n=t(2),l=t.n(n),s=t(3),c=t.n(s),i=t(191),m=t.n(i),u=t(192),p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.h,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,n=e.row,s=e.disabled,c=e.check,i=e.inline,p=e.tag,d=Object(o.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),g=Object(u.e)(m()(a,!!n&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!s)&&"disabled"),t);return l.a.createElement(p,Object(r.a)({},d,{className:g}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},205:function(e,a,t){"use strict";var r=t(16),o=t(193),n=t(2),l=t.n(n),s=t(3),c=t.n(s),i=t(191),m=t.n(i),u=t(198),p=t.n(u),d=t(192),g=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:g,push:Object(d.c)(g,'Please use the prop "order"'),pull:Object(d.c)(g,'Please use the prop "order"'),order:g,offset:g})]),E={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.h,className:c.a.string,cssModule:c.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:c.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,n=e.hidden,s=e.widths,c=e.tag,i=e.check,u=e.size,g=e.for,b=Object(o.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),E=[];s.forEach(function(a,r){var o=e[a];if(delete b[a],o||""===o){var n,l=!r;if(p()(o)){var s,c=l?"-":"-"+a+"-";n=v(l,a,o.size),E.push(Object(d.e)(m()(((s={})[n]=o.size||""===o.size,s["order"+c+o.order]=o.order||0===o.order,s["offset"+c+o.offset]=o.offset||0===o.offset,s))),t)}else n=v(l,a,o),E.push(n)}});var f=Object(d.e)(m()(a,!!n&&"sr-only",!!i&&"form-check-label",!!u&&"col-form-label-"+u,E,!!E.length&&"col-form-label"),t);return l.a.createElement(c,Object(r.a)({htmlFor:g},b,{className:f}))};h.propTypes=E,h.defaultProps=f,a.a=h},206:function(e,a,t){"use strict";var r=t(16),o=t(193),n=t(2),l=t.n(n),s=t(3),c=t.n(s),i=t(191),m=t.n(i),u=t(192),p={tag:u.h,className:c.a.string,cssModule:c.a.object},d=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),c=Object(u.e)(m()(a,"card-footer"),t);return l.a.createElement(n,Object(r.a)({},s,{className:c}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},207:function(e,a,t){"use strict";var r=t(16),o=t(193),n=t(2),l=t.n(n),s=t(3),c=t.n(s),i=t(191),m=t.n(i),u=t(192),p={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,inverse:Object(u.c)(c.a.bool,'Please use the prop "dark"'),dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.h,responsiveTag:u.h,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},d=function(e){var a=e.className,t=e.cssModule,n=e.size,s=e.bordered,c=e.borderless,i=e.striped,p=e.inverse,d=e.dark,g=e.hover,b=e.responsive,E=e.tag,f=e.responsiveTag,v=e.innerRef,h=Object(o.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),N=Object(u.e)(m()(a,"table",!!n&&"table-"+n,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!(!d&&!p)&&"table-dark",!!g&&"table-hover"),t),O=l.a.createElement(E,Object(r.a)({},h,{ref:v,className:N}));if(b){var C=!0===b?"table-responsive":"table-responsive-"+b;return l.a.createElement(f,{className:C},O)}return O};d.propTypes=p,d.defaultProps={tag:"table",responsiveTag:"div"},a.a=d},339:function(e,a,t){"use strict";var r=t(16),o=t(193),n=t(2),l=t.n(n),s=t(3),c=t.n(s),i=t(191),m=t.n(i),u=t(192),p={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:u.h,listTag:u.h,"aria-label":c.a.string},d=function(e){var a,t=e.className,n=e.listClassName,s=e.cssModule,c=e.size,i=e.tag,p=e.listTag,d=e["aria-label"],g=Object(o.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(u.e)(m()(t),s),E=Object(u.e)(m()(n,"pagination",((a={})["pagination-"+c]=!!c,a)),s);return l.a.createElement(i,{className:b,"aria-label":d},l.a.createElement(p,Object(r.a)({},g,{className:E})))};d.propTypes=p,d.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=d},340:function(e,a,t){"use strict";var r=t(16),o=t(193),n=t(2),l=t.n(n),s=t(3),c=t.n(s),i=t(191),m=t.n(i),u=t(192),p={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:u.h},d=function(e){var a=e.active,t=e.className,n=e.cssModule,s=e.disabled,c=e.tag,i=Object(o.a)(e,["active","className","cssModule","disabled","tag"]),p=Object(u.e)(m()(t,"page-item",{active:a,disabled:s}),n);return l.a.createElement(c,Object(r.a)({},i,{className:p}))};d.propTypes=p,d.defaultProps={tag:"li"},a.a=d}}]);
//# sourceMappingURL=8.3deeccc6.chunk.js.map