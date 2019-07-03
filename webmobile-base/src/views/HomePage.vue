<template>
  <div>
    <!-- <Header>

    </Header> -->

    <ImgBanner imgSrc="https://source.unsplash.com/collection/583479/1600x900">
      <div style="line-height:1.2em;" slot="text">
        <span style="font:italic;">
          Everything happens for a reason.
        </span>
        <p style="font-size:3vw;">
          모든 일에는 이유가 있다.
        </p>
      </div>
    </ImgBanner>
    <v-container>
      <!-- About Me -->
      <v-layout my-5 justify-center>
        <v-flex xs8>
          <h2 class="headline mb-3">Love Myself</h2>
          <p class="mr-4" style="font-size:2.3vw;">
            안녕하세요. 조인정입니다.<br />저는 수학과 개발을 좋아합니다.<br />
            현재는 빅데이터에 관심이 있습니다.<br />
            다양한 분야에서 소통이 가능한 개발자가 되겠습니다.
          </p>
        </v-flex>
        <v-flex xs4 class="AboutMeImg">
          <v-img :src="getImgUrl('jeong.jpg')" aspect-ratio="1.5"/>
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Portfolio</h2>
          <PortfolioList></PortfolioList>
        </v-flex>
      </v-layout>

      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Post</h2>
          <PostList :column="2"></PostList>
        </v-flex>
      </v-layout>


      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <h2 class="headline my-5 text-xs-center">Project</h2>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'

export default {
	name: 'HomePage',
	components: {
		ImgBanner,
		PortfolioList,
		PostList,
		RepositoryList
	},
  data() {
    return {
      drawer: true,
      items: [
        'POST', 'PORTFOLIO', 'LOGIN'
      ],
      right: null
  }
},
	methods: {
		getImgUrl(img) {
			return require('../assets/' + img)
		}
	},
  created: function() {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") <= -1) {
      // != 81
      alert("해당 사이트는 크롬에 최적화 되어 있습니다.")
    }
  }
}
</script>

<style>
@media only screen and (max-width:600px) {
  .AboutMeImg {display:none;}
}

</style>
