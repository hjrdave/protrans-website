(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1Uwi":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),s=n("scLt"),r=n("WXsw"),l=(n("0l/t"),n("wx14")),o=n("zLVn"),c=n("dI71"),u=n("TSYQ"),d=n.n(u),m=n("ANPE"),v=n("CR+v"),p=n("JCAc"),h=n("YdCC"),f=Object(h.a)("carousel-caption",{Component:"div"}),x=Object(h.a)("carousel-item");n("8+KV"),n("bWfx");var b=n("dbZe"),g=n("vUet"),S=n("z+q/"),I=function(e){return a.a.Children.toArray(e).filter(a.a.isValidElement).length},E={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},y=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=a.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<40||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===Object(m.a)(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var n=t.props,i=n.wrap,a=n.activeIndex+1;if(a>I(t.props.children)-1){if(!i)return;a=0}t.select(a,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var n=t.props,i=n.wrap,a=n.activeIndex-1;if(a<0){if(!i)return;a=I(t.props.children)-1}t.select(a,e,"prev")}},t}Object(c.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var n=t.activeIndex;if(e.activeIndex!==n){var i=I(e.children)-1,a=Math.max(0,Math.min(e.activeIndex,i));return{direction:0===a&&n>=i||n<=a?"next":"prev",previousActiveIndex:n,activeIndex:a}}return null},n.componentDidUpdate=function(e,t){var n=this,i=this.props,a=i.bsPrefix,s=i.slide,r=i.onSlideEnd;if(s&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var l,o,c=this.state,u=c.activeIndex,m=c.direction;"next"===m?(l=a+"-item-next",o=a+"-item-left"):"prev"===m&&(l=a+"-item-prev",o=a+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:l},(function(){var e=n.carousel.current.children[u];Object(S.a)(e),n.safeSetState({prevClasses:d()("active",o),currentClasses:d()(l,o)},(function(){return Object(v.a)(e,(function(){n.safeSetState({prevClasses:"",currentClasses:"active"},n.handleSlideEnd),r&&r()}))}))}))}},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.safeSetState=function(e,t){var n=this;this.isUnmounted||this.setState(e,(function(){return!n.isUnmounted&&t()}))},n.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},n.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},n.to=function(e,t){var n=this.props.children;e<0||e>I(n)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},n.select=function(e,t,n){var i=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(i.timeout);var a=i.props,s=a.activeIndex,r=a.onSelect;e===s||i._isSliding||i.isUnmounted||r(e,n||(e<s?"prev":"next"),t)}),50)},n.renderControls=function(e){var t=this.props.bsPrefix,n=e.wrap,i=e.children,s=e.activeIndex,r=e.prevIcon,l=e.nextIcon,o=e.prevLabel,c=e.nextLabel,u=I(i);return[(n||0!==s)&&a.a.createElement(b.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},r,o&&a.a.createElement("span",{className:"sr-only"},o)),(n||s!==u-1)&&a.a.createElement(b.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},l,c&&a.a.createElement("span",{className:"sr-only"},c))]},n.renderIndicators=function(e,t){var n=this,i=this.props.bsPrefix,s=[];return function(e,t){var n=0;a.a.Children.forEach(e,(function(e){a.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e,i){s.push(a.a.createElement("li",{key:i,className:i===t?"active":null,onClick:function(e){return n.to(i,e)}})," ")})),a.a.createElement("ol",{className:i+"-indicators"},s)},n.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,s=e.bsPrefix,r=e.slide,c=e.fade,u=e.indicators,m=e.controls,v=e.wrap,p=e.touch,h=e.prevIcon,f=e.prevLabel,x=e.nextIcon,b=e.nextLabel,g=e.className,S=e.children,I=e.keyboard,E=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(o.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),y=this.state,N=y.activeIndex,q=y.previousActiveIndex,w=y.prevClasses,C=y.currentClasses;return a.a.createElement(n,Object(l.a)({onTouchStart:p?this.handleTouchStart:void 0,onTouchEnd:p?this.handleTouchEnd:void 0},E,{className:d()(g,s,r&&"slide",c&&s+"-fade"),onKeyDown:I?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),u&&this.renderIndicators(S,N),a.a.createElement("div",{className:s+"-inner",ref:this.carousel},function(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}(S,(function(e,t){var n=t===N,a=t===q;return Object(i.cloneElement)(e,{className:d()(e.props.className,n&&C,a&&w)})}))),m&&this.renderControls({wrap:v,children:S,activeIndex:N,prevIcon:h,prevLabel:f,nextIcon:x,nextLabel:b}))},t}(a.a.Component);y.defaultProps=E;var N=Object(g.a)(Object(p.a)(y,{activeIndex:"onSelect"}),"carousel");N.Caption=f,N.Item=x;var q=N,w=n("kriv");n("m7ts");function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,a=!1,s=void 0;try{for(var r,l=e[Symbol.iterator]();!(i=(r=l.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(o){a=!0,s=o}finally{try{i||null==l.return||l.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O=function(e){var t=e.slides,n=C(Object(i.useState)(0),2),s=n[0],r=n[1],l=C(Object(i.useState)(null),2),o=l[0],c=l[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{activeIndex:s,direction:o,onSelect:function(e,t){r(e),c(t.direction)}},t.map((function(e){return a.a.createElement(q.Item,null,a.a.createElement(w.a,{name:e.image}),a.a.createElement(q.Caption,{className:"d-flex align-items-center justify-content-center"},a.a.createElement("div",null,a.a.createElement("h3",null,e.headline),a.a.createElement("p",null,e.lede))))}))))};n("WgHl");var P=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{id:"home-slider"},a.a.createElement(O,{slides:[{image:"slide1",headline:"Slide 1",lede:"Foo Foo Foo"},{image:"slide2",headline:"Slide 2",lede:"Foo Foo Foo"},{image:"slide3",headline:"Slide 3",lede:"Foo Foo Foo"}]})))};t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{title:"Home"},a.a.createElement(P,null),a.a.createElement(r.a,null,a.a.createElement("h1",{className:"pt-4"},"Home Page"),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et tincidunt tortor, eu finibus felis. Praesent lorem leo, tempus vitae libero volutpat, facilisis consectetur lorem. Maecenas a quam lacus. In eros nulla, finibus id dignissim a, bibendum ac lorem. Donec tristique faucibus ligula id malesuada. Fusce dignissim, ex non viverra maximus, metus est scelerisque ex, at molestie tortor dolor ut diam. Aliquam sodales dolor sed nunc maximus egestas."))))}}}]);
//# sourceMappingURL=component---src-pages-home-tsx-15e77533a509267243a1.js.map