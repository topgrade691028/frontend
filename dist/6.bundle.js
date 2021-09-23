(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./jsx/queues/QueueAllNotificationsModal.jsx":
/*!***************************************************!*\
  !*** ./jsx/queues/QueueAllNotificationsModal.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueueAllNotificationsModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal.js */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button.js */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QueueNotification_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueueNotification.jsx */ "./jsx/queues/QueueNotification.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class QueueAllNotificationsModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a,
            _extends({}, this.props, { size: 'lg', 'aria-labelledby': 'queue-all-notice-modal-vcenter', centered: true }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Header,
                { closeButton: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Title,
                    { id: 'queue-all-notice-modal-vcenter' },
                    '\u0412\u0441\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F'
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body,
                null,
                this.props.data.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'li',
                    { style: { listStyle: 'none' }, key: i },
                    x
                ))
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Footer,
                { className: "justify-content-between" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                    { onClick: this.props.onClearNotifications, variant: "danger" },
                    '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043E\u043F\u043E\u0432\u0435\u0449\u0435\u043D\u0438\u044F'
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                    { onClick: this.props.onHide, className: "btn-primary" },
                    '\u0417\u0430\u043A\u0440\u044B\u0442\u044C'
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/queues/QueueNotification.jsx":
/*!******************************************!*\
  !*** ./jsx/queues/QueueNotification.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueueNotification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class QueueNotification extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            { className: "media pt-3" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "p",
                { className: "media-body pb-3 mb-0 small lh-125 border-bottom border-gray" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "d-block text-gray-dark" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "d-flex justify-content-between" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "d-inline" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "strong",
                                null,
                                this.props.author
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "d-inline" },
                            this.props.time
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "text-left" },
                    this.props.message
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/queues/QueuePage.jsx":
/*!**********************************!*\
  !*** ./jsx/queues/QueuePage.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueuePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QueuePageContent_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueuePageContent.jsx */ "./jsx/queues/QueuePageContent.jsx");

// const QueuePageContent = require('./QueuePageContent.jsx');


class QueuePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueuePageContent_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], { queueName: this.props.match.params.id, user: this.props.user, updateUser: this.props.updateUser });
    }
}

/***/ }),

/***/ "./jsx/queues/QueuePageContent.jsx":
/*!*****************************************!*\
  !*** ./jsx/queues/QueuePageContent.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueuePageContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QueueUser_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueUser.jsx */ "./jsx/queues/QueueUser.jsx");
/* harmony import */ var _QueueNotification_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QueueNotification.jsx */ "./jsx/queues/QueueNotification.jsx");
/* harmony import */ var _QueueAllNotificationsModal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueueAllNotificationsModal.jsx */ "./jsx/queues/QueueAllNotificationsModal.jsx");
/* harmony import */ var _util_GrowingSpinner_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../util/GrowingSpinner.jsx */ "./jsx/util/GrowingSpinner.jsx");
/* harmony import */ var _QueueSettingsModal_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QueueSettingsModal.jsx */ "./jsx/queues/QueueSettingsModal.jsx");
/* harmony import */ var _util_QueuePasswordModal_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../util/QueuePasswordModal.jsx */ "./jsx/util/QueuePasswordModal.jsx");
/* harmony import */ var _TeacherPanelModal_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TeacherPanelModal.jsx */ "./jsx/queues/TeacherPanelModal.jsx");
/* harmony import */ var _util_TimeUtil_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../util/TimeUtil.js */ "./jsx/util/TimeUtil.js");
/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-sortablejs */ "./node_modules/react-sortablejs/lib/index.js");
/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs__WEBPACK_IMPORTED_MODULE_9__);












class QueuePageContent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    constructor(props) {
        super(props);
        this.state = {
            requestingData: false,
            queueName: this.props.queueName,
            users: [],
            superUsers: [],
            showAllNotifications: false,
            allNotice: [],
            showSettingsModal: false,
            username: undefined,
            canClickPassButton: false,
            alreadyInQueue: false,
            isHaveAdditionalPermission: false,
            isTeacher: false,
            showTeacherPanel: false,
            failed: false,

            currentUser: null,
            nextUser: null,

            isFavorite: false,
            sortableOldIndex: null
        };

