(window.webpackJsonp=window.webpackJsonp||[]).push([[20,18,19],{Dtc0:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n("q1tI"),i=n.n(a),s=(n("Wbzz"),n("lggp"));function r(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.default,null))}},lggp:function(e,t,n){"use strict";n.r(t);var a=n("zs9p");t.default=a.default},zs9p:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),s=n("zBe7"),r=n("CFxV"),l=n("J4zp"),o=n.n(l),c=(n("0l/t"),n("wx14")),u=n("zLVn"),d=n("dI71"),m=n("TSYQ"),p=n.n(m),v=n("ANPE"),h=n("CR+v"),f=n("JCAc"),x=n("YdCC"),b=Object(x.a)("carousel-caption",{Component:"div"}),g=Object(x.a)("carousel-item");n("8+KV"),n("bWfx");var E=n("dbZe"),S=n("vUet"),I=n("z+q/"),C=function(e){return i.a.Children.toArray(e).filter(i.a.isValidElement).length},N={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},P=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=i.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<40||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===Object(v.a)(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,i=n.activeIndex+1;if(i>C(t.props.children)-1){if(!a)return;i=0}t.select(i,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,i=n.activeIndex-1;if(i<0){if(!a)return;i=C(t.props.children)-1}t.select(i,e,"prev")}},t}Object(d.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var n=t.activeIndex;if(e.activeIndex!==n){var a=C(e.children)-1,i=Math.max(0,Math.min(e.activeIndex,a));return{direction:0===i&&n>=a||n<=i?"next":"prev",previousActiveIndex:n,activeIndex:i}}return null},n.componentDidUpdate=function(e,t){var n=this,a=this.props,i=a.bsPrefix,s=a.slide,r=a.onSlideEnd;if(s&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var l,o,c=this.state,u=c.activeIndex,d=c.direction;"next"===d?(l=i+"-item-next",o=i+"-item-left"):"prev"===d&&(l=i+"-item-prev",o=i+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:l},(function(){var e=n.carousel.current.children[u];Object(I.a)(e),n.safeSetState({prevClasses:p()("active",o),currentClasses:p()(l,o)},(function(){return Object(h.a)(e,(function(){n.safeSetState({prevClasses:"",currentClasses:"active"},n.handleSlideEnd),r&&r()}))}))}))}},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.safeSetState=function(e,t){var n=this;this.isUnmounted||this.setState(e,(function(){return!n.isUnmounted&&t()}))},n.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},n.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},n.to=function(e,t){var n=this.props.children;e<0||e>C(n)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},n.select=function(e,t,n){var a=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(a.timeout);var i=a.props,s=i.activeIndex,r=i.onSelect;e===s||a._isSliding||a.isUnmounted||r(e,n||(e<s?"prev":"next"),t)}),50)},n.renderControls=function(e){var t=this.props.bsPrefix,n=e.wrap,a=e.children,s=e.activeIndex,r=e.prevIcon,l=e.nextIcon,o=e.prevLabel,c=e.nextLabel,u=C(a);return[(n||0!==s)&&i.a.createElement(E.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},r,o&&i.a.createElement("span",{className:"sr-only"},o)),(n||s!==u-1)&&i.a.createElement(E.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},l,c&&i.a.createElement("span",{className:"sr-only"},c))]},n.renderIndicators=function(e,t){var n=this,a=this.props.bsPrefix,s=[];return function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e,a){s.push(i.a.createElement("li",{key:a,className:a===t?"active":null,onClick:function(e){return n.to(a,e)}})," ")})),i.a.createElement("ol",{className:a+"-indicators"},s)},n.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,s=e.bsPrefix,r=e.slide,l=e.fade,o=e.indicators,d=e.controls,m=e.wrap,v=e.touch,h=e.prevIcon,f=e.prevLabel,x=e.nextIcon,b=e.nextLabel,g=e.className,E=e.children,S=e.keyboard,I=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(u.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),C=this.state,N=C.activeIndex,P=C.previousActiveIndex,q=C.prevClasses,y=C.currentClasses;return i.a.createElement(n,Object(c.a)({onTouchStart:v?this.handleTouchStart:void 0,onTouchEnd:v?this.handleTouchEnd:void 0},I,{className:p()(g,s,r&&"slide",l&&s+"-fade"),onKeyDown:S?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),o&&this.renderIndicators(E,N),i.a.createElement("div",{className:s+"-inner",ref:this.carousel},function(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}(E,(function(e,t){var n=t===N,i=t===P;return Object(a.cloneElement)(e,{className:p()(e.props.className,n&&y,i&&q)})}))),d&&this.renderControls({wrap:m,children:E,activeIndex:N,prevIcon:h,prevLabel:f,nextIcon:x,nextLabel:b}))},t}(i.a.Component);P.defaultProps=N;var q=Object(S.a)(Object(f.a)(P,{activeIndex:"onSelect"}),"carousel");q.Caption=b,q.Item=g;var y=q,w=n("0gRG"),O=n("cWnB");n("m7ts");var L=function(e){var t=e.slides,n=Object(a.useState)(0),s=o()(n,2),r=s[0],l=s[1],c=Object(a.useState)(null),u=o()(c,2),d=u[0],m=u[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{activeIndex:r,direction:d,onSelect:function(e,t){l(e),m(t.direction)},interval:6e3,fade:!0,touch:!0},t.map((function(e){return i.a.createElement(y.Item,null,i.a.createElement(w.a,{name:e.image}),i.a.createElement(y.Caption,{className:"d-flex align-items-center justify-content-start"},i.a.createElement("div",null,i.a.createElement("h1",null,e.headline),i.a.createElement("p",null,e.lede),e.button?i.a.createElement("div",{className:"text-left pt-4"},i.a.createElement(O.a,{variant:"primary",className:"py-2 px-4"},e.button)):null)))}))))};n("WgHl");var D=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"home-slider"},i.a.createElement(L,{slides:[{image:"slide1",headline:i.a.createElement(i.a.Fragment,null,"Anyone Can Cut Costs",i.a.createElement("br",null),"…But WE REDUCE SPEND"),lede:"Find out how we do it!",button:"Get Started"},{image:"slideShipment",headline:"Track Shipments",button:"Track Shipment"},{image:"slide3",headline:"Life of Poor Paul",lede:"Poor Paul Didn't do His Research on Logistics Planning for His Company...",button:"Read More"}]})))};n("xLGK");function T(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Home"},i.a.createElement(D,null),i.a.createElement(r.a,null,i.a.createElement("h1",{className:"pt-4"},"Home Page"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."))))}n.d(t,"default",(function(){return T}))}}]);
//# sourceMappingURL=component---src-pages-index-jsx-68e020128d0921988d22.js.map