import{a as x,b as O}from"./chunk-M7QGIHSW.js";import{a as F}from"./chunk-KWDFBTSY.js";import"./chunk-M7PSEB2T.js";import{N as k,R as D,S as y,W as T,X as b,Z as q,_ as w,c as M,e as E,h as g,k as I,n as S,o as L}from"./chunk-FPPPEUGK.js";import"./chunk-W5UVDF5Y.js";import"./chunk-PBZIJDN4.js";import{Fb as s,Ma as l,Qb as o,Rb as _,Za as v,ba as p,db as f,mb as C,qa as u,rb as h,vb as e,wb as n,xa as d}from"./chunk-B52J2ICK.js";function N(i,r){i&1&&(e(0,"mat-error"),o(1,"Please enter a valid name"),n())}function R(i,r){i&1&&(e(0,"mat-error"),o(1,"name is "),e(2,"strong"),o(3,"required"),n()())}var P=class i{values={};servicesEvent=new u;shareComplete=p(F);dataForm=p(w);value=d("");nameFormControl=new g(this.value(),[M.required]);onInput(r){this.value.set(r.target.innerText),this.dataForm.setData(this.nameFormControl.value||""),this.shareComplete.setServicio(this.nameFormControl.value||""),this.servicesEvent.emit(this.nameFormControl.value||"")}static \u0275fac=function(m){return new(m||i)};static \u0275cmp=v({type:i,selectors:[["input-list"]],inputs:{values:"values"},outputs:{servicesEvent:"servicesEvent"},decls:12,vars:3,consts:[["appearance","outline","hintLabel","Max 10 characters"],[3,"formControl"],["value","mantenimiento",3,"click"],["value","retiro",3,"click"],["value","instalacion",3,"click"]],template:function(m,t){m&1&&(e(0,"mat-form-field",0)(1,"mat-label"),o(2),n(),e(3,"mat-select",1)(4,"mat-option",2),s("click",function(a){return t.onInput(a)}),o(5,"Mantenimiento"),n(),e(6,"mat-option",3),s("click",function(a){return t.onInput(a)}),o(7,"Retiro de equipo"),n(),e(8,"mat-option",4),s("click",function(a){return t.onInput(a)}),o(9,"Instalacion de equipo"),n()(),f(10,N,2,0,"mat-error")(11,R,4,0,"mat-error"),n()),m&2&&(l(2),_(t.values.label),l(),C("formControl",t.nameFormControl),l(7),h(!t.nameFormControl.hasError("required")&&t.nameFormControl.hasError("pattern")?10:t.nameFormControl.hasError("required")?11:-1))},dependencies:[b,T,D,y,O,x,k,S,E,L,I,q],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"],changeDetection:0})};export{P as InputListComponent};
