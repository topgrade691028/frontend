(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./jsx/search/ResultQueueLink.jsx":
/*!****************************************!*\
  !*** ./jsx/search/ResultQueueLink.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultQueueLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/RoundedSpinner.jsx */ "./jsx/util/RoundedSpinner.jsx");
/* harmony import */ var _util_QueuePasswordModal_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../util/QueuePasswordModal.jsx */ "./jsx/util/QueuePasswordModal.jsx");




class ResultQueueLink extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    constructor(props) {
        super(props);
        this.state = { sendingReq: false, showModal: false, creationDate: null };
        this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
    }

    componentDidMount() {
        let a = this.props.creationDate.split(/[^0-9]/);
        let creationDate = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]));
        const DATE = creationDate.getDate();
        const MONTH = creationDate.toLocaleString('default', { month: 'short' });
        const HOURS = creationDate.getHours();
        const MINUTES = creationDate.getMinutes();
        this.setState({ creationDate: `${HOURS}:${MINUTES} ${DATE} ${MONTH}` });
    }

    onJoinButtonClick() {
        if (this.props.alreadyExistInQueue) return;
        this.setState({ sendingReq: true });
        if (this.props.isPrivate) this.setState({ showModal: true });else window.location.href = "#/queue/" + this.props.shortName;
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'media text-muted pt-3' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_QueuePasswordModal_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { show: this.state.showModal,
                onHide: () => this.setState({ showModal: false, sendingReq: false }),
                fullName: this.props.name, shortName: this.props.shortName,
                onSuccess: () => document.location.href = "#/queue/" + this.props.shortName }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'media-body pb-3 mb-0 small lh-125', 'data-aos': 'flip-up' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'd-flex justify-content-between align-items-center w-100' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'strong',
                        { className: 'text-gray-dark' },
                        this.props.name,
                        ' ',
                        this.props.isPrivate ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: "fa fa-lock" }) : ""
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'dropdown show dropleft' },
                        this.state.sendingReq ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'button',
                            { onClick: this.onJoinButtonClick,
                                className: "btn-sm btn-primary mr-3 " + (this.props.alreadyExistInQueue ? "btn-secondary" : "") },
                            '\u041F\u0440\u0438\u0441\u043E\u0435\u0434\u0435\u043D\u0438\u0442\u044C\u0441\u044F'
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'span',
                    { className: 'd-block' },
                    '/',
                    this.props.shortName
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'span',
                    { className: 'd-block' },
                    '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432: ',
                    this.props.membersCount
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'span',
                    { className: 'd-block text-secondary' },
                    '\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F: ',
                    this.state.creationDate
                )
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

/***/ }),

/***/ "./jsx/search/SearchPage.jsx":
/*!***********************************!*\
  !*** ./jsx/search/SearchPage.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.jsx */ "./jsx/search/SearchBar.jsx");
/* harmony import */ var _SearchResult_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchResult.jsx */ "./jsx/search/SearchResult.jsx");
/* harmony import */ var _ResultQueueLink_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResultQueueLink.jsx */ "./jsx/search/ResultQueueLink.jsx");





class SearchPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, searching: false, data: [], inputVal: "", searched: false };
        this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        $(document).bind("keypress", e => {
            if (e.keyCode === 13) {
                e.preventDefault();
                this.onSearchButtonClick();
            }
        });
    }

    onSearchButtonClick() {
        this.setState({ searching: true, loaded: false, searched: true });

        fetch("api/search/queue?queue_name=" + this.state.inputVal).then(resp => resp.json()).then(data => {
            this.setState({
                data: data.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResultQueueLink_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    shortName: x["queue_name"],
                    name: x["queue_fullname"],
                    alreadyExistInQueue: x["already_in_queue"],
                    isPrivate: x["private"],
                    membersCount: x["members_count"],
                    creationDate: x["creation_date"]
                })), searching: false, loaded: true
            });
        }).catch(err => {
            console.log(err);
            this.setState({ searching: false, loaded: false });
        });
    }

    onInputChange(value) {
        this.setState({ inputVal: value });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'container' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'row justify-content-center' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'col-12 col-md-12 col-lg-10' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { 'data-aos': 'slide-up', 'data-aos-duration': '800' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            onSearchButtonClick: this.onSearchButtonClick, onInputChange: this.onInputChange })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { 'data-aos': 'slide-up', 'data-aos-duration': '1100' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchResult_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { loaded: this.state.loaded,
                            searching: this.state.searching,
                            data: this.state.data,
                            searched: this.state.searched })
                    )
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/search/SearchResult.jsx":
/*!*************************************!*\
  !*** ./jsx/search/SearchResult.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchResult; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/RoundedSpinner.jsx */ "./jsx/util/RoundedSpinner.jsx");



class SearchResult extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = { isEmpty: false };
    }

    componentWillReceiveProps(newProps) {
        this.setState({ isEmpty: newProps.data.length === 0 });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'my-3 p-3 bg-white rounded shadow-sm' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h6',
                { className: 'border-bottom border-gray pb-2 mb-0' },
                '\u041D\u0430\u0439\u0434\u0435\u043D\u043E:'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'ul',
                { className: "list-group" },
                this.props.loaded ? this.state.isEmpty ? "Ничего не найдено" : this.props.data.map((x, i) => {
                    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { key: i, className: 'list-group-item' },
                        x
                    );
                }) : this.props.searching ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'li',
                    { className: 'mx-auto list-group-item border-0' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'li',
                    { className: "list-group-item mx-auto border-0" },
                    this.props.searched ? "Download error" : ""
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/util/QueuePasswordModal.jsx":
/*!*****************************************!*\
  !*** ./jsx/util/QueuePasswordModal.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueuePasswordModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal.js */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button.js */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../util/RoundedSpinner.jsx */ "./jsx/util/RoundedSpinner.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








class QueuePasswordModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = { password: "", successful: true, sendingReq: false };
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
    }

    onJoinButtonClick() {
        this.setState({ sendingReq: true });
        fetch("api/queue?queue_name=" + this.props.shortName + "&password=" + this.state.password, { method: "put" }).then(resp => {
            if (resp.status === 200) {
                this.setState({ successful: true });
                if (this.props.onSuccess !== undefined || this.props.onSuccess !== null) {
                    this.props.onSuccess();
                }
            } else if (resp.status === 403) {
                this.setState({ successful: false });
            }

            this.setState({ sendingReq: false });
        }).catch(this.setState({ sendingReq: false }));
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a,
            _extends({}, this.props, { size: 'md', 'aria-labelledby': 'password-modal-vcenter', centered: true }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Header,
                { closeButton: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Title,
                    { id: 'password-modal-vcenter' },
                    this.props.fullName
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body,
                null,
                this.state.sendingReq ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], { className: "mx-auto" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    null,
                    '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u0443\u044E \u043E\u0447\u0435\u0440\u0435\u0434\u044C:',
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
                    this.state.successful ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        { className: "text-danger" },
                        '\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'form',
                        { action: '', className: "mx-auto justify-content-center text-center" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
                            className: "mt-2 text-center rounded " + (this.state.successful ? "" : "border-danger"),
                            type: 'password', id: "password-modal-input", onChange: this.onPasswordChange })
                    )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Footer,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                    { onClick: this.onJoinButtonClick },
                    '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                    { onClick: this.props.onHide, className: "btn-secondary" },
                    '\u0417\u0430\u043A\u0440\u044B\u0442\u044C'
                )
            )
        );
    }
}

/***/ })

}]);
//# sourceMappingURL=9.bundle.js.map