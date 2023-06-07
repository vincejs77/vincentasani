<template>
  <div data-aos="fade-up" data-aos-duration="4000">
    <div class="parent">
      <div class="child scrolling-wrapper overflow-x-auto sm:w-[1220px] w-full">
        <div
          class="flex h-[300px] scrolling-wrapper overflow-y-hidden justify-sart space-x-4 w-full overflow-x-scroll cursor-grab"
        >
          <img src="/img/me/2.jpg" class="rounded-xl min-w-[280px] object-cover" alt="" />
          <img src="/img/me/3.jpg" class="rounded-xl min-w-[280px] object-cover" alt="" />
          <img src="/img/me/4.jpg" class="rounded-xl min-w-[280px] object-cover" alt="" />
          <img src="/img/me/1.jpg" class="rounded-xl min-w-[280px] object-cover" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    setTimeout(() => {
      const slider = document.querySelector(".parent");
      this.run_s(slider);
    }, 1000);
  },
  setup() {
    const run_s = async (slider) => {
      let mouseDown = false;
      let startX, scrollLeft;

      let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      };
      let stopDragging = function (event) {
        mouseDown = false;
      };

      slider.addEventListener("mousemove", (e) => {
        e.preventDefault();
        if (!mouseDown) {
          return;
        }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
      });

      slider.addEventListener("mousedown", startDragging, false);
      slider.addEventListener("mouseup", stopDragging, false);
      slider.addEventListener("mouseleave", stopDragging, false);
    };

    return {
      run_s,
    };
  },
};
</script>

<style>
.parent {
  width: 100%;
  overflow-x: hidden;
}
.child {
  overflow-x: scroll;

  font-size: 15px;
  font-family: arial;
  cursor: pointer;
}
</style>
