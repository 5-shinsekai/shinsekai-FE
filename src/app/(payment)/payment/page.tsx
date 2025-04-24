import { getMainAddress } from '@/action/address-service';
import { getStarbuckscardList } from '@/action/payment-service';
import PaymentForm from '@/components/pages/payment/OrderInfo/PaymentForm';

export default async function Page() {
  const cardList = await getStarbuckscardList();
  const mainAddress = await getMainAddress();

  return (
    <main className="w-full h-screen mx-auto">
      <PaymentForm cardList={cardList} mainAddress={mainAddress} />
    </main>
  );
}
