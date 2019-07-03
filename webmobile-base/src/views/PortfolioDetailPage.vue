<template>
  <div>
    <ImgBanner imgSrc="">
      <div style="line-height:1.2em;font-size:1.2em;" slot="text">New Portfolio</div>
    </ImgBanner>
    <v-container>

      <!-- New Portfolio -->
      <PortfolioDetailPage></PortfolioDetailPage>

    </v-container>
  </div>
</template>



<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioDetailPage from '../components/PortfolioDetailPage'

export default {
	name: 'portfoliodetailpage',
	components: {
		ImgBanner,
    PortfolioDetailPage,
	},
}
</script>
