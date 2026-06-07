<template>
  <div>
    <div class="parent">
      <div class="child scrolling-wrapper w-full overflow-x-auto sm:w-[1220px]">
        <div
          class="scrolling-wrapper justify-sart flex h-[300px] w-full cursor-grab space-x-4 overflow-y-hidden overflow-x-scroll sm:space-x-6"
        >
          <img
            src="/img/me/7.jpeg"
            class="min-w-[220px] rounded-xl object-cover sm:min-w-[280px]"
            alt=""
          />
          <img
            src="/img/me/3.jpg"
            class="min-w-[220px] rounded-xl object-cover sm:min-w-[280px]"
            alt=""
          />
          <img
            src="/img/me/6.jpeg"
            class="min-w-[220px] rounded-xl object-cover sm:min-w-[280px]"
            alt=""
          />
          <img
            src="/img/me/5.jpeg"
            class="min-w-[220px] rounded-xl object-cover sm:min-w-[280px]"
            alt=""
          />
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
