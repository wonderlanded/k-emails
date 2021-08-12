# k-emails

대한민국 이메일을 분류합니다.
특히, 전국에 중/고등/대 학교 이메일을 구분합니다.
## 설치
```sh
npm install k-emails
# or
yarn add k-emails
```
## 예시

```js
const kemails = require('k-emails')

kemails.findName('seoul@snu.ac.kr', 'academic').then(console.log)
// { name: '서울대학교', en: 'Seoul National University' }

kemails.findName('https://library.kaist.ac.kr', 'academic').then(console.log)
// { name: '한국과학기술원(KAIST)', en: 'Korea Advanced Institute of Science and Technology' }

kemails.findName('webmaster@korea.kr', 'government').then(console.log)
// { name: '대한민국 공직자', en: 'Republic of Korea public officials' }
```

## 사용법

### kemails.findName(email: string, type: 'academic' | 'government')

- `email` 이메일 혹은 도메인
- `type`
  - `academic` 교육 (학생/교사)
  - `government` 정부 관련 이메일

## 기여

여러분의 기여가 필요합니다.

특히 본인의 학교를 추가해주세요!

[기여 가이드](./CONTRIBUTING.md)

## 기타

- 기존 도메인 데이터셋은 [`JetBrains/swot`](https://github.com/JetBrains/swot) 일부를 가져와 사용하였습니다