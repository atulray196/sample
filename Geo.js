<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.css" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/921fb3aa6f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

    <script type='text/javascript'>
        function GetMap() {
            var map = new Microsoft.Maps.Map('#myMap', {
                credentials: 'AtmbUSlbvlCzsm2u0I_PFlo-NCl9IAkzJWOfRUX8ZHZ0g7AYdmT7Vs59E8LwCGbX'
            });
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("inn")
                var loc = new Microsoft.Maps.Location(
                    position.coords.latitude,
                    position.coords.longitude);    
                var pin = new Microsoft.Maps.Pushpin(loc);
                map.entities.push(pin);    
                map.setView({ center: loc, zoom: 15 });
            });
        }

        </script>
        <script type='text/javascript' src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap' async defer></script>
    <title>Home</title>
</head>

<body class="bg-gray-100" style="background-image: url('rolands-varsbergs-miKmVyq3qhE-unsplash.jpg'); background-size: cover; background-repeat: no-repeat;">
  

    <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-6 ">
      <div class="flex items-center flex-shrink-0 text-white mr-8">
        <span class="font-semibold text-xl tracking-tight navbar-brand text-white"  style="font-size: 2rem;">Pranav</span>
      </div>
     
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto ml-4">
        <div class="text-sm lg:flex-grow flex justify-end"  style="font-size: 1.3rem;">
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white text-white">My Location</a>
        </div>
      </div>
    </nav>
    <

  <div class="flex justify-center items-center flex-col m-8 animate__animated animate__fadeInUp">
    <div class="bg-black p-1">
      <div class="text-center font-bold text-sm pt-2 text-white"></div>
  </div>
  
               
        
        <div id="myMap" class="relative " style="height: 70vh; width: 70vw; "></div>
        <div class="mt-4"><spam class="font-extrabold"></spam></div>
    </div>
    
    <footer class="shadow bg-gray-500 p-4">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-m text-black sm:text-center">© 2023 Pranav. All Rights Reserved.</span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black sm:mt-0">
          <a href="#" class="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 448 512"><style>svg{fill:#000000}</style><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
          </a>
          <a href="#" class="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 448 512"><style>svg{fill:#000000}</style><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </a>
          <a href="#" class="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 448 512"><style>svg{fill:#000000}</style><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg>
          </a>
          <a href="#" class="mx-2">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
          </a>
        </ul>
      </div>
      
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
    <script src="artgallery.js"></script>
</body>
</html>
