(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./jsx/creation/CreateQueuePage.jsx":
/*!******************************************!*\
  !*** ./jsx/creation/CreateQueuePage.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateQueuePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../util/RoundedSpinner.jsx */ "./jsx/util/RoundedSpinner.jsx");
/* harmony import */ var _PriorityPickModal_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriorityPickModal.jsx */ "./jsx/creation/PriorityPickModal.jsx");



__webpack_require__(/*! ./../../style/form/main.css */ "./style/form/main.css");

class CreateQueuePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreateQueuePageContent, null);
    }

}

class CreateQueuePageContent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {

    constructor(props) {
        super(props);
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleFullnameInput = this.handleFullnameInput.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.privateCheckClick = this.privateCheckClick.bind(this);
        this.autoCheckClick = this.autoCheckClick.bind(this);
        this.handleWeekSelect = this.handleWeekSelect.bind(this);
        this.handleDaySelect = this.handleDaySelect.bind(this);

        this.state = {
            "sending": false,
            "successful": false,
            "fullname": "",
            "queueName": "",
            "inputNameClass": "",
            "submitButtonClass": "disabled",
            "collapseTarget": "",
            "collapseComponentId": "collapseSend", "queueNameForCollapse": "",
            "auto": false,
            "private": false,
            "password": "",
            "passwordClass": "",
            "generationType": "two_week",
            "generationDay": "monday",
            "showPriorityModal": false
        };
    }

    sendRequest() {
        if (this.state.submitButtonClass === "disabled" || this.state.private && this.state.password === "") {
            return;
        }
        this.setState({
            "sending": true, "collapseTarget": "", "collapseComponentId": "collapseSendOpened",
            "queueNameForCollapse": this.state.fullname
        });
        let password = this.state.private ? "password=" + this.state.password + "&" : "";
        let auto = this.state.auto ? "&generation_type=" + this.state.generationType : "";
        fetch("api/queue?" + "queue_name=" + this.state.queueName + "&" + "fullname=" + this.state.fullname + "&" + password + auto, { "method": "post" }).then(response => {

            if (response.ok) {
                this.setState({ "successful": true });
                window.location.reload();
            } else {
                this.setState({ "successful": false });
            }

            this.setState({ "sending": false });
        }).catch(err => {
            this.setState({ "sending": false });
            console.log("Error while sending request : " + err);
        });
    }

    handleNameInput(event) {
        if (/^[a-zA-Z0-9-_]+$/.test(event.target.value)) {
            if (/[^\s]+/.test(document.getElementById("inputFullname").value) && (!this.state.private || /[^\s]+/.test(this.state.password))) {
                this.setState({
                    "inputNameClass": "is-valid",
                    "submitButtonClass": "",
                    "collapseTarget": "#collapseSend"
                });
            } else {
                this.setState({ "inputNameClass": "is-valid", "submitButtonClass": "disabled", "collapseTarget": "" });
            }
        } else {
            this.setState({ "inputNameClass": "is-invalid", "submitButtonClass": "disabled", "collapseTarget": "" });
        }
        this.setState({ "queueName": event.target.value });

        fetch("api/check?check=queue_exist&queue_name=" + event.target.value).then(resp => resp.json()).then(data => {
            if (data["exist"] === true) {
                this.setState({
                    "inputNameClass": "is-invalid",
                    "submitButtonClass": "disabled",
                    "collapseTarget": ""
                });
            }
        }).catch(err => console.log(err));
    }

    handleFullnameInput(event) {
        if (/[^\s]+/.test(event.target.value) && this.state.inputNameClass === "is-valid" && (!this.state.private || /[^\s]+/.test(this.state.password))) {
            this.setState({ "submitButtonClass": "", "collapseTarget": "#collapseSend" });
        } else {
            this.setState({ "submitButtonClass": "disabled", "collapseTarget": "" });
        }
        this.setState({ "fullname": event.target.value });
    }

