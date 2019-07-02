<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/collection/583479/1600x900">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">Portfolio</div>
    </ImgBanner>
    <v-container>

      <!-- Portfolio Detail-->
      <Portfolio>
      </Portfolio>

    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import Portfolio from '../components/Portfolio'

export default {
	name: 'PortfolioDetailPage',
	components: {
		ImgBanner,
    Portfolio,
	},
}
</script>
