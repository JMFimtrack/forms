import{b as _,c as l,e as y,h as E,k as D,m as w,n as b,o as L,p as x,q as V,r as P,u as T,v as q,w as N,x as O}from"./chunk-JJYV5DBM.js";import{a as S}from"./chunk-CVZT7FZF.js";import"./chunk-W5UVDF5Y.js";import"./chunk-A6I6W62P.js";import"./chunk-DRMDS4HS.js";import{Cb as C,Gb as t,Hb as o,Jb as v,Qb as F,Ub as p,Wa as i,ac as r,bc as M,ca as s,cc as I,hb as h,ia as u,ja as c,nb as f,xb as g,ya as d}from"./chunk-WEZV2HRD.js";function z(n,a){n&1&&(t(0,"mat-error"),r(1,"Please enter a valid name"),o())}function R(n,a){n&1&&(t(0,"mat-error"),r(1,"name is "),t(2,"strong"),r(3,"required"),o()())}var A=class n{values={};dataForm=s(S);value=d("");nameFormControl=new E(this.value(),[l.required,l.minLength(10),l.maxLength(10),l.pattern("[a-zA-Z ]*")]);onInput(a){this.value.set(a.target.value),this.dataForm.setData(this.nameFormControl.value||""),console.log("this",this.dataForm.getData()),console.log(this.nameFormControl.errors)}static \u0275fac=function(m){return new(m||n)};static \u0275cmp=h({type:n,selectors:[["input-search"]],inputs:{values:"values"},decls:9,vars:7,consts:[["input",""],["appearance","outline",3,"hintLabel"],["matInput","","type","search",3,"input","maxlength","placeholder","formControl"],["align","end"]],template:function(m,e){if(m&1){let H=v();t(0,"mat-form-field",1)(1,"mat-label"),r(2),o(),t(3,"input",2,0),F("input",function(j){return u(H),c(e.onInput(j))}),o(),f(5,z,2,0,"mat-error")(6,R,4,0,"mat-error"),t(7,"mat-hint",3),r(8),o()()}m&2&&(p("hintLabel",e.values.hint),i(2),M(e.values.label),i(),p("maxlength",e.values.max),p("placeholder",e.values.placeholder),g("formControl",e.nameFormControl),i(2),C(!e.nameFormControl.hasError("required")&&e.nameFormControl.hasError("pattern")?5:e.nameFormControl.hasError("required")?6:-1),i(3),I("",e.value().length,"/10"))},dependencies:[b,_,y,w,L,D,q,T,x,P,V,O,N],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"],changeDetection:0})};export{A as InputSearchComponent};
