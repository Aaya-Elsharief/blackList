export const ErrorCodes = {
  /**
   * Invalid Param MUST have => fields: {}
   */
  UNSUPPORTED_FILE_EXT: {
    code: 'UNSUPPORTED_FILE_EXT',
    message: {
      en: 'File ext not supported',
      ar: 'نوع الملف غير مدعوم',
    },
  },
  INVALID_PARAMS: {
    code: 'INVALID_PARAMS',
    message: {
      en: 'Invalid Params',
      ar: 'يوجد قيم غير صحيحه',
    },
    fields: {},
  },
  ELM_YAKEEN_UNEXPECTED_ERROR: {
    code: 'ELM_YAKEEN_UNEXPECTED_ERROR',
    message: {
      en: 'Unexpected error, try again later',
      ar: 'حدث مشكله غير متوقعه , برجاء المحاوله لاحقا',
    },
    fields: {},
  },
  UNEXPECTED_ERROR: {
    code: 'UNEXPECTED_ERROR',
    message: {
      en: 'Unexpected error , try again later',
      ar: 'حدث مشكله غير متوقعه , برجاء المحاوله لاحقا',
    },
  },
  PUSHER_TRIGGER_ERROR: {
    code: 'PUSHER_TRIGGER_ERROR',
    message: {
      en: 'Unexpected error , try again later',
      ar: 'حدث مشكله غير متوقعه , برجاء المحاوله لاحقا',
    },
  },
  NOT_CHANNEL_FOR_USERS: {
    code: 'NOT_CHANNEL_FOR_USERS',
    message: {
      en: 'Not channel for those users exists, please create new channel first',
      ar: 'Not channel for those users exists, please create new channel first',
    },
  },
  NO_CHAT_CHANNEL_FOR_USERS: {
    code: 'NO_CHAT_CHANNEL_FOR_USERS',
    message: {
      en: 'No chat channel for those users',
      ar: 'No chat channel for those users',
    },
  },
  INVALID_CHAT_CHANNEL_FOR_USERS: {
    code: 'INVALID_CHAT_CHANNEL_FOR_USERS',
    message: {
      en: 'Invalid chat channel',
      ar: 'Invalid chat channel',
    },
  },
  USER_ALREADY_VERIFIED: {
    code: 'USER_ALREADY_VERIFIED',
    message: {
      en: 'User already verified',
      ar: 'المستخدم موثق بالفعل',
    },
  },
  USER_ALREADY_REPORTED: {
    code: 'USER_ALREADY_REPORTED',
    message: {
      en: 'Account already reported before',
      ar: 'تم الابلاغ عن هذا الحساب من قبل',
    },
  },
  USER_ALREADY_IN_FAVORITE_LIST: {
    code: 'USER_ALREADY_IN_FAVORITE_LIST',
    message: {
      en: 'User already added to your favorite list',
      ar: 'المستخدم موجود بالفعل ف قائمتك المفضله',
    },
  },
  USER_NOT_IN_FAVORITE_LIST: {
    code: 'USER_NOT_IN_FAVORITE_LIST',
    message: {
      en: 'User not in your favorite list',
      ar: 'المستخدم غير موجود ف قائمتك المفضله',
    },
  },
  USER_ALREADY_PASSED: {
    code: 'USER_ALREADY_PASSED',
    message: {
      en: 'Account already passed before',
      ar: 'تم التخطى عن هذا الحساب من قبل',
    },
  },
  ACTION_UN_PASS_NOT_ALLOWED: {
    code: 'ACTION_UN_PASS_NOT_ALLOWED',
    message: {
      en: "You can't un pass account that didn' passed before",
      ar: 'لا يمكن الرجوع عن تخطى حساب لم يتم تخطيه من قبل',
    },
  },
  INVALID_USER_ID: {
    code: 'INVALID_USER_ID',
    message: {
      en: 'Account not exists',
      ar: 'الحساب غير موجود',
    },
  },
  CAN_NOT_PASS_YOUR_SELVE: {
    code: 'CAN_NOT_PASS_YOUR_SELVE',
    message: {
      en: "Can't pass your self",
      ar: 'لا يمكن تخط نفسك',
    },
  },
  CAN_NOT_REPORT_YOUR_SELVE: {
    code: 'CAN_NOT_REPORT_YOUR_SELVE',
    message: {
      en: "Can't reports your self",
      ar: 'لا يمكن الابلاغ عن نفسك',
    },
  },
  CAN_NOT_ADD_OR_REMOVE_YOUR_SELVE_TO_YOUR_FAVORITE: {
    code: 'CAN_NOT_ADD_OR_REMOVE_YOUR_SELVE_TO_YOUR_FAVORITE',
    message: {
      en: "Can't add or remove yourself to your favorite",
      ar: 'لا يمكن اضافه او حذف نفسك لقائمتك المفضله',
    },
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    message: {
      en: 'You are not authorized to access',
      ar: 'غير مخول للدخول',
    },
  },
  INVALID_USER: {
    code: 'INVALID_USER',
    message: {
      en: 'Email is not registered',
      ar: 'الايميل غير مسجل',
    },
  },
  INVALID_RESOURCE: {
    code: 'INVALID_RESOURCE',
    message: {
      en: 'Resource not found',
      ar: 'هذا المورد غير موجود',
    },
  },
  ACCOUNT_BLOCKED: {
    code: 'ACCOUNT_BLOCKED',
    message: {
      en: '',
      ar: '',
    },
  },
  ELM_DATA_IS_NOT_FETCHED: {
    code: 'ELM_DATA_IS_NOT_FETCHED',
    message: {
      en: 'Elm Data is not fetched for this account',
      ar: 'لم يتم استرجاع بيانات علم لهذا الحساب',
    },
  },
  USER_ID_IS_ALREADY_USED: {
    code: 'USER_ID_IS_ALREADY_USED',
    message: {
      en: 'user id is already used',
      ar: 'رقم الاقامة او الهوية بالفعل مستخدم من قبل',
    },
  },
  USER_ACCOUNT_NOT_FOUND: {
    code: 'USER_ACCOUNT_NOT_FOUND',
    message: {
      en: 'Email account is not found',
      ar: 'الايميل غير صحيحه',
    },
  },
  RECEIVER_ACCOUNT_NOT_FOUND: {
    code: 'RECEIVER_ACCOUNT_NOT_FOUND',
    message: {
      en: 'Receiver account not valid',
      ar: 'حساب المرسل اليه غير صحيح',
    },
  },
  USER_ACCOUNT_NOT_VERIFIED: {
    code: 'USER_ACCOUNT_NOT_VERIFIED',
    message: {
      en: 'your Email is not verified',
      ar: 'الايميل لم يتم التحقق منه',
    },
  },
  OTP_NOT_CORRECT: {
    code: 'OTP_NOT_CORRECT',
    message: {
      en: 'OTP code is incorrect',
      ar: 'رمز التحقق غير صالح',
    },
  },
  INVALID_USER_PASSWORD: {
    code: 'INVALID_USER',
    message: {
      en: 'Incorrect credentials',
      ar: 'المعلومات المدخلة غير صحيحة',
    },
  },
  NO_DATA_FOUND: {
    code: 'NO_DATA_FOUND',
    message: {
      en: 'No data found',
      ar: 'غير موجود',
    },
  },
  TRANSACTION_ALREADY_MADE_BEFORE: {
    code: 'TRANSACTION_ALREADY_MADE_BEFORE',
    message: {
      en: 'Transaction Already Made Before With This transaction Id',
      ar: 'هذه العملية قد تمت من قبل',
    },
    createdAt: null,
  },
  TRANSACTION_ERRRR: {
    code: 'TRANSACTION_ERRRR',
    message: {
      en: 'Transaction error',
      ar: 'حدث خطا بالعملية',
    },
  },
  USER_ID_IS_NOT_ASSIGNED_TO_MOBILE: {
    code: 'USER_ID_IS_NOT_ASSIGNED_TO_MOBILE',
    message: {
      en: 'user id is not assigned to this number',
      ar: 'رقم الاقامة او الهوية ليس مرتبط مع هذا الرقم',
    },
  },
  USER_ALEADY_LOGEDOUT: {
    code: 'USER_ALEADY_LOGEDOUT',
    message: {
      en: 'user already loggedout',
      ar: 'هذا المستخدم مسجل خروج بالفعل',
    },
  },
};
