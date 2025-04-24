'use client';

import { useEffect, useRef } from 'react';

export default function NotificationListener({
  memberUuid,
}: {
  memberUuid: string;
}) {
  const eventSourceRef = useRef<EventSource | null>(null);

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
    eventSource.addEventListener('notification', (event) => {
      const data = JSON.parse((event as MessageEvent).data);
      console.log('🔔 커스텀 알림:', data);
    });

    eventSource.addEventListener('restock', (event) => {
      const data = JSON.parse((event as MessageEvent).data);
      console.log('🔔 커스텀 알림 restock:', data);
    });
    eventSource.addEventListener('connected', (event) => {
      const data = JSON.parse((event as MessageEvent).data);
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

  return null;
}
