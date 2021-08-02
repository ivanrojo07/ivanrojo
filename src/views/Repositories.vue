<template>
    
    <div id="repositoriesPage" class="container mt-4 mx-auto">
        <div class="grid grid cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <RepositoryCard 
                v-for="repository in repositories"
                :key="repository.id"
                :repository="repository"/>
            
        </div>
        <!-- Loading div -->
        <div class="is-loading-bar has-text-centered" :class="{'is-loading': isLoading}">
            <div class="lds-dual-ring"></div>
        </div>
    </div>

</template>
<script>
import axios from "axios";
import RepositoryCard from '../components/RepositoryCard.vue'
export default {
  name: "Repositories",
  components:{
      RepositoryCard
  },
  data() {
    return {
      repositories: [],
      count : 1,
      isLoading:false,
      terminated_api:false
    };
  },
  mounted() {
      this.count=1
    this.getRepositories(this.count);
    this.changePage();
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if(!this.terminated_api){
                this.count +=1
                this.getRepositories(this.count);

            }
        }
    },
    async getRepositories(page) {
      this.isLoading = true
      await axios
        .get(
          "https://api.github.com/users/ivanrojo07/repos?sort=created&page=+"+page+"&per_page=20"
        )
        .then((response) => {
            let data = response.data
            if(data.length){
              data.forEach(repository => {
                  console.log(repository)
                  this.repositories.push(repository)
              })
            }else{
              this.terminated_api = true
            }
        }).catch(error=>{
            consol.log(error);
            this.terminated_api = true
        });
        this.isLoading = false
    },
    changePage() {
      this.$store.commit("changePage", "Repositories");
    },
  },
};
</script>

<style lang="css">
.lds-dual-ring{
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after{
    content:"";
    display:block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #ccc;
    border-color: #ccc transparent #ccc transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .is-loading-bar{
    height: 0;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    
  }
    .is-loading{
      height: 80px;
    }
</style>