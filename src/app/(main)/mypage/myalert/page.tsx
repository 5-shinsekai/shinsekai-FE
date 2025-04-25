import React from 'react';
import AlertCard from '@/components/RestockAlert/AlertCard';
import { getAlertList } from '@/action/product-service';

export default async function page() {
  const alertData = await getAlertList();
  const alertList = alertData.filter((alert) => !alert.mailNotified);
  console.log(alertData);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-6">알림 신청 내역</h1>

      <div className="mb-6">
        {alertList.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            알림 신청 내역이 없습니다.
          </div>
        ) : (
          <div>
            {alertList.map((alert) => (
              <AlertCard
                key={alert.id}
                productionOptionId={alert.productionOptionId}
                validUntil={alert.validUntil}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
