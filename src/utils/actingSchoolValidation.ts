
export const validateIndianMobile = (phone: string) => {
  const indianMobileRegex = /^[6-9]\d{9}$/;
  return indianMobileRegex.test(phone);
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequiredFields = (formData: any) => {
  return !!(formData.schoolName && formData.principalName && formData.email && 
           formData.phone && formData.city && formData.state && 
           formData.studentCount && formData.establishedYear);
};
