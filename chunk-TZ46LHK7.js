import{R as y,S as w,T as b,W as L,X as V,Y as P,Z as q,_ as N,b as I,c as l,e as _,h as E,k as T,m as D,n as S,o as x}from"./chunk-7A3253SJ.js";import"./chunk-W5UVDF5Y.js";import"./chunk-GMHLYFGX.js";import{$ as p,Db as r,Eb as M,Fb as F,Ga as i,Sa as c,Ya as f,fa as s,fb as h,ga as u,jb as g,nb as e,ob as o,qb as C,sb as v,ua as d}from"./chunk-IYB5VF6F.js";function j(n,a){n&1&&(e(0,"mat-error"),r(1,"Please enter a valid name"),o())}function z(n,a){n&1&&(e(0,"mat-error"),r(1,"name is "),e(2,"strong"),r(3,"required"),o()())}var O=class n{values={};dataForm=p(N);value=d("");nameFormControl=new E(this.value(),[l.required,l.minLength(10),l.maxLength(10),l.pattern("[a-zA-Z ]*")]);onInput(a){this.value.set(a.target.value),this.dataForm.setData(this.nameFormControl.value||""),console.log("this",this.dataForm.getData()),console.log(this.nameFormControl.errors)}static \u0275fac=function(m){return new(m||n)};static \u0275cmp=c({type:n,selectors:[["input-tel"]],inputs:{values:"values"},decls:9,vars:4,consts:[["input",""],["appearance","outline","hintLabel","Max 10 characters"],["matInput","","type","tel","maxlength","10","placeholder","Ex. Nougat",3,"input","formControl"],["align","end"]],template:function(m,t){if(m&1){let A=C();e(0,"mat-form-field",1)(1,"mat-label"),r(2),o(),e(3,"input",2,0),v("input",function(H){return s(A),u(t.onInput(H))}),o(),f(5,j,2,0,"mat-error")(6,z,4,0,"mat-error"),e(7,"mat-hint",3),r(8),o()()}m&2&&(i(2),M(t.values.label),i(),h("formControl",t.nameFormControl),i(2),g(!t.nameFormControl.hasError("required")&&t.nameFormControl.hasError("pattern")?5:t.nameFormControl.hasError("required")?6:-1),i(3),F("",t.value().length,"/10"))},dependencies:[S,I,_,D,x,T,V,L,y,b,w,q,P],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"],changeDetection:0})};export{O as InputTelComponent};