        this.onSettingsClick = this.onSettingsClick.bind(this);
        this.onExitClick = this.onExitClick.bind(this);
        this.fetchQueue = this.fetchQueue.bind(this);
        this.onPassButtonClick = this.onPassButtonClick.bind(this);
        this.isHaveAdditionalPermission = this.isHaveAdditionalPermission.bind(this);
        this.isTeacher = this.isTeacher.bind(this);
        this.isAlreadyInQueue = this.isAlreadyInQueue.bind(this);
        this.onJoinButtonClick = this.onJoinButtonClick.bind(this);
        this.onTakeLaboratoryClick = this.onTakeLaboratoryClick.bind(this);

        this.fetchCurrentAndNextUser = this.fetchCurrentAndNextUser.bind(this);
        this.userPassed = this.userPassed.bind(this);

        this.onClearNotifications = this.onClearNotifications.bind(this);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.isFavorite = this.isFavorite.bind(this);

        this.onTeacherModelHide = this.onTeacherModelHide.bind(this);

        this.onSortableChange = this.onSortableChange.bind(this);
    }

    componentDidMount() {
        this.setState({ requestingData: true });
        this.fetchQueue(this.props);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ requestingData: true, queueName: newProps.queueName });
        this.fetchQueue(newProps);
    }

    fetchQueue(props) {
        fetch('api/queue?queue_name=' + props.queueName).then(resp => {
            if (resp.status === 401) {
                window.location.href = "/api/auth";
            }
            if (resp.status === 404) {
                this.setState({
                    "queueName": "Очередь с именем " + props.name + " не найдена",
                    requestingData: false
                });
                return;
            }
            return resp.json();
        }).then(resp => {
            let members = resp["members"];
            let usersMap = new Map();
            let usersList = [];
            members.map(u => usersMap.set(u.id, u));
            for (let sequenceVal of resp["queue_sequence"]) {
                usersList.push(usersMap.get(sequenceVal));
            }

            this.setState({
                users: usersList,
                queueName: resp["fullname"],
                superUsers: resp['super_users'],
                alreadyInQueue: this.isAlreadyInQueue(),
                isTeacher: this.isTeacher(),
                isFavorite: this.isFavorite()
            });

            // we need to check isHaveAdditionalPermissions after setting state about queue
            this.setState({
                canClickPassButton: usersList.length > 0 && (usersList[0]['username'] === this.props.user['user']['username'] || this.isHaveAdditionalPermission()),
                isHaveAdditionalPermission: this.isHaveAdditionalPermission()
            });

            let data = [];
            for (let notice of resp["notifications"]) {

                data.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueueNotification_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { author: notice["author"] == null ? "Система" : notice["author"],
                    time: _util_TimeUtil_js__WEBPACK_IMPORTED_MODULE_8__["default"].getFormattedTime(notice["creation_date"]),
                    message: notice["message"] }));
            }
            this.setState({ allNotice: data, requestingData: false, failed: false });
        }).catch(err => {
            console.log(err);
            this.setState({
                "queueName": "Не удалось загрузить очередь",
                requestingData: false,
                failed: true,
                users: [],
                superUsers: [],
                allNotice: []
            });
        });
    }

    isFavorite() {
        for (let queue of this.props.user['favorites']) {
            if (queue['queue_name'] === this.props.queueName) {
                return true;
            }
        }

        return false;
    }

    fetchCurrentAndNextUser() {
        fetch(`/api/teacher/queue?queue_name=${this.props.queueName}`).then(resp => {
            if (resp.status === 200 || resp.status === 400) {
                // if queue don't have users
                return resp.json();
            } else {
                alert(resp.status);
            }
        }).then(response => {
            if (response["current_users"] !== null) {
                this.setState({ currentUser: response["current_users"] });
            }

            if (response['next_user'] !== null) {
                this.setState({ nextUser: response["next_user"] });
            }
        }).catch(e => console.log(e));
    }

    userPassed() {
        fetch(`/api/teacher/queue?queue_name=${this.props.queueName}&passed_user=${this.state.currentUser[0]['username']}`, { method: 'put' }).then(resp => {
            if (resp.status === 200) {
                this.fetchCurrentAndNextUser(); // fetch new user
            } else {
                alert(resp.status);
            }
        }).catch(e => console.log(e));
    }

    onJoinButtonClick() {
        if (this.props.alreadyExistInQueue) return;
        if (this.props.isPrivate) this.setState({ showModal: true });else fetch("api/queue?queue_name=" + this.props.queueName, { method: "put" }).then(resp => {
            if (resp.status === 200) {
                window.location.reload();
            } else if (resp.status === 403) {
                this.setState({ showModal: true });
            }
        });
    }

    isAlreadyInQueue() {
        if (this.props.user !== null) {
            let x;
            for (x of this.props.user['queues_member']) {
                if (x['short_name'] === this.props.queueName) {
                    return true;
                }
            }
        }
        return false;
    }

    isHaveAdditionalPermission() {
        if (this.props.user !== null) {
            let userType = this.props.user["user"]["user_type"];
            return userType === "TEACHER" || userType === "ADMIN" || QueuePageContent.isSuperUser(this.state.superUsers, this.props.user);
        }

        return false;
    }

    static isSuperUser(superUsers, user) {
        let su;
        for (su of superUsers) {
            if (su['username'] === user['user']['username']) {
                return true;
            }
        }

        return false;
    }

    isTeacher() {
        if (this.props.user !== null) {
            let userType = this.props.user["user"]["user_type"];
            return userType === "TEACHER";
        }

        return false;
    }

    onSettingsClick() {
        this.setState({ showSettingsModal: true });
    }

    onExitClick() {
        fetch(`api/queue?queue_name=${this.props.queueName}&target=USER`, { method: "delete" }).then(resp => {
            if (resp.status === 200) {
                window.location.reload();
            } else if (resp.status === 400) {
                let x = resp.json();
                console.log("Error params: " + x);
            } else {
                alert("Минуточку! Ошибочка! Статус: " + resp.status);
            }
        }).catch(e => console.log(e));
    }

    onPassButtonClick() {
        if (this.state.canClickPassButton) {
            fetch("api/queue/" + this.props.queueName).then(resp => {
                if (resp.status === 200) {
                    window.location.reload();
                    // this.fetchQueue(this.props);    // this work incorrect because it is don't update Sortable childs
                } else {
                    // TODO: rewrite from alert to text on page :)
                    alert("Здесь мне пока лень, но и не знаю куда его статвить. Ошибка " + resp.status);
                }
            });
        }
    }

    onTakeLaboratoryClick() {
        this.setState({ showTeacherPanel: true });
        this.fetchCurrentAndNextUser();
    }

    onClearNotifications() {
        fetch(`/api/queue/${this.props.queueName}?action=clearnotifications`, { method: 'put' }).then(resp => {
            if (resp.status === 200) {
                this.fetchQueue(this.props);
            } else {
                console.log("Error while clear notifications: " + resp.status);
            }
        });
    }

    toggleFavorite() {
        let method = this.state.isFavorite ? 'delete' : 'put';

        fetch('/api/favorite?queue_name=' + this.props.queueName, { method: method }).then(resp => {
            if (resp.status === 200) {
                this.props.updateUser();
            } else {
                console.log(resp.status);
            }
        });
    }

    onTeacherModelHide() {
        this.setState({ showTeacherPanel: false });
        // this.fetchQueue(this.props); // don't update the Sortable child
        window.location.reload();
    }

    onSortableChange(newIndex) {
        if (this.state.sortableOldIndex === null || this.state.sortableOldIndex === newIndex) return;

        console.log("We need to move user at " + this.state.sortableOldIndex + " to " + newIndex);

        fetch(`/api/insert?queue_name=${this.props.queueName}&old_index=${this.state.sortableOldIndex}&new_index=${newIndex}`, { method: 'put' }).then(resp => {
            if (resp.status !== 200) {
                alert(resp.status);
            } else {
                this.fetchQueue(this.props);
            }
        }).catch(e => console.log(e));

        this.setState({ sortableOldIndex: null });
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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-users fa-2x d-none d-md-inline', 'aria-hidden': 'true' }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'lh-100 d-flex flex-row' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h6',
                            { className: 'ml-3 mb-0 text-black lh-100 my-auto' },
                            this.state.queueName,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'button',
                                { className: "ml-1 btn " + (this.state.isFavorite ? "btn-warning" : "btn-light"), onClick: this.toggleFavorite },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('p', { className: "fa fa-star", style: { color: 'black' } })
                            )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'button',
                            { onClick: this.onJoinButtonClick,
                                className: "btn btn-success ml-2 " + (this.state.alreadyInQueue || this.state.failed || this.state.isTeacher ? " d-none" : " d-flex") },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: "fa fa-plus-square my-auto" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'div',
                                { className: "ml-1 d-none d-md-inline" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'span',
                                    null,
                                    '\u0412\u043E\u0439\u0442\u0438 \u0432 \u043E\u0447\u0435\u0440\u0435\u0434\u044C'
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "d-flex flex-column flex-md-row" },
                    this.state.isTeacher && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'button',
                        { className: "btn btn-warning text-center mx-1 my-1",
                            style: { textDecoration: 'none' },
                            onClick: this.onTakeLaboratoryClick },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'span',
                            { className: "d-none d-md-inline" },
                            '\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u043B\u0430\u0431\u044B '
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-chalkboard-teacher' })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'button',
                        {
                            className: "btn btn-primary text-center mx-1 my-1 " + (!this.state.isHaveAdditionalPermission && " d-none"),
                            style: { textDecoration: 'none' },
                            onClick: this.onSettingsClick },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'span',
                            { className: "d-none d-md-inline" },
                            '\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 '
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-cog' })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'button',
                        {
                            className: "btn btn-danger mx-1 my-1 " + ((!this.state.alreadyInQueue || this.state.isTeacher) && " d-none"),
                            onClick: this.onExitClick },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'span',
                            { className: "d-none d-md-inline" },
                            '\u0412\u044B\u0439\u0442\u0438'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: "fa fa-door-open ml-1" })
                    )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'my-3 p-3 bg-white rounded shadow-sm', 'data-aos-duration': '800', 'data-aos': 'slide-up' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h6',
                    { className: 'border-bottom border-gray pb-2 mb-0' },
                    '\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F'
                ),
                this.state.requestingData ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "text-center mt-3" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_GrowingSpinner_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
                ) : this.state.allNotice.map((x, i) => {
                    if (i < 3) {
                        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'li',
                            { key: i, style: { listStyle: 'none' }, 'data-aos': 'flip-up' },
                            x
                        );
                    } else return "";
                }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'small',
                    { className: 'd-block text-right mt-3' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'a',
                        { onClick: () => this.setState({ showAllNotifications: true }), style: { cursor: 'pointer' } },
                        '\u0412\u0441\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F'
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
                            'div',
                            { className: "text-secondary" },
                            '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432: ',
                            this.state.users.length
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h6',
                            { className: ' border-gray pb-2 mb-0' },
                            '\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u043E\u0447\u0435\u0440\u0435\u0434\u0438'
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'button',
                        { onClick: this.onPassButtonClick,
                            className: "btn col-md-1 mr-md-2 d-inline mb-2 " + (this.state.canClickPassButton ? "btn-success" : "btn-secondary") },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: "fa fa-check-circle" }),
                        '\u041F\u0440\u043E\u0448\u0435\u043B'
                    )
                ),
                this.state.requestingData ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "text-center mt-3" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_GrowingSpinner_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'ul',
                    { className: "pl-0" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_sortablejs__WEBPACK_IMPORTED_MODULE_9___default.a,
                        {
                            options: {
                                animation: 150,
                                onStart: evt => {
                                    this.setState({ sortableOldIndex: evt.oldIndex });
                                },
                                onEnd: evt => {
                                    this.onSortableChange(evt.newIndex);
                                },
                                sort: this.state.isTeacher,
                                handle: ".sortable-user-handler"
                            }

                        },
                        this.state.users.map((x, i) => {
                            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'li',
                                { style: { listStyle: 'none' }, key: x["id"] },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueueUser_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    alreadyInQueue: this.state.alreadyInQueue,
                                    isCanManage: this.state.isHaveAdditionalPermission || this.state.isTeacher,
                                    username: x["username"],
                                    fullname: x["first_name"] + " " + (x["last_name"] === null ? "" : x["last_name"]),
                                    queuename: this.props.queueName,
                                    onChange: () => this.fetchQueue(this.props),
                                    imgUrl: x["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : x["contact_details"]["img"] })
                            );
                        }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'li',
                            { style: { listStyle: 'none' } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueueUser_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                alreadyInQueue: true,
                                isCanManage: true,
                                username: "123",
                                fullname: "Fullname",
                                queuename: this.props.queueName,
                                onChange: () => this.fetchQueue(this.props),
                                imgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'li',
                            { style: { listStyle: 'none' } },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueueUser_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                alreadyInQueue: true,
                                isCanManage: true,
                                username: "123",
                                fullname: "Fullname",
                                queuename: this.props.queueName,
                                onChange: () => this.fetchQueue(this.props),
                                imgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" })
                        )
                    )
                ),
                this.state.requestingData ? "" : this.state.users.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    null,
                    '\u0412 \u043E\u0447\u0435\u0440\u0435\u0434\u0438 \u043F\u043E\u043A\u0430 \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435\u0442'
                ) : ""
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueueAllNotificationsModal_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], { show: this.state.showAllNotifications,
                onHide: () => this.setState({ showAllNotifications: false }),
                data: this.state.allNotice,
                onClearNotifications: this.onClearNotifications
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueueSettingsModal_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
                queueName: this.props.queueName,
                show: this.state.showSettingsModal,
                onHide: () => this.setState({ showSettingsModal: false }),
                title: this.state.queueName }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_QueuePasswordModal_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], { show: this.state.showModal,
                onHide: () => this.setState({ showModal: false }),
                fullName: this.state.queueName, shortName: this.props.queueName,
                onSuccess: () => {
                    this.setState({ showModal: false });
                    window.location.reload();
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TeacherPanelModal_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
                show: this.state.showTeacherPanel,
                onHide: this.onTeacherModelHide,
                teacher: this.props.user,
                currentUsers: this.state.currentUser,
                nextUser: this.state.nextUser,
                onGetUser: this.fetchCurrentAndNextUser,
                onNextUser: this.userPassed
            })
        );
    }
}

