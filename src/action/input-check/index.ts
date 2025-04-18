'use server';

export const tempService = async (formdata: FormData) => {
  console.log(formdata);
};

export const paymentTempService = async (formdata: FormData) => {
  const addressUuid = formdata.get('addressUuid');
  const cardUuid = formdata.get('paymentCardUuid');

  console.log('결제 정보 테스트', addressUuid, cardUuid);
};
