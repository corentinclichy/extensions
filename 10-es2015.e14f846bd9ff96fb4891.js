(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9P1i":function(l,n,t){"use strict";t.r(n);var u=t("kZht");class e{}var o=t("C9Ky"),r=t("An66");class s{constructor(l){this._changeDetectorRef=l,this.type="default",this.isOpen=!0,this.elevation=0,this.closed=new u.m}ngOnInit(){}handleClose(){this.isOpen=!1,this._changeDetectorRef.markForCheck(),this.closed.emit(this)}}var a=u.rb({encapsulation:2,styles:[[".mtx-alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.mtx-alert-close{position:absolute;top:0;bottom:0;right:0;padding:0 1.25rem;font-size:1.5rem;line-height:1;color:inherit;opacity:.5;background-color:transparent;border:0;cursor:pointer}[dir=rtl] .mtx-alert-close{right:unset;left:0}.mtx-alert-close:hover{opacity:.75}.mtx-alert-dismissible{padding-right:4rem}.mtx-alert-success{background-color:#4caf50;border-color:#4caf50;color:#fff}.mtx-alert-info{background-color:#2196f3;border-color:#2196f3;color:#fff}.mtx-alert-warning{background-color:#fb8c00;border-color:#fb8c00;color:#fff}.mtx-alert-danger{background-color:#ff5252;border-color:#ff5252;color:#fff}"]],data:{}});function i(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,2,"button",[["aria-label","Close"],["class","mtx-alert-close"],["type","button"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.handleClose()&&u),u}),null,null)),(l()(),u.tb(1,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),u.Nb(-1,null,["\xd7"]))],null,null)}function b(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,6,"div",[["role","alert"]],null,null,null,null,null)),u.Kb(512,null,r.A,r.B,[u.r,u.s,u.k,u.D]),u.sb(2,278528,null,0,r.k,[r.A],{ngClass:[0,"ngClass"]},null),u.Gb(3,3),u.Eb(null,0),(l()(),u.ib(16777216,null,null,1,null,i)),u.sb(6,16384,null,0,r.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component,u=l(n,3,0,"mtx-alert","mtx-alert-"+t.type,"mat-elevation-z"+t.elevation);l(n,2,0,u),l(n,6,0,t.dismissible)}),null)}function c(l){return u.Pb(2,[(l()(),u.ib(16777216,null,null,1,null,b)),u.sb(1,16384,null,0,r.m,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.isOpen)}),null)}class p{onClosed(l){console.log(l)}}var d=u.rb({encapsulation:0,styles:[[""]],data:{}});function m(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Normal"])),(l()(),u.tb(2,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["type","info"]],null,null,null,c,a)),u.sb(3,114688,null,0,s,[u.h],{type:[0,"type"]},null),(l()(),u.tb(4,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Heads up!"])),(l()(),u.Nb(-1,0,[" This alert needs your attention, but it's not super important.\n"])),(l()(),u.tb(7,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["type","success"]],null,null,null,c,a)),u.sb(8,114688,null,0,s,[u.h],{type:[0,"type"]},null),(l()(),u.tb(9,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Well done!"])),(l()(),u.Nb(-1,0,[" You successfully read this important alert message.\n"])),(l()(),u.tb(12,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["type","warning"]],null,null,null,c,a)),u.sb(13,114688,null,0,s,[u.h],{type:[0,"type"]},null),(l()(),u.tb(14,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Warning!"])),(l()(),u.Nb(-1,0,[" Better check yourself, you're not looking too good.\n"])),(l()(),u.tb(17,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["type","danger"]],null,null,null,c,a)),u.sb(18,114688,null,0,s,[u.h],{type:[0,"type"]},null),(l()(),u.tb(19,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Oh snap!"])),(l()(),u.Nb(-1,0,[" Change a few things up and try submitting again.\n"])),(l()(),u.tb(22,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Dismissible"])),(l()(),u.tb(24,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["type","info"]],null,[[null,"closed"]],(function(l,n,t){var u=!0;return"closed"===n&&(u=!1!==l.component.onClosed(t)&&u),u}),c,a)),u.sb(25,114688,null,0,s,[u.h],{type:[0,"type"],dismissible:[1,"dismissible"]},{closed:"closed"}),(l()(),u.tb(26,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Heads up!"])),(l()(),u.Nb(-1,0,[" This alert needs your attention, but it's not super important.\n"])),(l()(),u.tb(29,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["type","success"]],null,[[null,"closed"]],(function(l,n,t){var u=!0;return"closed"===n&&(u=!1!==l.component.onClosed(t)&&u),u}),c,a)),u.sb(30,114688,null,0,s,[u.h],{type:[0,"type"],dismissible:[1,"dismissible"]},{closed:"closed"}),(l()(),u.tb(31,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Well done!"])),(l()(),u.Nb(-1,0,[" You successfully read this important alert message.\n"])),(l()(),u.tb(34,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Elevation"])),(l()(),u.tb(36,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["elevation","3"],["type","danger"]],null,null,null,c,a)),u.sb(37,114688,null,0,s,[u.h],{type:[0,"type"],elevation:[1,"elevation"]},null),(l()(),u.tb(38,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Well done!"])),(l()(),u.Nb(-1,0,[" You successfully read this important alert message.\n"])),(l()(),u.tb(41,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["elevation","3"],["type","warning"]],null,null,null,c,a)),u.sb(42,114688,null,0,s,[u.h],{type:[0,"type"],elevation:[1,"elevation"]},null),(l()(),u.tb(43,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Warning!"])),(l()(),u.Nb(-1,0,[" Better check yourself, you're not looking too good.\n"])),(l()(),u.tb(46,0,null,null,4,"mtx-alert",[["class","mtx-alert-wrap"],["elevation","3"],["type","default"]],null,null,null,c,a)),u.sb(47,114688,null,0,s,[u.h],{type:[0,"type"],elevation:[1,"elevation"]},null),(l()(),u.tb(48,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),u.Nb(-1,null,["Heads up!"])),(l()(),u.Nb(-1,0,[" This alert needs your attention, but it's not super important.\n"]))],(function(l,n){l(n,3,0,"info"),l(n,8,0,"success"),l(n,13,0,"warning"),l(n,18,0,"danger"),l(n,25,0,"info",!0),l(n,30,0,"success",!0),l(n,37,0,"danger","3"),l(n,42,0,"warning","3"),l(n,47,0,"default","3")}),null)}function f(l){return u.Pb(0,[(l()(),u.tb(0,0,null,null,1,"alert-demo",[],null,null,null,m,d)),u.sb(1,49152,null,0,p,[],null,null)],null,null)}var g=u.pb("alert-demo",p,f,{},{},[]),h=t("1VvW");class y{}t.d(n,"AlertDemoModuleNgFactory",(function(){return x}));var x=u.qb(e,[],(function(l){return u.Cb([u.Db(512,u.j,u.bb,[[8,[o.a,g]],[3,u.j],u.w]),u.Db(4608,r.o,r.n,[u.t,[2,r.F]]),u.Db(1073742336,h.s,h.s,[[2,h.x],[2,h.o]]),u.Db(1073742336,r.c,r.c,[]),u.Db(1073742336,y,y,[]),u.Db(1073742336,e,e,[]),u.Db(1024,h.m,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);