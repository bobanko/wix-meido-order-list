(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,s,t){var r={"./af":3,"./af.js":3,"./ar":4,"./ar-dz":5,"./ar-dz.js":5,"./ar-kw":6,"./ar-kw.js":6,"./ar-ly":7,"./ar-ly.js":7,"./ar-ma":8,"./ar-ma.js":8,"./ar-sa":9,"./ar-sa.js":9,"./ar-tn":10,"./ar-tn.js":10,"./ar.js":4,"./az":11,"./az.js":11,"./be":12,"./be.js":12,"./bg":13,"./bg.js":13,"./bm":14,"./bm.js":14,"./bn":15,"./bn.js":15,"./bo":16,"./bo.js":16,"./br":17,"./br.js":17,"./bs":18,"./bs.js":18,"./ca":19,"./ca.js":19,"./cs":20,"./cs.js":20,"./cv":21,"./cv.js":21,"./cy":22,"./cy.js":22,"./da":23,"./da.js":23,"./de":24,"./de-at":25,"./de-at.js":25,"./de-ch":26,"./de-ch.js":26,"./de.js":24,"./dv":27,"./dv.js":27,"./el":28,"./el.js":28,"./en-au":29,"./en-au.js":29,"./en-ca":30,"./en-ca.js":30,"./en-gb":31,"./en-gb.js":31,"./en-ie":32,"./en-ie.js":32,"./en-il":33,"./en-il.js":33,"./en-nz":34,"./en-nz.js":34,"./eo":35,"./eo.js":35,"./es":36,"./es-do":37,"./es-do.js":37,"./es-us":38,"./es-us.js":38,"./es.js":36,"./et":39,"./et.js":39,"./eu":40,"./eu.js":40,"./fa":41,"./fa.js":41,"./fi":42,"./fi.js":42,"./fo":43,"./fo.js":43,"./fr":44,"./fr-ca":45,"./fr-ca.js":45,"./fr-ch":46,"./fr-ch.js":46,"./fr.js":44,"./fy":47,"./fy.js":47,"./gd":48,"./gd.js":48,"./gl":49,"./gl.js":49,"./gom-latn":50,"./gom-latn.js":50,"./gu":51,"./gu.js":51,"./he":52,"./he.js":52,"./hi":53,"./hi.js":53,"./hr":54,"./hr.js":54,"./hu":55,"./hu.js":55,"./hy-am":56,"./hy-am.js":56,"./id":57,"./id.js":57,"./is":58,"./is.js":58,"./it":59,"./it.js":59,"./ja":60,"./ja.js":60,"./jv":61,"./jv.js":61,"./ka":62,"./ka.js":62,"./kk":63,"./kk.js":63,"./km":64,"./km.js":64,"./kn":65,"./kn.js":65,"./ko":66,"./ko.js":66,"./ky":67,"./ky.js":67,"./lb":68,"./lb.js":68,"./lo":69,"./lo.js":69,"./lt":70,"./lt.js":70,"./lv":71,"./lv.js":71,"./me":72,"./me.js":72,"./mi":73,"./mi.js":73,"./mk":74,"./mk.js":74,"./ml":75,"./ml.js":75,"./mn":76,"./mn.js":76,"./mr":77,"./mr.js":77,"./ms":78,"./ms-my":79,"./ms-my.js":79,"./ms.js":78,"./mt":80,"./mt.js":80,"./my":81,"./my.js":81,"./nb":82,"./nb.js":82,"./ne":83,"./ne.js":83,"./nl":84,"./nl-be":85,"./nl-be.js":85,"./nl.js":84,"./nn":86,"./nn.js":86,"./pa-in":87,"./pa-in.js":87,"./pl":88,"./pl.js":88,"./pt":89,"./pt-br":90,"./pt-br.js":90,"./pt.js":89,"./ro":91,"./ro.js":91,"./ru":92,"./ru.js":92,"./sd":93,"./sd.js":93,"./se":94,"./se.js":94,"./si":95,"./si.js":95,"./sk":96,"./sk.js":96,"./sl":97,"./sl.js":97,"./sq":98,"./sq.js":98,"./sr":99,"./sr-cyrl":100,"./sr-cyrl.js":100,"./sr.js":99,"./ss":101,"./ss.js":101,"./sv":102,"./sv.js":102,"./sw":103,"./sw.js":103,"./ta":104,"./ta.js":104,"./te":105,"./te.js":105,"./tet":106,"./tet.js":106,"./tg":107,"./tg.js":107,"./th":108,"./th.js":108,"./tl-ph":109,"./tl-ph.js":109,"./tlh":110,"./tlh.js":110,"./tr":111,"./tr.js":111,"./tzl":112,"./tzl.js":112,"./tzm":113,"./tzm-latn":114,"./tzm-latn.js":114,"./tzm.js":113,"./ug-cn":115,"./ug-cn.js":115,"./uk":116,"./uk.js":116,"./ur":117,"./ur.js":117,"./uz":118,"./uz-latn":119,"./uz-latn.js":119,"./uz.js":118,"./vi":120,"./vi.js":120,"./x-pseudo":121,"./x-pseudo.js":121,"./yo":122,"./yo.js":122,"./zh-cn":123,"./zh-cn.js":123,"./zh-hk":124,"./zh-hk.js":124,"./zh-tw":125,"./zh-tw.js":125};function a(e){var s=n(e);return t(s)}function n(e){var s=r[e];if(!(s+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s}a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=132},133:function(e){e.exports={name:"meido-orders",version:"1.0.1",private:!0,engines:{node:"8.9.4"},scripts:{start:"node server",dev:"webpack-dev-server --mode development --open",build:"webpack --mode production",release:"npm run build && git add -A dist && npm version patch"},repository:{type:"git",url:"git+https://github.com/bobanko/wix-meido-order-list.git"},devDependencies:{"awesome-typescript-loader":"^5.2.1","clean-webpack-plugin":"^0.1.19","copy-webpack-plugin":"^4.5.2","css-loader":"^1.0.0","extract-text-webpack-plugin":"^4.0.0-beta.0","file-loader":"^2.0.0","html-webpack-plugin":"^3.2.0","node-sass":"^4.9.3",path:"^0.12.7","sass-loader":"^7.1.0","source-map-loader":"^0.2.4","ts-loader":"^5.0.0",typescript:"^3.0.3",webpack:"^4.19.1","webpack-cli":"^3.1.1","webpack-dev-server":"^3.1.7"},dependencies:{"@types/lodash":"^4.14.110","@types/react":"^16.4.13","@types/react-dom":"^16.0.7",express:"^3.1.2",lodash:"^4.17.11",moment:"^2.22.2",npm:"^6.4.1",react:"^16.5.0","react-dom":"^16.5.0",request:"^2.88.0"}}},134:function(e,s,t){"use strict";t.r(s);var r=t(1),a=t(126),n=t(0);t(135);class o extends r.Component{constructor(e){super(e);const{worker:s}=this.props;this.nameAbbr=this.getAbbr(s.name)}componentDidMount(){this.avatarEl.style.setProperty("--color",this.getAvatarColor(this.nameAbbr))}getAbbr(e){const[,s,t]=e.match(/(\w)\w+[\W](\w)\w+/);return`${s}${t}`.toLowerCase()}getAvatarColor(e){const s=e.charCodeAt(0);e.charCodeAt(1);return`hsl(${(s-97)/25*360},100%,40%)`}render(){const{worker:e}=this.props;return r.createElement("div",{className:"worker fl-row"},r.createElement("div",{className:"av",ref:e=>this.avatarEl=e},this.nameAbbr),r.createElement("div",{className:"fl-col"},r.createElement("div",{className:"worker__title"},r.createElement("div",{className:"worker__name"},e.name)),r.createElement("div",{className:"order"},r.createElement("div",{className:"order__name"},e.order.title))))}}t(137);const{version:l}=t(133);a.render(r.createElement(class extends r.Component{constructor(e){super(e),this.state={isLoading:!1,workers:[],error:null},this.getOrders=(e=>{this.setState({isLoading:!0}),fetch(`/orders/${e}`).then(e=>e.json()).then(e=>this.setState({workers:e})).catch(e=>this.setState({error:e})).then(()=>this.setState({isLoading:!1}))})}componentDidMount(){this.getOrders(location.search)}render(){const{workers:e,isLoading:s,error:t}=this.state,a=n().format("dddd, MMMM Do, YYYY"),j=n().format("ddd, MMM-D'YY HH:mm:ss");return r.createElement("div",null,r.createElement("h1",null,"Orders for ",a),r.createElement("div",{className:"workers"},t&&r.createElement("div",null,t.message),s&&r.createElement("div",{className:"loader"},"Loading..."),e.map((e,s)=>r.createElement(o,{key:s,worker:e})),!s&&0===e.length&&r.createElement("h2",null,"No orders")),r.createElement("div",{className:"app-info"},r.createElement("div",null,"last update: ",j," "),r.createElement("div",null,"status: offline"),r.createElement("div",null,"ver. ",l)))}},null),document.body.querySelector(".app"))},135:function(e,s){},137:function(e,s){}},[[134,2,1]]]);
//# sourceMappingURL=main.2b8748d10429f5996074.js.map