<template>
        <div class="search">
            <div id="searchbar">
            <form v-on:submit.prevent="submitSearch" id ="searchForm">
                <input id="searchInput" 
                        type="text" 
                        v-model="searchFilter"
                        placeholder="search breed"
                       name="search">
                <button id="icon" type="submit">
                    <i class="fa fa-search"></i>
                </button>
            </form>
            </div>
            <div class="filter-buttons">
              <button
               v-bind:class="{active: selectedFilter === 'dog'}"
               v-on:click="toggleFilter('dog')"
               id="dog">
               Dog
              </button>
              <button 
               v-bind:class="{active: selectedFilter === 'cat'}"
               v-on:click="toggleFilter('cat')"
               id="cat">
               Cat</button>
            </div>
          </div>
</template>
<script>
export default {
    data() {
        return {
            filter: '',
            selectedFilter: '',
            searchFilter: '',

        };
    },
    methods: {
        toggleFilter(filter) {
            this.selectedFilter = this.selectedFilter === filter ? '' : filter;
            this.$emit('filter', this.selectedFilter);
        },
        submitSearch(){
            this.$emit('search', this.searchFilter)
        },
        getAllDogs() {
            this.$emit('filter', 'dog');
        },
        getAllCats() {
            this.$emit('filter', 'cat');
        },

    }
};
</script>
<style scoped>
#searchInput{
    width: 100%;
    padding: 10px;
    height: 45px;
    padding-right: 40px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
}
#icon{
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin-right: 1%;
    margin-top: 1%;
    border: none;
    padding: 4%;
    
    height: 25px;
    cursor: pointer;
    background-color: white;
    border-radius: 100%;
    

}
.search{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #B6ABC1;
    margin-left: 15%;
    margin-right: 15%;
    padding-bottom: 2%;
    padding-top: 2%;
}
#searchbar{
    margin-left: 2%;
    position: relative;
    width: 300px;
    border: none;
}
.filter-buttons{
    margin-right: 2%;

}
.filter-buttons button.active{
    background-color: #69788F;
    color: white;
}
#dog{
    border-radius: 15px;
    height: 34px;
    width: 80px;
    cursor: pointer;
    margin-right: 10px;
}


#cat{
    border-radius: 15px;
    height: 34px;
    width: 80px;
    cursor: pointer;

}
@media only screen and (max-width: 425px){
    .search{
        margin-left: 5%;
        margin-right: 5%;
    }
    #searchbar{
        width: 200px;
    }
    #searchInput{
        height: 35px;
        margin-top: 5px;
    }
    #icon{
        top: 5px;
        padding: 8px 8px 8px 8px ;
        border-radius: 40px;
    }
    #dog{
        margin-right: 2px;
    }

    .filter-buttons{
        margin-top: 5px;
   
    }
}

</style>