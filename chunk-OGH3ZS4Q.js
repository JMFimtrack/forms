import{R as w,S as b,T as L,W as V,X as P,Y as T,Z as q,_ as N,b as D,c as m,e as I,h as _,k as E,m as S,n as x,o as y}from"./chunk-FGIV4M6D.js";import"./chunk-W5UVDF5Y.js";import"./chunk-MGIBYBKE.js";import{Eb as a,Fb as M,Gb as F,Ha as i,Ta as c,Za as f,aa as p,ga as s,gb as h,ha as u,kb as g,ob as e,pb as o,rb as C,tb as v,va as d}from"./chunk-XZSTIJKM.js";function j(n,r){n&1&&(e(0,"mat-error"),a(1,"Please enter a valid name"),o())}function z(n,r){n&1&&(e(0,"mat-error"),a(1,"name is "),e(2,"strong"),a(3,"required"),o()())}var O=class n{values={};dataForm=p(N);value=d("");nameFormControl=new _(this.value(),[m.required,m.minLength(10),m.maxLength(10),m.pattern("[a-zA-Z ]*")]);onInput(r){this.value.set(r.target.value),this.dataForm.setData(this.nameFormControl.value||""),console.log("this",this.dataForm.getData()),console.log(this.nameFormControl.errors)}static \u0275fac=function(l){return new(l||n)};static \u0275cmp=c({type:n,selectors:[["input-date"]],inputs:{values:"values"},decls:9,vars:4,consts:[["input",""],["appearance","outline","hintLabel","Max 10 characters"],["matInput","","type","date","maxlength","10","placeholder","Ex. Nougat",3,"input","formControl"],["align","end"]],template:function(l,t){if(l&1){let A=C();e(0,"mat-form-field",1)(1,"mat-label"),a(2),o(),e(3,"input",2,0),v("input",function(H){return s(A),u(t.onInput(H))}),o(),f(5,j,2,0,"mat-error")(6,z,4,0,"mat-error"),e(7,"mat-hint",3),a(8),o()()}l&2&&(i(2),M(t.values.label),i(),h("formControl",t.nameFormControl),i(2),g(!t.nameFormControl.hasError("required")&&t.nameFormControl.hasError("pattern")?5:t.nameFormControl.hasError("required")?6:-1),i(3),F("",t.value().length,"/10"))},dependencies:[x,D,I,S,y,E,P,V,w,L,b,q,T],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"],changeDetection:0})};export{O as InputDateComponent};
