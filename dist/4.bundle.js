(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./jsx/user-profile/Cards.jsx":
/*!************************************!*\
  !*** ./jsx/user-profile/Cards.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_TimeUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/TimeUtil.js */ "./jsx/util/TimeUtil.js");



class Cards extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return this.props.data.map((x, i) => {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                { key: i, style: { listStyle: 'none' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'card mx-auto my-1', 'data-aos': "fade-up" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'card-body' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'h4',
                            { className: 'card-title', style: { backgroundColor: x["category"]['color'] } },
                            x["category"]["tag"]
                        ),
                        x["text"],
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('hr', null),
                        _util_TimeUtil_js__WEBPACK_IMPORTED_MODULE_1__["default"].getFormattedTime(x["date"])
                    )
                )
            );
        });
    }
}

/***/ }),

/***/ "./jsx/user-profile/ProfileNavbar.jsx":
/*!********************************************!*\
  !*** ./jsx/user-profile/ProfileNavbar.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class ProfileNavbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "nav",
            { className: "navbar navbar-expand-lg navbar-light bg-light" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "a",
                { className: "navbar-brand", href: "#/myprofile" },
                "\u041C\u043E\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C"
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "button",
                { className: "navbar-toggler", type: "button", "data-toggle": "collapse",
                    "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false", "aria-label": "Toggle navigation" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "fa fa-ellipsis-h" })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "ul",
                    { className: "navbar-nav ml-auto mr-3" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        { className: "nav-item" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { className: "nav-link", href: "#/myprofile" },
                            "\u041E\u0447\u0435\u0440\u0435\u0434\u0438 "
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        { className: "nav-item" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { className: "nav-link", href: "#/myprofile/commentaries" },
                            "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0435\u0439"
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "li",
                        { className: "nav-item" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "a",
                            { className: "nav-link", href: "#/profile-settings" },
                            "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
                        )
                    )
                )
            )
        );
    }

}

/***/ }),

/***/ "./jsx/user-profile/Tables.jsx":
/*!*************************************!*\
  !*** ./jsx/user-profile/Tables.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tables; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Timeline_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline.jsx */ "./jsx/user-profile/Timeline.jsx");




class Tables extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'row mx-auto' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'tab-content text-center mx-auto w-100', id: 'nav-tabContent' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'tab-pane fade show active', id: 'list-home', role: 'tabpanel',
                            'aria-labelledby': 'list-home-list' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            { className: 'list-group mx-auto px-0 w-100 pt-3' },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'a',
                                { href: '#collapseTimeline',
                                    className: 'list-group-item list-group-item-action', 'data-toggle': 'collapse',
                                    role: 'button', 'aria-expanded': 'false', 'aria-controls': 'collapseProgrammingJournals' },
                                '\u0422\u0430\u0439\u043C\u043B\u0430\u0439\u043D'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'div',
                                { className: 'collapse', id: 'collapseTimeline' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'div',
                                    { className: 'card card-body' },
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Timeline_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], { data: this.props.timelineData })
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/user-profile/Timeline.jsx":
/*!***************************************!*\
  !*** ./jsx/user-profile/Timeline.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Timeline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button.js */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_user_profile_timeline_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../style/user-profile/timeline.css */ "./style/user-profile/timeline.css");
/* harmony import */ var _style_user_profile_timeline_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_user_profile_timeline_css__WEBPACK_IMPORTED_MODULE_2__);





function getFormattedTime(dateISO) {
    let a = dateISO.split(/[^0-9]/);
    let creationDate = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]));

    const DATE = creationDate.getDate();
    const MONTH = creationDate.toLocaleString('default', { month: 'short' });
    const HOURS = creationDate.getHours();
    const MINUTES = creationDate.getMinutes();
    const SECONDS = creationDate.getSeconds();
    return `${HOURS}:${MINUTES}:${SECONDS} ${DATE} ${MONTH}`;
}

const TimelineItem = ({ data }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'timeline-item' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { className: 'timeline-item-content' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'span',
            { className: 'tag  w-100 text-center mb-1', style: { background: data.category.color } },
            data.category.tag
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'time',
            null,
            getFormattedTime(data.date)
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'p',
            null,
            data.text
        ),
        data.link && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'a',
            {
                href: data.link.url,
                target: '_blank',
                rel: 'noopener noreferrer'
            },
            data.link.text
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('span', { className: 'circle' })
    )
);

class Timeline extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return this.props.data.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'timeline-container' },
                this.props.data.map((data, idx) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimelineItem, { data: data, key: idx }))
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: "mx-auto text-center mt-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_1___default.a,
                    { variant: 'outline-dark' },
                    '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435'
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/user-profile/UserCard.jsx":
/*!***************************************!*\
  !*** ./jsx/user-profile/UserCard.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_user_profile_user_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../style/user-profile/user-card.css */ "./style/user-profile/user-card.css");
/* harmony import */ var _style_user_profile_user_card_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_user_profile_user_card_css__WEBPACK_IMPORTED_MODULE_1__);



class UserCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'card mx-auto' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: this.props.userImgUrl,
                className: 'img-fluid img-thumbnail rounded-circle mx-auto mt-4 w-50',
                alt: '...' }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'card-body' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h4',
                    { className: 'card-title mt-4' },
                    this.props.fullname
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h5',
                    { className: 'text-muted' },
                    this.props.username
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "socials" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'svg',
                        { viewBox: '0 0 366 372', xmlns: 'http://www.w3.org/2000/svg', style: { height: "18px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
                            d: 'M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z',
                            id: 'Shape', fill: '#EA4335' }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
                            d: 'M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z',
                            id: 'Shape', fill: '#FBBC05' }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
                            d: 'M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z',
                            id: 'Shape', fill: '#4285F4' }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
                            d: 'M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z',
                            fill: '#34A853' })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'svg',
                        { xmlns: 'http://www.w3.org/2000/svg', style: { height: "18px" }, viewBox: '32 32 960 960' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
                            d: 'M179.928 32h664.144C925.767 32 992 98.23 992 179.929v664.143C992 925.768 925.767 992 844.072 992H179.928C98.23 992 32 925.768 32 844.071V179.929C32 98.23 98.23 32 179.928 32',
                            fill: '#4c75a3' }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
                            d: 'M503.946 704.029h39.269s11.859-1.307 17.923-7.831c5.573-5.996 5.396-17.249 5.396-17.249s-.769-52.692 23.683-60.452c24.113-7.647 55.07 50.925 87.88 73.449 24.812 17.039 43.667 13.31 43.667 13.31l87.739-1.227s45.895-2.832 24.132-38.917c-1.782-2.947-12.679-26.693-65.238-75.48-55.02-51.062-47.644-42.801 18.626-131.128 40.358-53.79 56.49-86.628 51.449-100.691-4.803-13.399-34.489-9.86-34.489-9.86l-98.786.611s-7.328-.998-12.756 2.25c-5.31 3.177-8.717 10.599-8.717 10.599s-15.642 41.622-36.486 77.024c-43.988 74.693-61.58 78.647-68.771 74.002-16.729-10.811-12.549-43.422-12.549-66.596 0-72.389 10.98-102.57-21.381-110.384-10.737-2.591-18.646-4.305-46.11-4.585-35.25-.358-65.078.108-81.971 8.384-11.239 5.504-19.91 17.766-14.626 18.472 6.53.869 21.313 3.99 29.152 14.655 10.126 13.776 9.772 44.703 9.772 44.703s5.818 85.213-13.585 95.795c-13.314 7.26-31.582-7.561-70.8-75.327-20.091-34.712-35.265-73.085-35.265-73.085s-2.922-7.17-8.141-11.008c-6.33-4.65-15.175-6.124-15.175-6.124l-93.876.613s-14.09.394-19.267 6.521c-4.606 5.455-.368 16.725-.368 16.725s73.49 171.942 156.711 258.592c76.315 79.454 162.958 74.239 162.958 74.239',
                            fill: '#fff' })
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "badges" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h5',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            { className: 'badge badge-success' },
                            'Teapot'
                        )
                    )
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/user-profile/UserProfile.jsx":
/*!******************************************!*\
  !*** ./jsx/user-profile/UserProfile.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserCard_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCard.jsx */ "./jsx/user-profile/UserCard.jsx");
/* harmony import */ var _Tables_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tables.jsx */ "./jsx/user-profile/Tables.jsx");
/* harmony import */ var _Cards_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards.jsx */ "./jsx/user-profile/Cards.jsx");
/* harmony import */ var _ProfileNavbar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileNavbar.jsx */ "./jsx/user-profile/ProfileNavbar.jsx");






__webpack_require__(/*! ./../../style/user-profile/carousel-colors.css */ "./style/user-profile/carousel-colors.css");

