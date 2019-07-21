<template>
  <div>
    <span>New Portfolio   </span>
    <v-flex xs12 sm6 md3>
          <v-text-field
            label="제목을 입력하세요."
          ></v-text-field>
    </v-flex>

    <markdown-editor preview-class="markdown-body"></markdown-editor>
    <v-flex xs12 sm6 md3 class="xr-0">
          <v-btn>작성</v-btn>
    </v-flex>
  </div>


</template>


<script>
  // export default {
  //   name: 'portfoliodetailpage',
  //   methods: {
  //    writeUserData(userId, name, email, imageUrl) {
  //     firebase.database().ref('users/' + userId).set({
  //       username: name,
  //       email: email,
  //       profile_picture : imageUrl
  //     });
  //   }
  //   }
  // }
</script>
