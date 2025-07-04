// Utility function to calculate current age based on birth date
export const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  // If birthday hasn't occurred this year yet, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

// Birth date: June 29, 2006
export const BIRTH_DATE = '2006-06-29';

// Get current age
export const getCurrentAge = () => calculateAge(BIRTH_DATE);