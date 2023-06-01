<template>
  <div class="w-full">
    <section class="cb-tagreel w-full">
      <div class="cb-tagreel-content w-full">
        <div class="cb-tagreel-items w-full" role="marquee">
          <div class="cb-tagreel-row w-full">
            <slot></slot>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

defineProps({
  length: Number,
});
const runInfiniteScroll = () => {
  const rows = document.querySelectorAll(".cb-tagreel-row");

  rows.forEach(function (e, i) {
    let row_width = e.getBoundingClientRect().width;
    let row_item_width = e.children[0].getBoundingClientRect().width;
    let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
    let x_translation = initial_offset * -1;
    // console.log(e.children[0].clientWidth);
    console.log(x_translation);

    gsap.set(e, {
      xPercent: `${initial_offset}`,
    });

    let duration = 5 * (i + 1);

    var tl = gsap.timeline();

    tl.to(e, {
      ease: "none",
      duration: duration,
      xPercent: 0,
      repeat: -1,
    });
  });
};

onBeforeMount(() => {
  runInfiniteScroll();
});
</script>
<style>
.cb-tagreel {
  position: relative;
  min-width: 100%;
}

.cb-tagreel-content {
  padding: 0px 0;
}

.cb-tagreel-items {
  margin: -24px 0;
  overflow: hidden;
  cursor: grab;
}

.cb-tagreel-row {
  display: flex;
  position: relative;
  text-align: center;
  white-space: nowrap;
}

.cb-tagreel-item {
  position: relative;
  line-height: 100%;
  font-size: 3.75vw;
  flex: 0 0 33%;
  padding: 24px 0;
  text-transform: uppercase;
}

.cb-tagreel-item.-stroke {
  color: transparent;
  text-shadow: none;
  -webkit-text-stroke: 2px rgba(0, 0, 0, 0.2);
}

.cb-tagreel-item span {
  position: relative;
  display: inline-block;
  z-index: 1;
}
</style>
