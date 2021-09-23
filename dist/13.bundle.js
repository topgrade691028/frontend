(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./jsx/groups/GroupsPage.jsx":
/*!***********************************!*\
  !*** ./jsx/groups/GroupsPage.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GroupsNavbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupsNavbar.jsx */ "./jsx/groups/GroupsNavbar.jsx");
/* harmony import */ var _GroupsList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GroupsList.jsx */ "./jsx/groups/GroupsList.jsx");




class GroupsPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupsNavbar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupsList_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { groups: this.props.user === null ? [] : this.props.user['groups_member'] })
        );
    }
}

/***/ })

}]);
//# sourceMappingURL=13.bundle.js.map