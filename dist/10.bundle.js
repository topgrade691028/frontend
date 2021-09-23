(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./jsx/user-profile/commentaries/Comment.jsx":
/*!***************************************************!*\
  !*** ./jsx/user-profile/commentaries/Comment.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class Comment extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.deleteComment = this.deleteComment.bind(this);
    }

    deleteComment() {
        fetch(`/api/commentaries?commentary_id=${this.props.commentId}`, { method: 'delete' }).then(resp => {
            if (resp.status === 200) {
                this.props.onCommentDelete();
                return;
            }

            return resp.json();
        }).then(resp => {
            alert(resp['error_description']);
        });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'alert alert-warning' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'h5',
                { className: 'alert-heading' },
                this.props.heading
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                { className: "text-dark" },
                this.props.text
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: "d-inline justify-content-between w-100" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    { className: 'd-inline mb-0' },
                    this.props.time
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    { className: "btn btn-danger d-inline float-right", onClick: this.deleteComment },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-trash-alt' })
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/user-profile/commentaries/Commentaries.jsx":
/*!********************************************************!*\
  !*** ./jsx/user-profile/commentaries/Commentaries.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Commentaries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Comment_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment.jsx */ "./jsx/user-profile/commentaries/Comment.jsx");
/* harmony import */ var _util_TimeUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../util/TimeUtil.js */ "./jsx/util/TimeUtil.js");




class Commentaries extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    constructor(props) {
        super(props);
        this.state = { comments: [] };
        this.fetchComments = this.fetchComments.bind(this);
    }

    componentDidMount() {
        if (this.props.user !== null) this.fetchComments(this.props);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user !== null) this.fetchComments(newProps);
    }

    fetchComments(props) {
        console.log(props);
        fetch(`/api/commentaries?username=${props.user.user.username}`).then(resp => {
            if (resp.status === 200) {
                return resp.json();
            }
            alert(resp.status);
            return null;
        }).then(resp => {
            if (resp !== null) this.setState({ comments: resp.reverse() });
        });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'main',
            { role: 'main', className: 'container' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'd-flex align-items-center p-3 my-3 bg-purple rounded shadow-sm justify-content-between',
                    'data-aos': 'slide-up' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "d-flex" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'lh-100 d-flex flex-row' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h6',
                            { className: 'ml-3 mb-0 text-black lh-100 my-auto' },
                            '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438'
                        )
                    )
                )
            ),
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
                            '\u041C\u043E\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438'
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'ul',
                    { className: "pl-1 pt-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { style: { listStyle: 'none' } },
                        this.state.comments.length > 0 ? this.state.comments.map((x, i) => {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'li',
                                { key: i },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    heading: this.props.user['user']['user_type'] === "TEACHER" ? x['target']['first_name'] + " " + x['target']['last_name'] : "Преподаватель: " + x['author']['last_name'],
                                    time: _util_TimeUtil_js__WEBPACK_IMPORTED_MODULE_2__["default"].getFormattedTime(x['creation_date']),
                                    text: x['text'],
                                    commentId: x['id'],
                                    onCommentDelete: () => this.fetchComments(this.props)
                                })
                            );
                        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'p',
                            { className: "text-secondary mx-auto" },
                            '\u041F\u0443\u0441\u0442\u043E'
                        )
                    )
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/util/TimeUtil.js":
/*!******************************!*\
  !*** ./jsx/util/TimeUtil.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeUtil; });
class TimeUtil {
    static getFormattedTime(dateISO) {
        let a = dateISO.split(/[^0-9]/);
        let creationDate = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]));

        const DATE = creationDate.getDate();
        const MONTH = creationDate.toLocaleString('default', { month: 'short' });
        const HOURS = creationDate.getHours();
        const MINUTES = creationDate.getMinutes();
        const SECONDS = creationDate.getSeconds();
        return `${HOURS}:${MINUTES}:${SECONDS} ${DATE} ${MONTH}`;
    }
}

/***/ })

}]);
//# sourceMappingURL=10.bundle.js.map