# 2주차 프로젝트

Firebase

- 로그인 기능 구현
  - 페이스북 로그인 기능을 추가 합니다.
  - 단 로그인은 auth를 활용하여 api 로그인 동작만을 확인합니다.
- 회원가입 기능 구현
  - 회원가입은 사용자의 임의의 이메일과 패스워드를 등록할 수 있도록 합니다.
  - 로그인 페이지를 페이지 전환이 아닌 modal pop-up으로 만들어야 합니다.



## Firebase

### 1. 기능

Google 애널리틱스

실시간 데이터베이스

인증

호스팅



### 2. firebase 구조 파악하기

1. firebase 프로젝트 만들기

2. firebase 구성 객체 가져오기

   - api-key : `AIzaSyCax1KLYHHlLEoxNkRIW8efgUBWooyEB2Q`
   - projectId : `elice-ssafy`

3. firebase를 사용할 수 있도록 앱 구성(웹 앱)

   - 3가지 방법이 있다.

     - CDN에서 암묵적으로 특정 SDK 추가

       : 필요한 기능의 firebase 자바스크립트 sdk를 부분적으로 가져온다.

     - 특정 sdk를 번들로 포함하거나 동적으로 로드(사용중)

       : 앱에서 firebase 모듈을 사용한다.

       **- 현재 쓰고 있는 모듈** -

       ```javascript
       import firebase from 'firebase/app' //필수
       // 원하는 모듈 import
       import 'firebase/firestore' //cloud firestore
       import 'firebase/auth' //인증
       ```

     - firebase 자바스크립트 SDK 전체 추가

4. 앱에서 Firebase에 액세스

   - [인증 `firebase.auth()`](<https://firebase.google.com/docs/auth/web/start>)

     - [email-password html](<https://github.com/firebase/quickstart-js/blob/7d514fb4700d3a1681c47bf3e0ff0fa3d7c91910/auth/email-password.html#L95-L107>)

     - 신규 사용자 가입

     ```javascript
     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // ...
     });
     ```

     - 기존 사용자 로그인

     ```javascript
     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // ...
     });
     ```

     - Facebook Login 인증

       1. [facebook for developers](<https://wordpresser.co.kr/?p=5063>)

          app id : ``

          app pw : ``

          => 개발자로 가입해서 받아서 웹url 인증해야 함

       2. firebase auth 명세서 확인




- firebase 사이트

<https://www.slideshare.net/sungbeenjang/firebase-for-web-2-authentication>



- npm 가상 서버 실행시키기
  - npm run build
  - npm install -g serve
  - serve -s dist