/***/ }),

/***/ "./jsx/queues/QueueSettingsModal.jsx":
/*!*******************************************!*\
  !*** ./jsx/queues/QueueSettingsModal.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueueSettingsModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal.js */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button.js */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_ConfirmModal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../util/ConfirmModal.jsx */ "./jsx/util/ConfirmModal.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class QueueSettingsModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteConfirm: false, deleteConfirmSendingRequest: false,
            deleteConfirmMessage: "Вы уверены, что хотите удалить очередь?",
            showShuffleModal: false, shuffleModalSendingRequest: false,
            shuffleModalMessage: "Вы уверены, что хотите перемешать очередь?"
        };
        this.onDeleteAccept = this.onDeleteAccept.bind(this);
        this.onShuffleClick = this.onShuffleClick.bind(this);
    }

    onShuffleClick() {
        this.setState({ shuffleModalSendingRequest: true });

        fetch("api/queue/" + this.props.queueName + "?action=shuffle", { method: "put" }).then(resp => {
            if (resp.status === 200) {
                this.setState({ showShuffleModal: false, shuffleModalSendingRequest: false });
                window.location.reload();
            } else if (resp.status === 403) {
                this.setState({ shuffleModalMessage: "У вас недостаточно прав", shuffleModalSendingRequest: false });
                this.onShuffleClick = () => {
                    this.setState({ showShuffleModal: false });
                }; // TODO: maybe do this better ? :)
            } else {
                console.log("fail: " + resp.status);
                this.setState({
                    shuffleModalSendingRequest: false,
                    shuffleModalMessage: "Произошла ошибка. Повторите попытку позже"
                });
            }
        }).catch(err => {
            console.log(err);
            this.setState({
                shuffleModalSendingRequest: false,
                shuffleModalMessage: "Произошла ошибка. Повторите попытку позже"
            });
        });
    }

    onDeleteAccept() {
        this.setState({ deleteConfirmSendingRequest: true });
        fetch("api/queue?target=QUEUE&queue_name=" + this.props.queueName, { method: "delete" }).then(resp => {
            if (resp.status === 200) {
                this.setState({ showDeleteConfirm: false, deleteConfirmSendingRequest: false });
                window.location.reload();
                document.location.href = "/helios.html#/search";
            } else {
                console.log("fail: " + resp.status);
                this.setState({ showDeleteConfirm: false, deleteConfirmSendingRequest: false });
            }
        }).catch(err => {
            console.log(err);
            this.setState({
                deleteConfirmSendingRequest: false,
                deleteConfirmMessage: "Произошла ошибка. Повторите попытку позже"
            });
        });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a,
            _extends({}, this.props, { size: 'lg', 'aria-labelledby': 'queue-all-notice-modal-vcenter', centered: true }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Header,
                { closeButton: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Title,
                    { id: 'queue-all-notice-modal-vcenter' },
                    '\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F'
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'ul',
                    { className: 'col justify-content-center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { className: "text-center my-3", style: { listStyle: 'none' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'button',
                            { className: 'btn btn-outline-primary col-8',
                                onClick: () => this.setState({ showShuffleModal: true }) },
                            '\u041F\u0435\u0440\u0435\u043C\u0435\u0448\u0430\u0442\u044C'
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { className: "text-center my-3", style: { listStyle: 'none' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'button',
                            { className: 'btn btn-outline-danger col-8',
                                onClick: () => this.setState({ showDeleteConfirm: true }) },
                            '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0447\u0435\u0440\u0435\u0434\u044C'
                        )
                    )
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Footer,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                    { onClick: this.props.onHide, className: "btn-primary" },
                    '\u0417\u0430\u043A\u0440\u044B\u0442\u044C'
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_ConfirmModal_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
                sendingrequest: this.state.deleteConfirmSendingRequest ? 1 : 0,
                show: this.state.showDeleteConfirm,
                onHide: () => this.setState({ showDeleteConfirm: false }),
                message: this.state.deleteConfirmMessage,
                accept: () => this.onDeleteAccept(), decline: () => this.setState({ showDeleteConfirm: false }) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_ConfirmModal_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
                sendingrequest: this.state.shuffleModalSendingRequest ? 1 : 0,
                show: this.state.showShuffleModal,
                onHide: () => this.setState({ showShuffleModal: false }),
                message: this.state.shuffleModalMessage,
                accept: this.onShuffleClick, decline: () => this.setState({ showShuffleModal: false })
            })
        );
    }
}

