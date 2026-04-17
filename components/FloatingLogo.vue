<template>
  <div class="fixed left-0 right-0 flex justify-center pointer-events-none z-20 logo-pos" aria-hidden="true">
    <div class="float-container">
      <span class="logo-word">ace<span class="logo-fluento">fluento</span></span>
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
.logo-pos {
  top: 18%;
}

.float-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 600px;
  animation: float 4.5s ease-in-out infinite;
  transform-style: preserve-3d;
}

.logo-word {
  display: block;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 72px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.10);
  user-select: none;
  text-shadow:
    1px 1px 0 rgba(180, 180, 180, 0.08),
    2px 2px 0 rgba(160, 160, 160, 0.07),
    3px 3px 0 rgba(140, 140, 140, 0.06),
    4px 4px 0 rgba(120, 120, 120, 0.05),
    5px 5px 8px rgba(0, 0, 0, 0.08),
    0 0 40px rgba(255, 255, 255, 0.04);
}

.logo-fluento {
  color: rgba(215, 38, 61, 0.13);
  text-shadow:
    1px 1px 0 rgba(185, 28, 46, 0.11),
    2px 2px 0 rgba(160, 24, 39, 0.10),
    3px 3px 0 rgba(140, 20, 33, 0.08),
    4px 4px 0 rgba(120, 18, 28, 0.06),
    5px 5px 8px rgba(0, 0, 0, 0.08),
    0 0 40px rgba(215, 38, 61, 0.06);
}

.glow-shadow {
  width: 180px;
  height: 10px;
  margin-top: 4px;
  background: radial-gradient(ellipse, rgba(215, 38, 61, 0.10) 0%, transparent 70%);
  border-radius: 50%;
  animation: shadow-pulse 4.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: translateY(-14px) rotateX(5deg) rotateY(-2deg);
  }
  50% {
    transform: translateY(-20px) rotateX(2deg) rotateY(3deg);
  }
  75% {
    transform: translateY(-9px) rotateX(-3deg) rotateY(-1deg);
  }
}

@keyframes shadow-pulse {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.6); opacity: 0.4; }
}
</style>
