import{b as _,c as m,e as E,h as D,k as S,m as x,n as y,o as w,p as b,q as L,r as V,u as P,v as T,w as q,x as N}from"./chunk-LRBXHAKB.js";import{a as I}from"./chunk-LJPPKPLH.js";import"./chunk-W5UVDF5Y.js";import"./chunk-5C5DXINI.js";import"./chunk-LWBVWMSX.js";import{$b as v,Bb as g,Fb as e,Gb as o,Ib as C,Pb as M,Wa as i,_b as r,ac as F,ca as p,hb as c,ia as s,ja as u,nb as h,wb as f,ya as d}from"./chunk-JGPK7VZD.js";function j(n,a){n&1&&(e(0,"mat-error"),r(1,"Please enter a valid name"),o())}function z(n,a){n&1&&(e(0,"mat-error"),r(1,"name is "),e(2,"strong"),r(3,"required"),o()())}var O=class n{values={};dataForm=p(I);value=d("");nameFormControl=new D(this.value(),[m.required,m.minLength(10),m.maxLength(10),m.pattern("[a-zA-Z ]*")]);onInput(a){this.value.set(a.target.value),this.dataForm.setData(this.nameFormControl.value||""),console.log("this",this.dataForm.getData()),console.log(this.nameFormControl.errors)}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["input-month"]],inputs:{values:"values"},decls:9,vars:4,consts:[["input",""],["appearance","outline","hintLabel","Max 10 characters"],["matInput","","type","month","maxlength","10","placeholder","Ex. Nougat",3,"input","formControl"],["align","end"]],template:function(l,t){if(l&1){let A=C();e(0,"mat-form-field",1)(1,"mat-label"),r(2),o(),e(3,"input",2,0),M("input",function(H){return s(A),u(t.onInput(H))}),o(),h(5,j,2,0,"mat-error")(6,z,4,0,"mat-error"),e(7,"mat-hint",3),r(8),o()()}l&2&&(i(2),v(t.values.label),i(),f("formControl",t.nameFormControl),i(2),g(!t.nameFormControl.hasError("required")&&t.nameFormControl.hasError("pattern")?5:t.nameFormControl.hasError("required")?6:-1),i(3),F("",t.value().length,"/10"))},dependencies:[y,_,E,x,w,S,T,P,b,V,L,N,q],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"],changeDetection:0})};export{O as InputMonthComponent};