/***/ }),

/***/ "./jsx/queues/QueueUser.jsx":
/*!**********************************!*\
  !*** ./jsx/queues/QueueUser.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueueUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_ConfirmModal_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ConfirmModal.jsx */ "./jsx/util/ConfirmModal.jsx");



class QueueUser extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            swapSendingRequest: false,
            showSwapConfirm: false,
            showNotificationModal: false,
            notificationModalShowMessage: ""
        };

        this.onSwapAccept = this.onSwapAccept.bind(this);
        this.deleteUserFromQueue = this.deleteUserFromQueue.bind(this);
    }

    onSwapAccept() {
        this.setState({ swapSendingRequest: true });
        fetch(`api/swap?queue_name=${this.props.queuename}&target=${this.props.username}`, { method: 'post' }).then(response => {
            if (response.status === 200) {
                this.setState({ showSwapConfirm: false });
                window.location.reload();
                return;
            } else if (response.status === 202) {
                this.setState({
                    showSwapConfirm: false,
                    showNotificationModal: true,
                    notificationModalShowMessage: "Ваша заявка отправлена!"
                });
            } else if (response.status === 400) {
                return response.json(); // handling continue
            } else {
                // TODO: WRITE SOMETHING ELSE ERROR STATUS CATCHING
                alert('Произошла ошибка. Fetch status : ' + response.status);
            }
            this.setState({ swapSendingRequest: false });
        }).then(resp => {
            if (resp === undefined) return;

            if (resp["error"] === "self_request") {
                this.setState({
                    showSwapConfirm: false,
                    showNotificationModal: true,
                    notificationModalShowMessage: "Вы не можете отправлять заявку себе!"
                });
            } else {
                this.setState({ showSwapConfirm: false });
            }
        }).catch(e => alert(e));
    }

    deleteUserFromQueue() {
        fetch(`/api/queue?queue_name=${this.props.queuename}&target=USER&username=${this.props.username}`, {
            method: 'delete'
        }).then(resp => {
            if (resp.status === 200) {
                this.props.onChange();
                return false;
            } else return resp.json();
        }).then(resp => {
            alert(resp['error'] + ": " + resp['error_description']);
        }).catch(e => console.log(e));
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'media text-muted pt-3' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: "sortable-user-handler mr-1 my-auto" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: "fa fa-th" })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: "mr-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: this.props.imgUrl,
                    className: 'dropdown-item img-fluid img-thumbnail rounded-circle p-0',
                    style: { width: "40px" }, alt: '...', width: "40px", height: "40px" })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'media-body pb-3 mb-0 small lh-125 border-bottom border-gray' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'd-flex justify-content-between align-items-center w-100' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'strong',
                        { className: 'text-gray-dark' },
                        this.props.fullname
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'dropdown show dropleft' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'span',
                            { role: 'button', id: 'dropdownMenuLink', 'data-toggle': 'dropdown', 'aria-haspopup': 'true',
                                'aria-expanded': 'false' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenuLink' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'div',
                                { className: 'dropdown-item' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: this.props.imgUrl,
                                    className: 'dropdown-item img-fluid img-thumbnail rounded-circle',
                                    alt: '...', width: "50px", height: "50px" })
                            ),
                            this.props.alreadyInQueue && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'button',
                                { className: 'dropdown-item', onClick: () => this.setState({ showSwapConfirm: true }) },
                                '\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F'
                            ),
                            this.props.isCanManage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'button',
                                { className: 'dropdown-item text-danger', onClick: this.deleteUserFromQueue },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: "fa fa-times mt-1" }),
                                ' ',
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'span',
                                    null,
                                    '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
                                )
                            )
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'span',
                    { className: 'd-block' },
                    this.props.username
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_ConfirmModal_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                sendingrequest: this.state.swapSendingRequest ? 1 : 0,
                show: this.state.showSwapConfirm,
                onHide: () => this.setState({ showSwapConfirm: false }),
                message: `Вы хотите поменяться местами с пользователем ${this.props.fullname} @ ${this.props.username}`,
                accept: () => this.onSwapAccept(), decline: () => this.setState({ showSwapConfirm: false }) }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_ConfirmModal_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                message: this.state.notificationModalShowMessage,
                show: this.state.showNotificationModal,
                accept: () => this.setState({ showNotificationModal: false }),
                decline: () => this.setState({ showNotificationModal: false })
            })
        );
    }
}

