(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),s=n(2),c=n(3),l=n(5),r=n(4),m=n(1),o=n.n(m),u=(n(12),n(13),n(0)),d=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={currentIndex:0},e.handleClick=function(t){var n=e.props,a=n.images,i=n.frameSize,s=e.state.currentIndex,c=a.length-i,l=s+t;t>0&&(s===c?l=0:l>c&&(l=c)),t<0&&(0===s?l=c:l<0&&(l=0)),e.setState({currentIndex:l})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.images,a=t.step,i=t.frameSize,s=t.itemWidth,c=t.animationDuration,l=t.infinite,r=this.state.currentIndex;return Object(u.jsxs)("div",{className:"Carousel",style:{width:"".concat(i*s,"px"),animation:"".concat(c,"ms")},children:[Object(u.jsx)("ul",{className:"Carousel__list",children:n.map((function(e,t){return Object(u.jsx)("li",{className:"Carousel__item",style:{transform:"translateX(".concat(-r*s,"px)"),transition:"".concat(c,"ms")},children:Object(u.jsx)("img",{src:e,alt:"".concat(t),style:{width:"".concat(s,"px")}})},e)}))}),Object(u.jsx)("button",{className:"button",type:"button",disabled:r<=0&&!l,onClick:function(){e.handleClick(-a)},children:"Prev"}),Object(u.jsx)("button",{className:"button",type:"button","data-cy":"next",disabled:r>=n.length-i&&!l,onClick:function(){e.handleClick(a)},children:"Next"})]})}}]),n}(o.a.Component),h=d,p=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.images,a=t.step,i=t.frameSize,s=t.itemWidth,c=t.animationDuration,l=t.infinite;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(u.jsx)(h,{images:n,step:a,frameSize:i,itemWidth:s,animationDuration:c,infinite:l}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{htmlFor:"step",className:"field__label",children:[Object(u.jsx)("span",{className:"field__name",children:"Step:"}),Object(u.jsx)("input",{id:"step",type:"text",className:"field__input",value:a,min:1,max:n.length,onChange:function(t){e.setState({step:+t.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"frame-size",className:"field__label",children:[Object(u.jsx)("span",{className:"field__name",children:"Frame size: "}),Object(u.jsx)("input",{id:"frame-size",type:"number",className:"field__input",value:i,min:1,max:n.length,onChange:function(t){e.setState({frameSize:+t.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"item-width",className:"field__label",children:[Object(u.jsx)("span",{className:"field__name",children:"Item Width:"}),Object(u.jsx)("input",{id:"item-width",type:"number",className:"field__input",value:s,min:130,max:390,onChange:function(t){e.setState({itemWidth:+t.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"animation",className:"field__label",children:[Object(u.jsx)("span",{className:"field__name",children:"Animation:"}),Object(u.jsx)("input",{id:"animation",type:"number",className:"field__input",value:c,min:500,max:5e3,onChange:function(t){e.setState({animationDuration:+t.target.value})}})]}),Object(u.jsxs)("label",{htmlFor:"infinite",className:"field__label",children:[Object(u.jsx)("span",{className:"field__name",children:"Infinite:"}),Object(u.jsx)("input",{id:"infinite",type:"checkbox",className:"field__input",onChange:function(t){e.setState({infinite:t.target.checked})}})]})]})]})}}]),n}(o.a.Component),j=p;i.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3469968f.chunk.js.map