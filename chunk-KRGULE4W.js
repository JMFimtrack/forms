import{a as De}from"./chunk-VUYWXF2D.js";import{b as ut,c as dt,d as mt,e as ht,f as L,i as _t}from"./chunk-J4TQBFA6.js";import{a as Ge,b as Ue,c as je,e as Qe,h as Xe,k as Ze,m as $e,n as Je,o as et,p as nt,q as at,t as st,u as lt,v as rt,w as pt,x as ct}from"./chunk-LRBXHAKB.js";import{a as Fe}from"./chunk-LJPPKPLH.js";import{c as tt,d as R,e as it,g as A,h as ot,i as J}from"./chunk-W5UVDF5Y.js";import{C as Be,D as Ke,E as Ye,F as D,G as qe,H as ze,I as $,a as Re,e as Le,h as k,n as Ve,o as xe,p as X,q as F,r as Ne,u as We,v as He,x as Z}from"./chunk-5C5DXINI.js";import{e as ke}from"./chunk-LWBVWMSX.js";import{$ as H,$b as U,Bb as q,Cb as Ae,Db as Se,E as W,Eb as we,F as ae,Fb as r,Gb as p,Ib as b,Ka as me,Pb as f,Q as E,Qb as g,R as P,Rb as Me,Sb as Te,Tb as z,U as se,Ub as G,Vb as O,Wa as h,Wb as C,X as le,Z as re,Zb as Ee,_a as he,_b as v,ab as _e,bb as fe,bc as j,ca as s,cc as Pe,dc as Ie,e as w,fa as pe,g as V,ha as ce,hb as I,ia as c,ib as ge,j as x,ja as u,jb as ve,kc as Q,mb as K,n as oe,nb as _,oc as d,r as M,ra as m,sa as ue,tb as ye,ub as be,v as ne,va as B,vb as Y,wb as y,x as T,y as N,ya as de,yb as Oe,zb as Ce}from"./chunk-JGPK7VZD.js";var Tt=["panel"],Et=["*"];function Pt(n,l){if(n&1){let e=b();r(0,"div",1,0),f("@panelAnimation.done",function(i){c(e);let o=g();return u(o._animationDone.next(i))}),Te(2),p()}if(n&2){let e=l.id,t=g();Ce(t._classList),Oe("mat-mdc-autocomplete-visible",t.showPanel)("mat-mdc-autocomplete-hidden",!t.showPanel)("mat-primary",t._color==="primary")("mat-accent",t._color==="accent")("mat-warn",t._color==="warn"),y("id",t.id)("@panelAnimation",t.isOpen?"visible":"hidden"),Y("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby(e))}}var It=tt("panelAnimation",[ot("void, hidden",A({opacity:0,transform:"scaleY(0.8)"})),J(":enter, hidden => visible",[it([R("0.03s linear",A({opacity:1})),R("0.12s cubic-bezier(0, 0, 0.2, 1)",A({transform:"scaleY(1)"}))])]),J(":leave, visible => hidden",[R("0.075s linear",A({opacity:0}))])]),ee=class{source;option;constructor(l,e){this.source=l,this.option=e}},vt=new H("mat-autocomplete-default-options",{providedIn:"root",factory:kt});function kt(){return{autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1}}var yt=(()=>{class n{_changeDetectorRef=s(Q);_elementRef=s(B);_defaults=s(vt);_activeOptionChanges=w.EMPTY;_animationDone=new m;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple;optionSelected=new m;opened=new m;closed=new m;optionActivated=new m;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=s(We).getId("mat-autocomplete-");inertGroups;constructor(){let e=s(Re);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Ne(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe(),this._animationDone.complete()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let t=new ee(this,e);this.optionSelected.emit(t)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=I({type:n,selectors:[["mat-autocomplete"]],contentQueries:function(t,i,o){if(t&1&&(z(o,D,5),z(o,Ke,5)),t&2){let a;O(a=C())&&(i.options=a),O(a=C())&&(i.optionGroups=a)}},viewQuery:function(t,i){if(t&1&&(G(he,7),G(Tt,5)),t&2){let o;O(o=C())&&(i.template=o.first),O(o=C())&&(i.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",d],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",d],requireSelection:[2,"requireSelection","requireSelection",d],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",d],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",d]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[j([{provide:Be,useExisting:n}]),K],ngContentSelectors:Et,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(t,i){t&1&&(Me(),_(0,Pt,3,16,"ng-template"))},styles:["div.mat-mdc-autocomplete-panel{width:100%;max-height:256px;visibility:hidden;transform-origin:center top;overflow:auto;padding:8px 0;box-sizing:border-box;position:static;border-radius:var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));box-shadow:var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));background-color:var(--mat-autocomplete-background-color, var(--mat-sys-surface-container))}@media(forced-colors: active){div.mat-mdc-autocomplete-panel{outline:solid 1px}}.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel{border-top-left-radius:0;border-top-right-radius:0}.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:center bottom}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible{visibility:visible}div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden{visibility:hidden;pointer-events:none}mat-autocomplete{display:none}"],encapsulation:2,data:{animation:[It]},changeDetection:0})}return n})();var Ft={provide:Ge,useExisting:le(()=>te),multi:!0};var bt=new H("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(L);return()=>n.scrollStrategies.reposition()}});function Dt(n){return()=>n.scrollStrategies.reposition()}var Rt={provide:bt,deps:[L],useFactory:Dt},te=(()=>{class n{_environmentInjector=s(pe);_element=s(B);_overlay=s(L);_viewContainerRef=s(fe);_zone=s(ue);_changeDetectorRef=s(Q);_dir=s(He,{optional:!0});_formField=s(st,{optional:!0,host:!0});_document=s(ke);_viewportRuler=s(ut);_scrollStrategy=s(bt);_renderer=s(_e);_defaults=s(vt,{optional:!0});_overlayRef;_portal;_componentDestroyed=!1;_initialized=new x;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue;_valueOnAttach;_valueOnLastKeydown;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=w.EMPTY;_breakpointObserver=s(Ve);_handsetLandscapeSubscription=w.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption;_closeKeyEventStream=new x;_windowBlurHandler=()=>{this._canOpenOnNextFocus=this._document.activeElement!==this._element.nativeElement||this.panelOpen};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&F(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return T(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(N(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(N(()=>this._overlayAttached)):oe()).pipe(M(e=>e instanceof Ye?e:null))}optionSelections=ne(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(E(e),P(()=>T(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(P(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new V(e=>{let t=o=>{let a=Le(o),S=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,ie=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&this._document.activeElement!==this._element.nativeElement&&(!S||!S.contains(a))&&(!ie||!ie.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},i=[this._renderer.listen("document","click",t),this._renderer.listen("document","auxclick",t),this._renderer.listen("document","touchend",t)];return()=>{i.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let t=e.keyCode,i=k(e);if(t===27&&!i&&e.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&t===13&&this.panelOpen&&!i)this.activeOption._selectViaInteraction(),this._resetActiveItem(),e.preventDefault();else if(this.autocomplete){let o=this.autocomplete._keyManager.activeItem,a=t===38||t===40;t===9||a&&!i&&this.panelOpen?this.autocomplete._keyManager.onKeydown(e):a&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(a||this.autocomplete._keyManager.activeItem!==o)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let t=e.target,i=t.value;if(t.type==="number"&&(i=i==""?null:parseFloat(i)),this._previousValue!==i){if(this._previousValue=i,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(i),!i)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);i!==a&&o.deselect(!1)}}if(this._canOpen()&&this._document.activeElement===e.target){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new V(i=>{me(()=>{i.next()},{injector:this._environmentInjector})}),t=this.autocomplete.options.changes.pipe(se(()=>this._positionStrategy.reapplyLastPosition()),ae(0));return T(e,t).pipe(P(()=>this._zone.run(()=>{let i=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),i!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),W(1)).subscribe(i=>this._setValueAndClose(i))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let t=this.autocomplete;return t&&t.displayWith?t.displayWith(e):e}_assignOptionValue(e){let t=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(t??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let t=this.autocomplete,i=e?e.source:this._pendingAutoselectedOption;i?(this._clearPreviousSelectedOption(i),this._assignOptionValue(i.value),this._onChange(i.value),t._emitSelectEvent(i),this._element.nativeElement.focus()):t.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),t._animationDone?t._animationDone.pipe(W(1)).subscribe(()=>this._onChange(null)):this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,t){this.autocomplete?.options?.forEach(i=>{i!==e&&i.selected&&i.deselect(t)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let t=this.autocomplete.id;X(this._trackedModal,"aria-owns",t)}}_attachOverlay(e){this.autocomplete;let t=this._overlayRef;t?(this._positionStrategy.setOrigin(this._getConnectedElement()),t.updateSize({width:this._getPanelWidth()})):(this._portal=new mt(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),t=this._overlay.create(this._getOverlayConfig()),this._overlayRef=t,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&t&&t.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(xe.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),t&&!t.hasAttached()&&(t.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let i=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&i!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!k(e)||e.keyCode===38&&k(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=null}_getOverlayConfig(){return new ht({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,panelClass:this._defaults?.overlayPanelClass})}_getOverlayPosition(){let e=this._overlay.position().flexibleConnectedTo(this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1);return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let t=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],i=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:i},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:i}],a;this.position==="above"?a=o:this.position==="below"?a=t:a=[...t,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let t=-1;for(let i=0;i<e.options.length;i++)if(!e.options.get(i).disabled){t=i;break}e._keyManager.setActiveItem(t)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let t=this.autocomplete,i=qe(e,t.options,t.optionGroups);if(e===0&&i===1)t._setScrollTop(0);else if(t.panel){let o=t.options.toArray()[e];if(o){let a=o._getHostElement(),S=ze(a.offsetTop,a.offsetHeight,t._getScrollTop(),t.panel.nativeElement.offsetHeight);t._setScrollTop(S)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=this.autocomplete.id;this._trackedModal&&F(this._trackedModal,"aria-owns",t),X(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;F(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=ve({type:n,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(t,i){t&1&&f("focusin",function(){return i._handleFocus()})("blur",function(){return i._onTouched()})("input",function(a){return i._handleInput(a)})("keydown",function(a){return i._handleKeydown(a)})("click",function(){return i._handleClick()}),t&2&&Y("autocomplete",i.autocompleteAttribute)("role",i.autocompleteDisabled?null:"combobox")("aria-autocomplete",i.autocompleteDisabled?null:"list")("aria-activedescendant",i.panelOpen&&i.activeOption?i.activeOption.id:null)("aria-expanded",i.autocompleteDisabled?null:i.panelOpen.toString())("aria-controls",i.autocompleteDisabled||!i.panelOpen||i.autocomplete==null?null:i.autocomplete.id)("aria-haspopup",i.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",d]},exportAs:["matAutocompleteTrigger"],features:[j([Ft]),K,ce]})}return n})(),Ot=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=ge({type:n});static \u0275inj=re({providers:[Rt],imports:[_t,$,Z,dt,$,Z]})}return n})();var Vt=()=>[D,import("./chunk-RQJQBS4U.js").then(n=>n.AsyncPipe)];function xt(n,l){if(n&1){let e=b();r(0,"mat-option",6),f("click",function(i){c(e);let o=g(3);return u(o.onInput(i,"click"))}),v(1),p()}if(n&2){let e=l.$implicit;y("value",e),h(),U(e)}}function Nt(n,l){if(n&1&&(Se(0,xt,2,2,"mat-option",5,Ae),Pe(2,"async")),n&2){let e=g(2);we(Ie(2,0,e.filteredOptions))}}function Wt(n,l){n&1&&_(0,Nt,3,2),n&2&&q(0)}function Ht(n,l){n&1&&(r(0,"mat-error"),v(1,"Please enter a valid name"),p())}function Bt(n,l){n&1&&(r(0,"mat-error"),v(1,"name is "),r(2,"strong"),v(3,"required"),p()())}var Ct=class n{values={};shareComplete=s(De);dataForm=s(Fe);data=this.shareComplete.getData();value=de("");element="";nameFormControl=new Xe(this.value(),[je.required]);options=[];filteredOptions;setData(){let l=this.shareComplete.getPlaza();this.element=l,this.values.label==="Plaza"?this.options=this.data.plazas:this.values.label==="Tiendas"&&l!==""?this.options=this.data.tiendas[l]:this.options=[]}onInput(l,e){let t="";e==="click"?t=l.target.innerText:e==="keydown"&&(t=l.target.value),this.values.label==="Plaza"?this.shareComplete.setPlaza(t):this.values.label==="Tiendas"&&this.shareComplete.setTienda(t),this.dataForm.setFormData(this.values.label,t),this.setData()}ngOnInit(){this.filteredOptions=this.nameFormControl.valueChanges.pipe(E(""),M(l=>this._filter(l||""))),this.setData()}_filter(l){let e=l.toLowerCase();return this.options.filter(t=>t.toLowerCase().includes(e))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=I({type:n,selectors:[["input-complete"]],inputs:{values:"values"},decls:12,vars:5,consts:[["input",""],["auto","matAutocomplete"],["appearance","outline","hintLabel","Max 10 characters"],["matInput","","type","text","maxlength","200","placeholder","Ex. Nougat",3,"click","mouseover","mouseup","keydown","formControl","matAutocomplete"],["autoActiveFirstOption",""],[3,"value"],[3,"click","value"]],template:function(e,t){if(e&1){let i=b();r(0,"mat-form-field",2)(1,"mat-label"),v(2),p(),r(3,"input",3,0),f("click",function(a){return c(i),u(t.onInput(a,"click"))})("mouseover",function(a){return c(i),u(t.onInput(a,"click"))})("mouseup",function(a){return c(i),u(t.onInput(a,"click"))})("keydown",function(a){return c(i),u(t.onInput(a,"keydown"))}),p(),r(5,"mat-autocomplete",4,1),_(7,Wt,1,1),ye(8,7,Vt),p(),_(10,Ht,2,0,"mat-error")(11,Bt,4,0,"mat-error"),p()}if(e&2){let i=Ee(6);h(2),U(t.values.label),h(),y("formControl",t.nameFormControl)("matAutocomplete",i),h(5),be(t.options.length!==0),h(2),q(!t.nameFormControl.hasError("required")&&t.nameFormControl.hasError("pattern")?10:t.nameFormControl.hasError("required")?11:-1)}},dependencies:[Je,Ue,Qe,$e,rt,lt,nt,at,ct,pt,Ot,yt,te,et,Ze],styles:["*[_ngcontent-%COMP%]{width:100%;height:auto}mat-hint[_ngcontent-%COMP%]{width:auto;height:auto}strong[_ngcontent-%COMP%]{font-weight:600}"]})};export{Ct as InputCompleteComponent};
