(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"6xyR":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),s=t("q1tI"),i=t.n(s),o=t("vUet"),m=t("YdCC"),d=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(n.a)({},a,{ref:t,className:l()(a.className,e)}))}))},u=t("Wzyw"),b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.variant,m=e.as,d=void 0===m?"img":m,u=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.b)(t,"card-img");return i.a.createElement(d,Object(n.a)({ref:a,className:l()(s?b+"-"+s:b,c)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var g=b,f=d("h5"),v=d("h6"),p=Object(m.a)("card-body"),E=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,m=e.bg,d=e.text,b=e.border,g=e.body,f=e.children,v=e.as,E=void 0===v?"div":v,y=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),N=Object(o.b)(t,"card"),w=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return i.a.createElement(u.a.Provider,{value:w},i.a.createElement(E,Object(n.a)({ref:a},y,{className:l()(c,N,m&&"bg-"+m,d&&"text-"+d,b&&"border-"+b)}),g?i.a.createElement(p,null,f):f))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=g,E.Title=Object(m.a)("card-title",{Component:f}),E.Subtitle=Object(m.a)("card-subtitle",{Component:v}),E.Body=p,E.Link=Object(m.a)("card-link",{Component:"a"}),E.Text=Object(m.a)("card-text",{Component:"p"}),E.Header=Object(m.a)("card-header"),E.Footer=Object(m.a)("card-footer"),E.ImgOverlay=Object(m.a)("card-img-overlay");a.a=E},WdXO:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("Wbzz"),l=t("sjrs"),s=t("zBe7"),i=t("zJgK"),o=t.n(i),m=t("CFxV"),d=t("6xyR"),u=t("9eSz"),b=t.n(u);t("Zmaj");var g=function(e){var a=e.post,t=a.frontmatter,n=t.path,l=t.date,s=t.title,i=t.featuredImage,o=a.excerpt;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-4 post-card-container"},r.a.createElement(c.Link,{to:n},r.a.createElement(d.a,{className:"mt-3 post-card"},r.a.createElement(b.a,{fluid:i.childImageSharp.fluid}),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Subtitle,{className:"mb-2 text-muted"},r.a.createElement("small",null,l)),r.a.createElement(d.a.Title,null,s),r.a.createElement(d.a.Text,null,o))))))};t("toZ0");function f(e){var a=e.data.allMarkdownRemark.edges,t=e.location,i=new URLSearchParams(t.search).get("category")||!0;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"Logistics News",activePath:t,className:"logistics-news"},r.a.createElement(m.a,{type:"full"},r.a.createElement("h1",null,"Logistic News and Trends"),r.a.createElement("h3",{className:"pt-4"},!0===i?"Recent Posts":"Category: ".concat(i)),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"row pr-4"},a.filter((function(e){return!!e.node.frontmatter.date})).map((function(e){return!0!==i?i===e.node.frontmatter.category.toString()?r.a.createElement(n.Fragment,{key:o()()},r.a.createElement(g,{key:e.node.id,post:e.node})):null:!0===i?r.a.createElement(n.Fragment,{key:o()()},r.a.createElement(g,{key:e.node.id,post:e.node})):void 0}))),r.a.createElement("div",{className:"logistics-news-menu"},r.a.createElement(l.a,{as:"ul",variant:"flush"},r.a.createElement("h4",{className:"pl-3"},"Categories"),r.a.createElement(l.a.Item,{as:"li",className:"pt-1 ".concat(!0===i?"logistics-news-menu-active":"")},r.a.createElement(c.Link,{to:"/logistics-news"},"Recent")),r.a.createElement(l.a.Item,{as:"li",className:"pt-1 ".concat("Lean Management"===i?"logistics-news-menu-active":"")},r.a.createElement(c.Link,{to:"/logistics-news?category=Lean%20Management"},"Lean Management",r.a.createElement("br",null),"& Six Sigma")),r.a.createElement(l.a.Item,{as:"li",className:"pt-1 ".concat("Trucking"===i?"logistics-news-menu-active":"")},r.a.createElement(c.Link,{to:"/logistics-news?category=Trucking"},"Trucking")),r.a.createElement(l.a.Item,{as:"li",className:"pt-1 ".concat("Logistics Technology"===i?"logistics-news-menu-active":"")},r.a.createElement(c.Link,{to:"/logistics-news?category=Logistics%20Technology"},"Logistics Technology")),r.a.createElement(l.a.Item,{as:"li",className:"pt-1 ".concat("Regulation"===i?"logistics-news-menu-active":"")},r.a.createElement(c.Link,{to:"/logistics-news?category=Regulation"},"Regulation")),r.a.createElement(l.a.Item,{as:"li",className:"pt-1 ".concat("Sustainability"===i?"logistics-news-menu-active":"")},r.a.createElement(c.Link,{to:"/logistics-news?category=Sustainability"},"Sustainability"))))))))}t.d(a,"default",(function(){return f})),t.d(a,"pageQuery",(function(){return v}));var v="1550189916"},sjrs:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),s=t("q1tI"),i=t.n(s),o=(t("2W6z"),t("JCAc")),m=t("vUet"),d=t("rQNl"),u=t("VWqr"),b=t("ILyh"),g=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.active,o=e.disabled,d=e.className,g=e.variant,f=e.action,v=e.as,p=e.eventKey,E=e.onClick,y=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(m.b)(t,"list-group-item");var N=Object(s.useCallback)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();E&&E(e)}),[o,E]);return i.a.createElement(u.a,Object(n.a)({ref:a},y,{eventKey:Object(b.b)(p,y.href),as:v||(f?y.href?"a":"button":"div"),onClick:N,className:l()(d,t,c&&"active",o&&"disabled",g&&t+"-"+g,f&&t+"-action")}))}));g.defaultProps={variant:null,active:!1,disabled:!1},g.displayName="ListGroupItem";var f=g,v=i.a.forwardRef((function(e,a){var t,c=Object(o.b)(e,{activeKey:"onSelect"}),s=c.className,u=c.bsPrefix,b=c.variant,g=c.horizontal,f=c.as,v=void 0===f?"div":f,p=Object(r.a)(c,["className","bsPrefix","variant","horizontal","as"]);return u=Object(m.b)(u,"list-group"),t=g?!0===g?"horizontal":"horizontal-"+g:null,i.a.createElement(d.a,Object(n.a)({ref:a},p,{as:v,className:l()(s,u,b&&u+"-"+b,t&&u+"-"+t)}))}));v.defaultProps={variant:null,horizontal:null},v.displayName="ListGroup",v.Item=f;a.a=v}}]);
//# sourceMappingURL=component---src-pages-logistics-news-index-jsx-cc82b9d4d39250706442.js.map