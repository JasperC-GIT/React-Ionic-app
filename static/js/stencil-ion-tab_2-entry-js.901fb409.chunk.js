(this.webpackJsonpadvertiser=this.webpackJsonpadvertiser||[]).push([[42],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_tab",(function(){return l})),n.d(t,"ion_tabs",(function(){return h}));var r=n(1),i=n.n(r),a=n(4),s=n(5),o=n(6),c=n(17),u=n(168),l=function(){function e(t){Object(s.a)(this,e),Object(c.l)(this,t),this.loaded=!1,this.active=!1}return Object(o.a)(e,[{key:"componentWillLoad",value:function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.active){e.next=3;break}return e.next=3,this.setActive();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setActive",value:function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.prepareLazyLoaded();case 2:this.active=!0;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changeActive",value:function(e){e&&this.prepareLazyLoaded()}},{key:"prepareLazyLoaded",value:function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(u.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}},{key:"render",value:function(){var e=this.tab,t=this.active,n=this.component;return Object(c.j)(c.b,{role:"tabpanel","aria-hidden":t?null:"true","aria-labelledby":"tab-button-".concat(e),class:{"ion-page":void 0===n,"tab-hidden":!t}},Object(c.j)("slot",null))}},{key:"el",get:function(){return Object(c.g)(this)}}],[{key:"watchers",get:function(){return{active:["changeActive"]}}}]),e}();l.style=":host(.tab-hidden){display:none !important}";var h=function(){function e(t){var n=this;Object(s.a)(this,e),Object(c.l)(this,t),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(e){var t=e.detail,r=t.href,i=t.tab;if(n.useRouter&&void 0!==r){var a=document.querySelector("ion-router");a&&a.push(r)}else n.select(i)},this.ionNavWillLoad=Object(c.f)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(c.f)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(c.f)(this,"ionTabsDidChange",3)}return Object(o.a)(e,[{key:"componentWillLoad",value:function(){var e=Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter){e.next=6;break}if(!((t=this.tabs).length>0)){e.next=6;break}return e.next=6,this.select(t[0]);case 6:this.ionNavWillLoad.emit();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillRender",value:function(){var e=this.el.querySelector("ion-tab-bar");if(e){var t=this.selectedTab?this.selectedTab.tab:void 0;e.selectedTab=t}}},{key:"select",value:function(){var e=Object(a.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=b(this.tabs,t),this.shouldSwitch(n)){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,this.setActive(n);case 5:return e.next=7,this.notifyRouter();case 7:return this.tabSwitch(),e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTab",value:function(){var e=Object(a.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b(this.tabs,t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSelected",value:function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}},{key:"setRouteId",value:function(){var e=Object(a.a)(i.a.mark((function e(t){var n,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=b(this.tabs,t),this.shouldSwitch(n)){e.next=3;break}return e.abrupt("return",{changed:!1,element:this.selectedTab});case 3:return e.next=5,this.setActive(n);case 5:return e.abrupt("return",{changed:!0,element:this.selectedTab,markVisible:function(){return r.tabSwitch()}});case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRouteId",value:function(){var e=Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.selectedTab&&this.selectedTab.tab,e.abrupt("return",void 0!==t?{id:t,element:this.selectedTab}:void 0);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setActive",value:function(e){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=e,this.ionTabsWillChange.emit({tab:e.tab}),e.active=!0,Promise.resolve())}},{key:"tabSwitch",value:function(){var e=this.selectedTab,t=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,e&&t!==e&&(t&&(t.active=!1),this.ionTabsDidChange.emit({tab:e.tab}))}},{key:"notifyRouter",value:function(){if(this.useRouter){var e=document.querySelector("ion-router");if(e)return e.navChanged("forward")}return Promise.resolve(!1)}},{key:"shouldSwitch",value:function(e){var t=this.selectedTab;return void 0!==e&&e!==t&&!this.transitioning}},{key:"render",value:function(){return Object(c.j)(c.b,{onIonTabButtonClick:this.onTabClicked},Object(c.j)("slot",{name:"top"}),Object(c.j)("div",{class:"tabs-inner"},Object(c.j)("slot",null)),Object(c.j)("slot",{name:"bottom"}))}},{key:"tabs",get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))}},{key:"el",get:function(){return Object(c.g)(this)}}]),e}(),b=function(e,t){var n="string"===typeof t?e.find((function(e){return e.tab===t})):t;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n};h.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n(1),i=n.n(r),a=n(4),s=function(){var e=Object(a.a)(i.a.mark((function e(t,n,r,a,s){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,r,s,a));case 2:if("string"===typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(o="string"===typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,a&&a.forEach((function(e){return o.classList.add(e)})),s&&Object.assign(o,s),n.appendChild(o),!o.componentOnReady){e.next=11;break}return e.next=11,o.componentOnReady();case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r,i,a){return e.apply(this,arguments)}}(),o=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=stencil-ion-tab_2-entry-js.901fb409.chunk.js.map