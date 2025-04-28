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
  const reconnectAttempts = useRef(0);
  const maxReconnectAttempts = 3;
  const router = useRouter();

  const connectSSE = () => {
    if (!memberUuid) return;

    const eventSource = new EventSource(
      `${process.env.NEXT_PUBLIC_BASE_URL}/sse/${memberUuid}`
    );
    eventSourceRef.current = eventSource;

    eventSource.addEventListener('restock', (event) => {
      const data = JSON.parse((event as MessageEvent).data);
      console.log('🔔 커스텀 알림 restock:', data);
      setNotificationData(data);
      setShowModal(true);
    });

    eventSource.addEventListener('connected', (event) => {
      const data = (event as MessageEvent).data;
      console.log('🔔 연결됨:', data);
      reconnectAttempts.current = 0; // 연결 성공 시 재시도 횟수 초기화
    });

    eventSource.onerror = (err) => {
      if (reconnectAttempts.current < maxReconnectAttempts) {
        reconnectAttempts.current += 1;
        console.log(
          `재연결 시도 ${reconnectAttempts.current}/${maxReconnectAttempts}`
        );
        setTimeout(connectSSE, 3000); // 3초 후 재연결 시도
      } else {
        console.error('❌ SSE 연결 오류', err);
        eventSource.close();
      }
    };
  };

  useEffect(() => {
    connectSSE();
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, [memberUuid]);

  return (
    <>
      {showModal && (
        <Modal className="h-1/3 rounded-2xl">
          <div className="flex flex-col gap-2 p-5">
            <h1 className="text-2xl text-center font-bold">재입고 알림</h1>
            <p className="text-center mt-3 text-lg">
              등록하신 {notificationData.productName} 제품이 재입고 되었습니다!
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
