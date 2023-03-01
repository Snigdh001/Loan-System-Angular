export const signupInterface = {
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  password: "",
  cpassword: "",

}
export const errorInterface = {
  fnameEr: "",
  lnameEr: "",
  emailEr: "",
  mobileEr: "",
  passwordEr: "",
  cpasswordEr: "",
}
export const allUserRes = {
  id: '',
  fname: '',
  lname: '',
  email: '',
  mobile: '',
  role: '',
}
export const loanError={
  idEr: "",
  useridEr: "",
  fnameEr: "",
  lnameEr: "",
  emailEr: "",
  genderEr: "",
  aadharEr: "",
  panEr: "",
  professionEr: "",
  incomeEr: "",
  loanAmtEr: "",
  durationEr: "",
  address1Er: "",
  address2Er: "",
  pincodeEr: "",
  placeEr: "",
  stateEr: "",
  countryEr: "",
}
export const allApplicationRes = {
  id: "",
  userid: "",
  fname: "",
  lname: "",
  email: "",
  gender: "",
  aadhar: "",
  pan: "",
  profession: "",
  income: "",
  loanAmt: "",
  duration: "",
  address1: "",
  address2: "",
  pincode: "",
  place: "",
  state: "",
  country: "",
  mobile: "",
  status: "",
  remark: ""
}
export const SessionInterface = {

  userid: "",
  fname: "",
  lname: "",
  email: "",
  mobile: "",
}
export const emiDetailsRes = {

  id: 0,
  loanid: 0,
  userid: 0,
  loanAmt: 0,
  duration: 0,
  emiAmt:0.0,
  emiPaid:0,
  interestRate:0.0,
  startDate:"",
  totalIntAmt:0.0,
  totalAmt:0.0,
}
export interface allUserApi {
  status: number,
  error: string,
  data: typeof allUserRes[],
  totalpages: number,
}

export interface allApplicationApi {
  status: number,
  error: string,
  data: typeof allApplicationRes[],
  totalpages: number,
}
export interface requestRespnse {
  status: number,
  error: string,
  success: string,
  messages: string,
}
export interface delResponse {
  id: string,
  message: string,
  success: string,
}
export interface authResponse {
  messages: {
    success: string,
    message:string,
    role:string,
    id:string,
    fname:string,
    lname:string,
    name:string,
    email:string,
    mobile:string,
    authorization:string,
  }
}
