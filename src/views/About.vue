<template>
  <div style="margin-bottom: 80px;">
    <h1>Hi. I'm just curious.</h1>

    <div class="paragraph">
      <div>
        The name's Raphaël D., or <strong>Wav_le_hib</strong>, a game dev student who also likes any kind of art.<br/>
        Usually using Unreal Engine and Unity, my gamejam's friends made me discover (and like) Godot Engine.<br/>
        I particularly enjoy level + gameplay design and programming. I also started to animate, draw and modelize in 3D.<br/>
        </div>

      <div style="margin-top: 20px;">I've worked on : <br/> 
        -><router-link to="/game-projects">games projects</router-link>; <br/> 
        -><router-link to="/other-projects">software, apps and art stuff</router-link>;<br/> 
        ->and took part in <router-link to="/resume">a few things</router-link> as well.<br/></div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a Master Degree</strong>. You can reach me at <a href="mailto:rd.pierrepoivre@gmail.com">rd.pierrepoivre@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Wav_le_hib" height="200px"/> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>