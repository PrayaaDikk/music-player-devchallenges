const music = [
  {
    id: 1,
    title: "Lost in the City Lights",
    artist: "Cosmo Sheldrake",
    cover: "../../assets/cover-1.png",
    audio: "../../assets/lost-in-city-lights-145038.mp3",
  },
  {
    id: 2,
    title: "Forest Lullaby",
    artist: "Lesfm",
    cover: "../../assets/cover-2.png",
    audio: "../../assets/forest-lullaby-145038.mp3",
  },
];

const pauseIcon = `
<svg class="fill-whiteTheme" width="32" height="32" viewBox="-12 -12 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"></path> <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"></path> </g></svg>
`;

const playIcon = `
<svg class="fill-whiteTheme" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.941 14.244L14.119 10.236C12.686 9.50176 11 10.5696 11 12.2115V19.7885C11 21.4304 12.686 22.4982 14.119 21.764L21.941 17.756C23.353 17.0325 23.353 14.9675 21.941 14.244Z"/>
</svg>
`;

const reverseIcon = `
<svg class="fill-grayTheme stroke-grayTheme hover:fill-whiteTheme hover:stroke-whiteTheme"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1864 14.2517L8.30466 10.9841C6.9716 10.2435 5.33337 11.2074 5.33337 12.7324V19.2676C5.33337 20.7926 6.9716 21.7566 8.30466 21.016L14.1864 17.7483C15.558 16.9863 15.558 15.0137 14.1864 14.2517Z"
              />
              <path
                d="M21.3334 22.6667L21.3334 9.33335"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M26.6667 22.6667L26.6667 9.33335"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
`;

const nextIcon = `
<svg
              class="fill-grayTheme stroke-grayTheme hover:fill-whiteTheme hover:stroke-whiteTheme"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1864 14.2517L8.30466 10.9841C6.9716 10.2435 5.33337 11.2074 5.33337 12.7324V19.2676C5.33337 20.7926 6.9716 21.7566 8.30466 21.016L14.1864 17.7483C15.558 16.9863 15.558 15.0137 14.1864 14.2517Z"
              />
              <path
                d="M21.3334 22.6667L21.3334 9.33335"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M26.6667 22.6667L26.6667 9.33335"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
`;

export { music, pauseIcon, playIcon, reverseIcon, nextIcon };
