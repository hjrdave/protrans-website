(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"6xyR":function(e,t,a){"use strict";var n=a("wx14"),o=a("zLVn"),r=a("TSYQ"),i=a.n(r),s=a("q1tI"),c=a.n(s),l=a("vUet"),d=a("YdCC"),u=a("U1MP"),m=a("Wzyw"),p=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,s=e.variant,d=e.as,u=void 0===d?"img":d,m=Object(o.a)(e,["bsPrefix","className","variant","as"]),p=Object(l.b)(a,"card-img");return c.a.createElement(u,Object(n.a)({ref:t,className:i()(s?p+"-"+s:p,r)},m))}));p.displayName="CardImg",p.defaultProps={variant:null};var f=p,h=Object(u.a)("h5"),g=Object(u.a)("h6"),b=Object(d.a)("card-body"),v=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,d=e.bg,u=e.text,p=e.border,f=e.body,h=e.children,g=e.as,v=void 0===g?"div":g,y=Object(o.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(l.b)(a,"card"),w=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return c.a.createElement(m.a.Provider,{value:w},c.a.createElement(v,Object(n.a)({ref:t},y,{className:i()(r,E,d&&"bg-"+d,u&&"text-"+u,p&&"border-"+p)}),f?c.a.createElement(b,null,h):h))}));v.displayName="Card",v.defaultProps={body:!1},v.Img=f,v.Title=Object(d.a)("card-title",{Component:h}),v.Subtitle=Object(d.a)("card-subtitle",{Component:g}),v.Body=b,v.Link=Object(d.a)("card-link",{Component:"a"}),v.Text=Object(d.a)("card-text",{Component:"p"}),v.Header=Object(d.a)("card-header"),v.Footer=Object(d.a)("card-footer"),v.ImgOverlay=Object(d.a)("card-img-overlay");t.a=v},U1MP:function(e,t,a){"use strict";var n=a("wx14"),o=a("q1tI"),r=a.n(o),i=a("TSYQ"),s=a.n(i);t.a=function(e){return r.a.forwardRef((function(t,a){return r.a.createElement("div",Object(n.a)({},t,{ref:a,className:s()(t.className,e)}))}))}},WdXO:function(e,t,a){"use strict";a.r(t);var n=a("J4zp"),o=a.n(n),r=a("q1tI"),i=a.n(r),s=a("Wbzz"),c=a("zBe7"),l=a("zJgK"),d=a.n(l),u=a("CFxV"),m=a("6xyR"),p=a("9eSz"),f=a.n(p);a("Zmaj");var h=function(e){var t=e.post,a=t.frontmatter,n=a.path,o=a.date,r=a.title,c=a.featuredImage,l=t.excerpt;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-12 col-lg-4 post-card-container"},i.a.createElement(s.Link,{to:n},i.a.createElement(m.a,{className:"mt-3 post-card"},i.a.createElement(f.a,{fluid:c.childImageSharp.fluid}),i.a.createElement(m.a.Body,null,i.a.createElement(m.a.Subtitle,{className:"mb-2 text-muted"},i.a.createElement("small",null,o)),i.a.createElement(m.a.Title,null,r),i.a.createElement(m.a.Text,null,l))))))},g=a("sjrs");a("+nzy");var b,v=a("zLVn"),y=a("wx14"),E=a("dI71"),w=a("TSYQ"),O=a.n(w),k=a("VXAI"),N=a("ctsM"),x=a("stpP"),j=a("UZG4");function C(e){if((!b&&0!==b||e)&&N.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),b=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return b}a("8+KV"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=a("3Hwf");function L(e){void 0===e&&(e=Object(F.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(a){return e.body}}var R=a("kvSq"),T=a("vxNi"),M=a("4opw"),P=a("17x9"),I=a.n(P),D=a("i8i4"),H=a.n(D);a("2Spj"),a("KKXr"),a("V+eJ"),a("dZ+Y");function B(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}a("Oyvg"),a("pIFo");function z(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function A(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=z(e.className,t):e.setAttribute("class",z(e.className&&e.className.baseVal||"",t))}function U(e,t){return function(e){var t=Object(F.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var K=/([A-Z])/g;var W=/^ms-/;function _(e){return function(e){return e.replace(K,"-$1").toLowerCase()}(e).replace(W,"-ms-")}var V=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var q,Y=function(e,t){var a="",n="";if("string"==typeof t)return e.style.getPropertyValue(_(t))||U(e).getPropertyValue(_(t));Object.keys(t).forEach((function(o){var r=t[o];r||0===r?!function(e){return!(!e||!V.test(e))}(o)?a+=_(o)+": "+r+";":n+=o+"("+r+") ":e.style.removeProperty(_(o))})),n&&(a+="transform: "+n+";"),e.style.cssText+=";"+a};function Z(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function J(e){var t;return Z(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=Object(F.a)(e),a=Z(t);return t.body.clientWidth<a.innerWidth}(e):e.scrollHeight>e.clientHeight}var Q=["template","script","style"],X=function(e,t,a){t=[].concat(t),[].forEach.call(e.children,(function(e){var n,o,r;-1===t.indexOf(e)&&(o=(n=e).nodeType,r=n.tagName,1===o&&-1===Q.indexOf(r.toLowerCase()))&&a(e)}))};function $(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var G,ee=function(){function e(e){var t=void 0===e?{}:e,a=t.hideSiblingNodes,n=void 0===a||a,o=t.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=n,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=function(e){if((!q&&0!==q||e)&&T.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),q=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return q}()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return t=this.data,a=function(t){return-1!==t.modals.indexOf(e)},n=-1,t.some((function(e,t){return!!a(e,t)&&(n=t,!0)})),n;var t,a,n},t.setContainerStyle=function(e,t){var a={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(a.paddingRight=parseInt(Y(t,"paddingRight")||0,10)+this.scrollbarSize+"px"),Y(t,a)},t.removeContainerStyle=function(e,t){var a=e.style;Object.keys(a).forEach((function(e){t.style[e]=a[e]}))},t.add=function(e,t,a){var n=this.modals.indexOf(e),o=this.containers.indexOf(t);if(-1!==n)return n;if(n=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var a=t.dialog,n=t.backdrop;X(e,[a,n],(function(e){return $(!0,e)}))}(t,e),-1!==o)return this.data[o].modals.push(e),n;var r={modals:[e],classes:a?a.split(/\s+/):[],overflowing:J(t)};return this.handleContainerOverflow&&this.setContainerStyle(r,t),r.classes.forEach(B.bind(null,t)),this.containers.push(t),this.data.push(r),n},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var a=this.containerIndexFromModal(e),n=this.data[a],o=this.containers[a];if(n.modals.splice(n.modals.indexOf(e),1),this.modals.splice(t,1),0===n.modals.length)n.classes.forEach(A.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(n,o),this.hideSiblingNodes&&function(e,t){var a=t.dialog,n=t.backdrop;X(e,[a,n],(function(e){return $(!1,e)}))}(o,e),this.containers.splice(a,1),this.data.splice(a,1);else if(this.hideSiblingNodes){var r=n.modals[n.modals.length-1],i=r.backdrop;$(!1,r.dialog),$(!1,i)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),te=a("UT2A"),ae=function(e){if("undefined"!=typeof document)return null==e?Object(F.a)().body:("function"==typeof e&&(e=e()),e&&e.current&&(e=e.current),e&&e.nodeType?e:null)};var ne=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={exited:!t.props.show},t.onShow=function(){var e=t.props,a=e.container,n=e.containerClassName,o=e.onShow;t.getModalManager().add(S(t),a,n),t.removeKeydownListener=Object(M.a)(document,"keydown",t.handleDocumentKeyDown),t.removeFocusListener=Object(M.a)(document,"focus",(function(){return setTimeout(t.enforceFocus)}),!0),o&&o(),t.autoFocus()},t.onHide=function(){t.getModalManager().remove(S(t)),t.removeKeydownListener(),t.removeFocusListener(),t.props.restoreFocus&&t.restoreLastFocus()},t.setDialogRef=function(e){t.dialog=e},t.setBackdropRef=function(e){t.backdrop=e&&H.a.findDOMNode(e)},t.handleHidden=function(){var e;(t.setState({exited:!0}),t.onHide(),t.props.onExited)&&(e=t.props).onExited.apply(e,arguments)},t.handleBackdropClick=function(e){e.target===e.currentTarget&&(t.props.onBackdropClick&&t.props.onBackdropClick(e),!0===t.props.backdrop&&t.props.onHide())},t.handleDocumentKeyDown=function(e){t.props.keyboard&&27===e.keyCode&&t.isTopModal()&&(t.props.onEscapeKeyDown&&t.props.onEscapeKeyDown(e),t.props.onHide())},t.enforceFocus=function(){if(t.props.enforceFocus&&t._isMounted&&t.isTopModal()){var e=L(Object(te.a)(S(t)));t.dialog&&!Object(R.a)(t.dialog,e)&&t.dialog.focus()}},t.renderBackdrop=function(){var e=t.props,a=e.renderBackdrop,n=e.backdropTransition,o=a({ref:t.setBackdropRef,onClick:t.handleBackdropClick});return n&&(o=i.a.createElement(n,{appear:!0,in:t.props.show},o)),o},t}Object(E.a)(t,e),t.getDerivedStateFromProps=function(e){return e.show?{exited:!1}:e.transition?null:{exited:!0}};var a=t.prototype;return a.componentDidMount=function(){this._isMounted=!0,this.props.show&&this.onShow()},a.componentDidUpdate=function(e){var t=this.props.transition;!e.show||this.props.show||t?!e.show&&this.props.show&&this.onShow():this.onHide()},a.componentWillUnmount=function(){var e=this.props,t=e.show,a=e.transition;this._isMounted=!1,(t||a&&!this.state.exited)&&this.onHide()},a.getSnapshotBeforeUpdate=function(e){return T.a&&!e.show&&this.props.show&&(this.lastFocus=L()),null},a.getModalManager=function(){return this.props.manager?this.props.manager:(G||(G=new ee),G)},a.restoreLastFocus=function(){this.lastFocus&&this.lastFocus.focus&&(this.lastFocus.focus(this.props.restoreFocusOptions),this.lastFocus=null)},a.autoFocus=function(){if(this.props.autoFocus){var e=L(Object(te.a)(this));this.dialog&&!Object(R.a)(this.dialog,e)&&(this.lastFocus=e,this.dialog.focus())}},a.isTopModal=function(){return this.getModalManager().isTopModal(this)},a.render=function(){var e=this.props,a=e.show,n=e.container,o=e.children,r=e.renderDialog,s=e.role,c=void 0===s?"dialog":s,l=e.transition,d=e.backdrop,u=e.className,m=e.style,p=e.onExit,f=e.onExiting,h=e.onEnter,g=e.onEntering,b=e.onEntered,E=Object(v.a)(e,["show","container","children","renderDialog","role","transition","backdrop","className","style","onExit","onExiting","onEnter","onEntering","onEntered"]);if(!(a||l&&!this.state.exited))return null;var w=Object(y.a)({role:c,ref:this.setDialogRef,"aria-modal":"dialog"===c||void 0},function(e,t){var a=Object.keys(e),n={};return a.forEach((function(a){Object.prototype.hasOwnProperty.call(t,a)||(n[a]=e[a])})),n}(E,t.propTypes),{style:m,className:u,tabIndex:"-1"}),O=r?r(w):i.a.createElement("div",w,i.a.cloneElement(o,{role:"document"}));return l&&(O=i.a.createElement(l,{appear:!0,unmountOnExit:!0,in:a,onExit:p,onExiting:f,onExited:this.handleHidden,onEnter:h,onEntering:g,onEntered:b},O)),H.a.createPortal(i.a.createElement(i.a.Fragment,null,d&&this.renderBackdrop(),O),n)},t}(i.a.Component);ne.propTypes={show:I.a.bool,container:I.a.any,onShow:I.a.func,onHide:I.a.func,backdrop:I.a.oneOfType([I.a.bool,I.a.oneOf(["static"])]),renderDialog:I.a.func,renderBackdrop:I.a.func,onEscapeKeyDown:I.a.func,onBackdropClick:I.a.func,containerClassName:I.a.string,keyboard:I.a.bool,transition:I.a.elementType,backdropTransition:I.a.elementType,autoFocus:I.a.bool,enforceFocus:I.a.bool,restoreFocus:I.a.bool,restoreFocusOptions:I.a.shape({preventScroll:I.a.bool}),onEnter:I.a.func,onEntering:I.a.func,onEntered:I.a.func,onExit:I.a.func,onExiting:I.a.func,onExited:I.a.func,manager:I.a.object},ne.defaultProps={show:!1,role:"dialog",backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,onHide:function(){},renderBackdrop:function(e){return i.a.createElement("div",e)}};var oe,re,ie=(oe=ne,(re=i.a.forwardRef((function(e,t){var a=function(e,t){var a=Object(r.useState)((function(){return ae(e)})),n=a[0],o=a[1];if(!n){var i=ae(e);i&&o(i)}return Object(r.useEffect)((function(){t&&n&&t(n)}),[t,n]),Object(r.useEffect)((function(){var t=ae(e);t!==n&&o(t)}),[e,n]),n}(e.container);return a?i.a.createElement(oe,Object(y.a)({},e,{ref:t,container:a})):null}))).Manager=ee,re._Inner=oe,re);ie.Manager=ee;var se,ce=ie,le=a("ANPE"),de=a("4L4a"),ue=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",me=".sticky-top",pe=".navbar-toggler",fe=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).adjustAndStore=function(e,t,a){var n,o=t.style[e];t.dataset[e]=o,Object(le.a)(t,((n={})[e]=parseFloat(Object(le.a)(t,e))+a+"px",n))},t.restore=function(e,t){var a,n=t.dataset[e];void 0!==n&&(delete t.dataset[e],Object(le.a)(t,((a={})[e]=n,a)))},t}Object(E.a)(t,e);var a=t.prototype;return a.setContainerStyle=function(t,a){var n=this;if(e.prototype.setContainerStyle.call(this,t,a),t.overflowing){var o=C();Object(de.a)(a,ue).forEach((function(e){return n.adjustAndStore("paddingRight",e,o)})),Object(de.a)(a,me).forEach((function(e){return n.adjustAndStore("margingRight",e,-o)})),Object(de.a)(a,pe).forEach((function(e){return n.adjustAndStore("margingRight",e,o)}))}},a.removeContainerStyle=function(t,a){var n=this;e.prototype.removeContainerStyle.call(this,t,a),Object(de.a)(a,ue).forEach((function(e){return n.restore("paddingRight",e)})),Object(de.a)(a,me).forEach((function(e){return n.restore("margingRight",e)})),Object(de.a)(a,pe).forEach((function(e){return n.restore("margingRight",e)}))},t}(ee),he=a("CR+v"),ge=a("dRu9"),be=a("z+q/"),ve=((se={})[ge.b]="show",se[ge.a]="show",se),ye=i.a.forwardRef((function(e,t){var a=e.className,n=e.children,o=Object(v.a)(e,["className","children"]),s=Object(r.useCallback)((function(e){Object(be.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return i.a.createElement(ge.e,Object(y.a)({ref:t,addEndListener:he.a},o,{onEnter:s}),(function(e,t){return i.a.cloneElement(n,Object(y.a)({},t,{className:O()("fade",a,n.props.className,ve[e])}))}))}));ye.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},ye.displayName="Fade";var Ee=ye,we=a("YdCC"),Oe=Object(we.a)("modal-body"),ke=i.a.createContext({onHide:function(){}}),Ne=a("vUet"),xe=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.centered,r=e.size,s=e.children,c=e.scrollable,l=Object(v.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),d=(a=Object(Ne.b)(a,"modal"))+"-dialog";return i.a.createElement("div",Object(y.a)({},l,{ref:t,className:O()(d,n,r&&a+"-"+r,o&&d+"-centered",c&&d+"-scrollable")}),i.a.createElement("div",{className:a+"-content"},s))}));xe.displayName="ModalDialog";var je=xe,Ce=Object(we.a)("modal-footer"),Se=a("ZCiN"),Fe={label:I.a.string.isRequired,onClick:I.a.func},Le=i.a.forwardRef((function(e,t){var a=e.label,n=e.onClick,o=e.className,r=Object(v.a)(e,["label","onClick","className"]);return i.a.createElement("button",Object(y.a)({ref:t,type:"button",className:O()("close",o),onClick:n},r),i.a.createElement("span",{"aria-hidden":"true"},"×"),i.a.createElement("span",{className:"sr-only"},a))}));Le.displayName="CloseButton",Le.propTypes=Fe,Le.defaultProps={label:"Close"};var Re=Le,Te=i.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.closeLabel,o=e.closeButton,s=e.onHide,c=e.className,l=e.children,d=Object(v.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);a=Object(Ne.b)(a,"modal-header");var u=Object(r.useContext)(ke),m=Object(Se.a)((function(){u&&u.onHide(),s&&s()}));return i.a.createElement("div",Object(y.a)({ref:t},d,{className:O()(c,a)}),l,o&&i.a.createElement(Re,{label:n,onClick:m}))}));Te.displayName="ModalHeader",Te.defaultProps={closeLabel:"Close",closeButton:!1};var Me=Te,Pe=a("U1MP"),Ie=Object(Pe.a)("h4"),De=Object(we.a)("modal-title",{Component:Ie}),He={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:je,manager:new fe};function Be(e){return i.a.createElement(Ee,e)}function ze(e){return i.a.createElement(Ee,e)}var Ae=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={style:{}},t.modalContext={onHide:function(){return t.props.onHide()}},t.setModalRef=function(e){t._modal=e},t.handleDialogMouseDown=function(){t._waitingForMouseUp=!0},t.handleMouseUp=function(e){t._waitingForMouseUp&&e.target===t._modal.dialog&&(t._ignoreBackdropClick=!0),t._waitingForMouseUp=!1},t.handleClick=function(e){t._ignoreBackdropClick||e.target!==e.currentTarget?t._ignoreBackdropClick=!1:t.props.onHide()},t.handleEnter=function(e){var a;e&&(e.style.display="block",t.updateDialogStyle(e));for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t.props.onEnter&&(a=t.props).onEnter.apply(a,[e].concat(o))},t.handleEntering=function(e){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t.props.onEntering&&(a=t.props).onEntering.apply(a,[e].concat(o)),Object(k.a)(window,"resize",t.handleWindowResize)},t.handleExited=function(e){var a;e&&(e.style.display="");for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t.props.onExited&&(a=t.props).onExited.apply(a,o),Object(j.a)(window,"resize",t.handleWindowResize)},t.handleWindowResize=function(){t.updateDialogStyle(t._modal.dialog)},t.renderBackdrop=function(e){var a=t.props,n=a.bsPrefix,o=a.backdropClassName,r=a.animation;return i.a.createElement("div",Object(y.a)({},e,{className:O()(n+"-backdrop",o,!r&&"show")}))},t}Object(E.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){Object(j.a)(window,"resize",this.handleWindowResize)},a.updateDialogStyle=function(e){if(N.a){var t=this.props.manager.isContainerOverflowing(this._modal),a=e.scrollHeight>Object(x.a)(e).documentElement.clientHeight;this.setState({style:{paddingRight:t&&!a?C():void 0,paddingLeft:!t&&a?C():void 0}})}},a.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,n=e.style,o=e.dialogClassName,r=e.children,s=e.dialogAs,c=e.show,l=e.animation,d=e.backdrop,u=e.keyboard,m=e.manager,p=e.onEscapeKeyDown,f=e.onShow,h=e.onHide,g=e.container,b=e.autoFocus,E=e.enforceFocus,w=e.restoreFocus,k=e.onEntered,N=e.onExit,x=e.onExiting,j=(e.onExited,e.onEntering,e.onEnter,e.onEntering,e.backdropClassName,Object(v.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","show","animation","backdrop","keyboard","manager","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","onEntered","onExit","onExiting","onExited","onEntering","onEnter","onEntering","backdropClassName"])),C=!0===d?this.handleClick:null,S=Object(y.a)({},n,{},this.state.style);return l||(S.display="block"),i.a.createElement(ke.Provider,{value:this.modalContext},i.a.createElement(ce,{show:c,backdrop:d,container:g,keyboard:u,autoFocus:b,enforceFocus:E,restoreFocus:w,onEscapeKeyDown:p,onShow:f,onHide:h,onEntered:k,onExit:N,onExiting:x,manager:m,ref:this.setModalRef,style:S,className:O()(a,t),containerClassName:t+"-open",transition:l?Be:void 0,backdropTransition:l?ze:void 0,renderBackdrop:this.renderBackdrop,onClick:C,onMouseUp:this.handleMouseUp,onEnter:this.handleEnter,onEntering:this.handleEntering,onExited:this.handleExited},i.a.createElement(s,Object(y.a)({},j,{onMouseDown:this.handleDialogMouseDown,className:o}),r)))},t}(i.a.Component);Ae.defaultProps=He;var Ue=Object(Ne.a)(Ae,"modal");Ue.Body=Oe,Ue.Header=Me,Ue.Title=De,Ue.Footer=Ce,Ue.Dialog=je,Ue.TRANSITION_DURATION=300,Ue.BACKDROP_TRANSITION_DURATION=150;var Ke=Ue;var We=function(e){var t=e.show,a=e.onHide,n=e.children,o=e.title,r=e.className,s="modal-id-".concat(d()());return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:r},i.a.createElement(Ke,{show:t,onHide:a,size:"lg","aria-labelledby":s,centered:!0},i.a.createElement(Ke.Header,{closeButton:!0},i.a.createElement(Ke.Title,{id:s},o)),i.a.createElement(Ke.Body,null,n))))};a("toZ0");function _e(e){var t=e.data.allMarkdownRemark.edges,a=e.location,n=Object(r.useState)(!1),l=o()(n,2),m=l[0],p=l[1],f=new URLSearchParams(a.search).get("category")||!0;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"category-menu-mobile-button p-3 d-lg-none",onClick:function(){return p(!0)}},i.a.createElement("i",{className:"fas fa-ellipsis-v"})),i.a.createElement(We,{className:"category-menu-mobile",show:m,onHide:function(){return p(!1)},title:"Categories"},i.a.createElement(g.a,{as:"ul",variant:"flush"},i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat(!0===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news",onClick:function(){return p(!1)}},"Recent")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Lean Management"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Lean%20Management",onClick:function(){return p(!1)}},"Lean Management",i.a.createElement("br",null),"& Six Sigma")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Trucking"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Trucking",onClick:function(){return p(!1)}},"Trucking")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Logistics Technology"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Logistics%20Technology",onClick:function(){return p(!1)}},"Logistics Technology")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Regulation"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Regulation",onClick:function(){return p(!1)}},"Regulation")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Sustainability"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Sustainability",onClick:function(){return p(!1)}},"Sustainability")))),i.a.createElement(c.a,{title:"Logistics News",activePath:a,className:"logistics-news"},i.a.createElement(u.a,{type:"full"},i.a.createElement("h1",null,"Logistic News and Trends"),i.a.createElement("h3",{className:"pt-4"},!0===f?"Recent Posts":"Category: ".concat(f)),i.a.createElement("div",{className:"d-lg-flex justify-content-lg-between"},i.a.createElement("div",{className:"row pr-0 pr-lg-4"},t.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return!0!==f?f===e.node.frontmatter.category.toString()?i.a.createElement(r.Fragment,{key:d()()},i.a.createElement(h,{key:e.node.id,post:e.node})):null:!0===f?i.a.createElement(r.Fragment,{key:d()()},i.a.createElement(h,{key:e.node.id,post:e.node})):void 0}))),i.a.createElement("div",{className:"logistics-news-menu d-none d-lg-flex"},i.a.createElement(g.a,{as:"ul",variant:"flush"},i.a.createElement("h4",{className:"pl-3"},"Categories"),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat(!0===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news"},"Recent")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Lean Management"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Lean%20Management"},"Lean Management",i.a.createElement("br",null),"& Six Sigma")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Trucking"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Trucking"},"Trucking")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Logistics Technology"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Logistics%20Technology"},"Logistics Technology")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Regulation"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Regulation"},"Regulation")),i.a.createElement(g.a.Item,{as:"li",className:"pt-1 ".concat("Sustainability"===f?"logistics-news-menu-active":"")},i.a.createElement(s.Link,{to:"/logistics-news?category=Sustainability"},"Sustainability"))))))))}a.d(t,"default",(function(){return _e})),a.d(t,"pageQuery",(function(){return Ve}));var Ve="1550189916"},sjrs:function(e,t,a){"use strict";var n=a("wx14"),o=a("zLVn"),r=a("TSYQ"),i=a.n(r),s=a("q1tI"),c=a.n(s),l=(a("2W6z"),a("JCAc")),d=a("vUet"),u=a("rQNl"),m=a("VWqr"),p=a("ILyh"),f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.active,l=e.disabled,u=e.className,f=e.variant,h=e.action,g=e.as,b=e.eventKey,v=e.onClick,y=Object(o.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(d.b)(a,"list-group-item");var E=Object(s.useCallback)((function(e){if(l)return e.preventDefault(),void e.stopPropagation();v&&v(e)}),[l,v]);return c.a.createElement(m.a,Object(n.a)({ref:t},y,{eventKey:Object(p.b)(b,y.href),as:g||(h?y.href?"a":"button":"div"),onClick:E,className:i()(u,a,r&&"active",l&&"disabled",f&&a+"-"+f,h&&a+"-action")}))}));f.defaultProps={variant:null,active:!1,disabled:!1},f.displayName="ListGroupItem";var h=f,g=c.a.forwardRef((function(e,t){var a,r=Object(l.b)(e,{activeKey:"onSelect"}),s=r.className,m=r.bsPrefix,p=r.variant,f=r.horizontal,h=r.as,g=void 0===h?"div":h,b=Object(o.a)(r,["className","bsPrefix","variant","horizontal","as"]);return m=Object(d.b)(m,"list-group"),a=f?!0===f?"horizontal":"horizontal-"+f:null,c.a.createElement(u.a,Object(n.a)({ref:t},b,{as:g,className:i()(s,m,p&&m+"-"+p,a&&m+"-"+a)}))}));g.defaultProps={variant:null,horizontal:null},g.displayName="ListGroup",g.Item=h;t.a=g}}]);
//# sourceMappingURL=component---src-pages-logistics-news-index-jsx-0e5292e87e83fd908e72.js.map