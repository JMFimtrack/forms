import{R as w,S as b,T as L,W as V,X as P,Y as T,Z as q,_ as N,b as I,c as l,e as _,h as E,k as D,m as S,n as x,o as y}from"./chunk-7A3253SJ.js";import"./chunk-W5UVDF5Y.js";import"./chunk-GMHLYFGX.js";import{$ as p,Db as r,Eb as M,Fb as F,Ga as i,Sa as d,Ya as C,fa as s,fb as f,ga as u,jb as h,nb as e,ob as n,qb as g,sb as v,ua as c}from"./chunk-IYB5VF6F.js";function j(o,a){o&1&&(e(0,"mat-error"),r(1,"Please enter a valid name"),n())}function z(o,a){o&1&&(e(0,"mat-error"),r(1,"name is "),e(2,"strong"),r(3,"required"),n()())}var O=class o{values={};dataForm=p(N);value=c("");nameFormControl=new E(this.value(),[l.required,l.minLength(10),l.maxLength(10),l.pattern("[a-zA-Z ]*")]);onInput(a){this.value.set(a.target.value),this.dataForm.setData(this.nameFormControl.value||""),console.log("this",this.dataForm.getData()),console.log(this.nameFormControl.errors)}static \u0275fac=function(m){return new(m||o)};static \u0275cmp=d({type:o,selectors:[["input-color"]],inputs:{values:"values"},decls:9,vars:4,consts:[["input",""],["appearance","outline","hintLabel","Max 10 characters"],["matInput","","type","color","maxlength","10","placeholder","Ex. Nougat",3,"input","formControl"],["align","end"]],template:function(m,t){if(m&1){let A=g();e(0,"mat-form-field",1)(1,"mat-label"),r(2),n(),e(3,"input",2,0),v("input",function(H){return s(A),u(t.onInput(H))}),n(),C(5,j,2,0,"mat-error")(6,z,4,0,"mat-error"),e(7,"mat-hint",3),r(8),n()()}m&2&&(i(2),M(t.values.label),i(),f("formControl",t.nameFormControl),i(2),h(!t.nameFormControl.hasError("required")&&t.nameFormControl.hasError("pattern")?5:t.nameFormControl.hasError("required")?6:-1),i(3),F("",t.value().length,"/10"))},dependencies:[x,I,_,S,y,D,P,V,w,L,b,q,T],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"],changeDetection:0})};export{O as InputColorComponent};
