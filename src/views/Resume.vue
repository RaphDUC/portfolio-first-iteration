<template>
  <div>
    <h1>{{ $t('resume_title') }}</h1>

    <div class="paragraph">
      <div v-if="$lang === 'fr'">
        Étudiant en développement de jeu vidéo, actuellement en <strong>Master en Informatique (spécialité Jeux Vidéo) à l'UQAC</strong> (Université du Québec à Chicoutimi) et à la recherche d'un stage de 675 heures à partir de septembre 2026.
        <br />Titulaire d'un DUT Informatique (diplôme universitaire de technologie en Informatique) de l'IUT 2 de Grenoble, et d'un Baccalauréat en Développement de Jeu Vidéo.
        <br />
        <br />J'ai utilisé un large éventail de langages, systèmes d'exploitation et outils de développement pour devenir plus polyvalent. Je code principalement en C++, C#, C, Python, HTML/CSS, JS et Vue.js, et j'ai appris Rust et HLSL cette année. Je développe pour toutes les plateformes : PC, mobile et VR.
        <br />Je travaille avec Unreal Engine, Unity et Godot, et j'ai récemment appris la création de moteurs personnalisés avec openFrameworks et Vulkan.
        <br />Côté artistique, je fais de la modélisation, du texturage et de l'animation 3D au quotidien depuis fin 2025.
        <br />Tous ces projets, notamment ceux en équipe, m'ont appris des compétences en gestion et en organisation.
        <br />
        <br />En dehors du développement et de la création de jeux, je suis passionné par les livres, les mangas, la musique, les jeux de rôle, la randonnée et les voyages.
      </div>
      <div v-else>
        I'm a game dev student, currently completing a <strong>Master's degree in Computer Science (Video Games) at UQAC</strong> (Université du Québec à Chicoutimi) and looking for a 675-hour internship starting in September 2026.
        <br />Holding a DUT Informatique (French equivalent of a 2-Year Technical University Diploma in Computer Science) from the IUT 2 of Grenoble, and a Bachelor's degree in Video Game Development.
        <br />
        <br />I have used a range of languages, operating systems, and development tools to become more versatile. I mainly code in C++, C#, C, Python, HTML/CSS, JS, and Vue.js, and learned Rust and HLSL this year. I code for all platforms, including PC, mobile, and VR.
        <br />I work with Unreal Engine, Unity, and Godot, and recently learned custom engine creation with openFrameworks and Vulkan.
        <br />On the artistic side, I have been modeling, texturing, and animating in 3D daily since late 2025.
        <br />All of these projects, especially those in teamwork, taught me management and organizational skills.
        <br />
        <br />Besides development and game making, I'm passionate about books, manga, music, role-playing games, hiking, and traveling.
      </div>

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> {{ $t('resume_download_en') }}</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> {{ $t('resume_download_fr') }}</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo de Raphaël D." />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>{{ $t('resume_internships') }}</h2>

      <h3>Avalon Digital</h3>
      <h4>{{ $lang === 'fr' ? 'Avril–Juin 2022' : 'April–June 2022' }}</h4>

      <div>{{ $t('internship_britannia_dev') }} <a href="https://store.steampowered.com/app/1268420/Britannia/" target="_blank">Britannia</a>.</div>
      <div>{{ $t('internship_britannia_i2l') }}</div>
      <div>{{ $t('internship_britannia_auto') }}</div>
      <div>{{ $t('internship_britannia_blender') }}</div>
      <div>{{ $t('internship_britannia_fx') }}</div>

      <h2>{{ $t('resume_skills') }}</h2>

      <div class="skill-set">
        <h3>{{ $t('resume_skill_lang') }}</h3>
        <div>{{ $lang === 'fr' ? 'Logiciel / POO :' : 'Software / OOP:' }} C++, C#, C, Rust, Python, Java, Ada</div>
        <div>Web: HTML/CSS, JavaScript, TypeScript, Vue.js, Angular, PHP</div>
        <div>{{ $lang === 'fr' ? 'Graphismes & Shaders :' : 'Graphics & Shaders:' }} HLSL, Vulkan, openFrameworks</div>
        <div>{{ $lang === 'fr' ? 'Base de données :' : 'Database:' }} SQL</div>
      </div>

      <div class="skill-set">
        <h3>{{ $t('resume_skill_gamedev') }}</h3>
        <div>{{ $lang === 'fr' ? 'Gameplay :' : 'Gameplay Dev:' }} Unreal, Unity, Godot (PC, Mobile, VR)</div>
        <div>{{ $lang === 'fr' ? 'Architecture moteur :' : 'Engine Architecture:' }} {{ $lang === 'fr' ? 'Création de moteur personnalisé' : 'Custom engine creation' }}</div>
        <div>{{ $lang === 'fr' ? 'Game & Level Design :' : 'Game & Level Design:' }} {{ $lang === 'fr' ? 'Boucle de jeu, signaux, retours joueur' : 'Core game loop, signs, feedback' }}</div>
        <div>{{ $lang === 'fr' ? 'Art 3D :' : '3D Art:' }} {{ $lang === 'fr' ? 'Modélisation, Texturage PBR, Animation' : 'Modeling, PBR Texturing, Animation' }}</div>
        <div>{{ $lang === 'fr' ? 'Art 2D & Montage vidéo' : '2D Art & Video Editing' }}</div>
        <div>{{ $lang === 'fr' ? 'Fonctionnalités en ligne et multijoueur' : 'Online and Multiplayer Functionalities' }}</div>
      </div>

      <div class="skill-set">
        <h3>{{ $t('resume_skill_tools') }}</h3>
        <div>{{ $lang === 'fr' ? 'Moteurs :' : 'Engines:' }} Unreal Engine, Unity, Godot</div>
        <div>{{ $lang === 'fr' ? 'IDEs :' : 'IDEs:' }} Visual Studio, VS Code, Rider, RustRover</div>
        <div>{{ $lang === 'fr' ? '3D & Texturage :' : '3D & Texturing:' }} Blender, Maya, Substance Painter</div>
        <div>{{ $lang === 'fr' ? 'Art 2D & Vidéo :' : '2D Art & Video:' }} Photoshop, GIMP, Clip Studio Paint, Krita, Camtasia</div>
        <div>{{ $lang === 'fr' ? 'Narration & Design :' : 'Narrative & Design:' }} Twine, Obsidian, Visual Paradigm</div>
      </div>

      <div style="clear:both" />

      <h2>{{ $t('resume_education') }}</h2>

      <h3>Université du Québec à Chicoutimi (Chicoutimi, Canada) - 2025-2027</h3>
      <h4>{{ $lang === 'fr' ? 'Maîtrise en Informatique' : "Master's degree in Computer Science (Maîtrise en Informatique)" }}</h4>
      <div>{{ $lang === 'fr' ? 'Spécialité Jeux Vidéo' : 'Specialty in Video Games' }}</div>

      <h3>HEAJ - Haute École Albert Jacquard (Namur, Belgium) - 2023-2025</h3>
      <h4>{{ $lang === 'fr' ? 'Double diplôme avec NAD-UQAC (Montréal, Canada) en deuxième année (2024-2025) :' : 'Double degree with NAD-UQAC (Montréal, Canada) during the second year (2024-2025):' }}</h4>
      <h4>{{ $lang === 'fr' ? 'Master en Jeu Vidéo (Spécialité Game Design)' : "Master's degree in Video Games (Specialty in Game Design)" }}</h4>
      <h4>{{ $lang === 'fr' ? 'DESS (Diplôme d\'Études Supérieures Spécialisées) en Conception de Jeu Vidéo Narratif' : 'Specialized Graduate Diploma (DESS) in Narrative Video Game Design' }}</h4>

      <h3>Université du Québec à Chicoutimi (Chicoutimi, Canada) - 2022-2023</h3>
      <h4>{{ $lang === 'fr' ? 'Double diplôme avec l\'UGA (Université Grenoble Alpes) (Grenoble, France) :' : 'Double degree with UGA (Université Grenoble Alpes) (Grenoble, France):' }}</h4>
      <h4>{{ $lang === 'fr' ? 'Baccalauréat en Développement de Jeu Vidéo' : "Bachelor's Degree in Game Development" }}</h4>
      <h4>{{ $lang === 'fr' ? 'DUETI (Diplôme Universitaire d\'Études Technologiques Internationales) en Informatique' : 'DUETI (University Diploma in International Technology Education) in Computer Science' }}</h4>
      <div>{{ $lang === 'fr' ? 'Spécialité Game Design et Développement' : 'Specialty in Game Design and Development' }}</div>

      <h3>IUT 2 de Grenoble (Grenoble, France) - 2020-2022</h3>
      <h4>{{ $lang === 'fr' ? 'DUT Informatique' : 'Two-Year University Degree in Computer Science (DUT Informatique)' }}</h4>
      <div>{{ $lang === 'fr' ? 'Spécialité Développement de logiciels' : 'Specialty in Software Development' }}</div>

      <h3>Lycée Pierre Poivre (Saint-Joseph, La Réunion, France) - 2019</h3>
      <h4>{{ $lang === 'fr' ? 'Baccalauréat Scientifique' : 'High School Diploma in Science (Baccalauréat Scientifique)' }}</h4>
      <div>{{ $lang === 'fr' ? 'Spécialité Mathématiques, Section Européenne Espagnol' : 'Specialty in Mathematics, Spanish European Section' }}</div>

      <h2>{{ $t('resume_languages') }}</h2>

      <h3>English 🇬🇧</h3>
      <div>{{ $t('lang_en_level') }}</div>

      <h3>Spanish 🇪🇸</h3>
      <div>{{ $t('lang_es_level') }}</div>

      <h3>Japanese 🇯🇵</h3>
      <div>{{ $t('lang_jp_level') }}</div>

      <h3>French 🇫🇷</h3>
      <div>{{ $t('lang_fr_level') }}</div>

      <h3>Reunionese Creole 🇷🇪</h3>
      <div>{{ $t('lang_rc_level') }}</div>

      <h2>{{ $t('resume_hobbies') }}</h2>
      <div>
        <h3>{{ $t('hobby_games_title') }}</h3>
        <div>{{ $t('hobby_games_1') }}</div>
        <div>{{ $t('hobby_games_2') }}</div>

        <h3>{{ $t('hobby_drama_title') }}</h3>
        <div>{{ $t('hobby_drama') }}</div>

        <h3>{{ $t('hobby_sports_title') }}</h3>
        <div>{{ $t('hobby_sports') }}</div>

        <h3>{{ $t('hobby_trips_title') }}</h3>
        <div>{{ $t('hobby_trips') }}</div>

        <h3>{{ $t('hobby_y2k_title') }}</h3>
        <div>{{ $t('hobby_y2k') }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Resume",
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>