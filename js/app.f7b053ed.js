(function(t){function a(a){for(var s,i,c=a[0],o=a[1],l=a[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(e,i)&&e[i]&&m.push(e[i][0]),e[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,a=0;a<r.length;a++){for(var n=r[a],s=!0,c=1;c<n.length;c++){var o=n[c];0!==e[o]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=n[0]))}return t}var s={},e={app:0},r=[];function i(a){if(s[a])return s[a].exports;var n=s[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,a,n){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(n,s,function(a){return t[a]}.bind(null,s));return n},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var d=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,a,n){t.exports=n("56d7")},"56d7":function(t,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("router-view"),n("Footer")],1)},r=[],i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("footer",{staticClass:"mt-5 mb-5"},[n("hr"),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col text-center"},[t._v(" Follow US! IG: @skinsight ")])])])])}],o={name:"Footer"},l=o,d=n("2877"),u=Object(d["a"])(l,i,c,!1,null,null,null),m=u.exports,v={components:{Footer:m}},g=v,f=Object(d["a"])(g,e,r,!1,null,null,null),p=f.exports,h=n("8c4f"),_=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("Navbar"),n("div",{staticClass:"container"},[n("Hero"),n("div",{staticClass:"d-none d-md-block"},[n("div",{staticClass:"row mt-5"},[t._m(0),n("div",{staticClass:"col"},[n("router-link",{staticClass:"btn btn-success float-right",attrs:{to:"/kandungan"}},[n("b-icon-eye"),t._v(" Selengkapnya")],1)],1)]),n("div",{staticClass:"row mb-4"},t._l(t.kandungans,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 mt-4"},[n("CardKandungan",{attrs:{product:t}})],1)})),0),n("div",{staticClass:"row mt-5"},[t._m(1),n("div",{staticClass:"col"},[n("router-link",{staticClass:"btn btn-success float-right",attrs:{to:"/skincare"}},[n("b-icon-eye"),t._v(" Selengkapnya")],1)],1)]),n("div",{staticClass:"row mb-4"},t._l(t.products,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 mt-4"},[n("CardProduct",{attrs:{product:t}})],1)})),0)]),n("div",{staticClass:"d-sm-block d-md-none"},[t._m(2),n("div",{staticClass:"row mb-4"},[t._l(t.kandungans,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 mt-4"},[n("CardKandungan",{attrs:{product:t}})],1)})),n("div",{staticClass:"col-md-4 mt-5 mb-5"},[n("router-link",{staticClass:"btn btn-success float-right",attrs:{to:"/kandungan"}},[n("b-icon-eye"),t._v(" Selengkapnya")],1)],1)],2),t._m(3),n("div",{staticClass:"row mb-4"},[t._l(t.products,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 mt-4"},[n("CardProduct",{attrs:{product:t}})],1)})),n("div",{staticClass:"col-md-4 mt-5"},[n("router-link",{staticClass:"btn btn-success float-right",attrs:{to:"/skincare"}},[n("b-icon-eye"),t._v(" Selengkapnya")],1)],1)],2)])],1)],1)},b=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"col"},[n("h3",[n("strong",[t._v("Kandungan")]),t._v(" yang biasa dicari")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"col"},[n("h3",[t._v("Popular "),n("strong",[t._v("Skincare")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-4 mt-4"},[n("h5",[n("strong",[t._v("Kandungan")]),t._v(" yang biasa dicari")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col"},[n("h4",[t._v("Popular "),n("strong",[t._v("Skincare")])])])])}],k=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"d-none d-md-block"},[s("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("b-navbar-brand",[s("img",{attrs:{src:n("6dd8"),height:"25",width:"30%"}})])],1),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Beranda")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/kandungan"}},[t._v("Kandungan")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/skincare"}},[t._v("Produk")])],1)])],1)],1)])],1),s("div",{staticClass:"d-sm-block d-md-none"},[s("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[s("div",{staticClass:"container"},[s("img",{attrs:{src:n("6dd8"),height:"25",width:"40%"}}),s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",{staticClass:"ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Beranda")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/kandungan"}},[t._v("Kandungan")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/skincare"}},[t._v("Produk")])],1)])],1)],1)])],1)])},C=[],w={name:"Navbar"},y=w,x=Object(d["a"])(y,k,C,!1,null,null,null),j=x.exports,E=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"hero"},[n("div",{staticClass:"background d-none d-md-block shadow",style:t.getBackground},[n("div",{staticClass:"container"},[n("div",{staticClass:"row mb-3"},[n("div",{staticClass:"col-md-6 mt-5 mb-5 offset-md-1"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center"},[t._m(0),t._m(1),n("br"),n("router-link",{staticClass:"btn btn-lg btn-success",attrs:{to:"/kandungan"}},[t._v("Cek Daftar Kandungan")])],1)])])])])]),n("div",{staticClass:"d-sm-block d-md-none"},[n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col-md-6 mb-3 shadow backsmall",style:t.getImage})]),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center"},[t._m(2),t._m(3),n("br"),n("router-link",{staticClass:"btn btn-lg btn-success float-center",attrs:{to:"/kandungan"}},[t._v("Cek Daftar Kandungan")])],1)])])])])])},$=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h2",[n("strong",[t._v("Kenali kandungan produk"),n("br"),t._v("perawatan kulitmu disini")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v(" Kembangkan wawasan skincare Anda"),n("br"),t._v("bersama "),n("strong",[t._v("Skinsight")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h4",[n("strong",[t._v("Kenali kandungan produk"),n("br"),t._v("perawatan kulitmu disini")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("p",[t._v(" Kembangkan wawasan skincare Anda"),n("br"),t._v("bersama "),n("strong",[t._v("Skinsight")])])}],P={name:"Hero",computed:{getBackground:function(){return"background: url("+this.image+"); background-size: 1100px;"},getImage:function(){return"background: url("+this.image1+"); background-size: 450px;"}},data:function(){return{image:"../assets/images/skincare3.jpeg",image1:"../assets/images/skincare1.png"}}},K=P,S=Object(d["a"])(K,E,$,!1,null,null,null),O=S.exports,N=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"card shadow card-product"},[n("img",{staticClass:"card-img-top",attrs:{src:"assets/images/"+t.product.gambar,alt:"...",height:"400"}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.product.nama))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.product.deskripsi))]),n("router-link",{staticClass:"btn btn-success",attrs:{to:"/skincare/"+t.product.id},nativeOn:{click:function(a){return t.$scrollToTop(a)}}},[n("b-icon-search"),t._v(" Cek Kandungan ")],1)],1)])},T=[],B={name:"CardProduct",props:["product"],methods:{scrollToTop:function(){window.scrollTo(0,0)}}},A=B,D=Object(d["a"])(A,N,T,!1,null,null,null),I=D.exports,G=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"card shadow card-product"},[n("img",{staticClass:"card-img-top",attrs:{src:"assets/images/"+t.product.gambar,alt:"...",height:"200"}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v(t._s(t.product.nama))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.product.deskripsi))]),n("router-link",{staticClass:"btn btn-success",attrs:{to:"/kandungan/"+t.product.id},nativeOn:{click:function(a){return t.$scrollToTop(a)}}},[n("b-icon-search"),t._v(" Pelajari Kandungan ")],1)],1)])},z=[],M={name:"CardKandungan",props:["product"],methods:{scrollToTop:function(){window.scrollTo(0,0)}}},W=M,F=Object(d["a"])(W,G,z,!1,null,null,null),L=F.exports,H=n("bc3a"),R=n.n(H),J={name:"Home",components:{Navbar:j,Hero:O,CardProduct:I,CardKandungan:L},data:function(){return{products:[],kandungans:[]}},mounted:function(){var t=this;R.a.get("/db.json").then((function(a){return t.setProducts(a.data.bestproducts)})).catch((function(t){return console.log(t)})),R.a.get("/db.json").then((function(a){return t.setKandungans(a.data.bestkandungan)})).catch((function(t){return console.log(t)}))},methods:{setProducts:function(t){this.products=t},setKandungans:function(t){this.kandungans=t}}},U=J,q=Object(d["a"])(U,_,b,!1,null,null,null),Q=q.exports,V=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"d-md-block d-none"},[n("Navbar"),n("div",{staticClass:"container"},[n("div",{staticClass:"row background shadow mb-3",style:t.getBackground},[n("div",{staticClass:"col-md-6 mt-5 mb-5 offset-md-1"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center"},[t._m(0),n("div",{staticClass:"input-group mb-3 mt-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nama kandungan produk","aria-label":"Cari","aria-describedby":"basic-addon1"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}}),n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[n("b-icon-search")],1)])])])])])]),n("div",{staticClass:"row mb-4"},t._l(t.searchProducts,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 mt-4"},[n("CardProduct",{attrs:{product:t}})],1)})),0)])],1),n("div",{staticClass:"d-sm-block d-md-none"},[n("Navbar"),n("div",{staticClass:"container"},[n("div",{staticClass:"row backsmall shadow mb-3",style:t.getBackground},[n("div",{staticClass:"col-md-6 mt-5 mb-5 offset-md-1"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center"},[t._m(1),n("hr"),n("div",{staticClass:"input-group mb-3 mt-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nama kandungan produk","aria-label":"Cari","aria-describedby":"basic-addon1"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}}),n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[n("b-icon-search")],1)])])])])])]),n("div",{staticClass:"row mb-4"},t._l(t.searchProducts,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 mt-4"},[n("CardProduct",{attrs:{product:t}})],1)})),0)])],1)])},X=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h3",[n("strong",[t._v("Ketahui apa yang ada"),n("br"),t._v("dalam produk kecantikanmu")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h4",{staticStyle:{"font-size":"1.17em"}},[n("strong",[t._v("Ketahui apa yang ada"),n("br"),t._v("dalam produk kecantikanmu")])])}],Y=(n("4de4"),n("c975"),n("ac1f"),n("841c"),{name:"Skincare",components:{Navbar:j,CardProduct:I},data:function(){return{image:"../assets/images/skincare3.jpeg",products:[],search:null}},mounted:function(){var t=this;R.a.get("/db.json").then((function(a){return t.setProducts(a.data.products)})).catch((function(t){return console.log(t)}))},methods:{setProducts:function(t){this.products=t}},computed:{searchProducts:function(){var t=(this.search||"").toLowerCase();return this.products.filter((function(a){var n=(a.nama||"").toLowerCase(),s=(a.merk||"").toLowerCase();return n.indexOf(t)>-1||s.indexOf(t)>-1}))},getBackground:function(){return"background: url("+this.image+"); background-size: 1100px;"}}}),Z=Y,tt=Object(d["a"])(Z,V,X,!1,null,null,null),at=tt.exports,nt=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"food-detail"},[n("Navbar"),n("div",{staticClass:"container"},[n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-md-6"},[n("img",{staticClass:"img-fluid shadow",attrs:{src:"../assets/images/"+t.product.gambar}})]),n("div",{staticClass:"col-md-5 offset-md-1 mt-5"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center"},[n("h2",[n("strong",[t._v(t._s(t.product.nama))])]),n("h3",[n("strong",[t._v(t._s(t.product.merk))])]),n("hr"),n("p",[t._v(" "+t._s(t.product.deskripsi_panjang)+" ")])])])])]),n("hr"),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col"},[t._m(0),n("div",{staticClass:"table-responsive mt-3"},[n("table",{staticClass:"table"},[t._m(1),n("tbody",t._l(t.kandungans,(function(a,s){return n("tr",{key:a.id},[n("th",[t._v(t._s(s+1))]),n("td",[n("strong",[t._v(t._s(a.nama))])]),n("td",[t._v(" "+t._s(a.fungsi)+" ")]),n("td",[t._v(t._s(a.ewg))]),n("td",[t._v(t._s(a.cir))])])})),0)])])])]),t._m(2),t._m(3),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col"},[n("router-link",{staticClass:"btn btn-success float-left",attrs:{to:"/skincare"}},[n("b-icon-arrow-left"),t._v(" Kembali")],1)],1)])])],1)},st=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h2",[n("strong",[t._v("Kandungan Produk")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("No")]),n("th",{attrs:{scope:"col"}},[t._v("Nama Kandungan")]),n("th",{attrs:{scope:"col"}},[t._v("Fungsi")]),n("th",{attrs:{align:"center",scope:"col"}},[t._v("EWG")]),n("th",{attrs:{align:"center",scope:"col"}},[t._v("CIR")])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"d-md-block d-none"},[n("div",{staticClass:"row mt-3 kesimpulan-besar shadow"},[n("div",{staticClass:"col-md-12"},[n("h3",{staticClass:"mt-3"},[n("strong",[t._v("Keterangan:")])]),n("hr"),n("p",[n("strong",[t._v("EWG (Environmental Working Group)")]),n("br"),t._v(" menggambarkan "),n("b",[t._v("peringkat keamanan")]),t._v(" dari suatu bahan dengan skala 1-10. "),n("b",[t._v("Semakin rendah")]),t._v(" rating EWG, bahan "),n("b",[t._v("semakin terhindar dari toxic")]),t._v("."),n("br")]),n("p",[n("strong",[t._v("CIR (Cosmetic Ingredient Review)")]),n("br"),t._v(" A - Aman untuk digunakan"),n("br"),t._v(" B - Aman dengan kualifikasi"),n("br"),t._v(" C - Data tidak memadai untuk mendukung keselamatan ")])])])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"d-sm-block d-md-none"},[n("div",{staticClass:"row mt-3 kesimpulan shadow"},[n("div",{staticClass:"col-md-12"},[n("h3",{staticClass:"mt-3"},[n("strong",[t._v("Keterangan:")])]),n("hr"),n("p",[n("strong",[t._v("EWG (Environmental Working Group)")]),n("br"),t._v(" menggambarkan "),n("b",[t._v("peringkat keamanan")]),t._v(" dari suatu bahan dengan skala 1-10. "),n("b",[t._v("Semakin rendah")]),t._v(" rating EWG, bahan "),n("b",[t._v("semakin terhindar dari toxic")]),t._v("."),n("br")]),n("p",[n("strong",[t._v("CIR (Cosmetic Ingredient Review)")]),n("br"),n("b",[t._v("A")]),t._v(" - Aman untuk digunakan"),n("br"),n("b",[t._v("B")]),t._v(" - Aman dengan kualifikasi"),n("br"),n("b",[t._v("C")]),t._v(" - Data tidak memadai untuk mendukung keselamatan ")])])])])}],et=(n("7db0"),{name:"SkincareDetail",components:{Navbar:j},data:function(){return{id:this.$route.params.id,product:{},kandungans:[]}},mounted:function(){var t=this;R.a.get("/db.json").then((function(a){return t.setProduct(a.data.products.find((function(a){return a.id==t.id})))})).catch((function(t){return console.log(t)})),R.a.get("/db.json").then((function(a){return t.setKandungans(a.data.products.find((function(a){return a.id==t.id})).kandungans)})).catch((function(t){return console.log(t)}))},methods:{setProduct:function(t){this.product=t},setKandungans:function(t){this.kandungans=t}}}),rt=et,it=Object(d["a"])(rt,nt,st,!1,null,null,null),ct=it.exports,ot=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"d-md-block d-none"},[n("Navbar"),n("div",{staticClass:"container"},[n("div",{staticClass:"row background shadow mb-3",style:t.getBackground},[n("div",{staticClass:"col-md-6 mt-5 mb-5 offset-md-1"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center"},[t._m(0),n("div",{staticClass:"input-group mb-3 mt-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nama kandungan produk","aria-label":"Cari","aria-describedby":"basic-addon1"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}}),n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[n("b-icon-search")],1)])])])])])]),n("div",{staticClass:"row mb-4"},t._l(t.searchProducts,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 mt-4"},[n("CardKandungan",{attrs:{product:t}})],1)})),0)])],1),n("div",{staticClass:"d-sm-block d-md-none"},[n("Navbar"),n("div",{staticClass:"container"},[n("div",{staticClass:"row backsmall",style:t.getBackground},[n("div",{staticClass:"col-md-6 mt-5 mb-5 offset-md-1"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center"},[t._m(1),n("hr"),n("div",{staticClass:"input-group mb-3 mt-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nama kandungan produk","aria-label":"Cari","aria-describedby":"basic-addon1"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}}),n("div",{staticClass:"input-group-prepend"},[n("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[n("b-icon-search")],1)])])])])])]),n("div",{staticClass:"row mb-4"},t._l(t.searchProducts,(function(t){return n("div",{key:t.id,staticClass:"col-md-4 mt-4"},[n("CardKandungan",{attrs:{product:t}})],1)})),0)])],1)])},lt=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h3",[n("strong",[t._v("Ketahui setiap kandungan"),n("br"),t._v("dalam produk kecantikanmu")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h4",{staticStyle:{"font-size":"1.17em"}},[n("strong",[t._v("Ketahui setiap kandungan"),n("br"),t._v("dalam produk kecantikanmu")])])}],dt={name:"Kandungan",components:{Navbar:j,CardKandungan:L},data:function(){return{image:"../assets/images/skincare3.jpeg",image1:"../assets/images/skincare4.jpeg",kandungans:[],search:null}},mounted:function(){var t=this;R.a.get("/db.json").then((function(a){return t.setProducts(a.data.kandungans)})).catch((function(t){return console.log(t)}))},methods:{setProducts:function(t){this.kandungans=t}},computed:{searchProducts:function(){var t=(this.search||"").toLowerCase();return this.kandungans.filter((function(a){var n=(a.nama||"").toLowerCase(),s=(a.deskripsi||"").toLowerCase();return n.indexOf(t)>-1||s.indexOf(t)>-1}))},getBackground:function(){return"background: url("+this.image+"); background-size: 1100px;"},getBackmedium:function(){return"background: url("+this.image1+"); background-size: 700px;"}}},ut=dt,mt=Object(d["a"])(ut,ot,lt,!1,null,null,null),vt=mt.exports,gt=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("Navbar"),n("div",{staticClass:"container"},[n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col-md-6"},[n("img",{staticClass:"img-fluid shadow",attrs:{src:"../assets/images/"+t.product.gambar}})]),n("div",{staticClass:"col-md-6 mt-5"},[n("div",{staticClass:"d-flex h-100"},[n("div",{staticClass:"justify-content-center align-self-center"},[n("h2",[n("strong",[t._v(t._s(t.product.nama))])]),n("hr"),t._m(0),n("p",[t._v(" "+t._s(t.product.nama_lain)+" ")]),t._m(1),n("p",[t._v(" "+t._s(t.product.nama_iupac)+" ")]),t._m(2),n("p",[t._v(" "+t._s(t.product.fungsi)+" ")])])])])]),n("hr"),n("div",{staticClass:"row mt-5"},[t._m(3),n("div",{staticClass:"col-md-6 offset-md-2"},t._l(t.manfaats,(function(a,s){return n("div",{key:a.id},[n("h5",{staticStyle:{color:"#117864"}},[n("strong",[t._v(t._s(s+1)+". "+t._s(a.nama))])]),n("p",[t._v(" "+t._s(a.deskripsi)+" ")])])})),0)]),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-12"},[t._m(4),n("hr"),t._l(t.details,(function(a){return n("div",{key:a.id,staticClass:"text-justify"},[n("h5",{staticStyle:{color:"#117864"}},[n("strong",[t._v(t._s(a.sub_judul))])]),n("p",[t._v(" "+t._s(a.deskripsi)+" ")])])}))],2)]),n("div",{staticClass:"d-md-block d-none"},[n("div",{staticClass:"row mt-3 kesimpulan-besar shadow"},[n("div",{staticClass:"col-md-12"},[t._m(5),n("hr"),n("p",[t._v(t._s(t.product.kesimpulan))])])])]),n("div",{staticClass:"d-sm-block d-md-none"},[n("div",{staticClass:"row mt-3 kesimpulan shadow"},[n("div",{staticClass:"col-md-12"},[t._m(6),n("hr"),n("p",[t._v(t._s(t.product.kesimpulan))])])])]),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-12"},[t._m(7),n("hr"),t._l(t.sumbers,(function(a,s){return n("div",{key:a.id},[n("p",[t._v(t._s(s+1)+". "+t._s(a.nama))])])}))],2)]),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-12"},[n("router-link",{staticClass:"btn btn-success float-left",attrs:{to:"/kandungan"}},[n("b-icon-arrow-left"),t._v(" Kembali")],1)],1)])])],1)},ft=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",{staticStyle:{color:"#117864"}},[n("strong",[t._v("Nama lain:")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",{staticStyle:{color:"#117864"}},[n("strong",[t._v("Nama IUPAC:")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h5",{staticStyle:{color:"#117864"}},[n("strong",[t._v("Fungsi:")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"col-md-4"},[n("h2",[n("strong",[t._v("Apa manfaatnya?")])]),n("hr"),n("p",{staticClass:"mt-4 text-justify"},[t._v(" Ketahui manfaat dari setiap kandungan dalam produk kecantikan dan sesuaikan dengan kebutuhan kulitmu. ")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h2",[n("strong",[t._v("Cari tahu detailnya")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h3",{staticClass:"mt-3",staticStyle:{color:"#117864"}},[n("strong",[t._v("Kesimpulan")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h3",{staticClass:"mt-3",staticStyle:{color:"#117864"}},[n("strong",[t._v("Kesimpulan")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("h2",[n("strong",[t._v("Mana sumbernya?")])])}],pt={name:"KandunganDetail",components:{Navbar:j},data:function(){return{id:this.$route.params.id,product:{},manfaats:{},details:{},sumbers:{}}},mounted:function(){var t=this;R.a.get("/db.json").then((function(a){return t.setProduct(a.data.kandungans.find((function(a){return a.id==t.id})))})).catch((function(t){return console.log(t)})),R.a.get("/db.json").then((function(a){return t.setManfaats(a.data.kandungans.find((function(a){return a.id==t.id})).manfaat)})).catch((function(t){return console.log(t)})),R.a.get("/db.json").then((function(a){return t.setDetails(a.data.kandungans.find((function(a){return a.id==t.id})).detail)})).catch((function(t){return console.log(t)})),R.a.get("/db.json").then((function(a){return t.setSumbers(a.data.kandungans.find((function(a){return a.id==t.id})).sumber)})).catch((function(t){return console.log(t)}))},methods:{setProduct:function(t){this.product=t},setManfaats:function(t){this.manfaats=t},setDetails:function(t){this.details=t},setSumbers:function(t){this.sumbers=t}}},ht=pt,_t=Object(d["a"])(ht,gt,ft,!1,null,null,null),bt=_t.exports;s["default"].use(h["a"]);var kt=[{path:"/",name:"Home",component:Q},{path:"/skincare",name:"skincare",component:at},{path:"/skincare/:id",name:"SkincareDetail",component:ct},{path:"/kandungan",name:"Kandungan",component:vt},{path:"/kandungan/:id",name:"KandunganDetail",component:bt}],Ct=new h["a"]({mode:"history",base:"/",routes:kt}),wt=Ct,yt=n("5f5b"),xt=n("b1e0"),jt=n("b079"),Et=n.n(jt);n("ce8c"),n("f9e3"),n("2dd8"),n("5aea");s["default"].use(Et.a),s["default"].use(yt["a"]),s["default"].use(xt["a"]),s["default"].prototype.$scrollToTop=function(){return window.scrollTo(0,0)},s["default"].config.productionTip=!1,new s["default"]({router:wt,render:function(t){return t(p)}}).$mount("#app")},"5aea":function(t,a,n){},"6dd8":function(t,a,n){t.exports=n.p+"img/skinsight1.fcb6612e.png"}});
//# sourceMappingURL=app.f7b053ed.js.map