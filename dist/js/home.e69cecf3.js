(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0176":function(t,e,r){t.exports=r.p+"img/icons8-more.e2f1c1da.svg"},"057f":function(t,e,r){var s=r("fc6a"),n=r("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?o(t):n(s(t))}},"1dde":function(t,e,r){var s=r("d039"),n=r("b622"),a=r("2d00"),i=n("species");t.exports=function(t){return a>=51||!s((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"20c8":function(t,e,r){t.exports=r.p+"img/jack.cbae99a3.png"},"25f0":function(t,e,r){"use strict";var s=r("6eeb"),n=r("825a"),a=r("d039"),i=r("ad6d"),o="toString",c=RegExp.prototype,l=c[o],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=o;(u||d)&&s(RegExp.prototype,o,(function(){var t=n(this),e=String(t.source),r=t.flags,s=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?i.call(t):r);return"/"+e+"/"+s}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var s=r("6547").charAt,n=r("69f3"),a=r("7dd0"),i="String Iterator",o=n.set,c=n.getterFor(i);a(String,"String",(function(t){o(this,{type:i,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=s(r,n),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var s=r("0366"),n=r("7b0b"),a=r("9bdd"),i=r("e95a"),o=r("50c4"),c=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,d,f,p,v=n(t),b="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,w=l(v),y=0;if(g&&(m=s(m,h>2?arguments[2]:void 0,2)),void 0==w||b==Array&&i(w))for(e=o(v.length),r=new b(e);e>y;y++)p=g?m(v[y],y):v[y],c(r,y,p);else for(d=w.call(v),f=d.next,r=new b;!(u=f.call(d)).done;y++)p=g?a(d,m,[u.value,y],!0):u.value,c(r,y,p);return r.length=y,r}},"52c8":function(t,e,r){"use strict";var s=r("fd9a"),n=r.n(s);n.a},6547:function(t,e,r){var s=r("a691"),n=r("1d80"),a=function(t){return function(e,r){var a,i,o=String(n(e)),c=s(r),l=o.length;return c<0||c>=l?t?"":void 0:(a=o.charCodeAt(c),a<55296||a>56319||c+1===l||(i=o.charCodeAt(c+1))<56320||i>57343?t?o.charAt(c):a:t?o.slice(c,c+2):i-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"65f0":function(t,e,r){var s=r("861d"),n=r("e8b5"),a=r("b622"),i=a("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?s(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var s=r("428f"),n=r("5135"),a=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=s.Symbol||(s.Symbol={});n(e,t)||i(e,t,{value:a.f(t)})}},8076:function(t,e,r){"use strict";var s=r("94cae"),n=r.n(s);n.a},8418:function(t,e,r){"use strict";var s=r("c04e"),n=r("9bf2"),a=r("5c6c");t.exports=function(t,e,r){var i=s(e);i in t?n.f(t,i,a(0,r)):t[i]=r}},"85fb":function(t,e,r){t.exports=r.p+"img/walker.c56b57fb.png"},"94cae":function(t,e,r){},"97e4":function(t,e,r){"use strict";var s=r("c32f"),n=r.n(s);n.a},a4d3:function(t,e,r){"use strict";var s=r("23e7"),n=r("da84"),a=r("d066"),i=r("c430"),o=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),v=r("825a"),b=r("7b0b"),h=r("fc6a"),m=r("c04e"),g=r("5c6c"),w=r("7c73"),y=r("df75"),x=r("241c"),C=r("057f"),S=r("7418"),_=r("06cf"),P=r("9bf2"),k=r("d1e7"),A=r("9112"),O=r("6eeb"),L=r("5692"),j=r("f772"),E=r("d012"),T=r("90e3"),V=r("b622"),M=r("e538"),$=r("746f"),D=r("d44e"),N=r("69f3"),R=r("b727").forEach,F=j("hidden"),J="Symbol",I="prototype",G=V("toPrimitive"),q=N.set,H=N.getterFor(J),z=Object[I],B=n.Symbol,Q=a("JSON","stringify"),U=_.f,W=P.f,Z=C.f,K=k.f,X=L("symbols"),Y=L("op-symbols"),tt=L("string-to-symbol-registry"),et=L("symbol-to-string-registry"),rt=L("wks"),st=n.QObject,nt=!st||!st[I]||!st[I].findChild,at=o&&u((function(){return 7!=w(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var s=U(z,e);s&&delete z[e],W(t,e,r),s&&t!==z&&W(z,e,s)}:W,it=function(t,e){var r=X[t]=w(B[I]);return q(r,{type:J,tag:t,description:e}),o||(r.description=e),r},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ct=function(t,e,r){t===z&&ct(Y,e,r),v(t);var s=m(e,!0);return v(r),d(X,s)?(r.enumerable?(d(t,F)&&t[F][s]&&(t[F][s]=!1),r=w(r,{enumerable:g(0,!1)})):(d(t,F)||W(t,F,g(1,{})),t[F][s]=!0),at(t,s,r)):W(t,s,r)},lt=function(t,e){v(t);var r=h(e),s=y(r).concat(vt(r));return R(s,(function(e){o&&!dt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?w(t):lt(w(t),e)},dt=function(t){var e=m(t,!0),r=K.call(this,e);return!(this===z&&d(X,e)&&!d(Y,e))&&(!(r||!d(this,e)||!d(X,e)||d(this,F)&&this[F][e])||r)},ft=function(t,e){var r=h(t),s=m(e,!0);if(r!==z||!d(X,s)||d(Y,s)){var n=U(r,s);return!n||!d(X,s)||d(r,F)&&r[F][s]||(n.enumerable=!0),n}},pt=function(t){var e=Z(h(t)),r=[];return R(e,(function(t){d(X,t)||d(E,t)||r.push(t)})),r},vt=function(t){var e=t===z,r=Z(e?Y:h(t)),s=[];return R(r,(function(t){!d(X,t)||e&&!d(z,t)||s.push(X[t])})),s};if(c||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===z&&r.call(Y,t),d(this,F)&&d(this[F],e)&&(this[F][e]=!1),at(this,e,g(1,t))};return o&&nt&&at(z,e,{configurable:!0,set:r}),it(e,t)},O(B[I],"toString",(function(){return H(this).tag})),O(B,"withoutSetter",(function(t){return it(T(t),t)})),k.f=dt,P.f=ct,_.f=ft,x.f=C.f=pt,S.f=vt,M.f=function(t){return it(V(t),t)},o&&(W(B[I],"description",{configurable:!0,get:function(){return H(this).description}}),i||O(z,"propertyIsEnumerable",dt,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:B}),R(y(rt),(function(t){$(t)})),s({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=B(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),s({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),s({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),s({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),Q){var bt=!c||u((function(){var t=B();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));s({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var s,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(s=e,(p(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof s&&(e=s.call(this,t,e)),!ot(e))return e}),n[1]=e,Q.apply(null,n)}})}B[I][G]||A(B[I],G,B[I].valueOf),D(B,J),E[F]=!0},a630:function(t,e,r){var s=r("23e7"),n=r("4df4"),a=r("1c7e"),i=!a((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:i},{from:n})},ad6d:function(t,e,r){"use strict";var s=r("825a");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,r){var s=r("83ab"),n=r("d039"),a=r("5135"),i=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(a(o,t))return o[t];e||(e={});var r=[][t],l=!!a(e,"ACCESSORS")&&e.ACCESSORS,u=a(e,0)?e[0]:c,d=a(e,1)?e[1]:void 0;return o[t]=!!r&&!n((function(){if(l&&!s)return!0;var t={length:-1};l?i(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,u,d)}))}},ae91:function(t,e,r){t.exports=r.p+"img/alex.661efe92.png"},af2c:function(t,e,r){},b0c0:function(t,e,r){var s=r("83ab"),n=r("9bf2").f,a=Function.prototype,i=a.toString,o=/^\s*function ([^ (]*)/,c="name";s&&!(c in a)&&n(a,c,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(t){return""}}})},b727:function(t,e,r){var s=r("0366"),n=r("44ad"),a=r("7b0b"),i=r("50c4"),o=r("65f0"),c=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,d=6==t,f=5==t||d;return function(p,v,b,h){for(var m,g,w=a(p),y=n(w),x=s(v,b,3),C=i(y.length),S=0,_=h||o,P=e?_(p,C):r?_(p,0):void 0;C>S;S++)if((f||S in y)&&(m=y[S],g=x(m,S,w),t))if(e)P[S]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return S;case 2:c.call(P,m)}else if(u)return!1;return d?-1:l||u?u:P}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},bb51:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mainContainer"},[r("div",{staticClass:"flexbox"},[r("a",{staticClass:"theme-btn light-btn",attrs:{href:"#"},on:{click:t.toggleThemeLight}},[t._v(" Light Theme ")]),r("a",{staticClass:"theme-btn dark-btn",attrs:{href:"#"},on:{click:t.toggleThemeDark}},[t._v(" Dark Theme ")])]),r("div",{staticClass:"wrapper"},[r("Profile"),r("Client"),r("Password")],1)])},n=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"left-column"},[t._m(0),r("Static")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("h1",{staticClass:"box-title"},[s("strong",[t._v(" My Profile ")])]),s("p",{staticClass:"box-subtitle"},[t._v(" Check out each collumn for more details ")]),s("div",{staticClass:"box-in"},[s("img",{attrs:{src:r("ead5"),alt:"img",width:"72"}}),s("div",{staticClass:"box-body"},[s("h3",{staticClass:"box-name"},[t._v("John Doe")]),s("p",{staticClass:"box-designation"},[t._v("Senior Project Manager")])])])])}],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"head-wrap"},[s("div",[s("h2",{staticClass:"box-title"},[s("strong",[t._v(" Statistic ")])]),s("p",{staticClass:"box-subtitle"},[t._v(" Check out each collumn for more details ")])]),s("div",[s("img",{attrs:{src:r("0176"),alt:"icons8-more"}})])]),s("div",[s("ul",{staticClass:"stat-box"},[s("li",{staticClass:"stat-red"},[s("p",{staticClass:"status-text"},[t._v("In Service")]),s("span",{staticClass:"status-amt"},[t._v("$ 247.49")])]),s("li",{staticClass:"stat-red"},[s("p",[t._v("Service needed")]),s("span",[t._v("$ 1547.49")])]),s("li",{staticClass:"stat-orange"},[s("p",[t._v("Fully Serviced")]),s("span",[t._v("$ 247.49")])]),s("li",{staticClass:"stat-green"},[s("p",[t._v("Pending")]),s("span",[t._v("$ 1547.49")])])])])])}],l={},u=l,d=(r("ce5d"),r("2877")),f=Object(d["a"])(u,o,c,!1,null,"7c3a0798",null),p=f.exports,v={name:"Profile",components:{Static:p}},b=v,h=(r("52c8"),Object(d["a"])(b,a,i,!1,null,"238eedaf",null)),m=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center-column"},[s("div",{staticClass:"box"},[s("h2",{staticClass:"box-title"},[s("strong",[t._v(" My Clients ")])]),s("p",{staticClass:"box-subtitle"},[t._v(" Check out each collumn for more details ")]),s("div",{staticClass:"box-in"},[s("img",{attrs:{src:r("20c8"),alt:"img"}}),s("div",{staticClass:"box-body"},[s("h3",{staticClass:"box-name"},[t._v("John Doe")]),s("p",{staticClass:"box-designation"},[t._v("Senior Project Manager")])])]),s("div",{staticClass:"box-in"},[s("img",{attrs:{src:r("ae91"),alt:"img"}}),s("div",{staticClass:"box-body"},[s("h3",{staticClass:"box-name"},[t._v("John Doe")]),s("p",{staticClass:"box-designation"},[t._v("Senior Project Manager")])])]),s("div",{staticClass:"box-in"},[s("img",{attrs:{src:r("85fb"),alt:"img"}}),s("div",{staticClass:"box-body"},[s("h3",{staticClass:"box-name"},[t._v("John Doe")]),s("p",{staticClass:"box-designation"},[t._v("Senior Project Manager")])])]),s("div",{staticClass:"box-in"},[s("img",{attrs:{src:r("c715"),alt:"img"}}),s("div",{staticClass:"box-body"},[s("h3",{staticClass:"box-name"},[t._v("John Doe")]),s("p",{staticClass:"box-designation"},[t._v("Senior Project Manager")])])])])])}],y={name:"Client"},x=y,C=(r("8076"),Object(d["a"])(x,g,w,!1,null,"5d75d90e",null)),S=C.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"right-column"},[r("div",{staticClass:"box"},[t._m(0),r("p",{staticClass:"box-subtitle"},[t._v("Check out each collumn for more details")]),r("div",[r("form",{attrs:{id:"setPassword"}},[r("div",{staticClass:"form-block"},[r("label",{attrs:{for:"new-password"}},[t._v("New Password")]),"checkbox"===(t.passwordVisible?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password-input",class:{valid:t.passwordValidation.valid},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var r=t.password,s=e.target,n=!!s.checked;if(Array.isArray(r)){var a=null,i=t._i(r,a);s.checked?i<0&&(t.password=r.concat([a])):i>-1&&(t.password=r.slice(0,i).concat(r.slice(i+1)))}else t.password=n}}}):"radio"===(t.passwordVisible?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password-input",class:{valid:t.passwordValidation.valid},attrs:{type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password-input",class:{valid:t.passwordValidation.valid},attrs:{type:t.passwordVisible?"text":"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",{staticClass:"form-block"},[r("label",{attrs:{for:"repeat-password"}},[t._v("Repeat Password")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.checkPassword,expression:"checkPassword",modifiers:{lazy:!0}}],staticClass:"password-input",class:t.password==t.checkPassword?"valid":"",attrs:{type:"password"},domProps:{value:t.checkPassword},on:{change:function(e){t.checkPassword=e.target.value}}})]),r("button",{staticClass:"btn-submit",attrs:{disabled:t.passwordsFilled&&!t.notSamePasswords&&t.passwordValidation.valid},on:{click:t.resetPasswords}},[t._v(" Submit ")]),r("transition",{attrs:{name:"hint",appear:""}},[t.passwordValidation.errors.length>0&&!t.submitted?r("div",{staticClass:"hints"},[r("h2",[t._v("Hints")]),t._l(t.passwordValidation.errors,(function(e,s){return r("p",{key:s},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),t.notSamePasswords?r("div",{staticClass:"matches"},[r("p",[t._v("Passwords don't match.")])]):t._e()],1)])])])},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"box-title"},[r("strong",[t._v(" Change Password ")])])}];r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("a630"),r("fb6a"),r("b0c0"),r("25f0");function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}function A(t,e){if(t){if("string"===typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(t,e):void 0}}function O(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=A(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var s=0,n=function(){};return{s:n,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){o=!0,a=t},f:function(){try{i||null==r["return"]||r["return"]()}finally{if(o)throw a}}}}var L={name:"Password",data:function(){return{rules:[{message:"One lowercase letter required.",regex:/[a-z]+/},{message:"One uppercase letter required.",regex:/[A-Z]+/},{message:"6 characters minimum.",regex:/.{6,}/},{message:"One number required.",regex:/[0-9]+/}],password:"",checkPassword:"",passwordVisible:!1,submitted:!1}},methods:{resetPasswords:function(){var t=this;this.password="",this.checkPassword="",this.submitted=!0,setTimeout((function(){t.submitted=!1}),2e3)},togglePasswordVisibility:function(){this.passwordVisible=!this.passwordVisible}},computed:{notSamePasswords:function(){return!!this.passwordsFilled&&this.password!==this.checkPassword},passwordsFilled:function(){return""!==this.password&&""!==this.checkPassword},passwordValidation:function(){var t,e=[],r=O(this.rules);try{for(r.s();!(t=r.n()).done;){var s=t.value;s.regex.test(this.password)||e.push(s.message)}}catch(n){r.e(n)}finally{r.f()}return 0===e.length?{valid:!0,errors:e}:{valid:!1,errors:e}}}},j=L,E=(r("97e4"),Object(d["a"])(j,_,P,!1,null,"d8573d00",null)),T=E.exports,V={components:{Profile:m,Client:S,Password:T},data:function(){return{theme:"light"}},watch:{theme:function(t){document.documentElement.dataset.theme=t}},methods:{toggleThemeDark:function(){this.theme="dark"},toggleThemeLight:function(){this.theme="light"}}},M=V,$=Object(d["a"])(M,s,n,!1,null,null,null);e["default"]=$.exports},c32f:function(t,e,r){},c715:function(t,e,r){t.exports=r.p+"img/ramirez.f070def0.png"},ce5d:function(t,e,r){"use strict";var s=r("af2c"),n=r.n(s);n.a},d28b:function(t,e,r){var s=r("746f");s("iterator")},ddb0:function(t,e,r){var s=r("da84"),n=r("fdbc"),a=r("e260"),i=r("9112"),o=r("b622"),c=o("iterator"),l=o("toStringTag"),u=a.values;for(var d in n){var f=s[d],p=f&&f.prototype;if(p){if(p[c]!==u)try{i(p,c,u)}catch(b){p[c]=u}if(p[l]||i(p,l,d),n[d])for(var v in a)if(p[v]!==a[v])try{i(p,v,a[v])}catch(b){p[v]=a[v]}}}},e01a:function(t,e,r){"use strict";var s=r("23e7"),n=r("83ab"),a=r("da84"),i=r("5135"),o=r("861d"),c=r("9bf2").f,l=r("e893"),u=a.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var p=f.prototype=u.prototype;p.constructor=f;var v=p.toString,b="Symbol(test)"==String(u("test")),h=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=v.call(t);if(i(d,t))return"";var r=b?e.slice(7,-1):e.replace(h,"$1");return""===r?void 0:r}}),s({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,r){var s=r("b622");e.f=s},e8b5:function(t,e,r){var s=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},ead5:function(t,e,r){t.exports=r.p+"img/alex1.3ab9e622.png"},fb6a:function(t,e,r){"use strict";var s=r("23e7"),n=r("861d"),a=r("e8b5"),i=r("23cb"),o=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),d=r("1dde"),f=r("ae40"),p=d("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),h=[].slice,m=Math.max;s({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var r,s,u,d=c(this),f=o(d.length),p=i(t,f),v=i(void 0===e?f:e,f);if(a(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(d,p,v);for(s=new(void 0===r?Array:r)(m(v-p,0)),u=0;p<v;p++,u++)p in d&&l(s,u,d[p]);return s.length=u,s}})},fd9a:function(t,e,r){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=home.e69cecf3.js.map