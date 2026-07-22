window.TIP_ITEMS = {
  "tip-model": [
    { title: "기본 캔버스 설정", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" },
    { title: "파라미터 연결", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" },
    { title: "물리 연출 적용", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" }
  ],
  "tip-expression": [
    { title: "기본 표정 만들기", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" },
    { title: "핫키 연동", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" }
  ],
  "tip-external": [
    { title: "OBS 연동", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" },
    { title: "Spout / NDI", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" }
  ],
  "tip-iphone": [
    { title: "Face Tracking 연결", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" },
    { title: "트래킹 품질 조절", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" }
  ],
  "model-vtube": [
    {
      title: "",
      html: `
        <a class="tip-steam-card" href="https://store.steampowered.com/app/1325860/VTube_Studio/" target="_blank" rel="noopener noreferrer">
          <span class="tip-steam" aria-hidden="true">
            <img class="tip-steam-icon" src="images/steam.png?v=4" alt="" width="40" height="40" decoding="async">
          </span>
          <span class="tip-steam-card-body">
            <span class="tip-note">※ 수익창출이 가능한 용도로 사용(스트리밍 및 영상촬영)시 dlc 한 개 이상 구매 필수인 규정이 생겼습니다. 참고 부탁드립니다.</span>
          </span>
        </a>
      `
    },
    {
      title: "언어 설정법",
      html: `
        <ol>
          <li>Vtube Studio</li>
          <li>Setting (메뉴 4번째 톱니바퀴 아이콘)</li>
          <li>우측 상단 말풍선 Aあ</li>
          <li>한국어 클릭</li>
        </ol>
      `
    },
    {
      title: "모델 적용법",
      youtubeId: "_dapV9Iy1kQ",
      html: `
        <ul>
          <li>구글 드라이브 내 압축 파일을 압축 해제해주세요.</li>
          <li>
            파일을 아래 경로에 넣어주세요.
            <div class="tip-path">
              <code>C:\\Program Files (x86)\\<wbr>Steam\\<wbr>steamapps\\<wbr>common\\<wbr>VTube Studio\\<wbr>VTube Studio_Data\\<wbr>StreamingAssets\\<wbr>Live2DModels</code>
            </div>
          </li>
        </ul>
        <p>혹은</p>
        <ol>
          <li>라이브러리</li>
          <li>Vtube Studio</li>
          <li>설치 (혹은 실행) 버튼 우측 톱니바퀴</li>
          <li>관리</li>
          <li>로컬 파일 탐색</li>
          <li>Vtube Studio_Data</li>
          <li>StreamingAssets</li>
          <li>
            Live2DModels 파일 안에 압축 해제한 파일 넣기
            <ul>
              <li>Live2DModels 내 ㅇㅇㅇ_vts 파일은 전부 삭제하셔도 됩니다.</li>
            </ul>
          </li>
        </ol>
        <p>Vtube Studio 실행 - 메뉴 (배경 두번 클릭) - Vts 모델 바꾸기 (맨 위 사람 모양 아이콘) - 본인 모델을 불러오시면 됩니다.</p>
      `
    },
    {
      title: "트래킹 연결 방법",
      html: `
        <ul>
          <li>반드시 밝은 환경에서 트래킹을 진행해주세요.</li>
          <li>Vbridger 옵션을 추가하신 분은 반드시 Vbridger 설정을 따라주세요.</li>
        </ul>
      `
    },
    {
      title: "웹캠",
      youtubeId: "_dapV9Iy1kQ",
      html: `
        <ol>
          <li>Vtube Studio 메뉴</li>
          <li>Setting (메뉴 4번째 톱니바퀴 아이콘)</li>
          <li>트래킹 셋팅 (좌측 상단 카메라 아이콘)</li>
          <li>카메라 선택</li>
          <li>본인 카메라 모델 선택</li>
          <li>
            트래킹 품질 선택
            <ul>
              <li>Level 5 혹은 RTX ON (NVIDIA 그래픽 카드)</li>
            </ul>
          </li>
        </ol>
        <p>RTX ON이 없다면</p>
        <ol>
          <li>스팀</li>
          <li>Vtube Studio</li>
          <li>DLC</li>
          <li>NVIDIA BROADCAST TRACKER(무료)</li>
          <li>설치</li>
        </ol>
      `
    },
    {
      title: "아이폰",
      youtubeId: "_dapV9Iy1kQ",
      html: `
        <p>PC 설정 후 아이폰 설정으로 넘어가주세요.</p>
        <p><strong>PC 설정</strong></p>
        <ol>
          <li>Vtube Studio</li>
          <li>메뉴</li>
          <li>Setting</li>
          <li>서버 설정(WIFI) (스크롤 하단)</li>
          <li>서버 열기</li>
        </ol>
        <p><strong>아이폰 설정</strong></p>
        <ol>
          <li>Vtube Studio</li>
          <li>메뉴</li>
          <li>Setting</li>
          <li>PC 연결(WIFI) (스크롤 하단)</li>
          <li>PC에 접속하기/연결 모드 활성화</li>
          <li>서버 찾기</li>
        </ol>
      `
    }
  ],
  "model-vbridger": [
    {
      title: "아이폰 - Vbridger(PC) 연결",
      html: `
        <p>※ 반드시 앱스토어에서 iFacialMocap을 구매해주세요 (<a href="https://apps.apple.com/kr/app/ifacialmocap/id1489470545" target="_blank" rel="noopener noreferrer">구매 링크</a>)</p>
        <p>※ 아이폰 Vtube Studio - PC Vbridger 연결에 오류가 많습니다.</p>
        <p>본 설명은 iFacialMocap, 윈도우 운영체제 기준 셋팅 방법입니다.</p>
      `
    },
    {
      title: "PC · IPv4 확인",
      html: `
        <ol>
          <li>Win + F (찾기)</li>
          <li>CMD 검색</li>
          <li>명령 프로토콜 실행</li>
          <li>ipconfig 입력</li>
          <li>IPv4 주소 복사 (123.456.789.001 형식)</li>
        </ol>
      `
    },
    {
      title: "Vbridger 설정",
      html: `
        <ol>
          <li>Vbridger 실행</li>
          <li>Vbridger 내 좌측 하단 Vtube Studio를 iFacialMocap 으로 변경</li>
          <li>IPv4 주소를 Enter IPhone IP Adress에 입력</li>
        </ol>
      `
    },
    {
      title: "아이폰 · iFacialMocap",
      html: `
        <ol>
          <li>아이폰 iFacialMocap 실행</li>
          <li>화면 우측 상단 톱니바퀴 클릭</li>
          <li>추적 설정 - 장기간 스트리밍에 최적화합니다. 활성화</li>
          <li>목적지 IP 주소에 IPv4 주소 입력</li>
        </ol>
      `
    }
  ],
  "model-expression": [
    {
      title: "표정 및 단축키",
      html: `
        <ol>
          <li>VTube Studio</li>
          <li>Settings</li>
          <li>Hotkey Settings &amp; Expression (슬레이트 아이콘)</li>
        </ol>
      `
    },
    {
      title: "표정 추가",
      html: `
        <ol>
          <li>표정/포즈 에디터</li>
          <li>새 표정/포즈 만들기</li>
          <li>원하는 표정을 활성화</li>
          <li>왼쪽 → 오른쪽 (0은 1로, -1은 0으로)</li>
          <li>표정 이름 설정 (상단 표정/포즈 이름에 입력)</li>
        </ol>
      `
    },
    {
      title: "단축키 설정",
      html: `
        <ol>
          <li>맨 하단 스크롤</li>
          <li>+ 클릭</li>
          <li>단축키 이름 설정</li>
          <li>단축키 동작 클릭</li>
          <li>표정/포즈를 껐다 킵니다.</li>
          <li>표정/포즈 클릭</li>
          <li>생성한 표정 혹은 기존 표정 선택</li>
          <li>Record 클릭</li>
          <li>설정 원하는 단축키를 입력 (ex. Ctrl/Shift/3)</li>
        </ol>
      `
    }
  ],
  "model-shoost": [
    { title: "Shoost 연동", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" },
    { title: "방송 연출", text: "설명 쓰는 공간", youtubeId: "_dapV9Iy1kQ" }
  ]
};
