(this.webpackJsonpnomad_movie_app=this.webpackJsonpnomad_movie_app||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),o=a.n(i),c=a(7),s=a(1),l=(a(37),function(){return r.a.createElement("nav",{className:"nav"},r.a.createElement(c.b,{className:"nav__link",to:"/"},"Main"),r.a.createElement(c.b,{className:"nav__link",to:"/about"},"About"))}),m=a(17),u=a.n(m),v=a(30),p=a(10),d=a(11),E=a(13),f=a(12),h=a(31),y=a.n(h);a(61);var _=function(e){var t=e.title,a=e.year,n=e.rating,i=e.summary,o=e.poster;return r.a.createElement(c.b,{className:"movie",to:{pathname:"/detail",state:{title:t,year:a,rating:n,summary:i,poster:o}}},r.a.createElement("img",{src:o,alt:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("div",{className:"movie__title"},t),r.a.createElement("div",{className:"movie__year"},a,", ",n,"/10"),r.a.createElement("p",{className:"movie__summary"},i)))},b=(a(62),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e.renderMovie=function(){return e.state.movies.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,title:e.title,year:e.year,rating:e.rating,summary:e.summary,poster:e.medium_cover_image})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state.isLoading;return r.a.createElement("div",{className:"container"},e?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},this.renderMovie()))}}]),a}(r.a.Component)),g=function(e){return r.a.createElement("h1",null,"This is About Page.")},N=function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location.state;if(!e)return null;var t=e.title,a=e.year,n=e.rating,i=e.summary,o=e.poster;return r.a.createElement("section",null,r.a.createElement("h1",null,t),r.a.createElement("div",null,a),r.a.createElement("div",null,n),r.a.createElement("p",null,i),r.a.createElement("img",{src:o,alt:t}))}}]),a}(r.a.Component),j=(a(63),function(){return r.a.createElement(c.a,null,r.a.createElement(l,null),r.a.createElement(s.a,{path:"/",exact:!0,component:b}),r.a.createElement(s.a,{path:"/about",component:g}),r.a.createElement(s.a,{path:"/detail",component:N}))});o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.657aa8c7.chunk.js.map