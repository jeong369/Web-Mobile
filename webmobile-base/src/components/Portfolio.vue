<template>
  <v-card href="/portfolio">
    <v-img :src="imgSrc" height="200px">
    </v-img>
    <v-card-title primary-title>
      <div>
        <span>{{id}}</span>
        <div class="headline">{{title}}</div>
        <span class="grey--text">{{body}}</span>
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
