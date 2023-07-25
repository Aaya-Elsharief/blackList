export interface IMobileNumber {
  countryCode: string;
  countryPhoneCode: string;
  mobileNumber: string;
}

export function parseMobileString(number: string): IMobileNumber {
  const values = number.split('-');
  return {
    countryCode: values[0],
    countryPhoneCode: values[1],
    mobileNumber: values[2],
  };
}
