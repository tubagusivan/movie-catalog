(this["webpackJsonpsweet-movie-app"]=this["webpackJsonpsweet-movie-app"]||[]).push([[0],{240:function(e,t,r){e.exports=r(471)},245:function(e,t,r){},471:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"keys",(function(){return C})),r.d(n,"getTopMovies",(function(){return L})),r.d(n,"searchMovies",(function(){return R})),r.d(n,"getMovieDetails",(function(){return V}));var o=r(1),c=r.n(o),a=r(12),i=r.n(a),u=(r(245),r(39)),s=r(40),l=r(45),p=r(41),O=r(46),v=r(19),f=r(100),b=r(44),d=r(56),m=r(29);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1?arguments[1]:void 0,o=t[n.type];return o?o(r,n):r}},y=function(e,t){return h({type:e},t)},E=function(e,t,r){return function(n){return n(y("".concat(e,"_START"),{request:r})),t(r).then((function(t){t.json().then((function(t){return n(y("".concat(e,"_SUCCESS"),{response:t}))})).catch((function(t){return n(y("".concat(e,"_ERROR"),{error:t}))}))}))}},w={isLoading:!1,response:void 0,request:void 0},S=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w,o=function(e,t){return h({},e,{isLoading:!0,request:t.request})},c=r["".concat(e,"_SUCCESS")],a=c||function(e,t){return h({},e,{isLoading:!1,response:t.response})},i=function(e,t){return h({},e,{isLoading:!1,error:t.error})};return j(n,(t={},Object(v.a)(t,"".concat(e,"_START"),o),Object(v.a)(t,"".concat(e,"_SUCCESS"),a),Object(v.a)(t,"".concat(e,"_ERROR"),i),t))},M=r(57),P=r.n(M),_=r(102),I=function(e,t){var r="".concat("https://api.themoviedb.org/3").concat(e,"?api_key=").concat("189a6e753c0e03ec5053c7acf8bfd8f0","&language=en-US");return t&&Object.keys(t).forEach((function(e){return r+="&".concat(e,"=").concat(t[e])})),r},D=function(){var e=Object(_.a)(P.a.mark((function e(t){var r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.page,n=I("/movie/top_rated",{page:r}),e.abrupt("return",fetch(n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(_.a)(P.a.mark((function e(t){var r,n,o;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.page,n=t.query,o=I("/search/movie",{page:r,query:n}),e.abrupt("return",fetch(o));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(_.a)(P.a.mark((function e(t){var r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.movieId,n=I("/movie/".concat(r)),e.abrupt("return",fetch(n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C={GET_TOP_MOVIES:"GET_TOP_MOVIES",SEARCH_MOVIES:"SEARCH_MOVIES",GET_MOVIE_DETAILS:"GET_MOVIE_DETAILS"},L=function(e){return E(C.GET_TOP_MOVIES,D,{page:e})},R=function(e,t){return E(C.SEARCH_MOVIES,k,{query:e,page:t})},V=function(e){return E(C.GET_MOVIE_DETAILS,T,{movieId:e})},A=r(81);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;return"https://image.tmdb.org/t/p/w".concat(e)},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return e?G({},e,{backdrop_path:"".concat(H(t)).concat(e.backdrop_path),poster_path:"".concat(H(t)).concat(e.poster_path)}):{}},x="OPEN_MOVIE_MODAL",U="CLOSE_MOVIE_MODAL",W={cardTitle:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},cardMedia:{maxHeight:394,overflow:"hidden"},card:{cursor:"pointer",height:400,overflow:"hidden"},bgImage:{width:"100%"}},z=function(e){function t(e){var r;return Object(u.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={isMouseOver:!1},r}return Object(O.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.movie,n=t.openMovieModal,o=this.state.isMouseOver?r.overview:null;return c.a.createElement(m.b,{style:W.card,onMouseOver:function(){return e.setState({isMouseOver:!0})},onMouseLeave:function(){return e.setState({isMouseOver:!1})},onClick:function(){return n(r.id)}},c.a.createElement(m.c,{style:W.cardMedia,overlay:c.a.createElement(m.d,{title:r.title,subtitle:o})},c.a.createElement("img",{style:W.bgImage,src:r.poster_path,alt:"test1"})))}}]),t}(c.a.Component),J=Object(b.b)((function(){return{}}),{openMovieModal:function(e){return{type:x,movieId:e}}})(z),$={refreshStyle:{position:"relative",display:"block",margin:"0 auto"}},N=function(e){var t=e.isLoading,r=e.children;return t?c.a.createElement(m.f,{style:$.refreshStyle,top:0,left:0,size:80,status:"loading"}):r||null},Y={movieColumn:{marginBottom:20}},F=function(e){var t=e.movies,r=e.isLoading,n=t?t.map((function(e){return c.a.createElement(d.a,{style:Y.movieColumn,key:e.id,xs:12,sm:4,md:3,lg:3},c.a.createElement(J,{movie:e}))})):null;return c.a.createElement(d.c,null,n,c.a.createElement(N,{isLoading:r}))},K=r(82),Q=r.n(K),X=function(e){return{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundSize:"100%",height:"100%",minHeight:400,color:"white",padding:10}},Z=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.movieId&&this.props.movieId!==e.movieId&&e.getMovieDetails(e.movieId)}},{key:"render",value:function(){var e=this.props,t=e.isOpen,r=e.closeMovieModal,n=e.isLoading,o=q(this.props.movie),a=o&&o.genres?o.genres.map((function(e){return e.name})).join(", "):"";return c.a.createElement(m.e,{autoScrollBodyContent:!0,title:null,modal:!1,open:t,onRequestClose:r},c.a.createElement(N,{isLoading:n},c.a.createElement("div",{style:X(o.backdrop_path)},c.a.createElement("h1",null,o.title),c.a.createElement("h5",null,a),c.a.createElement("p",null,o.overview),c.a.createElement("p",null,"Popularity: ",o.popularity),c.a.createElement("p",null,"Budget: $",o.budget))))}}]),t}(c.a.Component),ee=Object(b.b)((function(e){return{isOpen:Q.a.get(e,"movieBrowser.movieModal.isOpen",!1),movieId:Q.a.get(e,"movieBrowser.movieModal.movieId"),movie:Q.a.get(e,"movieBrowser.movieDetails.response",{}),isLoading:Q.a.get(e,"movieBrowser.movieDetails.isLoading",!1)}}),{closeMovieModal:function(){return{type:U}},getMovieDetails:V})(Z);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var re=function(e){function t(e){var r;return Object(u.a)(this,t),(r=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={currentPage:1,currentMovies:[]},r.handleScroll=r.handleScroll.bind(Object(f.a)(r)),r}return Object(O.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.onscroll=this.handleScroll,this.props.getTopMovies(this.state.currentPage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){if(!this.props.topMovies.isLoading&&function(e){var t=e.document.documentElement.scrollHeight,r=e.document.documentElement.clientHeight;return(e.pageYOffset+r)/t}(window)>.8){var e=this.state.currentPage+1;this.props.getTopMovies(e),this.setState({currentPage:e})}}},{key:"render",value:function(){var e,t=this.props.topMovies,r=(e=t.response)?Object(A.a)(e.results.map((function(e){return q(e)}))):null;return c.a.createElement("div",null,c.a.createElement(m.a,{title:"Movie Browser"}),c.a.createElement(d.b,null,c.a.createElement(d.c,null,c.a.createElement("p",null,"Search will go here")),c.a.createElement(d.c,null,c.a.createElement(F,{movies:r,isLoading:t.isLoading}))),c.a.createElement(ee,null))}}]),t}(c.a.Component),ne=Object(b.b)((function(e){return{topMovies:e.movieBrowser.topMovies}}),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n))(re),oe=r(99),ce=r.n(oe),ae=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(ce.a,null,c.a.createElement(ne,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie,ue=r(34),se=r(238),le=r(239);function pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Oe=j({isOpen:!1,movieId:void 0},(ie={},Object(v.a)(ie,x,(function(e,t){return{isOpen:!0,movieId:t.movieId}})),Object(v.a)(ie,U,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?pe(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):pe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{isOpen:!1})})),ie));function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(r,!0).forEach((function(t){Object(v.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var be=function(e,t){var r=e.response?e.response.results:[];return fe({},e,{isLoading:!1,response:fe({},t.response,{results:[].concat(Object(A.a)(r),Object(A.a)(t.response.results))})})},de=Object(ue.c)({movieModal:Oe,topMovies:S(C.GET_TOP_MOVIES,Object(v.a)({},"".concat(C.GET_TOP_MOVIES,"_SUCCESS"),be)),movieSearch:S(C.SEARCH_MOVIES,Object(v.a)({},"".concat(C.SEARCH_MOVIES,"_SUCCESS"),be)),movieDetails:S(C.GET_MOVIE_DETAILS)}),me=Object(ue.c)({movieBrowser:de}),ge=Object(le.createLogger)(),he=Object(ue.e)(me,void 0,Object(ue.d)(Object(ue.a)(se.a,ge)));i.a.render(c.a.createElement(b.a,{store:he},c.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[240,1,2]]]);
//# sourceMappingURL=main.b5cb5831.chunk.js.map