<script setup>



</script>

<template>
  

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=500" class="d-block w-100 " alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="slogan">
    <p>Explorez des univers infinis, laissez chaque livre vous transporter vers de nouvelles aventures et savoirs, page après page</p>
</div> 


</template>

<style scoped>

.carousel .carousel-item img {
    height: 300px;
    object-fit: cover; 
  }
.slogan{
  display: none;
    position: absolute;
    background:rgba(41, 63, 44, 0.589);
    width: 1000px;
    padding: 80px;
    
    height: 200px;
    top: 80px;
    margin-left: 13%;
    margin-right: 5%;
    margin-top: 20px;
    
}
.slogan p{
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    color: azure;
    font-size: 1.5rem;
}

</style>
