const moonIcons = {
  "New Moon": `
    <svg width="40" height="40" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#070f2b" stroke="#F3CF7A" stroke-width="3"/>
    </svg>
  `,

  "First Quarter": `
    <svg width="40" height="40" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#070f2b"/>
      <path d="M50 10
               A40 40 0 0 1 50 90
               L50 10Z"
            fill="#F3CF7A"/>
    </svg>
  `,

  "Full Moon": `
    <svg width="40" height="40" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#F3CF7A"/>
    </svg>
  `,

  "Third Quarter": `
    <svg width="40" height="40" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="#F3CF7A"/>
      <path d="M50 10
               A40 40 0 0 0 50 90
               L50 10Z"
            fill="#070f2b"/>
    </svg>
  `,
};

async function getMoonInfo() {
  const url = "../data/moonphase.json";

  const insertMoon = document.querySelector(".moonphase");

  try {
    const response = await fetch(url).then((res) =>
      res.json().then((data) => {
        const sixmonth = data.filter((_, index) => index < 26);
        const firstfour = data.slice(0, 4);

        console.log(firstfour);
        firstfour.forEach((moon) => {
          const div = document.createElement("div");
          div.innerHTML = `${moonIcons[moon.moonphase]} <p class="moondesc"> ${moon.moonphase} </p>`;
          insertMoon.appendChild(div);
        });

        sixmonth.forEach((day) => {
          const div = document.createElement("div");
          div.innerHTML = `<p class="moon"> ${day.now} </p>`;
          insertMoon.appendChild(div);
          //   console.log(day.moonphase, day.now);
        });
      }),
    );
  } catch (error) {
    console.error(error.message);
  }
}
getMoonInfo();
