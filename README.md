## 파리 올림픽 메달 집계 앱 (React + Redux Toolkit + redux-persist)

파리 올림픽 참가국의 메달 현황을 추가/업데이트/삭제하고, 금/은/동 우선순위로 정렬해 보여주는 SPA입니다. 전역 상태는 Redux Toolkit으로 관리하며, `redux-persist`를 통해 LocalStorage에 자동 저장됩니다. 알림 UI는 `react-toastify`를 사용했습니다.

### 주요 기능
- **국가 추가**: 국가명과 금/은/동 메달 수를 입력해 목록에 추가합니다. 중복 국가명은 추가를 차단합니다.
- **국가 업데이트**: 동일한 국가명을 기준으로 금/은/동 값을 업데이트합니다.
- **국가 삭제**: 선택한 국가 데이터를 목록에서 제거합니다.
- **정렬 표시**: 금 → 은 → 동 순으로 내림차순 정렬해 테이블에 표시합니다.
- **영속성(persist)**: 앱 새로고침/재방문 시에도 LocalStorage에서 상태를 복원합니다.
- **알림 UI**: 추가/업데이트/삭제/에러 상황을 토스트로 안내합니다.

### 기술 스택
- **Frontend**: React 18, Vite
- **State Management**: Redux Toolkit, React-Redux
- **Persistence**: redux-persist (storage: LocalStorage)
- **UI/UX**: react-toastify
- **Lint**: ESLint

### 프로젝트 구조
```
olympic-medals-project/
  public/
  src/
    components/
      MedalForm.jsx      # 입력 폼 (추가/업데이트)
      MedalItem.jsx      # 메달 테이블 (정렬/삭제)
    redux/
      MedalsSlice.jsx    # slice (add/update/delete)
      MedalsStore.jsx    # store + redux-persist 설정
    App.jsx              # 화면 구성 + ToastContainer 포함
    main.jsx             # Provider + PersistGate 적용
  README.md
  package.json
```

### 설치 및 실행
```bash
# 패키지 설치
yarn

# 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build

# 빌드 미리보기
yarn preview
```

브라우저에서 Vite가 표시하는 주소(예: `http://localhost:5173`)로 접속합니다.

### 전역 상태 구조
```json
{
  "medals": {
    "medals": [
      { "id": 1731234567890, "country": "KOR", "gold": 1, "silver": 2, "bronze": 3 }
    ]
  }
}
```

### 핵심 로직 요약
- **Slice (`src/redux/MedalsSlice.jsx`)**
  - `addMedals(payload)`
    - 새로운 메달 객체를 배열에 추가합니다.
  - `deleteMedals(id)`
    - `id`가 일치하는 항목을 제거합니다.
  - `updateMedals(payload)`
    - `country`명이 같은 항목을 찾아 해당 객체로 교체합니다.

- **Store (`src/redux/MedalsStore.jsx`)**
  - `redux-persist`로 `medals` 리듀서를 화이트리스트에 등록해 LocalStorage에 저장/복원합니다.
  - `PersistGate`로 복원 완료 전까지 UI 렌더를 지연시킵니다.

- **정렬 (`src/components/MedalItem.jsx`)**
  - 표시 시점에 `[...medals].sort((a,b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze)`로 정렬합니다.

- **검증/알림 (`src/components/MedalForm.jsx`)**
  - 국가 추가 전, 대소문자/공백을 무시한 국가명 중복을 검사합니다.
  - 중복 시 에러 토스트, 성공 시 성공 토스트를 표시합니다.

### 화면/사용 방법
1. 상단 입력 폼에 국가명과 금/은/동 메달 수를 입력합니다.
2. [국가 추가]를 누르면 목록에 반영되며 토스트가 표시됩니다.
3. 이미 존재하는 국가명을 입력 후 [업데이트]를 누르면 해당 국가의 값이 갱신됩니다.
4. 목록의 [삭제] 버튼으로 항목을 제거할 수 있습니다.
5. 목록은 항상 금 → 은 → 동 순으로 내림차순 정렬되어 보입니다.

### 알림 UI (react-toastify)
- `App.jsx`에 `<ToastContainer />`가 포함되어 있으며, 각 액션에서 `toast.success`, `toast.error`를 호출합니다.
- 기본 스타일을 사용합니다. 커스터마이징이 필요하면 `react-toastify` 옵션을 적용하세요.
- 스타일 적용을 위해 한 번만 CSS를 임포트하세요(예: `src/App.jsx`).

```javascript
import 'react-toastify/dist/ReactToastify.css';
```

### 자주 하는 질문(FAQ)
- **상태를 초기화하고 싶어요.**
  - 브라우저 개발자 도구 → Application → Local Storage에서 해당 도메인의 저장 데이터를 제거하세요.
  - 또는 코드에서 `persistor.purge()`를 호출할 수 있습니다(개발용 권장).
- **중복 국가가 추가되지 않아요.**
  - 의도된 동작입니다. 국가명은 공백/대소문자 무시 후 비교하여 중복을 방지합니다.

### 라이선스
이 저장소는 학습/포트폴리오 목적의 예제입니다. 별도의 라이선스가 명시되지 않았다면 개인 학습/시연 용도로 자유롭게 사용하세요.

