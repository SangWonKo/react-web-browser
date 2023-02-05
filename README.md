# React Web Browser

개발 기간: 2023.01.28 - 2022.02.03  
iframe을 활용한 브라우저 클론 토이 프로젝트
<br />

## 프로젝트 실행 방법

1. install dependencies  
   `yarn`

2. run project  
   `yarn start`

<br />

## Directory 구조

```bash
└── src
    ├── components
    ├── hooks                       #  browser tab url 관리 hook
    ├── layouts
    ├── pages
    ├── store                       #  types & recoil atom
    ├── styles                      #  theme 관련
    └── utils
```

<br />

## 사용한 기술

#### 1. CRA (Create-React-App)

- 빠르고 간편한 개발 환경 세팅을 위해 React boilerplate인 CRA를 사용하여 프로젝트 설정을 진행하였습니다.

#### 2. Typescript

- 컴파일 단계에서의 오류를 미리 잡아낼 수 있는 장점을 가집니다.
- 명시적인 정적 타입 지정을 통해 코드의 가독성을 높이고 빠른 디버깅을 가능하게 합니다.

#### 3. Recoil

- 비교적 간단한 전역상태 설정과 익숙한 hook 방식의 상태관리를 활용하기 위해 선택하게 되었습니다.

<br />

## 한계점

iframe을 통해 외부 도메인 접근할 때 XSS 공격 또는 clickjacking 등을 방지하기 위한 보안 상의 이유로 X-Frame-Options 설정이 되어있는 도메인은 접근할 수 없는 한계가 있습니다.
