(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6528fc1e"],{"8e6e":function(e,t,o){var i=o("5ca1"),r=o("990b"),n=o("6821"),a=o("11e9"),c=o("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(e){var t,o,i=n(e),l=a.f,s=r(i),f={},u=0;while(s.length>u)o=l(i,t=s[u++]),void 0!==o&&c(f,t,o);return f}})},"990b":function(e,t,o){var i=o("9093"),r=o("2621"),n=o("cb7c"),a=o("7726").Reflect;e.exports=a&&a.ownKeys||function(e){var t=i.f(n(e)),o=r.f;return o?t.concat(o(e)):t}},ade3:function(e,t,o){"use strict";function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.d(t,"a",(function(){return i}))},fb66:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{width:"100%",height:"40vh"},attrs:{id:"main-for-w2ui-infinite-scroll"}})},r=[],n=(o("8e6e"),o("ac6a"),o("456d"),o("ade3"));function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){Object(n["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var l={components:{},data:function(){return{className:"categoria",config:{}}},mounted:function(){$("#main-for-w2ui-infinite-scroll").w2grid(this.getConfig().grid)},methods:{getConfig:function(){var e="http://localhost:8000/api/categoria",t={grid:{name:"grid1",url:e,autoLoad:!0,skip:0,show:{footer:!0,toolbar:!0,lineNumbers:!1,selectColumn:!0,toolbarAdd:!0,toolbarDelete:!0,toolbarSave:!1,toolbarEdit:!0},withs:[],columns:[{field:"id",text:"ID",size:"5%"},{field:"nome",text:"nome",size:"50%"}],limit:6,multiSearch:!0,searches:[{field:"id",label:"ID ",type:"int"},{field:"nome",label:"Nome da Categoria",type:"text"}],onLoad:function(e){var t=e.xhr.responseJSON;e.xhr.responseText={records:t}},onAdd:function(e){this.openPopup()},onEdit:function(e){var t=this.get(this.getSelection())[0];this.openPopup(t)},onDelete:function(e){},openPopup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="http://localhost:8000/api/categoria",o="POST";e.id&&(t+="/"+e.id,o="PUT"),w2ui.foo&&(delete w2ui.foo,delete w2ui.foo_toolbar,delete w2ui.foo_tabs),$().w2form({url:t,method:o,name:"foo",autosize:!0,style:"background-color: transparent;z-index:99999",fields:[{field:"nome",label:"Nome",type:"text",required:!0,attr:'style="with:100%;"',html:{label:"Nome da Categoria"}}],record:e,onRequest:function(e){},actions:{Reset:function(){this.clear()},Save:function(e){var t=this,o=this.record,i={tipo:null},r=this;for(var n in r.fields)if(Object.hasOwnProperty.call(r.fields,n)){var a=r.fields[n];if(a.type,"list"==a.type){var l=$(a.el).w2field();i[a.field]=l.get().id}}this.record=c(c({},this.record),i),this.validate(),this.save((function(e){if(!0!==e.status){if(e.error){var i=e.error;for(var r in i)if(Object.hasOwnProperty.call(i,r)){var n=i[r];t.last.errors.push({error:n.join(" - "),field:t.get(r)})}t.showErrors()}window.notify({title:"Falha ao salvar",text:e.message,iconPack:"feather",icon:"icon-alert-circle",color:"danger"})}else w2popup.close(),window.notify({title:"Salvo com sucesso",text:e.message,iconPack:"feather",icon:"icon-alert-circle",color:"success"}),$(".w2ui-icon-reload").click(),setTimeout((function(){w2popup.close()}),5e3);t.record=o}))}}}),w2popup.open({title:"Atualizar Categoria",body:'<div id="form" style="width: 100%; height: 100%;"></div>',style:"padding: 15px 0px 0px 0px",width:400,height:400,showMax:!0,onToggle:function(e){$(w2ui.foo.box).hide(),e.onComplete=function(){$(w2ui.foo.box).show(),w2ui.foo.resize()}},onOpen:function(e){e.onComplete=function(){$("#w2ui-popup #form").w2render("foo")}}})},onValidate:function(e){}}};return t}}},s=l,f=o("2877"),u=Object(f["a"])(s,i,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6528fc1e.fd3970d9.js.map