<template>
  <div>
    <div class="mt-6 border-t-2 border-gray-200 pt-6">
      <dl>
        <div @click="isOpen = !isOpen">
          <dt class="text-lg leading-7">
            <!-- Expand/collapse question button -->
            <button
              class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900"
            >
              <span class="font-medium text-gray-900">
                {{question}}
              </span>
              <span class="ml-6 h-7 flex items-center">
                <!--
                    Expand/collapse icon, toggle classes based on question open state.

                    Open: "-rotate-180", Closed: "rotate-0"
                  -->
                <svg
                  :class="isOpen ? '-rotate-180' : '-rotate-0'"
                  class="h-6 w-6 transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </dt>
          <dd v-show="isOpen" class="mt-2 pr-12">
            <div class="text-base leading-6" v-html="answer">
            </div>
          </dd>
        </div>
      </dl>
    </div>

  </div>
</template>

<script>
export default {
  name: "FAQ",
  props: ["question", "answer"],
  data: () => ({
    isOpen: false,
  }),
};
</script>
