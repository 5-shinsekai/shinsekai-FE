'use server';

export const tempService = async (formdata: FormData) => {
  console.log(formdata);
};

export const paymentTempService = async (formdata: FormData) => {
  const addressUuid = formdata.get('addressUuid');

  console.log(addressUuid);
};
