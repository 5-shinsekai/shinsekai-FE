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
