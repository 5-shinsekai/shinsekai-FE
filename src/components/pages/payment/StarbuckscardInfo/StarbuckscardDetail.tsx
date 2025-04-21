import { chargeStarbuckscard } from '@/action/payment-service';
import StarbuckscardCharge from '@/components/pages/payment/StarbuckscardInfo/StarbuckscardCharge';
import { Button } from '@/components/ui/Button';
import { ChargeResultModal } from '@/components/ui/ChargeResultModal';
import { DeleteCardButton } from '@/components/ui/DeleteButtonComponent';
import Divider from '@/components/ui/Divider';
import PaymentNotice from '@/components/ui/PaymentNotice';
import ButtonWrapper from '@/components/ui/wrapper/ButtonWrapper';
import { chargeOptionsData } from '@/data/DummyData/StarbuckscardDummyData';
import { StarbuckscardInfoType } from '@/types/PaymentDataType';
import Image from 'next/image';
import { useState } from 'react';

export default function StarbuckscardDetail({
  cardInfo,
  // onClose,
}: {
  cardInfo: StarbuckscardInfoType;
  // onClose?: () => void;
}) {
  const chargeOptions = chargeOptionsData;
  const [chargeAmount, setChargeAmount] = useState(chargeOptions[0]);

  const [showModal, setShowModal] = useState(false);
  const [modalSuccess, setModalSuccess] = useState<boolean | null>(null);

  const handleSubmit = async () => {
    try {
      await chargeStarbuckscard({
        memberStarbucksCardUuid: cardInfo.memberStarbucksCardListUuid,
        price: chargeAmount.amount,
      });
      setModalSuccess(true);
      setShowModal(true);
    } catch (error) {
      console.error('충전 실패:', error);
      setModalSuccess(false);
      setShowModal(true);
    }
  };

  return (
    <div className="px-6 py-6 min-h-screen">
      {/* 카드 정보 */}
      <div className="relative flex gap-3 w-full mx-auto">
        <Image src="/starbucksCard1.png" alt="card" width={100} height={50} />
        <div>
          <p>
            {cardInfo.cardName}({cardInfo.cardNumber})
          </p>
          <p>
            {cardInfo.remainAmount.toLocaleString()} <span>원</span>
          </p>
        </div>
        {/* 카드 삭제 */}
        <DeleteCardButton
          className="absolute top-0 right-0 text-xs"
          memberStarbucksCardUuid={cardInfo.memberStarbucksCardListUuid}
        />
      </div>
      <Divider className="mx-0 my-8 border" />
      {/* 충전 금액 */}
      <StarbuckscardCharge
        chargeAmount={chargeAmount}
        setChargeAmount={setChargeAmount}
        chargeOptions={chargeOptions}
      />
      <Divider className="mx-0 my-4 border" />
      {/* 유의사항 */}
      <PaymentNotice />
      <ButtonWrapper className="">
        <div className="flex justify-between items-center">
          <p className="text-amber-700 text-sm">충전 후 예상 총 카드 잔액</p>
          <p className="text-xl font-bold">
            {(
              Number(cardInfo.remainAmount) + chargeAmount.amount
            ).toLocaleString()}
            <span className="text-lg font-semibold"> 원</span>
          </p>
        </div>
        <Button
          className="w-full mx-auto"
          color="green"
          type="button"
          onClick={handleSubmit}
        >
          충전하기
        </Button>
      </ButtonWrapper>
      {showModal && (
        <ChargeResultModal
          cardInfo={cardInfo}
          totalAmount={Number(cardInfo.remainAmount) + chargeAmount.amount}
          title=""
          success={modalSuccess || false}
          message="카드 충전"
          setModal={setShowModal}
        />
      )}
    </div>
  );
}
