# Starbucks Rebuilding Project

## 프로젝트 개요

스타벅스 웹사이트를 클론하는 프로젝트입니다. React와 TypeScript를 사용하여 구현되었습니다.

## 기술 스택

- React
- TypeScript
- pnpm (10.6.4)
- Git

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
  ├── components/     # 재사용 가능한 컴포넌트
  ├── types/         # TypeScript 타입 정의
  ├── services/      # API 서비스
  └── ...
```

## 개발 가이드

### 패키지 관리

- pnpm 사용 (10.6.4)
- 프로젝트 초기 clone 후 `pnpm install`로 패키지 설치
- 매 커밋마다 `pnpm run build`로 빌드 성공 확인

### Git 환경설정

```bash
git config core.ignorecase false
```

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

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 스타일 변경
- refactor: 코드 리팩토링
- test: 테스트 코드 추가/수정
- chore: 빌드 프로세스 또는 보조 도구 변경

## 배포

1. 빌드

```bash
pnpm run build
```

2. 배포 프로세스

- [배포 프로세스 설명]

## 기여 방법

1. 이슈 생성
2. 브랜치 생성
3. 코드 수정
4. PR 제출
5. 코드 리뷰

## 라이센스

[라이센스 정보]
