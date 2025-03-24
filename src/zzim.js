const zzimIconArray = document.getElementsByClassName('zzim-icon');
Array.from(zzimIconArray).forEach((e, i) => {
  e.addEventListener('click', function () {
    const checkBox = document.getElementsByClassName('zzim-check-icon')[i]; // 체크박스 가져오기
    const isChecked = checkBox.checked; // 체크 상태 확인

    if (isChecked) {
      const zzimEffect = document.getElementsByClassName('zzim-effect')[i];
      Array.from(zzimEffect.children).forEach((el, index) => {
        const animationName = el.dataset.animation; // 개별 애니메이션 이름 가져오기
        el.style.animation = 'none'; // 기존 애니메이션 초기화
        void el.offsetWidth; // 리플로우 트리거
        el.style.animation = `${animationName} 1s cubic-bezier(0.7, 0.12, 0.4, 0.95) ${
          index * 0.02
        }s 1 forwards`;
      });
      const zzimIconCircleList = document.getElementsByClassName(
        'zzim-icon-circle-list'
      )[i];
      Array.from(zzimIconCircleList.children).forEach((el, index) => {
        el.style.animation = 'none'; // 기존 애니메이션 초기화
        void el.offsetWidth; // 리플로우 트리거 (애니메이션을 다시 적용할 수 있도록 강제)
        el.style.animation = `zzim-icon-circle 0.5s cubic-bezier(.87,.04,.56,1.35) ${
          index * 0.3
        }s 1 forwards`;
      });
    } else {
      // 체크 해제 시 모든 애니메이션을 제거 (다시 실행되지 않도록)
      const zzimEffect = document.getElementsByClassName('zzim-effect')[i];
      Array.from(zzimEffect.children).forEach((el) => {
        el.style.animation = 'none'; // 모든 애니메이션 초기화
      });
      const zzimIconCircleList = document.getElementsByClassName(
        'zzim-icon-circle-list'
      )[i];
      Array.from(zzimIconCircleList.children).forEach((el) => {
        el.style.animation = 'none'; // 모든 애니메이션 초기화
      });
    }
  });
});
