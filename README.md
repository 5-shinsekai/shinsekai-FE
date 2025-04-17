# Frontend 관련 기본 컨벤션 정리

- 패키지 관리 툴 : pnpm 사용 (10.6.4)

  - 프로젝트 초기 clone 후 pnpm install 로 패키지 설치
  - 매 커밋마다 pnpm run build 로 빌드 성공되는것 확인하기

- Git 환경설정 관련

  - git config core.ignorecase false
  - 위 명령어를 통해, 이후 파일 내 네이밍 컨벤션 수정 시 반영

- FE 컨벤션
  - Type, Interface 관련
    - Type, Interface 관련은 모두 src/types에 정리
    - 파일 이름 및 각 객체 이름은 Pascal case 로 작성
      - ex : Common.ts 내부 파일 CommonResponseType 으로 이름지정
  - Component 관련
    - 함수형 컴포넌트로 작성
    - 파일 명 및 함수 명 전부 Pascal case로 작성
  - action 관련
    - API 요청들을 해당 파일에 저장
    - index.ts를 기본 이름으로 설정
    - 폴더 네이밍 @@-service로 작성(Snake case)
    - api 네이밍 Camel case 로 작성
