<script setup>

import BentoBox from '@/components/BentoBox.vue'
import PictureBox from '@/components/BentoComponents/PictureBox.vue'
import ImageBox from '@/components/BentoComponents/ImageBox.vue'
import BigGrid from '@/components/BentoComponents/BigGrid.vue'
import IconBox from '@/components/BentoComponents/IconBox.vue'
import ColorBox from '@/components/BentoComponents/ColorBox.vue'
import SmallGrid from '@/components/BentoComponents/SmallGrid.vue'
import ProjectBox from '@/components/BentoComponents/ProjectBox.vue'
import WideBox from '@/components/BentoComponents/WideBox.vue'
import WidePictureBox from '@/components/BentoComponents/WidePictureBox.vue'
import Welcome from '@/components/WelcomeWindow.vue'

import { changeLoc, copyText, mailTo } from '@/common/jsAssets/linksActions.js'
import { DefaultNotificationType } from '@/common/jsAssets/notificationSupport.js'

changeLoc('#', false)

</script>

<template>
  <Welcome />
  <BentoBox id="me" :sect-nb="1" title="About me">
    <PictureBox @click="changeLoc('https://heroes.imalonelynerd.fr/imalonelynerd')" class="clickable">
      <img class="fullw" src="/images/fey.png" alt="Fey" />
    </PictureBox>
    <IconBox @click="changeLoc('https://en.pronouns.page/@imalonelynerd')" class="clickable">
      <img class="icon" src="/images/nb.png" alt="Non-binary flag" />
      <p><b>they</b></p>
      <p>them</p>
    </IconBox>
    <WideBox>
      <p>I’m <b>Théo</b>, aka <b>Nerd</b></p>
    </WideBox>
    <WideBox>
      <p><i>Cybersec</i> student</p>
      <p>Hobbyist <i>UI designer</i></p>
      <p>On a <i>C redemption arc</i></p>
    </WideBox>
    <IconBox>
      <img class="icon"
           src="/icons/cal.png" alt="Calendar icon" />
      <p><b>{{ new Date().getFullYear() - 2004 }} y.o.</b></p>
      <p>Jan. 12 2004</p>
    </IconBox>
    <ImageBox>
      <img src="/images/city.png" alt="City of Rouen" />
      <p>Based in <b>Rouen, FR</b></p>
    </ImageBox>
    <IconBox>
      <img class="icon"
           src="/icons/clk.png" />
      <p><b>UTC +1</b></p>
      <p>{{ new Date().toLocaleTimeString('fr-FR', {
        timeZone: 'Europe/Paris',
        timeZoneName: 'short'
      }).substring(0, 5) }}</p>
    </IconBox>
    <BigGrid>
      <div title="NodeJS">
        <img src="/icons/laguages/node.png">
      </div>
      <div title="ElectronJS">
        <img src="/icons/laguages/electron.png">
      </div>
      <div title="VueJS">
        <img src="/icons/laguages/vue.png">
      </div>
      <div title="JQuery">
        <img src="/icons/laguages/jquery.png">
      </div>
    </BigGrid>
    <IconBox>
      <img src="/icons/projects.png" />
      <p>Degree in</p>
      <p><b>Information<br>
        Technology</b> (2024)</p>
    </IconBox>
    <SmallGrid>
      <template #title>
        <p>Some <i>tools</i><br>I use</p>
      </template>
      <div title="Python">
        <img src="/icons/laguages/python.png">
      </div>
      <div title="Java">
        <img src="/icons/laguages/java.png">
      </div>
      <div title="OCaml">
        <img src="/icons/laguages/ocaml.png">
      </div>
      <div title="C">
        <img src="/icons/laguages/c.png">
      </div>
      <div title="JavaScript">
        <img src="/icons/laguages/js.png">
      </div>
      <div title="PHP">
        <img src="/icons/laguages/php.png">
      </div>
      <div title="Rust">
        <img src="/icons/laguages/rust.png">
      </div>
      <div title="GTK4 / LibAdwaita">
        <img src="/icons/laguages/gtk.png">
      </div>
      <div title="Figma">
        <img src="/icons/laguages/figma.png">
      </div>
      <div title="GitHub">
        <img src="/icons/laguages/github.png">
      </div>
      <div>
        <img src="/icons/laguages/misc.png">
      </div>
    </SmallGrid>
  </BentoBox>
  <BentoBox id="projects" :sect-nb="1" title="My projects">
    <ProjectBox color="#B9A33A" start="1" end="3" class="clickable"
                @click="changeLoc('https://github.com/imalonelynerd/TalismanGTK')">
      <img src="/icons/projects/talismangtk.png">
      <p><b>Talisman</b></p>
      <p>A YuGiOh! companion app, coded using GTK4 and Libadwaia.</p>
    </ProjectBox>
    <ProjectBox color="#2466B6" start="3" end="5" class="clickable"
                @click="changeLoc('https://github.com/imalonelynerd/Talisman')">
      <img src="/icons/projects/talisman.png">
      <p><b>Talisman Web</b></p>
      <p>The web version of Talisman, made with VueJS.</p>
    </ProjectBox>
    <ProjectBox color="#BF4753" start="1" end="3" class="clickable"
                @click="changeLoc('https://github.com/imalonelynerd/PrettyHeroes')">
      <img src="/icons/projects/prettyheroes.png">

      <p><b>PrettyHeroes</b></p>
      <p> A website-agnostic, colorful personal page generator.</p>
    </ProjectBox>
    <ProjectBox color="#7464BB" start="3" end="5" class="clickable"
                @click="changeLoc('https://github.com/imalonelynerd/EventHorizonArchive')">
      <img src="/icons/projects/calendar.png">
      <p><b>EventHorizon</b></p>
      <p> A grid-like timetable, with quickness in mind, made with VueJS.</p>
    </ProjectBox>
    <ProjectBox color="#1C95F4" start="1" end="3" class="clickable"
                @click="changeLoc('https://github.com/imalonelynerd/BreezeConcept')">
      <img src="/icons/projects/breeze.png">
      <p><b>Breeze "Remake"</b></p>
      <p>Work in progress...</p>
    </ProjectBox>
    <ProjectBox color="#155884" start="1" end="3" class="clickable"
                @click="changeLoc('https://github.com/imalonelynerd/DeathCount')">
      <img src="/icons/projects/deathcount.png">
      <p><b>DeathCount</b></p>
      <p> A vicious Discord counting bot.</p>
    </ProjectBox>
    <IconBox @click="changeLoc('https://github.com/imalonelynerd')" class="clickable">
      <p>More projects can be found on my <b>GitHub</b></p>
    </IconBox>
  </BentoBox>
  <BentoBox id="designs" :sect-nb="2" title="My designs">
    <WideBox>
      <p><b>Icons</b> & <b>concepts</b></p>
    </WideBox>
    <PictureBox title="Talisman icons" class="clickable"
                @click="$notifications.pushNotification('Coming soon...', '', DefaultNotificationType.Empty)">
      <img src="/images/projects/talisman.png">
    </PictureBox>
    <PictureBox title="Valent icon concept" class="clickable"
                @click="$notifications.pushNotification('Coming soon...', '', DefaultNotificationType.Empty)">
      <img src="/images/projects/valent.png">
    </PictureBox>
    <PictureBox title="Anki icon concept" class="clickable"
                @click="$notifications.pushNotification('Coming soon...', '', DefaultNotificationType.Empty)">
      <img src="/images/projects/anki.png">
    </PictureBox>
    <PictureBox title="DevaintArt icon concept" class="clickable"
                @click="$notifications.pushNotification('Coming soon...', '', DefaultNotificationType.Empty)">
      <img src="/images/projects/da.png">
    </PictureBox>
    <PictureBox title="LonelyIsland icons" class="clickable"
                @click="$notifications.pushNotification('Coming soon...', '', DefaultNotificationType.Empty)">
      <img src="/images/projects/liicons.png">
    </PictureBox>
    <PictureBox title="KDE Plasma icons concept" class="clickable"
                @click="$notifications.pushNotification('Coming soon...', '', DefaultNotificationType.Empty)">
      <img src="/images/projects/kdeconcept.png">
    </PictureBox>
    <PictureBox title="Phi & Gaia icons" class="clickable"
                @click="$notifications.pushNotification('Coming soon...', '', DefaultNotificationType.Empty)">
      <img src="/images/projects/gaia.png">
    </PictureBox>
    <PictureBox title="Talisman tools icons" class="clickable"
                @click="$notifications.pushNotification('Coming soon...', '', DefaultNotificationType.Empty)">
      <img src="/images/projects/tools.png">
    </PictureBox>
    <template #2>
      <WideBox>
        <p><b>Wallpapers</b></p>
      </WideBox>
      <WidePictureBox title="LonelyIsland wallpapers"
                      class="clickable"
                      @click="changeLoc('https://www.flickr.com/photos/199989098@N04/albums/72177720314471268')">
        <img src="/images/wallpapers/li.png" />
      </WidePictureBox>
      <WidePictureBox title="Blur wallpapers"
                      class="clickable"
                      @click="changeLoc('https://www.flickr.com/photos/199989098@N04/albums/72177720314456662')">
        <img src="/images/wallpapers/blur.png" />
      </WidePictureBox>
      <WidePictureBox title="Playground wallpapers"
                      class="clickable"
                      @click="changeLoc('https://www.flickr.com/photos/199989098@N04/collections/72157722694914625/')">
        <img src="/images/wallpapers/playground.png" />
      </WidePictureBox>
    </template>
  </BentoBox>
  <BentoBox id="contact" :sect-nb="1" title="Let’s get in touch !">
    <WideBox>
      <p>
        If you have a <i>question</i>, an <i>issue</i> with one of my projects, or maybe you want me
        to <i>do something</i>, I'll be more than happy to help !
      </p>
    </WideBox>
    <ColorBox color="#637AF5" @click="copyText('imalonelynerd', true)" class="clickable">
      <img src="/icons/socials/discord.png" />
      <p><b>Discord</b></p>
      <p>imalonelynerd</p>
    </ColorBox>
    <ColorBox color="#404040" @click="changeLoc('https://github.com/imalonelynerd')" class="clickable">
      <img src="/icons/socials/github.png" />
      <p><b>GitHub</b></p>
      <p>imalonelynerd</p>
    </ColorBox>
    <ColorBox color="#00B2FF" @click="mailTo('imalonelynerd@gmail.com')" class="clickable">
      <img src="/icons/socials/mail.png" />
      <p><b>Mail</b></p>
      <p>imalonelynerd<br>@gmail.com</p>
    </ColorBox>
    <ColorBox color="#6A6BF7" @click="changeLoc('https://mastodon.social/@imalonelynerd')" class="clickable">
      <img src="/icons/socials/mastodon.png" />
      <p><b>Mastodon</b></p>
      <p>@imalonelynerd</p>
    </ColorBox>
    <ColorBox color="#F35C16" @click="changeLoc('https://reddit.com/u/smpl_deb')" class="clickable">
      <img src="/icons/socials/reddit.png" />
      <p><b>Reddit</b></p>
      <p>u/smpl_deb</p>
    </ColorBox>
    <ColorBox color="#1BC784" @click="changeLoc('https://www.figma.com/@imalonelynerd')" class="clickable">
      <img src="/icons/socials/figma.png" />
      <p><b>Figma</b></p>
      <p>@imalonelynerd</p>
    </ColorBox>
    <ColorBox color="#F40F85" @click="changeLoc('https://www.flickr.com/photos/199989098@N04/')" class="clickable">
      <img src="/icons/socials/flickr.png" />
      <p><b>Flickr</b></p>
      <p>@imalonelynerd</p>
    </ColorBox>
    <ColorBox color="#2F6EB8" @click="changeLoc('https://www.tumblr.com/imalonelynerd')" class="clickable">
      <img src="/icons/socials/tumblr.png" />
      <p><b>Tumblr</b></p>
      <p>imalonelynerd</p>
    </ColorBox>
    <ColorBox color="#2D9FE6" @click="changeLoc('https://twitter.com/wormdramaVEVO')" class="clickable">
      <img src="/icons/socials/twitter.png" />
      <p><b>Twitter</b></p>
      <p>@wormdramaVEVO</p>
    </ColorBox>
  </BentoBox>
  <BentoBox title="Miscellaneous" :sect-nb="1">
    <IconBox class="clickable" @click="changeLoc('https://imalonelynerd.fr/yunohost/sso/')">
      <img src="/icons/yuno.png" />
      <p><b>YunoHost</b> panel</p>
    </IconBox>
    <IconBox class="clickable" @click="changeLoc('https://imalonelynerd.fr/dash')">
      <img src="/icons/dash.png" />
      <p>Server's <b>health</b></p>
    </IconBox>
    <IconBox class="clickable" @click="$router.push('credits')">
      <img src="/icons/me.png" />
      <p><b>Credits</b></p>
    </IconBox>
  </BentoBox>
</template>

<style>
.clickable {
  cursor: pointer;
}
</style>
