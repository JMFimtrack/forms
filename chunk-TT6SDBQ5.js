import{a as k,b as x}from"./chunk-3C24EWR7.js";import"./chunk-RJIQE5WZ.js";import{N as E,R as S,S as D,W as L,X as y,Z as T,_ as b,c as h,e as F,h as g,k as M,n as _,o as I}from"./chunk-FGIV4M6D.js";import"./chunk-W5UVDF5Y.js";import"./chunk-MGIBYBKE.js";import{Eb as n,Fb as v,Ha as m,Ta as u,Za as d,aa as p,gb as f,kb as C,ob as e,pb as o,tb as s,va as c}from"./chunk-XZSTIJKM.js";function q(i,r){i&1&&(e(0,"mat-error"),n(1,"Please enter a valid name"),o())}function N(i,r){i&1&&(e(0,"mat-error"),n(1,"name is "),e(2,"strong"),n(3,"required"),o()())}var w=class i{values={};dataForm=p(b);value=c("");nameFormControl=new g(this.value(),[h.required]);onInput(r){this.value.set(r.target.innerText),this.dataForm.setData(this.nameFormControl.value||""),console.log("this",this.dataForm.getData()),console.log(this.nameFormControl.errors)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=u({type:i,selectors:[["input-list"]],inputs:{values:"values"},decls:10,vars:3,consts:[["appearance","outline","hintLabel","Max 10 characters"],[3,"formControl"],["value","valid",3,"click"],["value","invalid",3,"click"]],template:function(a,t){a&1&&(e(0,"mat-form-field",0)(1,"mat-label"),n(2),o(),e(3,"mat-select",1)(4,"mat-option",2),s("click",function(l){return t.onInput(l)}),n(5,"Valid option"),o(),e(6,"mat-option",3),s("click",function(l){return t.onInput(l)}),n(7,"Invalid option"),o()(),d(8,q,2,0,"mat-error")(9,N,4,0,"mat-error"),o()),a&2&&(m(2),v(t.values.label),m(),f("formControl",t.nameFormControl),m(5),C(!t.nameFormControl.hasError("required")&&t.nameFormControl.hasError("pattern")?8:t.nameFormControl.hasError("required")?9:-1))},dependencies:[y,L,S,D,x,k,E,_,F,I,M,T],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"],changeDetection:0})};export{w as InputListComponent};
