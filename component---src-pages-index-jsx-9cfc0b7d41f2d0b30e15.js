(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6xyR":function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),s=a("TSYQ"),r=a.n(s),l=a("q1tI"),c=a.n(l),o=a("vUet"),u=a("YdCC"),d=a("U1MP"),m=a("Wzyw"),v=c.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,l=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(i.a)(e,["bsPrefix","className","variant","as"]),v=Object(o.b)(a,"card-img");return c.a.createElement(d,Object(n.a)({ref:t,className:r()(l?v+"-"+l:v,s)},m))}));v.displayName="CardImg",v.defaultProps={variant:null};var p=v,f=Object(d.a)("h5"),h=Object(d.a)("h6"),b=Object(u.a)("card-body"),x=c.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,u=e.bg,d=e.text,v=e.border,p=e.body,f=e.children,h=e.as,x=void 0===h?"div":h,g=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(o.b)(a,"card"),I=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return c.a.createElement(m.a.Provider,{value:I},c.a.createElement(x,Object(n.a)({ref:t},g,{className:r()(s,E,u&&"bg-"+u,d&&"text-"+d,v&&"border-"+v)}),p?c.a.createElement(b,null,f):f))}));x.displayName="Card",x.defaultProps={body:!1},x.Img=p,x.Title=Object(u.a)("card-title",{Component:f}),x.Subtitle=Object(u.a)("card-subtitle",{Component:h}),x.Body=b,x.Link=Object(u.a)("card-link",{Component:"a"}),x.Text=Object(u.a)("card-text",{Component:"p"}),x.Header=Object(u.a)("card-header"),x.Footer=Object(u.a)("card-footer"),x.ImgOverlay=Object(u.a)("card-img-overlay");t.a=x},Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),s=a("zBe7"),r=a("CFxV"),l=a("J4zp"),c=a.n(l),o=(a("0l/t"),a("wx14")),u=a("zLVn"),d=a("dI71"),m=a("TSYQ"),v=a.n(m),p=a("ANPE"),f=a("CR+v"),h=a("JCAc"),b=a("YdCC"),x=Object(b.a)("carousel-caption",{Component:"div"}),g=Object(b.a)("carousel-item");a("8+KV"),a("bWfx");var E=a("dbZe"),I=a("vUet"),N=a("z+q/"),S=function(e){return i.a.Children.toArray(e).filter(i.a.isValidElement).length},y={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},O=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=i.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<40||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===Object(p.a)(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var a=t.props,n=a.wrap,i=a.activeIndex+1;if(i>S(t.props.children)-1){if(!n)return;i=0}t.select(i,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var a=t.props,n=a.wrap,i=a.activeIndex-1;if(i<0){if(!n)return;i=S(t.props.children)-1}t.select(i,e,"prev")}},t}Object(d.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var a=t.activeIndex;if(e.activeIndex!==a){var n=S(e.children)-1,i=Math.max(0,Math.min(e.activeIndex,n));return{direction:0===i&&a>=n||a<=i?"next":"prev",previousActiveIndex:a,activeIndex:i}}return null},a.componentDidUpdate=function(e,t){var a=this,n=this.props,i=n.bsPrefix,s=n.slide,r=n.onSlideEnd;if(s&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var l,c,o=this.state,u=o.activeIndex,d=o.direction;"next"===d?(l=i+"-item-next",c=i+"-item-left"):"prev"===d&&(l=i+"-item-prev",c=i+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:l},(function(){var e=a.carousel.current.children[u];Object(N.a)(e),a.safeSetState({prevClasses:v()("active",c),currentClasses:v()(l,c)},(function(){return Object(f.a)(e,(function(){a.safeSetState({prevClasses:"",currentClasses:"active"},a.handleSlideEnd),r&&r()}))}))}))}},a.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},a.safeSetState=function(e,t){var a=this;this.isUnmounted||this.setState(e,(function(){return!a.isUnmounted&&t()}))},a.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},a.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},a.to=function(e,t){var a=this.props.children;e<0||e>S(a)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},a.select=function(e,t,a){var n=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(n.timeout);var i=n.props,s=i.activeIndex,r=i.onSelect;e===s||n._isSliding||n.isUnmounted||r(e,a||(e<s?"prev":"next"),t)}),50)},a.renderControls=function(e){var t=this.props.bsPrefix,a=e.wrap,n=e.children,s=e.activeIndex,r=e.prevIcon,l=e.nextIcon,c=e.prevLabel,o=e.nextLabel,u=S(n);return[(a||0!==s)&&i.a.createElement(E.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},r,c&&i.a.createElement("span",{className:"sr-only"},c)),(a||s!==u-1)&&i.a.createElement(E.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},l,o&&i.a.createElement("span",{className:"sr-only"},o))]},a.renderIndicators=function(e,t){var a=this,n=this.props.bsPrefix,s=[];return function(e,t){var a=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,a++)}))}(e,(function(e,n){s.push(i.a.createElement("li",{key:n,className:n===t?"active":null,onClick:function(e){return a.to(n,e)}})," ")})),i.a.createElement("ol",{className:n+"-indicators"},s)},a.render=function(){var e=this.props,t=e.as,a=void 0===t?"div":t,s=e.bsPrefix,r=e.slide,l=e.fade,c=e.indicators,d=e.controls,m=e.wrap,p=e.touch,f=e.prevIcon,h=e.prevLabel,b=e.nextIcon,x=e.nextLabel,g=e.className,E=e.children,I=e.keyboard,N=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(u.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),S=this.state,y=S.activeIndex,O=S.previousActiveIndex,C=S.prevClasses,j=S.currentClasses;return i.a.createElement(a,Object(o.a)({onTouchStart:p?this.handleTouchStart:void 0,onTouchEnd:p?this.handleTouchEnd:void 0},N,{className:v()(g,s,r&&"slide",l&&s+"-fade"),onKeyDown:I?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),c&&this.renderIndicators(E,y),i.a.createElement("div",{className:s+"-inner",ref:this.carousel},function(e,t){var a=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,a++):e}))}(E,(function(e,t){var a=t===y,i=t===O;return Object(n.cloneElement)(e,{className:v()(e.props.className,a&&j,i&&C)})}))),d&&this.renderControls({wrap:m,children:E,activeIndex:y,prevIcon:f,prevLabel:h,nextIcon:b,nextLabel:x}))},t}(i.a.Component);O.defaultProps=y;var C=Object(I.a)(Object(h.a)(O,{activeIndex:"onSelect"}),"carousel");C.Caption=x,C.Item=g;var j=C,P=a("0gRG"),w=a("cWnB"),q=(a("m7ts"),a("zJgK")),T=a.n(q);var L=function(e){var t=e.slides,a=Object(n.useState)(0),s=c()(a,2),r=s[0],l=s[1],o=Object(n.useState)(null),u=c()(o,2),d=u[0],m=u[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(j,{activeIndex:r,direction:d,onSelect:function(e,t){l(e),m(t.direction)},interval:6e3,fade:!0,touch:!0},t.map((function(e){return i.a.createElement(j.Item,{key:T()()},i.a.createElement(P.a,{name:e.image}),i.a.createElement(j.Caption,{className:"d-flex align-items-center justify-content-center justify-content-lg-start"},i.a.createElement("div",null,i.a.createElement("h1",null,e.headline),i.a.createElement("p",null,e.lede),e.button?i.a.createElement("div",{className:"text-center text-lg-left pt-4"},i.a.createElement(w.a,{variant:"primary",className:"py-2 px-4"},e.button)):null)))}))))};a("WgHl");var k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"home-slider"},i.a.createElement(L,{slides:[{image:"slide1",headline:i.a.createElement(i.a.Fragment,null,"Anyone Can Cut Costs",i.a.createElement("br",null),"…But WE REDUCE SPEND"),lede:"Find out how we do it!",button:"Get Started"}]})))},M=a("6xyR");a("iNI7");function _(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Home"},i.a.createElement(k,null),i.a.createElement(r.a,null,i.a.createElement("div",{className:"homepage-floating-card"},i.a.createElement(M.a,{body:!0},i.a.createElement("div",{className:"row d-flex justify-content-center "},i.a.createElement("div",{className:"col-10 p-4 d-md-flex justify-content-md-between"},i.a.createElement("div",{className:"text-center p-4 p-md-0"},i.a.createElement("i",{className:"fas fa-truck-loading"}),i.a.createElement("p",{className:"pt-2"},"Foo Trucking")),i.a.createElement("div",{className:"text-center p-4 p-md-0"},i.a.createElement("i",{className:"fas fa-box-check"}),i.a.createElement("p",{className:"pt-2"},"Foo Shipping")),i.a.createElement("div",{className:"text-center p-4 p-md-0"},i.a.createElement("i",{className:"fas fa-phone-laptop"}),i.a.createElement("p",{className:"pt-2"},"Foo Technology")))))),i.a.createElement("h1",{className:"pt-4"},"Home Page"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."))))}a.d(t,"default",(function(){return _}))},U1MP:function(e,t,a){"use strict";var n=a("wx14"),i=a("q1tI"),s=a.n(i),r=a("TSYQ"),l=a.n(r);t.a=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(n.a)({},t,{ref:a,className:l()(t.className,e)}))}))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-9cfc0b7d41f2d0b30e15.js.map