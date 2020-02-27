<template>
  <div class="card-wrp">
    <div class="card" v-for="item in cards" :key="item.id">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="@/assets/images/placeholder.jpg" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="@/assets/images/placeholder.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ item.title }}</p>
            <p class="subtitle is-6">{{ item.slug }}</p>
          </div>
        </div>
        <div class="content">
          {{ item.text }}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      cards: [
        {
          title: "Mexican Brew",
          slug: "mexican-brew",
          ingredients: ["bananas", "coffee", "milk"],
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
          id: "1"
        },
        {
          title: "Morning Mood",
          slug: "morning-mood",
          ingredients: ["mango", "lime", "juice"],
          text:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
          id: "2",
          image: ""
        }
      ]
    };
  }
};
</script>
