import{b as v}from"./chunk-6OGXEOCA.js";import"./chunk-J4TQBFA6.js";import{c as t,f as u,g as C,h,i as M,n as _,o as f,v as P,x as O,y as x}from"./chunk-AVA2J7EN.js";import"./chunk-W5UVDF5Y.js";import"./chunk-5C5DXINI.js";import"./chunk-LWBVWMSX.js";import{$b as d,Fb as o,Gb as i,Pb as m,Wa as p,_b as a,ca as l,hb as s,ya as g}from"./chunk-JGPK7VZD.js";var F=class r{values={};dataForm=l(x);value=g("");nameFormControl=new h(this.value(),[t.required,t.minLength(10),t.maxLength(10),t.pattern("[a-zA-Z ]*")]);onInput(n){this.value.set(n.target.value),this.dataForm.setData(this.nameFormControl.value||""),console.log("this",this.dataForm.getData()),console.log(this.nameFormControl.errors)}capture(n){}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=s({type:r,selectors:[["input-file"]],inputs:{values:"values"},decls:8,vars:1,consts:[["for","imageInput"],["id","imageInput","type","file","accept",".jpg, .jpeg, .png","multiple","",3,"change"]],template:function(e,c){e&1&&(o(0,"section")(1,"main")(2,"form")(3,"label",0),a(4),i(),o(5,"input",1),m("change",function(b){return c.capture(b)}),i(),o(6,"p"),a(7,"Click for up file"),i()()()()),e&2&&(p(4),d(c.values.label))},dependencies:[_,M,u,C,f,P,O,v],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}section[_ngcontent-%COMP%]{display:grid;grid:100%/100%;place-content:start center;place-items:start center;width:100%;height:80px;padding:0;background:none}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:grid;grid:auto auto auto/100%;place-content:start center;place-items:start center;width:100%;height:auto;background:none}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{place-self:start center;width:100%;height:auto;margin:0 0 32px;font-size:32px;line-height:64px;font-weight:400;text-align:center;color:#000}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;color:#000}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{font-weight:500;font-size:64px;color:#000}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%;height:80px;margin:0}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;width:100%;height:auto;padding:17.5px;font-size:16px;border:1px solid #616161;color:#616161;border-radius:4px}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{border:1px solid black;color:#000;cursor:pointer}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:focus{border:1px solid gray;color:gray;cursor:pointer}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;height:auto;padding:6px 16px;font-size:12px}input[_ngcontent-%COMP%]{width:100%}"],changeDetection:0})};export{F as InputFileComponent};
