/*! created 2019/04/29 by zhaoyimig */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{23:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:"/static/images/logo.jpg"}}),t._v(" "),n("div",[t._v("姓名："+t._s(t.uname))]),t._v(" "),n("div",[t._v("年龄："+t._s(t.age))]),t._v(" "),n("Button",{attrs:{type:"primary"},on:{click:t.toListPage}},[t._v("去列表页")])],1)};i._withStripped=!0;var o={data:function(){return{uname:"zhaoyiming",age:18}},created:function(){this.getUserInfo()},methods:{toListPage:function(){this.$router.push({name:"List"})},getUserInfo:function(){this.$http.get("/api/user").then(function(t){console.log(t)},function(t){console.log(t)})}}},s=n(1),a=Object(s.a)(o,i,[],!1,null,"47323bf2",null);a.options.__file="src/components/index.vue";e.default=a.exports}}]);