    handlePasswordInput(event) {

        if (/[^\s]+/.test(event.target.value)) {
            this.setState({ "passwordClass": "is-valid" });
        } else {
            this.setState({ "passwordClass": "is-invalid" });
        }

        if (/[^\s]+/.test(document.getElementById("inputFullname").value) && /[^\s]+/.test(document.getElementById("inputName").value) && /[^\s]+/.test(event.target.value)) {
            this.setState({ "submitButtonClass": "", "collapseTarget": "#collapseSend" });
        } else {
            this.setState({ "submitButtonClass": "disabled", "collapseTarget": "" });
        }

        this.setState({ "password": event.target.value });
    }

    privateCheckClick(event) {
        this.setState({ "private": event.target.checked });
        if (/[^\s]+/.test(document.getElementById("inputFullname").value) && /[^\s]+/.test(document.getElementById("inputName").value) && (!event.target.checked || /[^\s]+/.test(this.state.password))) {
            this.setState({ "submitButtonClass": "", "collapseTarget": "#collapseSend" });
        } else {
            this.setState({ "submitButtonClass": "disabled", "collapseTarget": "" });
        }
    }

    autoCheckClick(event) {
        this.setState({ "auto": event.target.checked });
    }

    handleWeekSelect(event) {
        this.setState({ "generationType": event.target.value });
    }

