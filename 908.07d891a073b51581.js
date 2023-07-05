(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[908],{34908:(c,o,t)=>{"use strict";t.r(o),t.d(o,{AlertApiComponent:()=>d,AlertModule:()=>u,AlertOverviewComponent:()=>l});var n=t(52787),v=t(32189),s=t(65879),g=t(56223),h=t(75986),j=t(87466),b=t(92202),y=t(94997);const _={title:"Configurable alert",component:(()=>{class a{constructor(){this.type="info",this.dismissible=!1,this.elevation=3}onClosed(e){alert("closed event!"),console.log(e)}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s.Xpm({type:a,selectors:[["alert-example"]],decls:28,vars:6,consts:[[3,"ngModel","ngModelChange"],["value","info"],["value","success"],["value","warning"],["value","danger"],["min","0","max","24","discrete",""],["matSliderThumb","",3,"ngModel","ngModelChange"],[3,"type","elevation","dismissible","closed"]],template:function(e,r){1&e&&(s.TgZ(0,"h2"),s._uU(1,"Alert configuration"),s.qZA(),s.TgZ(2,"section")(3,"label"),s._uU(4,"Type:"),s.qZA(),s.TgZ(5,"mat-radio-group",0),s.NdJ("ngModelChange",function(f){return r.type=f}),s.TgZ(6,"mat-radio-button",1),s._uU(7,"Info"),s.qZA(),s.TgZ(8,"mat-radio-button",2),s._uU(9,"Success"),s.qZA(),s.TgZ(10,"mat-radio-button",3),s._uU(11,"Warning"),s.qZA(),s.TgZ(12,"mat-radio-button",4),s._uU(13,"Danger"),s.qZA()()(),s.TgZ(14,"section")(15,"mat-checkbox",0),s.NdJ("ngModelChange",function(f){return r.dismissible=f}),s._uU(16,"Dismissible"),s.qZA()(),s.TgZ(17,"section")(18,"label"),s._uU(19,"Elevation:"),s.qZA(),s.TgZ(20,"mat-slider",5)(21,"input",6),s.NdJ("ngModelChange",function(f){return r.elevation=f}),s.qZA()()(),s.TgZ(22,"h2"),s._uU(23,"Result"),s.qZA(),s.TgZ(24,"mtx-alert",7),s.NdJ("closed",function(f){return r.onClosed(f)}),s.TgZ(25,"strong"),s._uU(26,"Heads up!"),s.qZA(),s._uU(27," This alert needs your attention, but it's not super important.\n"),s.qZA()),2&e&&(s.xp6(5),s.Q6J("ngModel",r.type),s.xp6(10),s.Q6J("ngModel",r.dismissible),s.xp6(6),s.Q6J("ngModel",r.elevation),s.xp6(3),s.Q6J("type",r.type)("elevation",r.elevation)("dismissible",r.dismissible))},dependencies:[g.Fj,g.JJ,g.On,h.oG,j.VQ,j.U0,b.pH,b.$5,y.P],styles:["label[_ngcontent-%COMP%]{padding:0 8px}"]}),a})(),files:[{file:"app.component.html",content:t(12349),filecontent:t(63347)},{file:"app.component.ts",content:t(62886),filecontent:t(47604)},{file:"app.component.scss",content:t(75601),filecontent:t(93665)}]};var x=t(96814),A=t(71629),C=t(52240);function T(a,i){if(1&a&&(s.ynx(0),s._UZ(1,"example-viewer",2),s.BQk()),2&a){const e=i.$implicit;s.xp6(1),s.Q6J("exampleData",e)}}function p(a,i){if(1&a&&(s.ynx(0),s.YNc(1,T,2,1,"ng-container",1),s.BQk()),2&a){const e=i.ngIf;s.xp6(1),s.Q6J("ngForOf",e.examples)}}function m(a,i){if(1&a&&(s.ynx(0),s._UZ(1,"doc-viewer",1),s.BQk()),2&a){const e=i.ngIf;s.xp6(1),s.Q6J("textContent",e.content.default)}}let l=(()=>{class a{constructor(e){this.route=e}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(n.gz))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-alert-overview"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"exampleData"]],template:function(e,r){1&e&&(s.YNc(0,p,2,1,"ng-container",0),s.ALo(1,"async")),2&e&&s.Q6J("ngIf",s.lcZ(1,1,r.route.data))},dependencies:[x.sg,x.O5,A.B,x.Ov],encapsulation:2}),a})(),d=(()=>{class a{constructor(e){this.route=e}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(n.gz))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-alert-api"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"textContent"]],template:function(e,r){1&e&&(s.YNc(0,m,2,1,"ng-container",0),s.ALo(1,"async")),2&e&&s.Q6J("ngIf",s.lcZ(1,1,r.route.data))},dependencies:[x.O5,C.z,x.Ov],encapsulation:2}),a})(),u=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[v.m8,n.Bz.forChild([{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",component:l,pathMatch:"full",data:{examples:[_]}},{path:"api",component:d,pathMatch:"full",data:{content:t(46114)}},{path:"**",redirectTo:"overview"}])]}),a})()},52240:(c,o,t)=>{"use strict";t.d(o,{z:()=>v});var n=t(65879);let v=(()=>{class s{constructor(){this.textContent=""}ngOnDestroy(){}}return s.\u0275fac=function(h){return new(h||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["doc-viewer"]],inputs:{textContent:"textContent"},decls:1,vars:1,consts:[[1,"docs-markdown",3,"innerHTML"]],template:function(h,j){1&h&&n._UZ(0,"div",0),2&h&&n.Q6J("innerHTML",j.textContent,n.oJD)},styles:[".docs-markdown h1,.docs-markdown h2{font-weight:400}.docs-markdown h3{margin:40px 0 20px;padding-bottom:3px;font-weight:300;font-size:24px;line-height:32px}.docs-markdown h4{display:block;margin-top:28px;margin-bottom:16px;font-weight:700;font-size:20px;background:none}.docs-markdown h4 code{padding:0;background:none}.docs-markdown h5{font-size:15px}.docs-markdown h6{font-size:13px}.docs-markdown table{width:100%;margin:0 0 32px;border-collapse:collapse;border-radius:2px;border-spacing:0}.docs-markdown table code{padding:0;background-color:transparent}.docs-markdown th{max-width:100px;padding:13px 16px;font-weight:400;text-align:left}.docs-markdown td{padding:8px 16px;font-weight:400;font-size:14px}.docs-markdown pre{display:block;margin:16px auto;overflow-x:auto;border-radius:5px;white-space:pre-wrap;background:rgba(0,0,0,.01);border:.5px solid rgba(0,0,0,.2)}\n"],encapsulation:2}),s})()},71629:(c,o,t)=>{"use strict";t.d(o,{B:()=>T});var n=t(65879),v=t(22939),s=t(7821),g=t(96814),h=t(32296),j=t(30617),b=t(74104),y=t(92596);const M=["demo"];function _(p,m){if(1&p){const l=n.EpF();n.TgZ(0,"mat-tab",11)(1,"div",12)(2,"div",13)(3,"button",14),n.NdJ("click",function(){n.CHM(l);const u=n.MAs(8),a=n.oxw(2);return n.KtG(a.copySource(u))}),n.TgZ(4,"mat-icon"),n._uU(5,"content_copy"),n.qZA()()(),n.TgZ(6,"div",15),n._UZ(7,"pre",16,17),n.qZA()()()}if(2&p){const l=m.$implicit;n.Q6J("label",l.file),n.xp6(3),n.Q6J("matTooltip","Copy example source"),n.xp6(4),n.Q6J("innerHtml",l.content,n.oJD)}}function x(p,m){if(1&p&&(n.TgZ(0,"div",8)(1,"mat-tab-group",9),n.YNc(2,_,9,3,"mat-tab",10),n.qZA()()),2&p){const l=n.oxw();n.xp6(2),n.Q6J("ngForOf",l.exampleData.files)}}function A(p,m){if(1&p&&n._UZ(0,"div",18),2&p){const l=n.oxw();n.Q6J("innerHtml",l.exampleData.description,n.oJD)}}function C(p,m){}let T=(()=>{class p{constructor(l,d,u){this.snackbar=l,this.copier=d,this.componentFactoryResolver=u,this.showSource=!1}ngOnInit(){const l=this.componentFactoryResolver.resolveComponentFactory(this.exampleData.component);this.demoComponentRef=this.demoRef.createComponent(l)}ngOnDestroy(){this.demoComponentRef&&this.demoComponentRef.destroy()}toggleSourceView(){this.showSource=!this.showSource}copySource(l){this.copier.copyText(l.innerText)?this.snackbar.open("Code copied","",{duration:2500}):this.snackbar.open("Copy failed. Please try again!","",{duration:2500})}}return p.\u0275fac=function(l){return new(l||p)(n.Y36(v.ux),n.Y36(s.u),n.Y36(n._Vd))},p.\u0275cmp=n.Xpm({type:p,selectors:[["example-viewer"]],viewQuery:function(l,d){if(1&l&&n.Gf(M,7,n.s_b),2&l){let u;n.iGM(u=n.CRH())&&(d.demoRef=u.first)}},inputs:{type:"type",exampleData:"exampleData"},decls:13,vars:4,consts:[[1,"docs-example-viewer-wrapper"],[1,"docs-example-viewer-title"],[1,"docs-example-viewer-title-spacer"],["mat-icon-button","","type","button","aria-label","View source",3,"matTooltip","click"],["class","docs-example-viewer-source",4,"ngIf"],[1,"docs-example-viewer-body"],[3,"innerHtml",4,"ngIf"],["demo",""],[1,"docs-example-viewer-source"],["animationDuration","0ms","mat-stretch-tabs","false"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],[1,"docs-example-source-wrapper"],[1,"button-bar"],["mat-icon-button","","type","button","title","Copy example source","aria-label","Copy example source to clipboard",1,"docs-example-source-copy","docs-example-button",3,"matTooltip","click"],[1,"code-snippet"],[1,"docs-example-source",3,"innerHtml"],["textContent",""],[3,"innerHtml"]],template:function(l,d){1&l&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span"),n._uU(3),n.qZA(),n._UZ(4,"div",2),n.TgZ(5,"button",3),n.NdJ("click",function(){return d.toggleSourceView()}),n.TgZ(6,"mat-icon"),n._uU(7,"code"),n.qZA()()(),n.YNc(8,x,3,1,"div",4),n.TgZ(9,"div",5),n.YNc(10,A,1,1,"div",6),n.YNc(11,C,0,0,"ng-template",null,7,n.W1O),n.qZA()()),2&l&&(n.xp6(3),n.Oqu(d.exampleData.title),n.xp6(2),n.Q6J("matTooltip","View source"),n.xp6(3),n.Q6J("ngIf",d.showSource),n.xp6(2),n.Q6J("ngIf",d.exampleData.description))},dependencies:[g.sg,g.O5,h.RK,j.Hw,b.uX,b.SP,y.gM],styles:["[_nghost-%COMP%]{display:block;padding:20px 0}.docs-example-viewer-wrapper[_ngcontent-%COMP%]{border-radius:4px}.docs-example-viewer-title[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;justify-content:center;padding:8px 8px 8px 16px}.docs-example-viewer-title-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.docs-example-viewer-body[_ngcontent-%COMP%]{padding:30px}.button-bar[_ngcontent-%COMP%]{float:right;padding:8px}.code-snippet[_ngcontent-%COMP%]{padding:20px}.docs-example-source[_ngcontent-%COMP%]{padding:0;margin:0;border:none;background:none;font-size:14px}"]}),p})()},12349:c=>{c.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Alert configuration<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Type:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-group</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;type&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Info<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mat-radio-button</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-radio-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-checkbox</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;dismissible&quot;</span>&gt;</span>Dismissible<span class="hljs-tag">&lt;/<span class="hljs-name">mat-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">section</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Elevation:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mat-slider</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">discrete</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">matSliderThumb</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;elevation&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mat-slider</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">section</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Result<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mtx-alert</span> [<span class="hljs-attr">type</span>]=<span class="hljs-string">&quot;type&quot;</span> [<span class="hljs-attr">elevation</span>]=<span class="hljs-string">&quot;elevation&quot;</span> [<span class="hljs-attr">dismissible</span>]=<span class="hljs-string">&quot;dismissible&quot;</span>\n           (<span class="hljs-attr">closed</span>)=<span class="hljs-string">&quot;onClosed($event)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Heads up!<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> This alert needs your attention, but it&#x27;s not super important.\n<span class="hljs-tag">&lt;/<span class="hljs-name">mtx-alert</span>&gt;</span>\n'},75601:c=>{c.exports='<span class="hljs-selector-tag">label</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">8px</span>;\n}\n'},62886:c=>{c.exports='<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">MtxAlertType</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@ng-matero/extensions/alert&#x27;</span>;\n\n<span class="hljs-meta">@Component</span>({\n  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;alert-example&#x27;</span>,\n  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./app.component.html&#x27;</span>,\n  <span class="hljs-attr">styleUrls</span>: [<span class="hljs-string">&#x27;./app.component.scss&#x27;</span>],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AppComponent</span> {\n  <span class="hljs-attr">type</span>: <span class="hljs-title class_">MtxAlertType</span> = <span class="hljs-string">&#x27;info&#x27;</span>;\n  dismissible = <span class="hljs-literal">false</span>;\n  elevation = <span class="hljs-number">3</span>;\n\n  <span class="hljs-title function_">onClosed</span>(<span class="hljs-params">e: <span class="hljs-built_in">any</span></span>) {\n    <span class="hljs-title function_">alert</span>(<span class="hljs-string">&#x27;closed event!&#x27;</span>);\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(e);\n  }\n}\n'},46114:(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>n});const n='<h1 id="alert">Alert</h1>\n<h2 id="api-reference-for-material-extensions-alert">API reference for Material Extensions Alert</h2>\n<p><code>import { MtxAlertModule } from &apos;@ng-matero/extensions/alert&apos;;</code></p>\n<h3 id="directives">Directives</h3>\n<h4 id="mtxalert"><code>MtxAlert</code></h4>\n<p>Selector: <code>[mtx-alert]</code></p>\n<p>Exported as: <code>mtxAlert</code></p>\n<h5 id="properties">Properties</h5>\n<table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>@Input()</code><br><code>type: MtxAlertType</code></td>\n<td align="left">The alert&apos;s type. Default is <strong><code>&apos;default&apos;</code></strong>.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>dismissible: boolean</code></td>\n<td align="left">Whether to display an inline close button.</td>\n</tr>\n<tr>\n<td align="left"><code>@Input()</code><br><code>elevation: number</code></td>\n<td align="left">The alert&apos;s elevation (0~24). Default is <strong><code>0</code></strong>.</td>\n</tr>\n<tr>\n<td align="left"><code>@Output()</code><br><code>closed: EventEmitter&lt;MtxAlertComponent&gt;</code></td>\n<td align="left">Event emitted when the alert closed.</td>\n</tr>\n</tbody></table>\n<h3 id="type-aliases">Type aliases</h3>\n<h4 id="mtxalerttype"><code>MtxAlertType</code></h4>\n<pre class="hljs"><span class="hljs-keyword">type</span> <span class="hljs-title class_">MtxAlertType</span> = <span class="hljs-string">&apos;default&apos;</span> | <span class="hljs-string">&apos;info&apos;</span> | <span class="hljs-string">&apos;success&apos;</span> | <span class="hljs-string">&apos;warning&apos;</span> | <span class="hljs-string">&apos;danger&apos;</span>;\n</pre>\n'},63347:(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>n});const n='<h2>Alert configuration</h2>\n\n<section>\n  <label>Type:</label>\n  <mat-radio-group [(ngModel)]="type">\n    <mat-radio-button value="info">Info</mat-radio-button>\n    <mat-radio-button value="success">Success</mat-radio-button>\n    <mat-radio-button value="warning">Warning</mat-radio-button>\n    <mat-radio-button value="danger">Danger</mat-radio-button>\n  </mat-radio-group>\n</section>\n\n<section>\n  <mat-checkbox [(ngModel)]="dismissible">Dismissible</mat-checkbox>\n</section>\n\n<section>\n  <label>Elevation:</label>\n  <mat-slider min="0" max="24" discrete>\n    <input matSliderThumb [(ngModel)]="elevation">\n  </mat-slider>\n</section>\n\n<h2>Result</h2>\n\n<mtx-alert [type]="type" [elevation]="elevation" [dismissible]="dismissible"\n           (closed)="onClosed($event)">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</mtx-alert>\n'},93665:(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>n});const n="label {\n  padding: 0 8px;\n}\n"},47604:(c,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>n});const n="import { Component } from '@angular/core';\nimport { MtxAlertType } from '@ng-matero/extensions/alert';\n\n@Component({\n  selector: 'alert-example',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.scss'],\n})\nexport class AppComponent {\n  type: MtxAlertType = 'info';\n  dismissible = false;\n  elevation = 3;\n\n  onClosed(e: any) {\n    alert('closed event!');\n    console.log(e);\n  }\n}\n"}}]);