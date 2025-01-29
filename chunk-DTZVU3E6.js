import{b as ct,c as pt,d as ut,e as dt,f as D,i as mt}from"./chunk-BC5SGHXW.js";import{A as z,B as I,C as qe,E as Ge,F as Ue,H as Z,K as Xe,L as Ze,M as $e,N as k,O as Je,P as et,Q as $,R as tt,S as it,V as ot,W as nt,X as at,Y as st,Z as lt,_ as rt,a as Ie,b as Re,c as ke,e as De,h as Le,k as xe,m as Ve,n as Ne,o as We,p as Be,r as He,u as F,y as Ke,z as Ye}from"./chunk-7A3253SJ.js";import{c as je,d as R,e as Qe,g as v,h as ze,i as X}from"./chunk-W5UVDF5Y.js";import{d as Pe,i as Fe}from"./chunk-GMHLYFGX.js";import{$ as s,Cb as Me,D as N,Db as m,E as ne,Ea as de,Eb as U,Ga as d,Gb as j,Hb as Te,Ib as Ee,Ka as me,Ma as he,Mb as Q,Na as _e,O as S,Ob as p,P as C,S as ae,Sa as T,Ta as fe,U as se,Ua as ge,W as le,Xa as H,Y as W,Ya as E,ca as re,d as O,ea as ce,eb as K,f as L,fa as w,fb as h,ga as M,gb as ve,hb as ye,i as x,jb as Oe,kb as be,lb as Ae,m as ie,mb as Se,na as u,nb as r,oa as pe,ob as c,q as b,qb as P,ra as B,sb as _,tb as Y,u as oe,ua as ue,ub as Ce,vb as we,w as A,wb as q,x as V,xb as G,yb as f,zb as g}from"./chunk-IYB5VF6F.js";var wt=["panel"],Mt=["*"];function Tt(n,l){if(n&1){let e=P();r(0,"div",1,0),_("@panelAnimation.done",function(i){w(e);let o=Y();return M(o._animationDone.next(i))}),we(2),c()}if(n&2){let e=l.id,t=Y();ye(t._classList),ve("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),h("id",t.id)("@panelAnimation",t.isOpen?"visible":"hidden"),K("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var Et=je("panelAnimation",[ze("void, hidden",v({opacity:0,transform:"scaleY(0.8)"})),X(":enter, hidden => visible",[Qe([R("0.03s linear",v({opacity:1})),R("0.12s cubic-bezier(0, 0, 0.2, 1)",v({transform:"scaleY(1)"}))])]),X(":leave, visible => hidden",[R("0.075s linear",v({opacity:0}))])]),J=class{source;option;constructor(l,e){this.source=l,this.option=e}},ft=new W("mat-autocomplete-default-options",{providedIn:"root",factory:Pt});function Pt(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1}}var gt=(()=>{class n{_changeDetectorRef=s(Q);_elementRef=s(B);_defaults=s(ft);_activeOptionChanges=O.EMPTY;_animationDone=new u;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple;optionSelected=new u;opened=new u;closed=new u;optionActivated=new u;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(Ge).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(Be);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new qe(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe(),this._animationDone.complete()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new J(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=T({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,i,o){if(t&1&&(q(o,k,5),q(o,Ze,5)),t&2){let a;f(a=g())&&(i.options=a),f(a=g())&&(i.optionGroups=a)}},viewQuery:function(t,i){if(t&1&&(G(me,7),G(wt,5)),t&2){let o;f(o=g())&&(i.template=o.first),f(o=g())&&(i.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",p],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",p],requireSelection:[2,"requireSelection","requireSelection",p],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",p],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",p]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[j([{provide:Xe,useExisting:n}]),H],ngContentSelectors:Mt,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,i){t&1&&(Ce(),E(0,Tt,3,16,"ng-template"))},styles:["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:static;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[Et]},changeDetection:0})}return n})();var Ft={provide:Ie,useExisting:se(()=>ee),multi:!0};var vt=new W("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(D);return()=>n.scrollStrategies.reposition()}});function It(n){return()=>n.scrollStrategies.reposition()}var Rt={provide:vt,deps:[D],useFactory:It},ee=(()=>{class n{_environmentInjector=s(re);_element=s(B);_overlay=s(D);_viewContainerRef=s(_e);_zone=s(pe);_changeDetectorRef=s(Q);_dir=s(Ue,{optional:!0});_formField=s(ot,{optional:!0,host:!0});_document=s(Pe);_viewportRuler=s(ct);_scrollStrategy=s(vt);_renderer=s(he);_defaults=s(ft,{optional:!0});_overlayRef;_portal;_componentDestroyed=!1;_initialized=new x;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue;_valueOnAttach;_valueOnLastKeydown;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=O.EMPTY;_breakpointObserver=s(Ke);_handsetLandscapeSubscription=O.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption;_closeKeyEventStream=new x;_windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&I(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return A(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(V(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(V(()=>this._overlayAttached)):ie()).pipe(b(e=>e instanceof $e?e:null))}optionSelections=oe(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(S(e),C(()=>A(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(C(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new L(e=>{let t=o=>{let a=He(o),y=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,te=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!y||!y.contains(a))&&(!te||!te.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},i=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{i.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e.keyCode,i=F(e);if(t===27&&!i&&e.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!i)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,a=t===38||t===40;t===9||a&&!i&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):a&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(a||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,i=t.value;if(t.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);i!==a&&o.deselect(!1)}}if(this._canOpen()&&this._document.activeElement===e.target){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new L(i=>{de(()=>{i.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options.changes.pipe(ae(()=>this._positionStrategy.reapplyLastPosition()),ne(0));return A(e,t).pipe(C(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),N(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),t._animationDone?t._animationDone.pipe(N(1)).subscribe(()=>this._onChange(null)):this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;z(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){this.autocomplete;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new ut(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(Ye.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!F(e)||e.keyCode===38&&F(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=null}_getOverlayConfig(){return new dt({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){let e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],a;this.position==="above"?a=o:this.position==="below"?a=t:a=[...t,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=Je(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let o=t.options.toArray()[e];if(o){let a=o._getHostElement(),y=et(a.offsetTop,a.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(y)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&I(this._trackedModal,"aria-owns",t),z(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;I(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ge({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,i){t&1&&_("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(a){return i._handleInput(a)})("keydown",function(a){return i._handleKeydown(a)})("click",function(){return i._handleClick()}),t&2&&K("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",p]},exportAs:["matAutocompleteTrigger"],features:[j([Ft]),H,ce]})}return n})(),yt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=fe({type:n});static \u0275inj=le({providers:[Rt],imports:[mt,$,Z,pt,$,Z]})}return n})();function Dt(n,l){if(n&1&&(r(0,"mat-option",5),m(1),c()),n&2){let e=l.$implicit;h("value",e),d(),U(e)}}function Lt(n,l){n&1&&(r(0,"mat-error"),m(1,"Please enter a valid name"),c())}function xt(n,l){n&1&&(r(0,"mat-error"),m(1,"name is "),r(2,"strong"),m(3,"required"),c()())}var Ot=class n{values={};dataForm=s(rt);value=ue("");nameFormControl=new Le(this.value(),[ke.required]);options=["One","Two","Three"];filteredOptions;onInput(l){this.value.set(l.target.value),this.dataForm.setData(this.nameFormControl.value||""),console.log("this",this.dataForm.getData()),console.log(this.nameFormControl.errors)}ngOnInit(){this.filteredOptions=this.nameFormControl.valueChanges.pipe(S(""),b(l=>this._filter(l||"")))}_filter(l){let e=l.toLowerCase();return this.options.filter(t=>t.toLowerCase().includes(e))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=T({type:n,selectors:[["input-complete"]],inputs:{values:"values"},decls:12,vars:6,consts:[["input",""],["auto","matAutocomplete"],["appearance","outline","hintLabel","Max 10 characters"],["matInput","","type","text","maxlength","10","placeholder","Ex. Nougat",3,"input","formControl","matAutocomplete"],["autoActiveFirstOption",""],[3,"value"]],template:function(e,t){if(e&1){let i=P();r(0,"mat-form-field",2)(1,"mat-label"),m(2),c(),r(3,"input",3,0),_("input",function(a){return w(i),M(t.onInput(a))}),c(),r(5,"mat-autocomplete",4,1),Ae(7,Dt,2,2,"mat-option",5,be),Te(9,"async"),c(),E(10,Lt,2,0,"mat-error")(11,xt,4,0,"mat-error"),c()}if(e&2){let i=Me(6);d(2),U(t.values.label),d(),h("formControl",t.nameFormControl)("matAutocomplete",i),d(4),Se(Ee(9,4,t.filteredOptions)),d(3),Oe(!t.nameFormControl.hasError("required")&&t.nameFormControl.hasError("pattern")?10:t.nameFormControl.hasError("required")?11:-1)}},dependencies:[Ne,Re,De,Ve,at,nt,tt,it,lt,st,yt,gt,k,ee,We,xe,Fe],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"]})};export{Ot as InputCompleteComponent};
