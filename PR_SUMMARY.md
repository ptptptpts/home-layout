## Modified Files
- `src/engine/types.ts`: 방과 좌표에 대한 기본 인터페이스 정의.
- `src/engine/room.ts`: 방 생성 로직 및 초기 크기 상수 정의.
- `src/engine/room.test.ts`: 방 생성 엔진 로직에 대한 TDD 테스트 코드.
- `src/components/Canvas.tsx`: Fabric.js를 이용한 기본 캔버스 컴포넌트 구현.
- `src/App.tsx`: 초기 레이아웃 및 캔버스 렌더링 구성.

## Core Logic
- **Engine Layer**: 순수 함수를 사용하여 방의 초기 상태를 생성하는 로직을 분리하였습니다.
- **UI Layer**: Fabric.js를 React `useRef`와 `useEffect`를 통해 생명주기를 관리하며 초기화합니다.

## Testing
- `vitest`를 사용하여 `createRoom` 함수의 기본 동작(ID, 이름, 기본 크기 설정)을 검증하는 테스트를 작성하고 통과하였습니다.
