import "./style.css";

// TailwindCSS 4.0 주요 특징 출력
const showTailwindFeatures = () => {
  const features = [
    "🚀 성능 개선: 빌드 시간 최대 10배 향상",
    "📦 번들 크기 감소: 기본 번들 크기 50% 감소",
    "🔄 ESM 기본 지원: 모듈 시스템 현대화",
    "🎨 새로운 컬러 팔레트: 더 세련된 디자인 가능",
    "🛠️ 개선된 CLI 도구: 더 직관적인 명령어 옵션",
    "⚙️ 설정 파일 간소화: TypeScript 기본 지원",
    "🧩 플러그인 API 개선: 더 강력한 확장성",
  ];

  console.log("TailwindCSS 4.0 주요 특징:");
  features.forEach((feature) => console.log(feature));
};

showTailwindFeatures();

export { showTailwindFeatures };

// zzim icon js
document.querySelector(".zzim-icon").addEventListener("click", function () {
  const checkBox = document.getElementById("zzim-check-icon"); // 체크박스 가져오기
  const isChecked = checkBox.checked; // 체크 상태 확인

  if (isChecked) {
    // `zzim-effect-svg` 애니메이션 실행 (항상 다시 실행되도록)
    document.querySelectorAll(".zzim-effect-svg").forEach((el, index) => {
      const animationName = el.dataset.animation; // 개별 애니메이션 이름 가져오기
      el.style.animation = "none"; // 기존 애니메이션 초기화
      void el.offsetWidth; // 리플로우 트리거
      el.style.animation = `${animationName} 1s cubic-bezier(0.7, 0.12, 0.4, 0.95) ${index * 0.02}s 1 forwards`;
    });

    // `zzim-icon-circle-list` 내부의 원 애니메이션 실행 (항상 다시 실행되도록)
    document.querySelectorAll(".icon-circle").forEach((el, index) => {
      el.style.animation = "none"; // 기존 애니메이션 초기화
      void el.offsetWidth; // 리플로우 트리거 (애니메이션을 다시 적용할 수 있도록 강제)
      el.style.animation = `zzim-icon-circle 0.5s cubic-bezier(.87,.04,.56,1.35) ${index * 0.3}s 1 forwards`;
    });

  } else {
    // 체크 해제 시 모든 애니메이션을 제거 (다시 실행되지 않도록)
    document.querySelectorAll(".zzim-effect-svg, .icon-circle").forEach((el) => {
      el.style.animation = "none"; // 모든 애니메이션 초기화
    });
  }
});