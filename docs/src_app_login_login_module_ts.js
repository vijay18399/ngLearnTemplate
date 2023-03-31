"use strict";
(self["webpackChunkngLearn"] = self["webpackChunkngLearn"] || []).push([["src_app_login_login_module_ts"],{

/***/ 3827:
/*!********************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);








function ForgotPasswordComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ForgotPasswordComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
// import { AuthService } from 'src/app/services/auth.service';
class ForgotPasswordComponent {
  constructor(fb) {
    this.fb = fb;
    this.forgotForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]]
    });
  }
  onSubmit() {
    const {
      email
    } = this.forgotForm.value;
    // this.authService.ForgotPassword(email);
  }
}

ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
  return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
};
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ForgotPasswordComponent,
  selectors: [["app-forgot-password"]],
  decls: 13,
  vars: 4,
  consts: [[1, "login"], [1, "login-card"], [1, "title"], [1, "form", 3, "formGroup", "ngSubmit"], ["matInput", "", "formControlName", "email"], [4, "ngIf"], ["color", "accent", "mat-raised-button", "", "type", "submit", 3, "disabled"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ForgotPasswordComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ForgotPasswordComponent_mat_error_10_Template, 2, 0, "mat-error", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reset Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.forgotForm.get("email")) == null ? null : tmp_1_0.dirty) && ((tmp_1_0 = ctx.forgotForm.get("email")) == null ? null : tmp_1_0.hasError("required")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.forgotForm.get("email")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx.forgotForm.get("email")) == null ? null : tmp_2_0.hasError("email")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.forgotForm.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput],
  styles: [".login[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  width: 552px;\n  color: rgb(2, 18, 32);\n  margin: 10px;\n  padding: 25px;\n  display: flex;\n  flex-direction: column;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgb(3, 22, 39);\n  display: flex;\n  justify-content: center;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(223, 107, 6);\n  font-size: 50px;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: aliceblue;\n}\n\n.mat-mdc-raised-button[disabled][disabled][_ngcontent-%COMP%] {\n  background-color: #ECECEC;\n  color: #5B5B5B !important;\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSUE7RUFDSSxXQUFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6SUw7QUEwSUs7RUFDRyxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQXhJUjtBQXlJUTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBdklaO0FBd0lZO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBdEloQjtBQXlJUztFQUNHLGFBQUE7RUFDQSxzQkFBQTtBQXZJWjtBQXdJVztFQUNDLGdCQUFBO0FBdElaO0FBd0lXO0VBQ0MsZ0JBQUE7QUF0SVo7O0FBNElJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUF6SVIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZWN0aW9uIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTBweCk7XHJcbi8vICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gYXNpZGUge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICB3aWR0aDogMzAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4vLyAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xyXG4vLyAgICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4vLyAgICAgLmNoYW5nZXtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgICAgICAgICp7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjMTYxNDE0O1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLmxlZnR7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5yaWdodHtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC5hY3RpdmV7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDAwMDtcclxuLy8gICAgICAgICAgICAgY29sb3I6ICAjZDlkZGZmO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGEge1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4vLyAgICAgICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbi8vICAgICAgICAgcGFkZGluZzogNnB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgICAgICBib3JkZXI6IDBweDtcclxuLy8gICAgICAgICBtYXJnaW46IDVweDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLmZvcm0ge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuLy8gICAgICAgICBwe1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogIzA0MDcyYztcclxuLy8gICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICAuaW5wdXR7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbjogMTJweCAwcHg7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICBcclxuLy8gICAgICAgICAgICAgLmVycm9yc3tcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW46NHB4IDBweDtcclxuLy8gICAgICAgICAgICAgfSBcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLmZvcm0taW5wdXQ6Zm9jdXN7XHJcbi8vICAgICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAjYjJiMmIyO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAuZm9ybS1pbnB1dCB7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4vLyAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuLy8gICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuLy8gICAgICAgICAgICAgY2FyZXQtY29sb3I6ICMyMTIzMzg7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlOTtcclxuLy8gICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjJzIGVhc2U7XHJcbi8vICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMgZWFzZTtcclxuXHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBpbnB1dDpmb2N1cyxcclxuLy8gICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XHJcbi8vICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICBidXR0b24ge1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuLy8gICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBidXR0b246ZGlzYWJsZWR7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICAuZ2J0bntcclxuLy8gICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGltZ3tcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuXHJcbi8vIH1cclxuLmxvZ2lue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIC5sb2dpbi1jYXJke1xyXG4gICAgICAgIHdpZHRoOiA1NTJweDtcclxuICAgICAgICBjb2xvcjogcmdiKDIsIDE4LCAzMik7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigzLCAyMiwgMzkpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjIzLCAxMDcsIDYpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgbWF0LWxhYmVse1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYXQtbWRjLXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgI0VDRUNFQztcclxuICAgICAgICBjb2xvcjogIzVCNUI1QiFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8972:
/*!**********************************************************!*\
  !*** ./src/app/login/login-form/login-form.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormComponent": () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);









function LoginFormComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be at least 6 Characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Forgot Password?? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LoginFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_div_22_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.isSignUp = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Already have An Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function LoginFormComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_div_23_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.isSignUp = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Don't have An Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
// import { AuthService } from '../services/auth.service';
class LoginFormComponent {
  constructor(fb) {
    this.fb = fb;
    this.isSignUp = false;
    this.signupForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)]]
    });
  }
  onSubmit() {
    const {
      email,
      password
    } = this.signupForm.value;
    if (this.isSignUp) {
      //  this.authService.SignUp(email,password);
    } else {
      // this.authService.SignIn(email,password);
    }
  }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
  return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
};
LoginFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginFormComponent,
  selectors: [["app-login-form"]],
  decls: 24,
  vars: 10,
  consts: [[1, "login"], [1, "login-card"], ["mat-stroked-button", "", 1, "google-btn"], ["src", "assets/gicon.svg", "alt", ""], [3, "formGroup"], ["matInput", "", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password"], ["mat-raised-button", "", "color", "accent", 3, "disabled"], [1, "other"], ["routerLink", "forgot-password", 4, "ngIf"], ["class", "link", 3, "click", 4, "ngIf"], ["routerLink", "forgot-password"], [1, "link", 3, "click"], ["mat-raised-button", "", "color", "accent"]],
  template: function LoginFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Continue with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4)(6, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginFormComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginFormComponent_mat_error_11_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginFormComponent_mat_error_16_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginFormComponent_mat_error_17_Template, 2, 0, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginFormComponent_p_21_Template, 3, 0, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginFormComponent_div_22_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginFormComponent_div_23_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.signupForm.get("email")) == null ? null : tmp_1_0.dirty) && ((tmp_1_0 = ctx.signupForm.get("email")) == null ? null : tmp_1_0.hasError("required")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.hasError("email")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.dirty) && ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.hasError("required")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.signupForm.get("password")) == null ? null : tmp_4_0.dirty) && ((tmp_4_0 = ctx.signupForm.get("password")) == null ? null : tmp_4_0.hasError("minlength")));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isSignUp ? "Sign Up" : " Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSignUp);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUp);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSignUp);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  styles: [".login[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  background-color: #f6f6f6;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%] {\n  width: 552px;\n  margin: 10px;\n  padding: 25px;\n  display: flex;\n  align-items: center;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: aliceblue;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(223, 107, 6);\n  font-size: 50px;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 80%;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: aliceblue;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0px;\n  cursor: pointer;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: blueviolet;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  background: linear-gradient(45deg, #0288d1, #26c6da) !important;\n  color: #ffffff;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login[_ngcontent-%COMP%]   .login-card[_ngcontent-%COMP%]   .other[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.mat-mdc-raised-button[disabled][disabled][_ngcontent-%COMP%] {\n  background-color: #ECECEC;\n  color: #5B5B5B !important;\n  margin: 8px;\n}\n\n.google-btn[_ngcontent-%COMP%] {\n  background-color: #f6f5f5 !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #033f47;\n  padding: 4px;\n  border-radius: 10px;\n  width: 150px;\n  cursor: pointer;\n}\n.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxnQkFBQTtBQUNaO0FBQ1k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7QUFDaEI7QUFHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFEWjtBQUVZO0VBQ0ksZ0JBQUE7QUFBaEI7QUFHWTtFQUNJLGdCQUFBO0FBRGhCO0FBTVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSlo7QUFNWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUpoQjtBQU9ZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTGhCO0FBT2dCO0VBQ0ksWUFBQTtBQUxwQjtBQVNZO0VBQ0ksaUJBQUE7QUFQaEI7QUFVWTtFQUNJLGFBQUE7RUFFQSwrREFBQTtFQUNBLGNBQUE7QUFSaEI7QUFVZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVJwQjtBQVVvQjtFQUNJLFdBQUE7QUFSeEI7O0FBbUJBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFoQko7O0FBa0JBO0VBQ0csb0NBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWZKO0FBZ0JJO0VBQ0MsV0FBQTtBQWRMIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgLmxvZ2luLWNhcmQge1xyXG4gICAgICAgIHdpZHRoOiA1NTJweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjIzLCAxMDcsIDYpO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vdGhlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCMwMjg4ZDEsIzI2YzZkYSkhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCMwMjg4ZDEsIzI2YzZkYSkhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5tYXQtbWRjLXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjRUNFQ0VDO1xyXG4gICAgY29sb3I6ICM1QjVCNUIhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbn1cclxuLmdvb2dsZS1idG4ge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNWY1IWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAzM2Y0NztcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 3827);
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-form/login-form.component */ 8972);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ 8458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
  children: [{
    path: '',
    component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__.LoginFormComponent
  }, {
    path: 'forgot-password',
    component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordComponent
  }]
}];
class LoginRoutingModule {}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
  return new (t || LoginRoutingModule)();
};
LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LoginRoutingModule
});
LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class LoginComponent {}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)();
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 2,
  vars: 0,
  consts: [[1, "page-content"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: [".page-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background-color: #f6f6f6;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxuICAucGFnZS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material.module */ 3806);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ 8458);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 3827);
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-form/login-form.component */ 8972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent, _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_4__.LoginFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map