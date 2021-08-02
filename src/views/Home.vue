<template>
  <div id="homePage" class="container mx-auto max-w-screen-xl">
    <main
      id="wrapper"
      class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
    >
      <!-- lateral derecho: foto -->
      <div
        id="sidebar"
        class="
          w-full
          sm:max-w-sm
          p-8
          bg-gradient-to-b
          from-blue-300
          via-red-300
          to-purple-100
        "
      >
        <div class="px-2 mb-12">
          <img
            :src="photo_path"
            alt=""
            class="rounded-full w-48 mx-auto mb-2"
          />
          <h1 class="text-center text-2xl font-semibold mb-2"></h1>
          <h2 class="text-center text-xl font-light"></h2>
        </div>
        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-left text-xl font-semibold mb-4">
            Contacto / Contact
          </h2>
          <div class="flex items-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <div class="text-left">
              <p></p>
              <p></p>
            </div>
          </div>
          <div class="flex items-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a href=""></a>
            <a href=""></a>
          </div>
          <div class="flex items-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="{2}"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href=""></a>
          </div>
        </div>
        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-left text-xl font-semibold mb-4">
            Datos Personales / Personal
          </h2>
          <div class="flex items-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
              />
            </svg>
            <div>
              <p></p>
            </div>
          </div>
          <div class="flex items-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline mr-4 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <div>
              <p></p>
            </div>
          </div>
        </div>
        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-left text-xl font-semibold mb-4">
            En la web / On the web
          </h2>
          <div class="flex items-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline mr-4 h-6 w-6 ionicon"
              viewBox="0 0 512 512"
            >
              <title>Logo Twitter</title>
              <path
                d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"
              />
            </svg>
            <a class="text-left" href=""></a>
          </div>
          <div class="flex items-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline mr-4 h-6 w-6 ionicon"
              viewBox="0 0 512 512"
            >
              <title>Logo Github</title>
              <path
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
              />
            </svg>
            <a class="text-left" href=""></a>
          </div>
          <div class="flex items-center my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline mr-4 h-6 w-6 ionicon"
              viewBox="0 0 512 512"
            >
              <title>Logo Linkedin</title>
              <path
                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
              />
            </svg>
            <a class="text-left" href=""
              ></a
            >
          </div>
        </div>
        <div class="font-light text-lg px-2 mb-12">
          <h2 class="text-left text-xl font-semibold mb-4">
            Habilidades y Herramientas / Skills & Tools
          </h2>
          <ul class="text-left list-none">
            <li>
              <label for="js-skill">JavaScript</label>
              <progress id="js-skill" max="100" value="75"></progress>
            </li>
            <li>
              <label for="php-skill">PHP / Laravel</label>
              <progress id="php-skill" max="100" value="95"></progress>
            </li>
            <li>
              <label for="python-skill">Python / Django</label>
              <progress id="python-skill" max="100" value="70"></progress>
            </li>
            <li>
              <label for="java-skill">Java / Spring</label>
              <progress id="java-skill" max="100" value="50"></progress>
            </li>
            <li>
              <label for="vue-skill">Vue / Vuex</label>
              <progress id="vue-skill" max="100" value="80"></progress>
            </li>
            <li>
              <label for="react-skill">React</label>
              <progress id="react-skill" max="100" value="70"></progress>
            </li>
            <li>
              <label for="scss-skill">SCSS</label>
              <progress id="scss-skill" max="100" value="50"></progress>
            </li>
            <li>
              <div>Hosting / DB / Otros</div>
              <p class="grid grid-flow-row sm:grid-cols-1 lg:grid-cols-2 leading-8">
                <span class="rounded-xl bg-gray-300 px-3 m-2">AWS</span>
                <span class="rounded-xl bg-gray-300 px-3 m-2">MySQL</span>
                <span class="rounded-xl bg-gray-300 px-3 m-2">Postgres</span>
                <span class="rounded-xl bg-gray-300 px-3 m-2">WebSockets</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="text-left font-light text-lg px-2 mb-12">
            <h2 class="text-xl font-semibold mb-4">
                Educación / Education
            </h2>
            <h3 class="font-semibold mt-2 mb-2">
                
            </h3>
            <p>
                
            </p>

            <h3 class="font-semibold mt-2 mb-2">
               
            </h3>
            <p>
                
            </p>
        </div>

        <div class="text-left font-light text-lg px-2 mb-12">
          <h2 class="text-xl font-semibold mb-4">Idiomas / Languages</h2>
          <h3 class="font-semibold">Español</h3>
          <p>Nativo</p>
          <h3 class="font-semibold">Inglés</h3>
          <p>Técnico</p>
        </div>
      </div>

      <!-- lateral izquierdo: información laboral -->
      <div class="content w-full p-12">
        <div id="profile" class="prose text-left">
            <h2 class="section-headline">Perfil / Profile</h2>
            
        </div>
        <hr class="mt-8 mb-12">
        <div id="experience" class="prose text-left">
            <h2 class="section-headline">
                Experiencia / Experience
            </h2>
            <div>
                <h3></h3>
                <section class="mb-6">
                    <div class="lg:inline-block lg:w-5/12 lg:align-top italic mb-2">
                        
                    </div>
                    <div class="lg:inline-block lg:w-6/12 w-full">
                         
                    </div>
                </section>
                <section class="mb-6">
                    <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                        Tareas:
                    </div>
                    <div class="lg:inline-block lg:w-8/12 w-full">
                        <p>
                            Sistema de protección civil familiar y empresarial web creado con el framework Laravel, base de 
                            datos en PostgreSQL, JQuery, Bootstrap y AJAX del lado del frontend. Generador de PDF con 
                            SnappyPDF.
                        </p>
                        <p>
                            Sistema de búsqueda de placas de automóviles con exceso de velocidad detectado por radares, 
                            creado con el framework Laravel, base de datos SQL Server y PostgreSQL y usando el framework 
                            Vuejs en el frontend.
                        </p>
                        <p>
                            Sistema de registro de incidentes de la república mexicana, creado con el framework Laravel, 
                            base de datos en PostgreSQL y usando websockets.
                        </p>
                        <p>
                            Microservicio de una agenda para implementación en proyectos móviles y web, usando Laravel y 
                            el paquete eluceo/ical. Además de microservicio de recopilación de puntos geográficos de 
                            usuarios y su distancia entre cada uno usando Laravel.
                        </p>
                    </div>
                </section>
                <section class="mb-6">
                    <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                        
                    </div>
                    <div class="lg:inline-block lg:w-8/12 w-full">
                        <div class="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Vue</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">React</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Laravel</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Django</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Bootstrap</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Javascript</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Sockets</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Git</span>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <h3></h3>
                <section class="mb-6">
                    <div class="lg:inline-block lg:w-5/12 lg:align-top italic mb-2">
                        
                    </div>
                    <div class="lg:inline-block lg:w-6/12 w-full">
                         
                    </div>
                </section>
                <section class="mb-6">
                    <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                        Tareas:
                    </div>
                    <div class="lg:inline-block lg:w-8/12 w-full">
                        
                    </div>
                </section>
                <section class="mb-6">
                    <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                        Herramientas:
                    </div>
                    <div class="lg:inline-block lg:w-8/12 w-full">
                        <div class="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Vue</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Laravel</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Ionic 3</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Bootstrap</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Javascript</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">SOAP</span>
                            <span class="rounded-xl bg-gray-300 px-3 m-2">Git</span>

                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      photo_path: "/images/profile_2.jpg",
    };
  },
  mounted(){    
    this.changePage();
  },
  methods: {
    changePage(){
        this.$store.commit('changePage',"Home")
    }
  },
};
</script>   