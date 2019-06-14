/*! created 2019/04/29 by zhaoyimig */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./node_modules/_iview-loader@1.2.2@iview-loader??ref--4-1!./src/components/index.vue?vue&type=template&id=2560a6f2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{attrs:{"src":"static/images/logo.jpg"}}),_vm._v(" "),_c('div',[_vm._v("姓名："+_vm._s(_vm.uname))]),_vm._v(" "),(_vm.skills.includes('js'))?_c('div',[_vm._v("年龄："+_vm._s(_vm.age))]):_vm._e(),_vm._v(" "),_c('Button',{attrs:{"type":"primary"},on:{"click":_vm.toListPage}},[_vm._v("去列表页")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/index.vue?vue&type=template&id=2560a6f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.0.6@babel-loader/lib??ref--5-0!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./node_modules/_iview-loader@1.2.2@iview-loader??ref--4-1!./src/components/index.vue?vue&type=script&scoped=true&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var componentsvue_type_script_scoped_true_lang_js_ = ({
  data: function data() {
    return {
      uname: 'zhaoyiming',
      age: 18,
      skills: ['html', 'css', 'js']
    };
  },
  created: function created() {
    console.log(this.skills.indexOf('css'));
  },
  methods: {
    toListPage: function toListPage() {
      this.$router.push({
        name: 'List'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/index.vue?vue&type=script&scoped=true&lang=js&
 /* harmony default export */ var src_componentsvue_type_script_scoped_true_lang_js_ = (componentsvue_type_script_scoped_true_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_componentsvue_type_script_scoped_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2560a6f2",
  null
  
)

/* harmony default export */ var components = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);