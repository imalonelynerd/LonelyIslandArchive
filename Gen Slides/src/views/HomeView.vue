<script setup>

import CardView from '@/components/CardView.vue'
import SmallCard from '@/components/cards/SmallCard.vue'
import CardList from '@/components/cards/CardGrid.vue'
import TitleCard from '@/components/cards/TitleCard.vue'
import IconCard from '@/components/cards/IconCard.vue'
</script>

<template>
  <CardView color1="#00a896" color2="#05668d">
    <TitleCard>
      <img src="/images/webapps.png" alt="webapps" />
      <h1>I develop web apps</h1>
      <h2>(using VueJS and Electron)</h2>
    </TitleCard>
    <CardList>
      <SmallCard>
        <img src="/images/projects/talimsanweb.png">
        <h2>Talisman Web</h2>
        <p>A YuGiOh! companion app, with LP tracking, custom chronometers, and counting tools.</p>
      </SmallCard>
      <SmallCard>
        <img src="/images/projects/prettyheroes.png">
        <h2>PrettyHeroes</h2>
        <p>A host-agnostic, colorful personal page generator, compatible with GitHub.</p>
      </SmallCard>
      <SmallCard>
        <img src="/images/projects/eventhorizon.png">
        <h2>EventHorizon</h2>
        <p>A grid-like timetable, made with ease of use and speed in mind.</p>
      </SmallCard>
    </CardList>
  </CardView>
  <CardView color1="#f20089" color2="#8900f2">
    <TitleCard>
      <img src="/images/apps.png" alt="webapps" />
      <h1>I develop apps</h1>
      <h2>(using Python and/or GTK)</h2>
    </TitleCard>
    <CardList>
      <SmallCard>
        <img src="/images/projects/talisman.png">
        <h2>Talisman</h2>
        <p>A YuGiOh! companion app, with LP tracking, custom chronometers, and counting tools.</p>
      </SmallCard>
      <SmallCard>
        <img src="/images/projects/deathcount.png">
        <h2>DeathCount</h2>
        <p>A counting minigame in the form of a Discord bot. But now with consequences.</p>
      </SmallCard>
    </CardList>
  </CardView>
  <CardView color1="#f20089" color2="#8900f2">
    <TitleCard>
      <img src="/images/design.png" alt="webapps" />
      <h1>I design icons</h1>
      <h2>(using Figma and Inkscape)</h2>
    </TitleCard>
    <CardList rows="8">
      <IconCard>
        <img src="/images/projects/talisman.png">
      </IconCard>
      <IconCard>
        <img src="/images/projects/deathcount.png">
      </IconCard>
      <IconCard>
        <img src="/images/projects/deathcount.png">
      </IconCard>
      <IconCard>
        <img src="/images/projects/deathcount.png">
      </IconCard>
      <IconCard>
        <img src="/images/projects/deathcount.png">
      </IconCard>
      <IconCard>
        <img src="/images/projects/deathcount.png">
      </IconCard>
      <IconCard>
        <img src="/images/projects/deathcount.png">
      </IconCard>
    </CardList>
  </CardView>
</template>

<style>
</style>