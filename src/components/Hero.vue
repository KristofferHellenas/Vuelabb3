<template>
  <div id="hero">
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    header: String
  }
};
</script>

<style scoped>
#hero {
  width: 100%;
  height: 300px;
  background-color: #ffcf00;
  border: 1px black solid;
}

#hero h1 {
  text-align: center;
  font-size: 110px;
  font-weight: bold;
  margin-top: 70px;
}
</style>