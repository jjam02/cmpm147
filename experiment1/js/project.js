// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// THE ITEMS IN THE LIST WERE POPULATED BY CHAT GPT BUT I CAME UP WITH WHAT FILLERS I SHOULD HAVE. I JUST NEEDED SOME HELP WITH
// THINKING OF EVENTS AND LOCATIONS ETC.

function main() {
  const newsContainer = document.getElementById("test");

  const fillers = {
    BreakingNews: ["BREAKING NEWS", "URGENT UPDATE", "DEVELOPING STORY"],
    Event: [
      "Election Results",
      "Natural Disaster",
      "Terrorist Attack",
      "Scientific Breakthrough",
      "Celebrity Scandal",
      "Economic Crisis",
    ],
    Location: [
      "New York City",
      "Los Angeles",
      "London",
      "Tokyo",
      "Paris", // City Name
      "United States",
      "Canada",
      "Australia",
      "Brazil",
      "India", // Country Name
      "Eiffel Tower",
      "Statue of Liberty",
      "Great Wall of China",
      "Taj Mahal",
      "Sydney Opera House", // Landmark Name
      "Amazon Rainforest",
      "Sahara Desert",
      "Rocky Mountains",
      "Arctic Circle",
      "Mediterranean Coast", // Geographic Region
    ],
    Details: [
      "Death Toll Rises to #[number: 1-100]#",
      "#[Organization/Group]# Issues Statement",
      "Emergency Services Rush to #[Location]#",
      "Experts Warn of #[Potential Consequence]#",
      "Investigation Underway into #[Incident]#",
    ],
    TimeFrame: [
      "Today",
      "Yesterday",
      "Last Night",
      "This Morning",
      "Earlier Today",
    ],
    Action: [
      "Arrest Made in Connection with #[Event]#",
      "#[Organization/Group]# Demands #[Action/Response]#",
      "Government Implements #[Policy/Measure]# in Response to #[Event]#",
      "Community Rallies Together to Support #[Affected Group]#",
    ],
  };
  const template = `$BreakingNews: $Event: occurred at $Location:, where $Details. $BreakingNews: $Event: took place in $Location:, with $Details. $BreakingNews: $Event: happened at $Location:, and $Details. $BreakingNews: $Event: unfolded at $Location:, involving $Details.
  `;

  // STUDENTS: You don't need to edit code below this line.

  const slotPattern = /\$(\w+)/;

  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      // For specific placeholders, generate random values
      switch (name) {
        case "Details":
          // Choose a random detail template from the options array
          return (
            options[Math.floor(Math.random() * options.length)]
              // Replace placeholders within the chosen detail template
              .replace(
                /#\[(number: 1-100)\]#/g,
                () => Math.floor(Math.random() * 100) + 1
              )
              .replace(/#\[(Organization\/Group)\]#/g, () => {
                const organizations = [
                  "United Nations",
                  "World Health Organization",
                  "International Red Cross",
                  "Federal Emergency Management Agency (FEMA)",
                  "Greenpeace",
                  "Doctors Without Borders",
                  "Amnesty International",
                  "Human Rights Watch",
                  "American Red Cross",
                  "UNICEF",
                  "International Monetary Fund (IMF)",
                  "World Bank",
                  "International Atomic Energy Agency (IAEA)",
                  "International Criminal Court (ICC)",
                  "Food and Agriculture Organization (FAO)",
                  "International Labor Organization (ILO)",
                  "World Trade Organization (WTO)",
                  "International Committee of the Red Cross (ICRC)",
                  "National Aeronautics and Space Administration (NASA)",
                  "Federal Bureau of Investigation (FBI)",
                ];
                return organizations[
                  Math.floor(Math.random() * organizations.length)
                ];
              })
              .replace(/#\[(Location)\]#/g, () => {
                const locations = [
                  "New York City",
                  "Los Angeles",
                  "London",
                  "Tokyo",
                  "Paris", // City Name
                  "United States",
                  "Canada",
                  "Australia",
                  "Brazil",
                  "India", // Country Name
                  "Eiffel Tower",
                  "Statue of Liberty",
                  "Great Wall of China",
                  "Taj Mahal",
                  "Sydney Opera House", // Landmark Name
                  "Amazon Rainforest",
                  "Sahara Desert",
                  "Rocky Mountains",
                  "Arctic Circle",
                  "Mediterranean Coast", // Geographic Region
                ];
                return locations[Math.floor(Math.random() * locations.length)];
              })
              .replace(/#\[(Potential Consequence)\]#/g, () => {
                const consequences = [
                  "severe storms",
                  "wildfires",
                  "earthquakes",
                  "droughts",
                  "tornadoes",
                  "hurricanes",
                  "heatwaves",
                  "melting ice caps",
                  "rising sea levels",
                  "pollution",
                  "deforestation",
                  "extinction of species",
                  "crop failures",
                  "water scarcity",
                  "air pollution",
                  "landslides",
                  "loss of biodiversity",
                  "acid rain",
                  "ocean acidification",
                  "habitat destruction",
                ];
                return consequences[
                  Math.floor(Math.random() * consequences.length)
                ];
              })
              .replace(/#\[(Incident)\]#/g, () => {
                const incidents = [
                  "the explosion",
                  "the protest",
                  "the shooting",
                  "the hostage situation",
                  "the riot",
                  "the earthquake",
                  "the flood",
                  "the tornado",
                  "the hurricane",
                  "the landslide",
                  "the terrorist attack",
                  "the chemical spill",
                  "the cyberattack",
                  "the blackout",
                  "the train derailment",
                  "the plane crash",
                  "the building collapse",
                  "the bridge collapse",
                  "the volcanic eruption",
                  "the gas leak",
                ];
                return incidents[Math.floor(Math.random() * incidents.length)];
              })
          );
        default:
          // For other placeholders, choose randomly from the options array
          return options[Math.floor(Math.random() * options.length)];
      }
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }

  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }

    /* global box */

    $("#test").text(story);
  }

  /* global clicker */
  $("#clicker").click(generate);

  generate();
}

// let's get this party started - uncomment me
main();
