(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,s,r){var t={"./af":9,"./af.js":9,"./ar":10,"./ar-dz":11,"./ar-dz.js":11,"./ar-kw":12,"./ar-kw.js":12,"./ar-ly":13,"./ar-ly.js":13,"./ar-ma":14,"./ar-ma.js":14,"./ar-sa":15,"./ar-sa.js":15,"./ar-tn":16,"./ar-tn.js":16,"./ar.js":10,"./az":17,"./az.js":17,"./be":18,"./be.js":18,"./bg":19,"./bg.js":19,"./bm":20,"./bm.js":20,"./bn":21,"./bn.js":21,"./bo":22,"./bo.js":22,"./br":23,"./br.js":23,"./bs":24,"./bs.js":24,"./ca":25,"./ca.js":25,"./cs":26,"./cs.js":26,"./cv":27,"./cv.js":27,"./cy":28,"./cy.js":28,"./da":29,"./da.js":29,"./de":30,"./de-at":31,"./de-at.js":31,"./de-ch":32,"./de-ch.js":32,"./de.js":30,"./dv":33,"./dv.js":33,"./el":34,"./el.js":34,"./en-au":35,"./en-au.js":35,"./en-ca":36,"./en-ca.js":36,"./en-gb":37,"./en-gb.js":37,"./en-ie":38,"./en-ie.js":38,"./en-il":39,"./en-il.js":39,"./en-nz":40,"./en-nz.js":40,"./eo":41,"./eo.js":41,"./es":42,"./es-do":43,"./es-do.js":43,"./es-us":44,"./es-us.js":44,"./es.js":42,"./et":45,"./et.js":45,"./eu":46,"./eu.js":46,"./fa":47,"./fa.js":47,"./fi":48,"./fi.js":48,"./fo":49,"./fo.js":49,"./fr":50,"./fr-ca":51,"./fr-ca.js":51,"./fr-ch":52,"./fr-ch.js":52,"./fr.js":50,"./fy":53,"./fy.js":53,"./gd":54,"./gd.js":54,"./gl":55,"./gl.js":55,"./gom-latn":56,"./gom-latn.js":56,"./gu":57,"./gu.js":57,"./he":58,"./he.js":58,"./hi":59,"./hi.js":59,"./hr":60,"./hr.js":60,"./hu":61,"./hu.js":61,"./hy-am":62,"./hy-am.js":62,"./id":63,"./id.js":63,"./is":64,"./is.js":64,"./it":65,"./it.js":65,"./ja":66,"./ja.js":66,"./jv":67,"./jv.js":67,"./ka":68,"./ka.js":68,"./kk":69,"./kk.js":69,"./km":70,"./km.js":70,"./kn":71,"./kn.js":71,"./ko":72,"./ko.js":72,"./ky":73,"./ky.js":73,"./lb":74,"./lb.js":74,"./lo":75,"./lo.js":75,"./lt":76,"./lt.js":76,"./lv":77,"./lv.js":77,"./me":78,"./me.js":78,"./mi":79,"./mi.js":79,"./mk":80,"./mk.js":80,"./ml":81,"./ml.js":81,"./mn":82,"./mn.js":82,"./mr":83,"./mr.js":83,"./ms":84,"./ms-my":85,"./ms-my.js":85,"./ms.js":84,"./mt":86,"./mt.js":86,"./my":87,"./my.js":87,"./nb":88,"./nb.js":88,"./ne":89,"./ne.js":89,"./nl":90,"./nl-be":91,"./nl-be.js":91,"./nl.js":90,"./nn":92,"./nn.js":92,"./pa-in":93,"./pa-in.js":93,"./pl":94,"./pl.js":94,"./pt":95,"./pt-br":96,"./pt-br.js":96,"./pt.js":95,"./ro":97,"./ro.js":97,"./ru":98,"./ru.js":98,"./sd":99,"./sd.js":99,"./se":100,"./se.js":100,"./si":101,"./si.js":101,"./sk":102,"./sk.js":102,"./sl":103,"./sl.js":103,"./sq":104,"./sq.js":104,"./sr":105,"./sr-cyrl":106,"./sr-cyrl.js":106,"./sr.js":105,"./ss":107,"./ss.js":107,"./sv":108,"./sv.js":108,"./sw":109,"./sw.js":109,"./ta":110,"./ta.js":110,"./te":111,"./te.js":111,"./tet":112,"./tet.js":112,"./tg":113,"./tg.js":113,"./th":114,"./th.js":114,"./tl-ph":115,"./tl-ph.js":115,"./tlh":116,"./tlh.js":116,"./tr":117,"./tr.js":117,"./tzl":118,"./tzl.js":118,"./tzm":119,"./tzm-latn":120,"./tzm-latn.js":120,"./tzm.js":119,"./ug-cn":121,"./ug-cn.js":121,"./uk":122,"./uk.js":122,"./ur":123,"./ur.js":123,"./uz":124,"./uz-latn":125,"./uz-latn.js":125,"./uz.js":124,"./vi":126,"./vi.js":126,"./x-pseudo":127,"./x-pseudo.js":127,"./yo":128,"./yo.js":128,"./zh-cn":129,"./zh-cn.js":129,"./zh-hk":130,"./zh-hk.js":130,"./zh-tw":131,"./zh-tw.js":131};function a(e){var s=n(e);return r(s)}function n(e){var s=t[e];if(!(s+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return s}a.keys=function(){return Object.keys(t)},a.resolve=n,e.exports=a,a.id=146},147:function(e){e.exports={name:"meido-orders",version:"1.0.2",private:!0,engines:{node:"8.9.4"},scripts:{start:"node server",dev:"webpack --watch",devserver:"webpack-dev-server --mode development --open",build:"webpack --mode production",release:"npm run build && git add -A dist && npm version patch -f"},repository:{type:"git",url:"git+https://github.com/bobanko/wix-meido-order-list.git"},devDependencies:{"awesome-typescript-loader":"^5.2.1","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^4.5.2","css-loader":"^1.0.0","extract-text-webpack-plugin":"^4.0.0-beta.0","file-loader":"^2.0.0","html-webpack-plugin":"^3.2.0","node-sass":"^4.9.3",path:"^0.12.7","redux-devtools":"^3.4.1","sass-loader":"^7.1.0","source-map-loader":"^0.2.4","ts-loader":"^5.0.0",typescript:"^3.0.3",webpack:"^4.19.1","webpack-cli":"^3.1.1","webpack-dev-server":"^3.1.7"},dependencies:{"@types/lodash":"^4.14.110","@types/react":"^16.4.13","@types/react-dom":"^16.0.7",express:"^3.1.2",lodash:"^4.17.11",moment:"^2.22.2",npm:"^6.4.1",react:"^16.5.0","react-dom":"^16.5.0","react-redux":"^5.0.7",redux:"^4.0.0","redux-logger":"^3.0.6","redux-thunk":"^2.3.0",request:"^2.88.0"}}},148:function(e,s,r){"use strict";r.r(s);var t=r(1),a=r(132),n=r(4),o=r(3),c=r(136),l=r(137);const d=e=>s=>(s((e=>({type:"REQUEST_ORDERS",params:e}))(e)),fetch(`/orders/${e}`).then(e=>e.json()).then(e=>s((e=>({type:"RECEIVE_ORDERS",workers:e,receivedAt:Date.now()}))(e)),e=>s((e=>({type:"RECEIVE_ERROR",error:e,receivedAt:Date.now()}))(e))));var i=(e={isLoading:!1,workers:[]},s)=>{switch(s.type){case"REQUEST_ORDERS":return Object.assign({},e,{isLoading:!0});case"RECEIVE_ORDERS":return Object.assign({},e,{isLoading:!1,workers:s.workers,error:null,lastUpdated:s.receivedAt});case"RECEIVE_ERROR":return Object.assign({},e,{isLoading:!1,error:s.error,lastUpdated:s.receivedAt});default:return e}},j=r(0);r(149);class m extends t.Component{constructor(e){super(e);const{worker:s}=this.props;this.nameAbbr=this.getAbbr(s.name)}componentDidMount(){this.avatarEl.style.setProperty("--color",this.getAvatarColor(this.nameAbbr))}getAbbr(e){const[,s,r]=e.match(/(\w)\w+[\W](\w)\w+/);return`${s}${r}`.toLowerCase()}getAvatarColor(e){const s=e.charCodeAt(0);e.charCodeAt(1);return`hsl(${(s-97)/25*360},100%,40%)`}render(){const{worker:e}=this.props;return t.createElement("div",{className:"worker fl-row"},t.createElement("div",{className:"av",ref:e=>this.avatarEl=e},this.nameAbbr),t.createElement("div",{className:"fl-col"},t.createElement("div",{className:"worker__title"},t.createElement("div",{className:"worker__name"},e.name)),t.createElement("div",{className:"order"},t.createElement("div",{className:"order__name"},e.order.title))))}}const{version:p}=r(147),u=1e4;var h=Object(o.b)(e=>{const{workers:s,isLoading:r,lastUpdated:t,error:a}=e;return{workers:s,lastUpdated:t,isLoading:r,error:a}},e=>({fetchWorkers:s=>e(d(s))}))(class extends t.Component{componentDidMount(){const e=()=>this.props.fetchWorkers(location.search);e(),setInterval(e,u)}render(){const e=j(this.props.lastUpdated).format("ddd, MMM-D'YY HH:mm:ss"),{error:s}=this.props;return t.createElement("div",{className:"app-info"},t.createElement("div",null,"last update: ",e," "),t.createElement("div",null,"status:",s?t.createElement("span",{style:{color:"red"}},s.message,"💔"):t.createElement("span",{style:{color:"limegreen"}},"online💚")),t.createElement("div",null,"ver. ",p))}});r(151);class b extends t.Component{render(){return t.createElement("div",{className:["progress",this.props.isLoading&&"is-loading"].join(" ")},t.createElement("div",{className:"progress__track"}),t.createElement("div",{className:"progress__indicator"}))}}r(152);var v=Object(o.b)(e=>{const{workers:s,isLoading:r,error:t}=e;return{workers:s,isLoading:r,error:t}})(class extends t.Component{constructor(e){super(e)}render(){const{workers:e,isLoading:s,error:r}=this.props,a=j().format("dddd, MMMM Do, YYYY");return t.createElement("div",null,t.createElement(b,{isLoading:s}),t.createElement(h,null),t.createElement("h1",null,"Orders for ",a),t.createElement("div",{className:"workers"},e.map((e,s)=>t.createElement(m,{key:s,worker:e})),!s&&0===e.length&&t.createElement("h2",null,"No orders")))}});const k=Object(n.c)(i,Object(n.a)(c.a,Object(l.createLogger)()));a.render(t.createElement(o.a,{store:k},t.createElement(v,null)),document.getElementById("root"))},149:function(e,s){},151:function(e,s){},152:function(e,s){}},[[148,2,1]]]);
//# sourceMappingURL=main.c4e71c771e2f0a7e2d4c.js.map