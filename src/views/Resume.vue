<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm a game dev student, currently learning at the UQAC (Université du Québec A Chicoutimi).
      <br />Holding a DUT Informatique (French equivalent of 2-Year Technical University Diploma of computing) from the IUT 2 of Grenoble, I'm now completing a
      <br />Bachelor's degree in Video Game Development (Baccalauréat en Développement de Jeu Vidéo).
      <br />
      <br />I have used a range of languages, operating systems and development tools, but also game engines and artistic softwares to become more polyvalent.
      <br />All of these projects, especially those in teamwork, taught me managing and organisation methods.
      <br />
      <br />Besides development and game making, I'm passionate about books, mangas, music, role playing games, hiking and traveling.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Interships</h2>

      <h3>Avalon Digital</h3>
      <h4>April-June 2022</h4>

      <div>C# development in Unity on the game <a href="https://store.steampowered.com/app/1268420/Britannia/" target="_blank">Britannia</a>.</div>
      <div>Implementation of localization asset I2Localization.</div>
      <div>Automation of game's translation.</div>
      <div>Introduction to Blender : creation of 3D pawns.</div>
      <div>Addition of effects and animations, with necessary script.</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages/Frameworks</h3>
        <div>Object-Oriented Programming : C++, C#, Python, Java, Ada</div>
        <div>Web Programming : HTML, CSS, PHP, JavaScript, jQuery,</div>
        <div>TypeScript (Angular, View.js)</div>
        <div>Database : SQL</div>
      </div>

      <div class="skill-set">
        <h3>Gamedev</h3>
        <div>Unreal, Unity and Godot Gameplay Development</div>
        <div>Level Design</div>
        <div>Gameloop Conception</div>
        <div>Signs and Feedback Conception</div>
        <div>3D/2D Art</div>
        <div>Basics on Online and Multiplayer Functionalities</div>
        <div>Basics on Animations</div>
      </div>

      <div class="skill-set">
        <h3>Softwares</h3>
        <div>Unreal Engine, Unity, Godot</div>
        <div>Visual Paradigm</div>
        <div>Blender, Maya</div>
        <div>Clip Studio Paint, Krita</div>
        <div>GIMP, Photoshop, Camtasia</div>
        <div>Twine</div>
        <div>MS Office</div>

      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Université du Québec A Chicoutimi (Chicoutimi, Canada) - 2022-2023</h3>
      <h4>Double degree with the UGA (Université Grenoble Alpes) (Grenoble, France) : </h4>
      <h4>Bachelor's Degree in Game Development</h4>
      <h4>DUETI (University Diploma in International Technology Education) in Computing Science</h4>
      <div>Specialty in Game Design and Development</div>

      <h3>IUT 2 de Grenoble (Grenoble, France) - 2020-2022</h3>
      <h4>Two Year higher education in Computer Science</h4>
      <div>Specialty in Software Development</div>

      <h3>Lycée Pierre Poivre (Saint-Joseph, La Réunion, France) - 2019</h3>
      <h4>Baccalaureate S</h4>
      <div>Specialty in Mathematics, Spanish European section</div>

      <h2>Languages</h2>

      <h3>English 🇬🇧</h3>
      <div>C1 Level. I travelled in some countries of the Anglosphere. I daily speak English with technical vocabulary, mostly online.</div>

      <h3>Spanish 🇪🇸</h3>
      <div>B2 Level. I attended an European Section during my High School Years.</div>

      <h3>Japanese 🇯🇵</h3>
      <div>Basic common sentences, I've just started to learn with Duolingo and a "For Dummies" book.</div>

      <h3>French 🇫🇷</h3>
      <div>This is my mother tongue.</div>

      <h3>Reunionese Creole 🇷🇪</h3>
      <div>Ca lé aussi ma langue maternelle, oté ! ("This is also my mother tongue !")</div>


      <h2>Hobbies</h2>
      <div>
        <h3>I ❤️ Video Games</h3>
        <div>Not only I enjoy playing most of them, but also talking, debating about them, studying their gameplay and artstic features...</div>
        <div>From unknown indies to AAA, I would like to expand my curiosity. I slightly have a crush on immersive sims, contemplative games and fast FPS.</div>


        <h3>I 🧡 Drama</h3>
        <div>I really like acting and playing as characters. I participated in Komidi Festival in 2016 and played in "Big One" by Reunionese actor Sergio Grondin.</div>

        <h3>I 💛 Sports</h3>
        <div>I often go out during my breaks. I mostly like hiking, basket-ball, swimming and kung-fu.</div>

        <h3>I 💚 Trips</h3>
        <div>Australia and Ireland (with BEST association), South Africa, Mauritius, Seychelles.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    // SkillRate,
  },
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