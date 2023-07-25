export class ValidationErrorCodeModel {
  // key: string;
  en: string;
  ar: string;
}

export const ValidationErrorCodes = {
  isNumber: {
    // key: '',
    en: 'must be a number',
    ar: 'يجب ان يكون رقم',
  },

  isIBAN: {
    en: 'is not a valid iban number',
    ar: 'رقم الآيبان يجب ان يكون صحيحا',
  },
  isMongoId: {
    // key: '',
    en: 'must be valid mongo object id',
    ar: 'يجب ان يكون قيمه مونجو صحيحه',
  },
  isPositive: {
    // key: '',
    en: 'should not be empty',
    ar: 'يجب الا يكون فارغ',
  },
  isExists: {
    en: 'value already exists',
    ar: 'القيمه موجود بالفعل',
  },
  isBoolean: {
    en: 'must be a boolean value',
    ar: 'يجب ان يكون [true, false]',
  },
  isEmail: {
    en: 'Email format is not correct',
    ar: 'الايميل غير صحيح',
  },
  emailIsExists: {
    en: 'Email has been used before',
    ar: 'الايميل مستخدم من قبل مستخدم اخر',
  },
  phoneIsExists: {
    en: 'Phone number has been used before',
    ar: 'رقم الموبايل مستخدم من قبل مستخدم اخر',
  },
  identityIsExists: {
    en: 'Identity number has been used before',
    ar: 'رقم الهوية مستخدم من قبل مستخدم اخر',
  },
  fundCodeUnique: {
    en: 'Fund Code has been used before',
    ar: 'الكود مستخدم من قبل',
  },
  fundCodeExceptIdUnique: {
    en: 'Fund Code has been used before',
    ar: 'الكود مستخدم من قبل',
  },
  individualIdUnique: {
    en: 'ID/Iqama is already registered, kindly use another ID/Iqama or go to login',
    ar: 'الهوية الوطنية او الاقامة مستخدم من قبل مستخدم اخر',
  },
  wrongOtpValue: {
    en: 'OTP code is incorrect',
    ar: ' رمز التحقق غير صالح ',
  },
  weakPassword: {
    en: 'Weak Password',
    ar: 'الباسورد ضعيف',
  },
  password: {
    en: 'password is required',
    ar: 'الباسورد مطلوب',
  },
  isNotEmpty: {
    en: 'should not be empty',
    ar: 'يجب الا يكون فارغ',
  },
  isEnum: {
    en: 'value not correct',
    ar: 'القيمه غير صحيحه',
  },
  isValidMobile: {
    en: 'Invalid mobile number with country code',
    ar: 'الموبايل غير صحيح',
  },
  isAlpha: {
    en: 'must contain only letters a-zA-Z',
    ar: 'يقبل الحروف الابجديه فقط',
  },
  isAlphanumeric: {
    en: 'must contain only letters a-zA-Z1-9',
    ar: 'يقبل الحروف الابجديه فقط',
  },
  isUrl: {
    en: 'The input is not in a website format',
    ar: 'الإدخال ليس بتنسيق موقع الويب',
  },
  userIsExists: {
    en: 'User not exists',
    ar: 'المستخدم غير موجود',
  },
  customFieldIsExists: {
    en: 'Custom field is not exists',
    ar: 'Custom field غير موجود',
  },
  emailVerificationCodeIsWrong: {
    en: 'Verification Code is wrong',
    ar: 'كود التفعيل غير صحيح',
  },
  emailVerificationCodeIsExpired: {
    en: 'Verification Code is expired',
    ar: 'كود التفعيل غير صالح',
  },
  userEmailAlreadyInvited: {
    en: 'Email already invited',
    ar: 'البريد الالكترونى مدعو بالفعل',
  },
  emailNotFound: {
    en: 'No Account is associated with this email',
    ar: 'لا يوجد حساب مربوط بهذا البريد الالكترونى',
  },
  phoneNotFound: {
    en: 'Phone number is already not registered',
    ar: 'رقم الهاتف غير مسجل مسبقا',
  },
  emailNotInvited: {
    en: 'No user is invited to this company associated with this email',
    ar: 'لا يوجد مستخدم مدعو للشركة مربوط بهذا البريد الالكترونى',
  },
  emailAlreadyAccepted: {
    en: 'User already Approved the invitation',
    ar: 'المستخدم بالفعل قبل الدعوة',
  },
  passwordResetTokenIsWrong: {
    en: 'Password reset token is wrong',
    ar: 'رمز التفعيل غير صحيح',
  },
  passwordResetTokenIsExpired: {
    en: 'Password reset token is expired',
    ar: 'رمز التفعيل غير صالح',
  },
  isValidDate: {
    en: 'Invalid date format DD-MM-YYYY',
    ar: 'التاريخ غير صالح',
  },
  isValidElmBirthDate: {
    en: 'Invalid date format YYYY-MM-DD',
    ar: 'التاريخ غير صحيح يجب ان يكون YYYY-MM-DD',
  },
  isValidIso8601Date: {
    en: 'Invalid iso 8601 date format, example 2020-02-22T11:44:27.313+03:00',
    ar: 'التاريخ غير صالح',
  },
  isDefined: {
    en: 'should not be null or undefined',
    ar: 'يجب ألا يكون فارغًا أو غير معرف',
  },
  isObject: {
    en: 'must be an object',
    ar: 'يجب أن يكون object',
  },
  isNotEmptyObject: {
    en: 'must be a non-empty object',
    ar: 'يجب أن يكون كائنًا غير فارغ',
  },
  arrayMinSize: {
    en: 'must contain at least 0 elements',
    ar: 'يجب أن يحتوي على 0 عنصر على الأقل',
  },
  isIn: {
    en: 'must choose an item of selected list',
    ar: 'يجب أن تختار عنصر من القائمة',
  },
  isArray: {
    en: 'must be an array',
    ar: 'يجب أن يكون مصفوفة',
  },
  minLength: {
    en: 'characters count is not correct',
    ar: 'عدد الحروف غير صحيح',
  },
  min: {
    en: 'Number is not correct',
    ar: ' الرقم غير صحيح',
  },
  maxLength: {
    en: 'characters count is not correct',
    ar: 'عدد الحروف غير صحيح',
  },
  isLength: {
    en: 'characters count is not correct',
    ar: 'عدد الحروف غير صحيح',
  },
  isNumberString: {
    en: 'must be a number string',
    ar: 'يجب ان يكون رقما',
  },
  InvalidCRNumber: {
    en: 'An account exists with the same CR number',
    ar: 'يوجد حساب آخر مسجل بنفس رقم السجل التجاري',
  },
  InvalidData: {
    en: 'This resource is not found or deleted',
    ar: 'لم يتم العثور علي هذه البيانات او تم مسحها',
  },
  CRNumberNotExist: {
    en: 'not found in Wathq records, please check the number',
    ar: 'لم يتم العثور علي رقم السجل في سجلات خدمه واثق، من فضلك تحقق من الرقم',
  },
  otpValueExpired: {
    en: 'OTP Code is expired',
    ar: 'رمز التحقق المدخل منتهى الصلاحيه',
  },
  isValidAssetSegment: {
    en: 'asset segment is not valid',
    ar: 'asset segment is not valid',
  },
  IsValidBase64Image: {
    en: 'Invalid base64 format',
    ar: 'Invalid base64 format',
  },
  ExceedFileSize: {
    en: 'File size limit exceeded. Max file size is 1MB',
    ar: 'حجم الملف كبير عن المسموح، يجب ان لايتعدي ١ ميجا بايت',
  },
  controlPanelEmailExists: {
    en: 'Email have been used before',
    ar: 'الايميل مستخدم من قبل مستخدم اخر',
  },
  titleIsExists: {
    en: 'title have been used before',
    ar: 'تمت اضافه هذا الاسم من قبل',
  },
  userVerifiedByElm: {
    en: 'cannot edit! this user verified by elm',
    ar: 'لايمكن التعديل هذا المستخدم متوثق بواسطة منصة علم',
  },
  invalidAgeThreshold: {
    en: 'age must be more than or equal 18',
    ar: 'يجب الايقل السن عن 18 سنة',
  },
  sendDateRequired: {
    en: 'send date required',
    ar: ' تاريخ الإرسال يجب ألا يكون فارغًا أو غير معرف',
  },
  limitedFiles: {
    en: `You have reached the maximum number of profiles you can view per day You can come back to explore new files after 24 hours Or subscribe to the Diamond package and view an unlimited number of files`,

    ar: `وصلت إلى الحد الأقصى لعدد الملفات الشخصية التي يمكنك استعراضها يومياً يمكنك العودة لاستكشاف ملفات جديدة بعد 24 ساعه او اشترك بالباقة الماسية واستعرض عدد غير محدود من الملفات
    `,
  },
  unpassLimited: {
    en: 'Subscribe for a diamond package to un pass people back and re-show them in your search!',
    ar: 'اشترك في العضوية الماسية لاستعادة الأشخاص وإعادة إظهارهم في بحثك!',
  },
  limitedChat: {
    en: 'Subscribe to the Diamond package to be able to start chat with an unlimited number of people!',
    ar: 'اشترك في العضوية الماسية لتتمكن من بدأ المحادثة مع عدد غير محدود من الاشحاص!',
  },
  chatWithDeativatedUsers: {
    en: 'This user is unable to receive new messages',
    ar: 'هذا المستخدم غير قادر على استقبال رسائل جديدة',
  },
  desableEditGenderTemporarily: {
    en: 'Edit gender disabled temporarily',
    ar: 'تم ايقاف تعديل الجيندر مؤقتا',
  },
  matches: {
    en: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    ar: ' يجب أن تحتوي كلمة المرور على حرف كبير وحرف صغير ورقم واحد على الأقل',
  },
};
