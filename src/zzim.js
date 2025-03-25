document.addEventListener('DOMContentLoaded', function () {
  const zzimIconArray = document.getElementsByClassName('zzim-icon');
  const checkBox = document.getElementsByClassName('zzim-check-icon');
  const zzimEffect = document.getElementsByClassName('zzim-effect');
  const zzimIconCircleList = document.getElementsByClassName(
    'zzim-icon-circle-list'
  );

  // 1. 찜 버튼 클릭 이벤트 처리
  Array.from(zzimIconArray).forEach((e, i) => {
    e.addEventListener('click', () => {
      if (checkBox[i].checked) {
        // 아직 활성화되지 않은 경우에만 애니메이션 실행
        if (!e.classList.contains('completed')) {
          // 파티클 애니메이션 실행
          Array.from(zzimEffect[i].children).forEach((el, index) => {
            const animationName = el.dataset.animation;
            el.style.animation = 'none';
            void el.offsetWidth; // 리플로우 트리거
            el.style.animation = `${animationName} 1s cubic-bezier(0.7, 0.12, 0.4, 0.95) ${
              index * 0.02
            }s 1 forwards`;
          });
          Array.from(zzimIconCircleList[i].children).forEach((el, index) => {
            el.style.animation = 'none';
            void el.offsetWidth;
            el.style.animation = `zzim-icon-circle 0.5s cubic-bezier(.87, .04, .56, 1.35) ${
              index * 0.3
            }s 1 forwards`;
          });
          // 하트 애니메이션는 CSS에서 처리되며, 완료 후 .completed 클래스를 추가하여 상태 고정
          e.classList.add('completed');
        }
      } else {
        // 체크 해제 시에는 상태 초기화
        e.classList.remove('completed');
        Array.from(zzimEffect[i].children).forEach((el) => {
          el.style.animation = 'none';
        });
        Array.from(zzimIconCircleList[i].children).forEach((el) => {
          el.style.animation = 'none';
        });
      }
    });
  });

  // 2. MutationObserver로 필터에 의해 카드가 재표시될 때 처리
  // (카드는 .filter-character 요소라고 가정)
  const filterCards = document.querySelectorAll('.filter-character');
  filterCards.forEach((card) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'hidden') {
          // 카드가 보이는 상태라면 (hidden이 false)
          if (!card.hidden) {
            const checkbox = card.querySelector('.zzim-check-icon');
            if (checkbox && checkbox.checked) {
              const zzimIcon = card.querySelector('.zzim-icon');
              // 만약 찜 버튼이 이미 활성화되어 있다면
              if (zzimIcon && zzimIcon.classList.contains('completed')) {
                const effect = card.querySelector('.zzim-effect');
                if (effect) {
                  Array.from(effect.children).forEach((child) => {
                    child.style.animation = 'none';
                  });
                }
                const iconCircleList = card.querySelector(
                  '.zzim-icon-circle-list'
                );
                if (iconCircleList) {
                  Array.from(iconCircleList.children).forEach((child) => {
                    child.style.animation = 'none';
                  });
                }
              }
            }
          }
        }
      });
    });
    observer.observe(card, { attributes: true });
  });
});
