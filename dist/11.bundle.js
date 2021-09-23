(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./jsx/groups/GroupsSearch.jsx":
/*!*************************************!*\
  !*** ./jsx/groups/GroupsSearch.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupsSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GroupsNavbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupsNavbar.jsx */ "./jsx/groups/GroupsNavbar.jsx");
/* harmony import */ var _search_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../search/SearchBar.jsx */ "./jsx/search/SearchBar.jsx");
/* harmony import */ var _GroupsList_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GroupsList.jsx */ "./jsx/groups/GroupsList.jsx");





class GroupsSearch extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupsNavbar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: "w-75 text-center mx-auto" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: "w-75 mx-auto" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupsList_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)
            )
        );
    }
}

/***/ }),

/***/ "./jsx/search/SearchBar.jsx":
/*!**********************************!*\
  !*** ./jsx/search/SearchBar.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class SearchBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
    }

    onInputChange(e) {
        this.props.onInputChange(e.target.value);
    }

    buttonClick(e) {
        this.props.onSearchButtonClick();
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "form",
            { className: "card card-sm" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "card-body row no-gutters align-items-center" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "col" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { className: "form-control form-control-lg form-control-borderless", type: "search",
                        placeholder: "Search topics or keywords", onChange: this.onInputChange })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "col-sm-2 d-none d-sm-block" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "btn btn-md ml-2 btn-success", type: "button",
                            onClick: this.buttonClick },
                        "Search"
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "col-sm-3 d-sm-none row no-gutters align-items-center" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "button",
                        { className: "btn-sm btn-primary mx-auto col-4 mt-2", type: "button",
                            onClick: this.buttonClick },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fas fa-search h5 text-body" })
                    )
                )
            )
        );
    }
}

/***/ })

}]);
//# sourceMappingURL=11.bundle.js.map