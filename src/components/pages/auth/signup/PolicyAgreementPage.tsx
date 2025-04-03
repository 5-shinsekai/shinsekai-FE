import React from 'react';
import CustomCheckbox from '@/components/ui/CustomCheckbox';
import { policyData } from '@/data/InitialData';
export default function PolicyAgreementPage() {
  return (
    <div>
      <CustomCheckbox />
      {policyData.map((policy) => (
        <div key={policy.id} className="flex gap-x-2 items-center h-7">
          <CustomCheckbox
            name="checked_id"
            id={policy.id.toString()}
            value={policy.id}
          />
          <label htmlFor={policy.id.toString()}>{policy.title}</label>
          <div>{policy.sub ? <div>hi</div> : ''}</div>
        </div>
      ))}
    </div>
  );
}
