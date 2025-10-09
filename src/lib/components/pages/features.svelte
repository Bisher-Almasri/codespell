<script lang="ts">
  import { Users, Trophy, Clock, Zap, BookOpen, Shield, Heart, Star } from 'lucide-svelte';

  const features = [
    {
      icon: Users,
      title: "Guild Learning",
      description:
        "Join a community of fellow apprentices and experienced wizards. Learn together, solve challenges, and share magical discoveries.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Trophy,
      title: "Achievement Quests",
      description:
        "Complete coding quests and earn magical badges. Track your progress as you advance from apprentice to master wizard.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description:
        "Master spells on your own schedule. Our magical curriculum adapts to your learning speed and lifestyle.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Interactive Spellcasting",
      description:
        "Practice magic with hands-on coding exercises, real-time feedback, and instant spell execution.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Ancient Wisdom",
      description:
        "Access a vast library of coding grimoires, from basic incantations to advanced magical techniques.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Master Mentorship",
      description:
        "Get guidance from experienced code wizards who've mastered the art of digital sorcery.",
      color: "from-red-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah the Swift",
      role: "Frontend Sorceress",
      content:
        "CodeSpell Academy transformed me from a complete beginner to a confident web developer. The magical theme made learning so much more engaging!",
      image:
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a8ae61880b520cc727af8bfb3fe7593784ba7a9f_image.png"
    },
    {
      name: "Marcus the Wise",
      role: "Full-Stack Wizard",
      content:
        "The interactive lessons and community support helped me land my dream job as a developer. Best investment I've ever made!",
      image:
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a8ae61880b520cc727af8bfb3fe7593784ba7a9f_image.png"
    },
    {
      name: "Luna the Brilliant",
      role: "Data Enchantress",
      content:
        "I love how the academy breaks down complex concepts into digestible magical lessons. The Python course was absolutely spellbinding!",
      image:
        "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a8ae61880b520cc727af8bfb3fe7593784ba7a9f_image.png"
    }
  ];
</script>

<section id="features" class="py-20 relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <div class="inline-flex items-center space-x-2 mb-4">
        <Star class="h-6 w-6 text-purple-400" />
        <span class="text-purple-300 tracking-wider uppercase text-sm">Academy Powers</span>
      </div>
      <h2 class="text-4xl lg:text-5xl mb-6">
        <span class="text-white">Why Choose</span>
        <span class="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Academy
        </span>
      </h2>
      <p class="text-xl text-purple-200 max-w-3xl mx-auto">
        Experience the most magical way to learn coding. Our academy combines ancient wisdom
        with modern teaching methods to create an unforgettable learning journey.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {#each features as feature}
        <div
          class="bg-black/40 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105 rounded-xl p-6"
        >
          <div class={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
            <svelte:component this={feature.icon} class="h-6 w-6 text-white" />
          </div>
          <h3 class="text-white text-lg mb-2 group-hover:text-purple-200 transition-colors">
            {feature.title}
          </h3>
          <p class="text-purple-300 text-base">{feature.description}</p>
        </div>
      {/each}
    </div>

    <div class="relative">
      <div class="text-center mb-12">
        <div class="inline-flex items-center space-x-2 mb-4">
          <Heart class="h-6 w-6 text-pink-400" />
          <span class="text-purple-300 tracking-wider uppercase text-sm">Wizard Testimonials</span>
        </div>
        <h3 class="text-3xl lg:text-4xl mb-4">
          <span class="text-white">Stories from</span>
          <span class="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Fellow Wizards
          </span>
        </h3>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        {#each testimonials as t}
          <div
            class="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 rounded-xl p-6"
          >
            <div class="flex items-center space-x-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                class="w-12 h-12 rounded-full object-cover border-2 border-purple-400"
              />
              <div>
                <h4 class="text-white text-lg">{t.name}</h4>
                <p class="text-purple-300 text-sm">{t.role}</p>
              </div>
            </div>
            <p class="text-purple-200 italic mb-4">"{t.content}"</p>
            <div class="flex space-x-1">
              {#each Array(5) as _}
                <Star class="h-4 w-4 text-yellow-400 fill-current" />
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="mt-20 relative">
      <div class="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl"></div>
      <div class="relative bg-black/40 rounded-2xl p-8 border border-purple-500/30">
        <div class="text-center mb-8">
          <h3 class="text-2xl lg:text-3xl text-white mb-2">Academy of Excellence</h3>
          <p class="text-purple-200">Join thousands of successful coding wizards</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-3xl lg:text-4xl text-white mb-2">50K+</div>
            <div class="text-purple-300">Spells Cast</div>
          </div>
          <div>
            <div class="text-3xl lg:text-4xl text-white mb-2">10K+</div>
            <div class="text-purple-300">Wizards Trained</div>
          </div>
          <div>
            <div class="text-3xl lg:text-4xl text-white mb-2">95%</div>
            <div class="text-purple-300">Success Rate</div>
          </div>
          <div>
            <div class="text-3xl lg:text-4xl text-white mb-2">24/7</div>
            <div class="text-purple-300">Magic Support</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
