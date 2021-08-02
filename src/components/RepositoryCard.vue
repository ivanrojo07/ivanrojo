<template>
  <div
    @click="openRepo(repository.html_url)"
    id="repositoryCard"
    class="
      card
      bg-gradient-to-b
      from-blue-300
      to-purple-100
      m-2
      cursor-pointer
      border border-gray-400
      rounded-lg
      hover:shadow-md
      hover:border-opacity-0
      transform
      hover:-translate-y-1
      transition-all
      duration-200
    "
  >
    <div class="m-3 overflow-x-auto">
      <h2 class="text-lg mb-2 whitespace-nowrap ">
        {{ repository.name }}
      </h2>
      <div class="flex items-center pt-3">
        <img
          class="
            bg-blue-700
            w-12
            h-12
            flex
            justify-center
            items-center
            rounded-full
            uppercase
            font-bold
            text-white
          "
          :src="repository.owner.avatar_url"
        />
        <div class="ml-4">
          <p class="font-bold">{{ repository.owner.login }}</p>
        </div>
      </div>
      <div class="mt-4">
        <span class="rounded-xl bg-gray-300 px-3 m-2">
          {{ repository.language }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RepositoryCard",
  props: {
    repository: Object,
  },
  methods: {
    openRepo(url) {
      return window.open(url);
    },
  },
};
</script>