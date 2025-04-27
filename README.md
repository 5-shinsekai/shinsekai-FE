# Starbucks Rebuilding Project

## 프로젝트 개요

스타벅스 웹사이트를 클론하는 프로젝트입니다. React와 TypeScript를 사용하여 구현되었습니다.

## 기술 스택

### 💻 Frontend

- React
- TypeScript
- Next.js (App Router)
- pnpm (10.6.4)
- Tailwind CSS

### 🛠 Development Tools

- Git
- ESLint
- Prettier
- PostCSS

## 설치 및 실행 방법

### 개발 환경 설정

1. 프로젝트 클론

```bash
git clone [repository-url]
```

2. 의존성 설치

```bash
pnpm install
```

3. 개발 서버 실행

```bash
pnpm run dev
```

## 프로젝트 구조

```
src/
├── app/                # Next.js App Router 페이지 및 레이아웃
├── components/         # 재사용 가능한 UI 컴포넌트
├── action/            # API 요청 및 서버 액션
├── config/            # next-auth 설정 관련 파일
├── context/           # Contextapi 관련 파일
├── data/              # 정적 데이터 및 상수
├── fonts/             # 폰트 파일
├── lib/               # 유틸리티 함수 및 라이브러리
├── provider/          # React Provider 컴포넌트
├── schemas/           # 데이터 검증 스키마
├── types/             # TypeScript 타입 정의
└── middleware.ts      # Next.js 미들웨어

public/               # 정적 파일 (이미지, 아이콘 등)
```

## 🚀 주요 기능 (Features)

### 🛒 장바구니 시스템

- 상품 종류 최대 20개 제한
- 옵션 중복 포함 최대 수량 5개 제한
- 실시간 수량 업데이트
- 장바구니 상품 삭제/수정 기능

### 🔍 상품 필터링

- 카테고리 기반 필터링
- 검색어 기반 필터링
- 정렬 기능 (가격, 인기순 등)

### 🔔 실시간 알림

- SSE 기반 실시간 알림
- 재입고 알림 서비스

### 🔐 인증/인가

- JWT 기반 사용자 인증
- OAuth2.0 기반 소셜 로그인 (카카오)

### 📦 배송지 관리
- 배송지 등록
- 배송지 수정 및 삭제

### 💳 결제 및 주문
- 스타벅스 카드 등록 및 충전
- 스타벅스 카드 삭제
- 배송지 선택
- 주문 상품 조회
- 스타벅스 카드 결제

### 🙋 마이페이지
- 주문 내역 확인
- 스타벅스 카드 관리
- 배송지 관리
- 알림 신청 내역 확인

## 개발 가이드

### 패키지 관리

- pnpm 사용 (10.6.4)
- 프로젝트 초기 clone 후 `pnpm install`로 패키지 설치
- 매 커밋마다 `pnpm run build`로 빌드 성공 확인

### Git 환경설정

```bash
git config core.ignorecase false
```

- 프로젝트 파일의 대소문자 구분을 위해 설정 변경

### FE 컨벤션

- Type, Interface 관련
  - Type, Interface 관련은 모두 src/types에 정리
  - 파일 이름 및 각 객체 이름은 Pascal case로 작성
    - ex: Common.ts 내부 파일 CommonResponseType으로 이름지정
- Component 관련
  - 함수형 컴포넌트로 작성
  - 파일 명 및 함수 명 전부 Pascal case로 작성
- action 관련
  - API 요청들을 해당 파일에 저장
  - index.ts를 기본 이름으로 설정
  - 폴더 네이밍 @@-service로 작성(Snake case)
  - api 네이밍 Camel case로 작성

### 커밋 메시지 컨벤션

- Feat: 새로운 기능 추가
- Fix: 버그 수정
- Docs: 문서 수정
- Style: 코드 스타일 변경
- Refactor: 코드 리팩토링
- Test: 테스트 코드 추가/수정
- Chore: 빌드 프로세스 또는 보조 도구 변경
- Merge : 코드 merge

## 📚 참고자료 (References)

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
