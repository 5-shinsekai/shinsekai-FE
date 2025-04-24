'use client';

import { useEffect, useRef, useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useRouter } from 'next/navigation';
export default function NotificationListener({
  memberUuid,
}: {
  memberUuid: string;
}) {
  const eventSourceRef = useRef<EventSource | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [notificationData, setNotificationData] = useState<{
    productCode: string;
    productName: string;
  }>({
    productCode: '',
    productName: '',
  });
  const router = useRouter();
  useEffect(() => {
    if (!memberUuid) return;

    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_BASE_URL}/sse/${memberUuid}`
    );
    eventSourceRef.current = eventSource;
    console.log('SSE 연결 성공');
    // 기본 메시지 수신 처리 (onmessage는 "message" 이벤트 핸들링)
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('📩 알림 수신:', data);

      // 알림 처리 로직 (예: toast, state 업데이트 등)
    };

    // 커스텀 이벤트 리스닝 예시

    eventSource.addEventListener('restock', (event) => {
      const data = JSON.parse((event as MessageEvent).data);
      console.log('🔔 커스텀 알림 restock:', data);
      console.log(data);
      setNotificationData(data);
      setShowModal(true);
    });
    eventSource.addEventListener('connected', (event) => {
      const data = (event as MessageEvent).data;
      console.log('🔔 연결됨: 진짜루', data);
    });

    eventSource.onerror = (err) => {
      if (memberUuid) {
      }
      console.error('❌ SSE 연결 오류', err);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [memberUuid]);

  return (
    <>
      {showModal && (
        <Modal className="h-1/3 rounded-2xl">
          <div className="flex flex-col gap-2 p-5">
            <h1 className="text-2xl text-center font-bold">재입고 알림</h1>
            <p className="text-center mt-3 text-lg">
              등록하신 {notificationData.productName} 제품이 제입고 되었습니다!
            </p>
          </div>
          <div className="gap-2 flex justify-center pb-5">
            <Button
              color="green"
              size="md"
              onClick={() => {
                router.push(`/products/${notificationData.productCode}`);
                setShowModal(false);
              }}
            >
              상품 보러가기
            </Button>
            <Button size="md" onClick={() => setShowModal(false)}>
              닫기
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