/***/ }),

/***/ "./jsx/queues/TeacherPanelModal.jsx":
/*!******************************************!*\
  !*** ./jsx/queues/TeacherPanelModal.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeacherPanelModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal.js */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button.js */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form.js */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../util/RoundedSpinner.jsx */ "./jsx/util/RoundedSpinner.jsx");
/* harmony import */ var react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Card.js */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _QueueNotification_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QueueNotification.jsx */ "./jsx/queues/QueueNotification.jsx");
/* harmony import */ var _util_TimeUtil_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../util/TimeUtil.js */ "./jsx/util/TimeUtil.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










class TeacherPanelModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    constructor(props) {
        super(props);

        this.state = {
            commentInputFocused: false,
            isCommentaryPrivate: false,
            commentaryInput: "",
            textUnderInput: "Комментарий может быть публичным или приватным",
            comments: []
        };

        this.addCommentary = this.addCommentary.bind(this);
        this.commentaryInputHandler = this.commentaryInputHandler.bind(this);
        this.fetchComments = this.fetchComments.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.fetchComments(newProps);
    }

    fetchComments(props) {

        if (props.currentUsers !== null && props.currentUsers.length > 0) fetch(`/api/commentaries?username=${props.currentUsers[0]['username']}`).then(resp => {
            if (resp.status === 200) {
                return resp.json();
            } else {
                alert(resp.status);
            }
        }).then(comments => this.setState({ comments: comments.reverse() }));
    }

    addCommentary() {
        console.log("message: " + this.state.commentaryInput + " " + this.state.isCommentaryPrivate);
        fetch(`/api/commentaries?username=${this.props.currentUsers[0]['username']}&text=${this.state.commentaryInput}&type=${this.state.isCommentaryPrivate ? "private" : "public"}`, { method: 'put' }).then(resp => {
            if (resp.status === 200) {
                this.setState({
                    commentInputFocused: false,
                    isCommentaryPrivate: false,
                    commentaryInput: "",
                    textUnderInput: "Комментарий может быть публичным или приватным"
                });

                this.fetchComments(this.props);
            } else {
                return resp.json();
            }
        }).then(resp => {
            this.setState({ textUnderInput: resp['error_description'] });
        }).catch(e => console.log(e));
    }

    commentaryInputHandler(event) {
        this.setState({ commentaryInput: event.target.value });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a,
                _extends({}, this.props, { size: 'lg', 'aria-labelledby': 'queue-all-notice-modal-vcenter', centered: true }),
                this.props.teacher !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Header,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Title,
                            { id: 'queue-all-notice-modal-vcenter' },
                            '\u041F\u0430\u043D\u0435\u043B\u044C \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F'
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h4',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'span',
                                {
                                    className: "text-secondary" },
                                '\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0439:'
                            ),
                            ' ',
                            this.props.teacher['user']['last_name']
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),
                        this.props.currentUsers === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            null,
                            '\u041D\u0435 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432'
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a,
                            { border: 'success', className: 'text-center' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
                                { className: "text-white bg-success font-weight-bold" },
                                '\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0430 \u043E\u0447\u0435\u0440\u0435\u0434\u0438'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Body,
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Title,
                                    null,
                                    this.props.currentUsers[0]['fullname']
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Text,
                                    { className: "font-weight-bold" },
                                    '\u0417\u0434\u0435\u0441\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B'
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'div',
                                    { className: "d-flex flex-row" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                                        { variant: 'secondary', className: "mx-1 ml-auto",
                                            onClick: this.props.onNextUser },
                                        '\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C'
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                                        { variant: 'success', className: "mx-1 mr-auto",
                                            onClick: this.props.onNextUser },
                                        '\u041F\u0440\u0438\u043D\u044F\u0442\u043E'
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'div',
                                    { className: "d-flex flex-row mt-3" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a,
                                        { className: "mx-auto" + " " + (this.state.commentInputFocused ? "w-100" : "w-sm-100 w-md-50"),

                                            onFocus: () => this.setState({ commentInputFocused: true })
                                        },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Group,
                                            { controlId: 'formBasicInput' },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Control, {
                                                type: 'text',
                                                placeholder: '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439',
                                                as: 'textarea',
                                                onInput: this.commentaryInputHandler,
                                                value: this.state.commentaryInput,
                                                style: { height: '40px' }
                                            }),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Text,
                                                { className: 'text-muted' },
                                                this.state.textUnderInput
                                            )
                                        ),
                                        this.state.commentInputFocused && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                            react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Group,
                                            { controlId: 'formBasicCheckbox', className: "d-flex flex-row float-right" },
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Check, {
                                                type: 'checkbox',
                                                label: '\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0439',
                                                onChange: evt => this.setState({ isCommentaryPrivate: evt.target.checked })
                                            }),
                                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                                react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                                                {
                                                    variant: "primary",
                                                    className: "mx-2",
                                                    size: "sm",
                                                    onClick: this.addCommentary
                                                },
                                                '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C'
                                            )
                                        )
                                    )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'ul',
                                    null,
                                    this.state.comments.map((x, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        'li',
                                        { key: i, style: { listStyle: 'none' } },
                                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueueNotification_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            author: x['author']['first_name'] + " " + x['author']['last_name'],
                                            message: x['text'],
                                            time: _util_TimeUtil_js__WEBPACK_IMPORTED_MODULE_7__["default"].getFormattedTime(x['creation_date'])
                                        })
                                    ))
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Footer,
                                { className: 'text-muted' },
                                '2 days ago'
                            )
                        ),
                        this.props.nextUser !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a,
                            { className: 'text-center mx-auto mt-3 w-75' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
                                null,
                                '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Body,
                                null,
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Title,
                                    null,
                                    this.props.nextUser['fullname']
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Text,
                                    { className: "font-weight-bold" },
                                    '\u041D\u043E\u043C\u0435\u0440 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B'
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Card_js__WEBPACK_IMPORTED_MODULE_5___default.a.Footer,
                                { className: 'text-muted' },
                                '16 days ago'
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Footer,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_2___default.a,
                            { onClick: this.props.onHide, className: "btn-primary" },
                            '\u0417\u0430\u043A\u0440\u044B\u0442\u044C'
                        )
                    )
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)
            )
        );
    }
}

