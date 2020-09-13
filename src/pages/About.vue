<template>
  <Layout>
    <SmallHeader />

    <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
    <div class="relative bg-white">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            class="sm:max-w-full md:max-w-full object-cover lg:absolute"
            src="/img/vertical_game_cover_6x9_outpost.png"
            alt=""
          />
        </div>
      </div>
      <div
        class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2"
      >
        <div class="lg:col-start-2 lg:pl-8">
          <div
            class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0"
          >
            <p
              class="leading-6 text-purple-600 font-semibold tracking-wide uppercase"
            >
              What is The Outpost?
            </p>
            <h1
              class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
            >
              About
            </h1>
            <p class="text-lg leading-7 text-gray-500 mb-5">
              The Outpost is a remote VR social experience for 2-6 participants
              who are completely immersed together as robots on a tropical beach
              -- set in the future on a faraway planet. As a participant, you
              sip tropical drinks, play games, and chat with other SIGGRAPH
              attendees in this strange and wondrous refuge.
            </p>
            <div class="prose text-gray-500">
              <p>
                We have shown multi-participant immersive co-located VR
                experiences at SIGGRAPH since 2015. One of our previous works --
                CAVE -- which premiered at SIGGRAPH 2018, won Best Art Paper at
                SIGGRAPH 2019. The Outpost is a far more lean-forward
                experience, representing an innovative new paradigm for
                multi-participant VR. It is an inside-out tracked social VR
                experience, containing procedural characters and avatars. The
                entire state of the shared virtual world is synchronized for 2-6
                participants.
              </p>
              <p>
                We originally designed The Outpost as an experience where
                co-located participants are completely immersed together in a
                parallel VR world and can hear each other in their correct
                locations in the actual room at SIGGRAPH. We had planned to
                build a physical bar on the SIGGRAPH conference floor with real
                walls, tables and chairs to sit in, as well as glasses that
                people can carry containing tropical mixed drinks that they can
                actually drink. When participants looked out of a virtual window
                together, they would see an awe-inspiring vista of an alien
                planet.
              </p>
              <p>
                However, due to the post-COVID constraints that necessitate a
                fully remote environment, we went back to the drawing board,
                re-engineering and re-designing our project with the hope of
                bringing participants the joy of connecting with colleagues at
                SIGGRAPH -- all while they sit safely at home at their desk or
                kitchen table and use their own VR headset.
              </p>
              <p>
                Participants still have many ways to interact with each other
                and with their environment, all while seeing and hearing each
                other as procedurally generated robot avatars seated around a
                virtual bar, perfectly situated for small group conversations.
                The experience will feel unique, yet also powerfully familiar
                and natural.
              </p>
              <p>
                This approach has utility as a prototype system architecture
                that will allow remotely located people to interact and
                collaborate with each other in exciting new ways. Also, people
                will enjoy the chance to jump into a bar on another planet as a
                temporary refuge from the neverending stream of Siggraph Zoom
                meetings.
              </p>
              <p>
                Our project moves beyond current paradigms, as it is a
                fundamental rethinking of a shared VR experience in a parallel
                world. Similarly to commercially available systems like
                Altspace, VR Chat, and Hubs, our system uses only the inside-out
                tracking sensors in the VR headset to track the rigid bodies of
                each participant. However, in contrast to these systems, we
                built our custom low-latency network stack from the ground up as
                a plugin for Unreal Engine. This allows us to measure and
                analyze meaningful data about the shared state of the
                participants and the environment at any given moment. Our
                underlying research platform is therefore immediately able to
                support the broader VR development and scientific communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
    <div class="py-16 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-base max-w-prose mx-auto lg:max-w-none">
          <p
            class="text-base leading-6 text-purple-600 font-semibold tracking-wide uppercase"
          >
            The user experience
          </p>
          <h1
            class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            How it works
          </h1>
        </div>
        <div
          class="relative z-10 text-base max-w-prose mx-auto mb-8 lg:max-w-5xl lg:mx-0 lg:pr-72"
        >
          <p class="text-lg text-gray-500 leading-7">
            The user experience is also highly collaborative. When people have
            correct spatial audio in a parallel world that is not bound by our
            usual rules of perception, they can use their virtual co-locality to
            collaborate in ways not available either remotely or in their normal
            physical environment. Unlike most VR experiences, this experience
            allows, and in fact encourages, many people to interact and
            collaborate with each other at the same time. We are showing that
            such systems can be low cost and can work using only inside-out
            tracking technology to track each participant, and therefore can
            easily be scaled up for mass use.
          </p>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div class="relative z-10 mb-12 lg:mb-0">
            <div class="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
              <p>
                SIGGRAPH attendees make a reservation for a time slot to visit
                The Outpost on our website theoutpostvr.com. After registering,
                they will receive an email with links and instructions to
                download The Outpost from the Steam Store (a free Steam account
                is required). After attendees open The Outpost in the Steam App
                and put on their VR Headset, they will find themselves on an
                alien planet with a cool retro-future vibe.
              </p>
              <p>
                All of the other patrons at The Outpost are robots, as are you.
                After selecting a seat at an available table, you will be able
                to customize your robot avatar by selecting an avatar from a
                population of procedurally generated robots.
              </p>
              <p>
                You can then talk to the other robots at The Outpost, whom you
                realize are fellow SIGGRAPH attendees. As you hang out with each
                other, you drink your tropical drink through a straw.
              </p>
            </div>
          </div>
          <div class="relative text-base max-w-prose mx-auto lg:max-w-none">
            <svg
              class="absolute top-0 right-0 -mt-5 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote class="relative bg-white rounded-lg shadow-lg">
              <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="/img/nyu_short_color.png" alt="NYU" class="h-8" />
                <div
                  class="relative text-lg text-gray-700 leading-7 font-medium mt-8"
                >
                  <svg
                    class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                    />
                  </svg>
                  <p class="relative">
                    There are many opportunities for research, and we expect
                    that a number of scientific papers and some Ph.D.
                    dissertations may come out of this work and related work.
                  </p>
                </div>
              </div>
              <cite
                class="flex items-center sm:items-start bg-purple-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10"
              >
                <div
                  class="rounded-full border-2 border-white mr-4 sm:-mt-15 sm:mr-6"
                >
                  <img
                    class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-purple-300"
                    src="/img/ken_perlin_nyu.png"
                    alt="Ken Perlin - NYU"
                  />
                </div>
                <span class="text-purple-300 font-semibold leading-6">
                  <strong class="text-white font-semibold">Ken Perlin</strong>
                  <br class="sm:hidden" />
                  Professor, New York University
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import SmallHeader from "~/components/SmallHeader.vue";

export default {
  components: {
    SmallHeader,
  },
  name: "About",
  data: () => ({}),
};
</script>
