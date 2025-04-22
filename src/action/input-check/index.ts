'use server';

export const tempService = async (formdata: FormData) => {
  console.log(formdata);
};

export const paymentTempService = async (formdata: FormData) => {
  const addressUuid = formdata.get('addressUuid');
  const cardUuid = formdata.get('paymentCardUuid');
  const product = [
    {
      productCode: formdata.get(`orderList[${0}].productCode`),
      productName: formdata.get(`orderList[${0}].productName`),
      quantity: formdata.get(`orderList[${0}].quantity`),
      productPrice: formdata.get(`orderList[${0}].productPrice`),
    },
  ];

  console.log('결제 정보 테스트', addressUuid, cardUuid, product);
};