/***/ }),

/***/ "./jsx/util/ConfirmModal.jsx":
/*!***********************************!*\
  !*** ./jsx/util/ConfirmModal.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal.js */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../util/RoundedSpinner.jsx */ "./jsx/util/RoundedSpinner.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





class ConfirmModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a,
            _extends({}, this.props, { size: 'md', 'aria-labelledby': 'queue-all-notice-modal-vcenter', centered: true }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Header,
                { closeButton: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Title,
                    { id: 'queue-all-notice-modal-vcenter' },
                    this.props.title
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body,
                null,
                this.props.sendingrequest ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "mx-auto text-center text-primary" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'ul',
                    { className: 'col justify-content-center' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { className: "text-center my-4", style: { listStyle: 'none' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'p',
                            {
                                className: "" },
                            this.props.message
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'li',
                        { className: "text-center my-4", style: { listStyle: 'none' } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'button',
                            { className: 'btn btn-primary col-4 mx-1', onClick: this.props.accept },
                            '\u0414\u0430'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'button',
                            { className: 'btn btn-secondary col-4 mx-1', onClick: this.props.decline },
                            '\u041E\u0442\u043C\u0435\u043D\u0430'
                        )
                    )
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/util/GrowingSpinner.jsx":
/*!*************************************!*\
  !*** ./jsx/util/GrowingSpinner.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GrowingSpinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class GrowingSpinner extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            { className: "d-flex justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "spinner-grow spinner-grow-lg text-muted", style: { "width": "3rem", "height": "3rem" },
                    role: "status" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    { className: "sr-only" },
                    "Loading..."
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
//# sourceMappingURL=6.bundle.js.map