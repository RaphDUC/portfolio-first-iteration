<template>
  <div style="margin-bottom: 80px;">
    <h1>{{ $t('about_title') }}</h1>

    <div class="paragraph">
      <div v-if="$lang === 'fr'">
        Je m'appelle Raphaël D., alias <strong>Wav_le_hib</strong>, un étudiant en développement de jeu vidéo qui apprécie aussi toutes les formes d'art.<br/>
        Je développe des jeux sur toutes les plateformes (PC, mobile, et récemment VR lors d'un cours dédié) et travaille autant avec Unreal Engine qu'avec Unity et Godot. Cette année, j'ai également appris à créer des moteurs de jeux personnalisés avec openFrameworks et Vulkan.<br/>
        Je code principalement en C++, C#, C, Python, HTML/CSS, JS et Vue.js, et j'ai récemment appris Rust et HLSL.<br/>
        J'apprécie particulièrement le level design, le gameplay design et la programmation. Côté artistique, je fais de la modélisation 3D, du texturage et de l'animation au quotidien depuis fin 2025.<br/>
      </div>
      <div v-else>
        The name's Raphaël D., or <strong>Wav_le_hib</strong>, a game dev student who also likes any kind of art.<br/>
        I develop games for all platforms (PC, mobile, and recently VR in a dedicated class) and currently work as much with Unreal Engine as with Unity and Godot. This year, I also learned custom game engine creation using openFrameworks and Vulkan.<br/>
        I mainly code in C++, C#, C, Python, HTML/CSS, JS, and Vue.js, and recently learned Rust and HLSL.<br/>
        I particularly enjoy level and gameplay design, as well as programming. On the artistic side, I have been 3D modeling, texturing, and animating daily since late 2025.<br/>
      </div>

      <div v-if="$lang === 'fr'" style="margin-top: 20px;">J'ai travaillé sur :<br/>
        &#8594;&nbsp;<router-link to="/game-projects">des projets de jeux vidéo</router-link>&nbsp;;<br/>
        &#8594;&nbsp;<router-link to="/other-projects">des logiciels, applications et projets artistiques</router-link>&nbsp;;<br/>
        &#8594;&nbsp;et participé à <router-link to="/resume">quelques autres choses</router-link> également.<br/>
      </div>
      <div v-else style="margin-top: 20px;">I've worked on:<br/>
        &#8594;&nbsp;<router-link to="/game-projects">game projects</router-link>;<br/>
        &#8594;&nbsp;<router-link to="/other-projects">software, apps, and art projects</router-link>;<br/>
        &#8594;&nbsp;and took part in <router-link to="/resume">a few things</router-link> as well.<br/>
      </div>

      <div v-if="$lang === 'fr'" style="margin-top: 40px;">Je suis <strong>actuellement en Master en Informatique (spécialité Jeux Vidéo) à l'UQAC</strong>, et je suis à la recherche d'un <strong>stage de 675 heures à partir de septembre 2026</strong>. Vous pouvez me joindre à <a href="mailto:rd.pierrepoivre@gmail.com">rd.pierrepoivre@gmail.com</a> ou <router-link to="/contact">par ici</router-link>.</div>
      <div v-else style="margin-top: 40px;">I'm <strong>currently completing a Master's degree in Computer Science (Video Games) at UQAC</strong>, and I'm looking for a <strong>675-hour internship starting September 2026</strong>. You can reach me at <a href="mailto:rd.pierrepoivre@gmail.com">rd.pierrepoivre@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
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