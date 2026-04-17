<template>
  <div class="fixed inset-0 flex items-center justify-center pointer-events-none z-20" aria-hidden="true">
    <div class="float-container">
      <span class="logo-a">a</span>
      <div class="glow-shadow"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FloatingLogo',
})
</script>

<style scoped>
.float-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 600px;
  animation: float 4.5s ease-in-out infinite;
  transform-style: preserve-3d;
}

.logo-a {
  display: block;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 180px;
  font-weight: 900;
  line-height: 1;
  color: rgba(215, 38, 61, 0.22);
  user-select: none;
  letter-spacing: -0.04em;
  text-shadow:
    1px 1px 0 rgba(185, 28, 46, 0.20),
    2px 2px 0 rgba(175, 26, 43, 0.19),
    3px 3px 0 rgba(160, 24, 39, 0.18),
    4px 4px 0 rgba(145, 21, 35, 0.17),
    5px 5px 0 rgba(130, 19, 31, 0.15),
    6px 6px 0 rgba(115, 17, 28, 0.13),
    7px 7px 0 rgba(100, 15, 24, 0.11),
    8px 8px 0 rgba(85, 12, 20, 0.09),
    9px 9px 12px rgba(0, 0, 0, 0.12),
    0 0 60px rgba(215, 38, 61, 0.12),
    0 0 120px rgba(215, 38, 61, 0.06);
}

.glow-shadow {
  width: 110px;
  height: 14px;
  margin-top: 6px;
  background: radial-gradient(ellipse, rgba(215, 38, 61, 0.22) 0%, transparent 70%);
  border-radius: 50%;
  animation: shadow-pulse 4.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: translateY(-22px) rotateX(7deg) rotateY(-3deg);
  }
  50% {
    transform: translateY(-30px) rotateX(3deg) rotateY(5deg);
  }
  75% {
    transform: translateY(-14px) rotateX(-4deg) rotateY(-2deg);
  }
}

@keyframes shadow-pulse {
  0%, 100% { transform: scaleX(1) scaleY(1); opacity: 1; }
  50% { transform: scaleX(0.55) scaleY(0.7); opacity: 0.45; }
}
</style>
