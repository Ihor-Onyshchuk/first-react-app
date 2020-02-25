export const required = value => {
  return value ? undefined : "Field is required";
};

export const maxLengthCreator = maxLength => value => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};
