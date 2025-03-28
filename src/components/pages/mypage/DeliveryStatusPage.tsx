export default function DeliveryStatusSection() {
  return (
    <section className="py-[1.625rem]">
      <header className="flex justify-between px-[1.5rem]">
        <h1>주문/배송현황</h1>
        <p>최근 3개월동안 구매한 상품</p>
      </header>
      <div className="flex justify-center mx-auto">
        결제완료 상품준비중 배송중 배송완료
      </div>
    </section>
  );
}
