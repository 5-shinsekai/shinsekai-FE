'use server';

export const tempService = async (formdata: FormData) => {
  console.log(formdata);
};

export const paymentTempService = async (formdata: FormData) => {
  // const addressUuid = formdata.get('addressUuid');
  // const cardUuid = formdata.get('paymentCardUuid');
  // const productCode = formdata.get('orderList[0].productCode');
  // const productName = formdata.get('orderList[0].productName');
  // const quantity = formdata.get('orderList[0].quantity');
  // const productPrice = formdata.get('orderList[0].productPrice');

  // console.log(
  //   '결제 정보 테스트',
  //   addressUuid,
  //   cardUuid,
  //   productCode,
  //   productName,
  //   quantity,
  //   productPrice
  // );
  console.log('🧾 전체 결제 정보');

  for (const [key, value] of formdata.entries()) {
    console.log(`${key}: ${value}`);
  }
};
