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