class UserProfile extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingUserInfo: true,
            username: "loading...",
            fullname: "loading...",
            errorOccurred: false,
            swapRequests: [],
            userImgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg",
            timeline: []
        };

        this.fetchUserInfo = this.fetchUserInfo.bind(this);
    }

    componentDidMount() {
        if (this.props.user === null) this.setState({ errorOccurred: true });else this.fetchUserInfo(this.props);

        fetch("api/timeline").then(resp => resp.json()).then(data => this.setState({ timeline: data })).catch(err => console.log(err));
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user === null) this.setState({ errorOccurred: true });else this.fetchUserInfo(newProps);
    }

    fetchUserInfo(props) {
        this.setState({
            fetchingUserInfo: false,
            username: props.user["user"]["username"],
            fullname: props.user["user"]["first_name"] + " " + props.user["user"]["last_name"],
            userImgUrl: props.user["user"]["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : props.user["user"]["contact_details"]["img"],
            swapRequests: props.user["swap_requests"]
        });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileNavbar_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'justify-content-between col-12 mx-auto d-flex flex-column flex-lg-row' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'col-sm-8 col-md-8 col-lg-4 mx-auto d-flex', 'data-aos': "fade-left", style: { maxHeight: '550px' } },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserCard_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        username: this.state.username,
                        fullname: this.state.fullname == null ? "" : this.state.fullname,
                        userImgUrl: this.state.userImgUrl
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'd-none d-lg-block col-md-8 col-8 ', 'data-aos': "fade-right" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tables_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { timelineData: this.state.timeline })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'd-flex flex-column d-lg-none mt-3 text-center ', 'data-aos': "fade-up" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h3',
                        null,
                        'Timeline'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], { data: this.state.timeline })
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./style/user-profile/carousel-colors.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./style/user-profile/carousel-colors.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".carousel-control-prev-icon {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\") !important;\r\n    top: -30px;\r\n    position: absolute;\r\n}\r\n\r\n.carousel-control-next-icon {\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\") !important;\r\n    top: -30px;\r\n    position: absolute;\r\n}\r\n\r\n.carousel-indicators li {\r\n    display: inline-block;\r\n\r\n    background-color: #7386D5;\r\n\r\n}\r\n.carousel-indicators .active {\r\n\r\n    background-color: #7386D5;\r\n}\r\n\r\n.carousel-indicators {\r\n    top: 0%;\r\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./style/user-profile/timeline.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./style/user-profile/timeline.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato);", ""]);
// Module
exports.push([module.i, "h1 {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.timeline-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: relative;\r\n    margin: 0;\r\n}\r\n\r\n.timeline-container::after {\r\n    background-color: #e17b77;\r\n    content: '';\r\n    position: absolute;\r\n    left: calc(50% - 2px);\r\n    width: 4px;\r\n    height: 100%;\r\n}\r\n\r\n.timeline-item {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    padding-right: 30px;\r\n    position: relative;\r\n    margin: 10px 0;\r\n    width: 50%;\r\n}\r\n\r\n.timeline-item:nth-child(odd) {\r\n    align-self: flex-end;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    padding-left: 30px;\r\n    padding-right: 0;\r\n}\r\n\r\n.timeline-item-content {\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-align: end;\r\n            align-items: flex-end;\r\n    padding: 15px;\r\n    position: relative;\r\n    width: 400px;\r\n    max-width: 70%;\r\n    text-align: right;\r\n}\r\n\r\n.timeline-item-content::after {\r\n    content: ' ';\r\n    background-color: #fff;\r\n    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);\r\n    position: absolute;\r\n    right: -7.5px;\r\n    top: calc(50% - 7.5px);\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n.timeline-item:nth-child(odd) .timeline-item-content {\r\n    text-align: left;\r\n    -webkit-box-align: start;\r\n            align-items: flex-start;\r\n}\r\n\r\n.timeline-item:nth-child(odd) .timeline-item-content::after {\r\n    right: auto;\r\n    left: -7.5px;\r\n    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.timeline-item-content .tag {\r\n    color: #fff;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    top: 5px;\r\n    left: 5px;\r\n    letter-spacing: 1px;\r\n    padding: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.timeline-item:nth-child(odd) .timeline-item-content .tag {\r\n    left: auto;\r\n    right: 5px;\r\n}\r\n\r\n.timeline-item-content time {\r\n    color: #777;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n}\r\n\r\n.timeline-item-content p {\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    margin: 15px 0;\r\n    max-width: 250px;\r\n}\r\n\r\n.timeline-item-content a {\r\n    color: #333;\r\n    text-decoration: none;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\n.timeline-item-content a::after {\r\n    content: ' ►';\r\n    font-size: 12px;\r\n}\r\n\r\n.timeline-item-content .circle {\r\n    background-color: #fff;\r\n    border: 3px solid #e17b77;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: calc(50% - 10px);\r\n    right: -40px;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 100;\r\n}\r\n\r\n.timeline-item:nth-child(odd) .timeline-item-content .circle {\r\n    right: auto;\r\n    left: -40px;\r\n}\r\n\r\n@media only screen and (max-width: 1023px) {\r\n    .timeline-item-content {\r\n        max-width: 100%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .timeline-item-content,\r\n    .timeline-item:nth-child(odd) .timeline-item-content {\r\n        padding: 15px 10px;\r\n        text-align: center;\r\n        -webkit-box-align: center;\r\n                align-items: center;\r\n    }\r\n\r\n    .timeline-item-content .tag {\r\n        width: calc(100% - 10px);\r\n        text-align: center;\r\n    }\r\n\r\n    .timeline-item-content time {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    .timeline-item-content a {\r\n        text-decoration: underline;\r\n    }\r\n\r\n    .timeline-item-content a::after {\r\n        display: none;\r\n    }\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./style/user-profile/user-card.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./style/user-profile/user-card.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".socials > * {\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n}\r\n\r\n.badges {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top : 10px;\r\n}\r\n\r\n.badges > h5 > .badge{\r\n    margin: 2px;\r\n}", ""]);


/***/ }),

/***/ "./style/user-profile/carousel-colors.css":
/*!************************************************!*\
  !*** ./style/user-profile/carousel-colors.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./carousel-colors.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./style/user-profile/carousel-colors.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./style/user-profile/timeline.css":
/*!*****************************************!*\
  !*** ./style/user-profile/timeline.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./timeline.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./style/user-profile/timeline.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./style/user-profile/user-card.css":
/*!******************************************!*\
  !*** ./style/user-profile/user-card.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./user-card.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./style/user-profile/user-card.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map