<template>
  <v-card href="/portfolio">
    <v-img :src="imgSrc" height="200px">
    </v-img>
    <v-card-title primary-title>
      <div>
        <span>{{id}}</span>
        <div class="headline">{{title}}</div>
        <span class="content grey--text">{{body}}</span>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
	name: 'Portfolio',
	props: {
		date: {type: String},
		title: {type: String},
		body: {type: String},
		imgSrc: {type: String},
	},
	data() {
		return {
			//
		}
	},
}
</script>

<style>
  .content {
    display: inline-block;
    width: 200px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    white-space: normal;
    line-height: 1.2;
    height: 3.6em;
  }
</style>
