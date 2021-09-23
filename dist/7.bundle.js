(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./jsx/user-profile-settings/UserProfileSettingsPage.jsx":
/*!***************************************************************!*\
  !*** ./jsx/user-profile-settings/UserProfileSettingsPage.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfileSettingsPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserProfileSettingsPageContent_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfileSettingsPageContent.jsx */ "./jsx/user-profile-settings/UserProfileSettingsPageContent.jsx");



class UserProfileSettingsPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserProfileSettingsPageContent_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], { user: this.props.user });
    }
}

/***/ }),

/***/ "./jsx/user-profile-settings/UserProfileSettingsPageContent.jsx":
/*!**********************************************************************!*\
  !*** ./jsx/user-profile-settings/UserProfileSettingsPageContent.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfileSettingsPageContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Spinner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Spinner.js */ "./node_modules/react-bootstrap/Spinner.js");
/* harmony import */ var react_bootstrap_Spinner_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Spinner_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_profile_UserCard_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user-profile/UserCard.jsx */ "./jsx/user-profile/UserCard.jsx");
/* harmony import */ var react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form.js */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button.js */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_4__);






class UserProfileSettingsPageContent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchingUserInfo: true,
            username: "loading...",
            fullname: "loading...",
            errorOccurred: false,
            userImgUrl: "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg",
            imgInput: "",
            nicknameInput: "",
            imgInputDescription: "Размер изображения должен быть меньше, чем 1000х1000",
            nicknameInputDescription: ""
        };

        this.changeImageButtonClicked = this.changeImageButtonClicked.bind(this);
        this.changeUsernameButtonClicked = this.changeUsernameButtonClicked.bind(this);
        this.handleImageInput = this.handleImageInput.bind(this);
        this.fetchUserInfo = this.fetchUserInfo.bind(this);

        this.handleNicknameInput = this.handleNicknameInput.bind(this);
    }

    componentDidMount() {
        if (this.props.user !== null) this.fetchUserInfo(this.props);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user !== null) this.fetchUserInfo(newProps);
    }

    fetchUserInfo(props) {
        if (props.user !== null) this.setState({
            fetchingUserInfo: false,
            username: props.user["user"]["username"],
            fullname: props.user["user"]["first_name"] + " " + props.user["user"]["last_name"],
            userImgUrl: props.user["user"]["contact_details"]["img"] === null ? "https://i.pinimg.com/564x/10/48/bb/1048bb24cfd89080238940e977c2936d.jpg" : props.user["user"]["contact_details"]["img"],
            swapRequests: props.user["swap_requests"]
        });
    }

    changeImageButtonClicked() {
        if (this.state.imgInput === "") return;
        fetch("api/settings/" + this.state.username + `?property=img&value=${this.state.imgInput}`, { method: 'put' }).then(resp => {
            if (resp.status === 200) {
                window.location.reload();
            }

            return resp.json();
        }).then(errorData => this.setState({
            imgInputDescription: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: "text-danger" },
                '\u041E\u0448\u0438\u0431\u043A\u0430: ',
                errorData["error_description"]
            )
        }));
    }

    changeUsernameButtonClicked() {
        if (this.state.nicknameInput === "") return;
        fetch("api/settings/" + this.state.username + `?property=username&value=${this.state.nicknameInput}`, { method: 'put' }).then(resp => {
            if (resp.status === 200) {
                window.location.reload();
            }

            return resp.json();
        }).then(errorData => this.setState({
            nicknameInputDescription: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'span',
                { className: "text-danger" },
                '\u041E\u0448\u0438\u0431\u043A\u0430: ',
                errorData["error_description"]
            )
        }));
    }

    handleImageInput(event) {
        this.setState({ imgInput: event.target.value });
    }

    handleNicknameInput(event) {
        this.setState({ nicknameInput: event.target.value });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { className: 'justify-content-between col-12 mx-auto' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'col-12 col-md-10 mx-auto d-flex flex-column flex-md-row justify-content-around', 'data-aos': "fade-down" },
                    this.state.fetchingUserInfo ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Spinner_js__WEBPACK_IMPORTED_MODULE_1___default.a, { animation: 'border', size: "lg", style: { width: '3rem', height: '3rem', marginTop: '150px' }, className: "my-auto" }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_profile_UserCard_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        username: this.state.username,
                        fullname: this.state.fullname,
                        userImgUrl: this.state.userImgUrl
                    }),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: "settings" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Group,
                                { controlId: 'formBasicUrl' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Label,
                                    null,
                                    'Image URL'
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Control, { type: 'url', placeholder: 'paste link here',
                                    onChange: this.handleImageInput,
                                    value: this.state.imgInput }),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Text,
                                    { className: 'text-muted' },
                                    this.state.imgInputDescription
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    'button',
                                    { className: "btn btn-primary", type: 'button',
                                        onClick: this.changeImageButtonClicked },
                                    '\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440'
                                )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Group,
                                { controlId: 'formBasicText' },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Label,
                                    null,
                                    'New nickname'
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Control, { type: 'text', placeholder: '\u041D\u043E\u0432\u044B\u0439 \u043D\u0438\u043A\u043D\u0435\u0439\u043C',
                                    onChange: this.handleNicknameInput,
                                    value: this.state.nicknameInput
                                })
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Form_js__WEBPACK_IMPORTED_MODULE_3___default.a.Text,
                                { className: 'text-muted' },
                                this.state.nicknameInputDescription
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_bootstrap_Button_js__WEBPACK_IMPORTED_MODULE_4___default.a,
                                { variant: 'primary', type: 'button', onClick: this.changeUsernameButtonClicked },
                                '\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0438\u043A\u043D\u0435\u0439\u043C'
                            )
                        )
                    )
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

/***/ "./node_modules/dom-helpers/util/camelize.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/util/camelize.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/Spinner.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/Spinner.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/ThemeProvider.js");

var Spinner = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      animation = _ref.animation,
      size = _ref.size,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "animation", "size", "children", "as", "className"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'spinner');
  var bsSpinnerPrefix = bsPrefix + "-" + animation;
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsSpinnerPrefix, size && bsSpinnerPrefix + "-" + size, variant && "text-" + variant)
  }), children);
});

Spinner.displayName = 'Spinner';
var _default = Spinner;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/utils/createWithBsPrefix.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap/utils/createWithBsPrefix.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _camelize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/util/camelize */ "./node_modules/dom-helpers/util/camelize.js"));

var _ThemeProvider = __webpack_require__(/*! ../ThemeProvider */ "./node_modules/react-bootstrap/ThemeProvider.js");

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = _react.default.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["className", "bsPrefix", "as"]);
    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);
    return _react.default.createElement(Tag, (0, _extends2.default)({
      ref: ref,
      className: (0, _classnames.default)(className, resolvedPrefix)
    }, props));
  });

  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

module.exports = exports["default"];

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
//# sourceMappingURL=7.bundle.js.map