    handleDaySelect(event) {
        this.setState({ "generationDay": event.target.value });
    }

    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'form',
                { className: 'form-signin' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'text-center mb-4' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h1',
                        { className: 'display mb-3 font-weight-normal' },
                        'HELIOS'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        '\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 ',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'a',
                            {
                                href: 'https://apploidx.github.io/helios-doc/wiki/usage/queue-creation.html',
                                className: 'text-primary' },
                            '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E'
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'form-group', 'data-aos': "slide-up", 'data-aos-duration': 800 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text', id: 'inputName', className: "form-control " + this.state.inputNameClass,
                        placeholder: '\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0438\u043C\u044F \u0434\u043B\u044F \u0441\u0441\u044B\u043B\u043A\u0438', name: 'queueName', value: this.state.queueName,
                        onChange: this.handleNameInput, required: true, autoFocus: true })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'form-group', 'data-aos': "slide-up", 'data-aos-duration': 1200 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text', id: 'inputFullname', className: 'form-control', name: 'fullname',
                        value: this.state.fullname, placeholder: '\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u043E\u0447\u0435\u0440\u0435\u0434\u0438',
                        onChange: this.handleFullnameInput, required: true })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'row justify-content-center justify-content-between ml-2', 'data-aos': 'flip-up', 'data-aos-delay': 400 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'form-check form-group col-auto' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'form-check-input', type: 'checkbox', value: '', id: 'privateCheck',
                            onClick: this.privateCheckClick }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'label',
                            { className: 'form-check-label', htmlFor: 'privateCheck' },
                            '\u041F\u0440\u0438\u0432\u0430\u0442\u043D\u0430\u044F'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'span',
                            { className: "ml-1" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: "fa fa-question-circle", 'data-toggle': "tooltip", title: "Очередь с паролью" })
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'form-check form-group col-auto' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { className: 'form-check-input', type: 'checkbox', value: '', id: 'autoCheck',
                            onClick: this.autoCheckClick }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'label',
                            { className: 'form-check-label', htmlFor: 'autoCheck' },
                            '\u0410\u0432\u0442\u043E\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u043C\u0430\u044F'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'span',
                            { className: "ml-1" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('i', { className: "fa fa-question-circle", 'data-toggle': 'tooltip',
                                title: "Очередь которая будет автоматически генерироваться" })
                        )
                    )
                ),
                this.state.private ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'form-group' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', { type: 'text', id: 'queuePassword', className: "form-control " + this.state.passwordClass,
                        name: 'Password', value: this.state.password, placeholder: '\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0447\u0435\u0440\u0435\u0434\u0438',
                        onChange: this.handlePasswordInput, required: true })
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),
                this.state.auto ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'form-group' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'label',
                            { htmlFor: 'autoTimeSelect' },
                            '\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438'
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'select',
                            { className: 'form-control', id: 'autoTimeSelect', onChange: this.handleWeekSelect },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: "two_week", defaultChecked: true },
                                '\u041A\u0430\u0436\u0434\u044B\u0435 \u0434\u0432\u0435 \u043D\u0435\u0434\u0435\u043B\u0438'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: "one_week" },
                                '\u041A\u0430\u0436\u0434\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E'
                            )
                        )
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'form-group mt-1' },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'select',
                            { className: "form-control", id: 'autoDaySelect', onChange: this.handleDaySelect },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: 'monday', defaultChecked: true },
                                '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: 'tuesday' },
                                '\u0412\u0442\u043E\u0440\u043D\u0438\u043A'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: 'wednesday' },
                                '\u0421\u0440\u0435\u0434\u0430'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: 'thursday' },
                                '\u0427\u0435\u0442\u0432\u0435\u0440\u0433'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: 'friday' },
                                '\u041F\u044F\u0442\u043D\u0438\u0446\u0430'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: 'saturday' },
                                '\u0421\u0443\u0431\u0431\u043E\u0442\u0430'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'option',
                                { value: 'sunday' },
                                '\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435'
                            )
                        )
                    )
                ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', null),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: "form-group d-flex justify-content-between" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'button',
                        { className: "btn btn-outline-secondary", type: 'button',
                            onClick: () => this.setState({ showPriorityModal: true }) },
                        '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043E\u0432'
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'button',
                        { className: "btn btn-primary float-right " + this.state.submitButtonClass, type: 'button',
                            'data-toggle': 'collapse', 'data-target': this.state.collapseTarget, 'aria-expanded': 'false',
                            'aria-controls': 'collapseSend', onClick: this.sendRequest },
                        '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriorityPickModal_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { onHide: () => this.setState({ showPriorityModal: false }),
                    show: this.state.showPriorityModal }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'div',
                    { className: 'form-group collapse', id: this.state.collapseComponentId },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'div',
                        { className: 'card card-body text-center' },
                        this.state.sending ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'div',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'p',
                                null,
                                '\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0447\u0435\u0440\u0435\u0434\u0438'
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_util_RoundedSpinner_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null)
                        ) : this.state.successful ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'p',
                            { className: 'text-success' },
                            '\u041E\u0447\u0435\u0440\u0435\u0434\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430'
                        ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'p',
                            { className: 'text-danger' },
                            '\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0447\u0435\u0440\u0435\u0434\u044C. ',
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
                            this.state.queueNameForCollapse
                        )
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    { className: 'mt-5 mb-3 text-muted text-center' },
                    '\xA9 ITMO 2019'
                )
            )
        );
    }
}

/***/ }),

/***/ "./jsx/creation/PriorityInputForm.jsx":
/*!********************************************!*\
  !*** ./jsx/creation/PriorityInputForm.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriorityInputForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class PriorityInputForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            { className: "row mt-1", id: this.props.formId },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "col-8" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", className: "form-control", placeholder: "\u041A\u0440\u0438\u0442\u0435\u0440\u0438\u0439" })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "col-3" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", className: "form-control", placeholder: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442" })
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "button",
                { className: "btn btn-link col-1 text-danger", onClick: this.props.onDelete },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
                    className: "fa fa-trash" })
            )
        );
    }
}

/***/ }),

/***/ "./jsx/creation/PriorityPickModal.jsx":
/*!********************************************!*\
  !*** ./jsx/creation/PriorityPickModal.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriorityPickModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal.js */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PriorityInputForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriorityInputForm.jsx */ "./jsx/creation/PriorityInputForm.jsx");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






class PriorityPickModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
        super(props);
        this.state = { forms: [], fromIds: 0 };
        PriorityPickModal.onDelete = PriorityPickModal.onDelete.bind(this);
        this.addPriority = this.addPriority.bind(this);
    }

    static onDelete(event) {
        $("#" + event.currentTarget.parentNode.id).remove();
    }

    addPriority() {
        let stateForms = this.state.forms;
        let id = this.state.fromIds;
        stateForms.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriorityInputForm_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { formId: "priority_input_form_" + id, onDelete: PriorityPickModal.onDelete }));
        this.setState({ forms: stateForms, formIds: id + 1 });
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
                    '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043E\u0432'
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Body,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriorityInputForm_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { formId: "priority_input_formx1", onDelete: PriorityPickModal.onDelete }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriorityInputForm_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { formId: "priority_input_formx2", onDelete: PriorityPickModal.onDelete }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PriorityInputForm_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], { formId: "priority_input_formx3", onDelete: PriorityPickModal.onDelete }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'button',
                    { className: "btn btn-link", onClick: this.addPriority },
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u0430'
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a.Footer,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_bootstrap_Modal_js__WEBPACK_IMPORTED_MODULE_1___default.a,
                    { onClick: this.props.onHide, className: "btn-primary" },
                    '\u0417\u0430\u043A\u0440\u044B\u0442\u044C'
                )
            )
        );
    }

}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@restart/context/forwardRef.js":
/*!*****************************************************!*\
  !*** ./node_modules/@restart/context/forwardRef.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? renderFn.name || renderFn.displayName : _ref$displayName;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  return Object.assign(_react.default.forwardRef || !allowFallback ? _react.default.forwardRef(render) : function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./style/form/main.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./style/form/main.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n#contentReact {\r\n    margin: auto;\r\n}\r\n\r\n.form-signin {\r\n    width: 100%;\r\n    max-width: 420px;\r\n    padding: 15px;\r\n    margin: auto;\r\n}\r\n\r\n.form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n    height: 3.125rem;\r\n    padding: .75rem;\r\n}\r\n\r\n.form-label-group > label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0; /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    pointer-events: none;\r\n    cursor: text; /* Match the input under the label */\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    -webkit-transition: all .1s ease-in-out;\r\n    transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input::-moz-placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n    padding-top: 1.25rem;\r\n    padding-bottom: .25rem;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n    padding-top: .25rem;\r\n    padding-bottom: .25rem;\r\n    font-size: 12px;\r\n    color: #777;\r\n}\r\n\r\n/* Fallback for Edge\r\n-------------------------------------------------- */\r\n@supports (-ms-ime-align: auto) {\r\n    .form-label-group > label {\r\n        display: none;\r\n    }\r\n    .form-label-group input::-ms-input-placeholder {\r\n        color: #777;\r\n    }\r\n}\r\n\r\n/* Fallback for IE\r\n-------------------------------------------------- */\r\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\r\n    .form-label-group > label {\r\n        display: none;\r\n    }\r\n    .form-label-group input:-ms-input-placeholder {\r\n        color: #777;\r\n    }\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/react-bootstrap/ThemeProvider.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/ThemeProvider.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _forwardRef = _interopRequireDefault(__webpack_require__(/*! @restart/context/forwardRef */ "./node_modules/@restart/context/forwardRef.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var ThemeContext = _react.default.createContext({});

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = (0, _react.useMemo)(function () {
    return (0, _extends2.default)({}, prefixes);
  }, [prefixes]);
  return _react.default.createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return (0, _forwardRef.default)(function (_ref2, ref) {
    var props = (0, _extends2.default)({}, _ref2);
    props[forwardRefAs] = ref; // eslint-disable-next-line react/prop-types

    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      bsPrefix: bsPrefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./style/form/main.css":
/*!*****************************!*\
  !*** ./style/form/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./style/form/main.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=5.bundle.js.map