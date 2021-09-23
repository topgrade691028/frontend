(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./jsx/groups/GroupLink.jsx":
/*!**********************************!*\
  !*** ./jsx/groups/GroupLink.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class GroupLink extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            { className: "media text-muted pt-3" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                { className: "mr-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "svg",
                    { className: "bd-placeholder-img mr-2 rounded", width: "32", height: "32",
                        xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid slice",
                        focusable: "false", role: "img",
                        "aria-label": "Placeholder: 32x32" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "title",
                        null,
                        "Placeholder"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
                        width: "100%", height: "100%", fill: "#007bff" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "text",
                        { x: "50%", y: "50%", fill: "#007bff",
                            dy: ".3em" },
                        "32x32"
                    )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "media-body pb-3 mb-0 small lh-125 border-bottom border-gray" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "d-flex justify-content-between align-items-center w-100" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "strong",
                        { className: "text-gray-dark" },
                        this.props.fullname
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "dropdown show dropleft" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { role: "button", id: "dropdownMenuLink", "data-toggle": "dropdown", "aria-haspopup": "true",
                                "aria-expanded": "false" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-bars", "aria-hidden": "true" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "dropdown-menu", "aria-labelledby": "dropdownMenuLink" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "a",
                                { className: "dropdown-item", href: "#/group/123" },
                                "\u041F\u0435\u0440\u0435\u0439\u0442\u0438"
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "button",
                                { className: "dropdown-item",
                                    onClick: () => this.setState({ showSwapConfirm: true }) },
                                "\u0412\u044B\u0439\u0442\u0438"
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "d-flex justify-content-between mr-md-4" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "a",
                        { href: "#/group/" + this.props.link },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "span",
                            { className: "d-block" },
                            "/",
                            this.props.link
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432: 12"
                    )
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/groups/GroupsList.jsx":
/*!***********************************!*\
  !*** ./jsx/groups/GroupsList.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GroupLink_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GroupLink.jsx */ "./jsx/groups/GroupLink.jsx");



class GroupsList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    constructor(props) {
        super(props);

        this.onSettingsClick = this.onSettingsClick.bind(this);
    }

    onSettingsClick() {}

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'main',
            { role: 'main', className: 'container' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'my-3 p-3 bg-white rounded shadow-sm', 'data-aos': 'fade-up', 'data-aos-duration': '900' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "border-bottom justify-content-between d-flex flex-column flex-md-row mr-md-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h6',
                            { className: ' border-gray pb-2 mb-0' },
                            '\u0413\u0440\u0443\u043F\u043F : ',
                            this.props.groups.length
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'ul',
                    { className: "pl-0" },
                    this.props.groups.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { key: i, style: { listStyle: 'none' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GroupLink_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], { link: x['group_name'], fullname: x['group_fullname'], imgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" })
                    ))
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/groups/GroupsNavbar.jsx":
/*!*************************************!*\
  !*** ./jsx/groups/GroupsNavbar.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GroupsNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchDropdown_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchDropdown.jsx */ "./jsx/groups/SearchDropdown.jsx");



class GroupsNavbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSearchDropdown: false,
            searchData: [],
            isNowSearching: false,

            searchInputVal: "",
            errorOnFetchGroups: false

        };

        this.fetchGroups = this.fetchGroups.bind(this);
        this.onSearchInput = this.onSearchInput.bind(this);
    }

    componentDidMount() {
        $(document).bind("keypress", e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.fetchGroups();
            }
        });
    }

    fetchGroups() {
        if (this.state.searchInputVal === "") {
            return;
        }

        this.setState({ isNowSearching: true });

        fetch("/api/groups.search?q=" + this.state.searchInputVal).then(data => data.json()).then(jsonData => {
            let groups = jsonData['groups'];
            this.setState({ searchData: groups, errorOnFetchGroups: false });
        }).catch(e => {
            console.log(e);
            this.setState({ errorOnFetchGroups: true });
        }).finally(() => {
            this.setState({ isNowSearching: false });
        });
    }

    onSearchInput(event) {
        this.setState({ searchInputVal: event.target.value });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'nav',
            { className: 'navbar navbar-expand-lg navbar-light bg-light' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'navbar-brand', href: '#/myprofile' },
                'Groups'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'button',
                { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse',
                    'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent',
                    'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: 'fa fa-ellipsis-h' })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'ul',
                    { className: 'navbar-nav ml-auto mr-3' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { className: 'nav-item' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'a',
                            { className: 'nav-link active', href: '#/mygroups' },
                            '\u041C\u043E\u0438 \u0433\u0440\u0443\u043F\u043F\u044B '
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { className: 'nav-item' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'a',
                            { className: 'nav-link', href: '#/open-groups' },
                            '\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0435 \u0433\u0440\u0443\u043F\u043F\u044B'
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { className: 'nav-item' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            { className: "position-relative" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'form',
                                { className: 'form-inline' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text',
                                    onFocus: () => this.setState({ showSearchDropdown: true }),
                                    onBlur: () => this.setState({ showSearchDropdown: false }),
                                    placeholder: "Найти группу", className: "form-control", style: { boxShadow: 'none' } })
                            ),
                            this.state.showSearchDropdown && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchDropdown_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], { data: this.state.searchData, state: this.state.isNowSearching })
                        )
                    )
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/groups/SearchDropdown.jsx":
/*!***************************************!*\
  !*** ./jsx/groups/SearchDropdown.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class SearchDropdown extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            { className: "card w-100 position-absolute bg-light", style: { zIndex: 500 } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                { href: "#", style: { textDecoration: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "py-2 d-flex justify-content-between px-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "Item-1"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "11/50"
                    )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                { href: "#", style: { textDecoration: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "py-2 bg-primary text-white d-flex justify-content-between px-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "Item-2"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "34/50"
                    )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                { href: "#", style: { textDecoration: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "py-2 d-flex justify-content-between px-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "Item-3"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                { href: "#", style: { textDecoration: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "py-2 d-flex justify-content-between px-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "Very very very very lone group name here T"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "10/50"
                    )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                { href: "#", style: { textDecoration: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "py-2 d-flex justify-content-between px-1" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "Private group ",
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", { className: "fa fa-lock text-secondary" })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        null,
                        "6/50"
                    )
                )
            )
        );
    }
}

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map