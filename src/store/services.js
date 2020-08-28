import axios from "axios"
import { PARENT_ONLY_USERNAME, PARENT_ONLY_PASSWORD } from "react-native-dotenv"
const parentOnly = axios.create({
  baseURL:
    "https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgID=540191",
  auth: { username: PARENT_ONLY_USERNAME, password: PARENT_ONLY_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const dogAPI = axios.create({
  baseURL: "https://dog.ceo/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const dogAPI = axios.create({
  baseURL: "https://dog.ceo/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const lizz8195API = axios.create({
  baseURL: "https://lizz-8-19-5-19663-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dogapi_get_breeds_image_random_read() {
  return dogAPI.get(`/breeds/image/random`)
}
function dogapi_get_breeds_image_random_read() {
  return dogAPI.get(`/breeds/image/random`)
}
function api_v1_customtext_list() {
  return lizz8195API.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return lizz8195API.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return lizz8195API.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return lizz8195API.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_homepage_list() {
  return lizz8195API.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return lizz8195API.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return lizz8195API.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return lizz8195API.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return lizz8195API.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return lizz8195API.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return lizz8195API.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return lizz8195API.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return lizz8195API.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return lizz8195API.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return lizz8195API.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return lizz8195API.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return lizz8195API.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return lizz8195API.post(`/rest-auth/registration/verify-email/`, requestBody)
}
function rest_auth_user_read() {
  return lizz8195API.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return lizz8195API.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return lizz8195API.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  dogapi_get_breeds_image_random_read,
  dogapi_get_breeds_image_random_read,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
