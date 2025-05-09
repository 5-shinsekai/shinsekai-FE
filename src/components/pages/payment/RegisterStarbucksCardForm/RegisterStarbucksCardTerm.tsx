import React from 'react';

export default function RegisterStarbuckscardTerm() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-xl font-bold mb-6">
        카드 등록 약관 (임시입니다아..)
      </h1>

      <section className="text-sm leading-relaxed space-y-4 overflow-y-auto">
        <p>악관등록 내용</p>
        <h2>스타벅스 카드 등록 약관</h2>
        <ol>
          <li>
            사용자는 본인의 스타벅스 카드 정보를 등록함으로써 본 약관에 동의한
            것으로 간주됩니다. 본인의 명의로 발급된 카드만 등록 가능하며, 등록
            시 제공되는 모든 정보는 사실이어야 합니다.
          </li>
          <li>
            등록된 카드 정보는 서비스 내에서 카드 잔액 확인, 충전, 사용 내역
            조회 등의 목적으로 활용됩니다. 또한, 향후 서비스 개선 및 고객 맞춤형
            혜택 제공을 위해 내부 분석 자료로 사용될 수 있습니다.
          </li>
          <li>
            등록 가능한 카드는 유효한 카드 번호 및 PIN 번호를 보유한 스타벅스
            카드에 한합니다. 유효하지 않거나 이미 다른 계정에 등록된 카드는
            시스템에서 자동으로 등록이 거부될 수 있습니다.
          </li>
          <li>
            타인의 카드 정보를 무단으로 등록하거나 사용할 경우 관련 법령에 따라
            책임을 질 수 있습니다. 이러한 행위는 개인정보 침해 및 사기 행위로
            간주될 수 있으며 법적 처벌 대상이 될 수 있습니다.
          </li>
          <li>
            등록된 카드 정보는 서비스 제공을 위한 범위 내에서만 사용되며, 관련
            법령에 따라 보호됩니다. 고객의 개인정보 및 카드 정보는 철저히
            암호화되어 저장되며, 제3자에게 무단 제공되지 않습니다.
          </li>
          <li>
            사용자는 언제든지 등록된 카드를 삭제할 수 있으며, 삭제 시 해당
            카드와 관련된 서비스 이용이 제한될 수 있습니다. 삭제 후에는 해당
            카드의 정보 및 내역이 복구되지 않을 수 있으니 신중히 진행해 주시기
            바랍니다.
          </li>
          <li>
            본 약관은 사전 고지 없이 변경될 수 있으며, 변경 시 앱 또는
            웹사이트를 통해 공지됩니다. 변경된 약관은 공지 후 즉시 효력을
            발생하며, 계속해서 서비스를 이용하는 경우 변경 내용에 동의한 것으로
            간주됩니다.
          </li>
        </ol>
      </section>
    </div>
  );
}
