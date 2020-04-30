<style src="./selected-work.scss" lang="scss"></style>

<template>
  <div class="selected-work">
    <!--    <project v-for="project in projects" :key="project.id" :project="project"></project>-->
    <div
      v-for="(project, index) in projects"
      :key="project.id"
      :class="[index % 2 !== 0 ? 'order-reverse' : 'order-column-normal', 'client flex']"
    >
      <template v-if="index % 2 === 0">
        <section class="left flex flex--align-center" :style="stylesObject(project.bgImg)">
          <img
            :src="require(`@/assets/logos/${project.img}`)"
            :alt="project.name"
            class="client--logo"
          />
        </section>
        <section class="right flex flex--align-center">
          <div class="client--description">
            {{ project.description }}
          </div>
        </section>
      </template>
      <template v-else>
        <section class="left flex flex--align-center">
          <div class="client--description">
            {{ project.description }}
          </div>
        </section>
        <section class="right flex flex--align-center" :style="stylesObject(project.bgImg)">
          <img
            :src="require(`@/assets/logos/${project.img}`)"
            :alt="project.name"
            class="client--logo"
          />
        </section>
      </template>
    </div>
  </div>
</template>

<script>
import projects from "@/store/projects";

export default {
  name: "SelectedWork",
  data() {
    return {
      projects,
    };
  },
  methods: {
    stylesObject(img) {
      return {
        backgroundImage:
          /* eslint-disable */
          "linear-gradient(-45deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 1) 100%), url(" +
          require(`@/assets/backgrounds/${img}`) +
          ")",
        backgroundSize: "cover",
      };
    },
  },
};
</script>
