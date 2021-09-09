<template>
  <div>
    <p>I'm a Counter!</p>
    <p>The count is {{count}}. </p>
    <button v-on:click="count += 1" class="button-to-change-value">Increment 1</button>
    <button v-on:click="count -= 1" class="button-to-change-value">Decrement 1</button>
    
  </div>
</template>

<script>
export default {
  props: {
    initialCounter: { 
      default: 0,
      type: Number
      }
    },
  data() {
    return {
      count: Number(this.initialCounter)
    };
  }
};
</script>

<style>
.button-to-change-value{
  color: #FFF;
  background: #c73e3e;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 8px 18px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
  line-height: 16px;
  width: fit-content;
  cursor: pointer;
  transition: 0.4s ease;

}
</style>

