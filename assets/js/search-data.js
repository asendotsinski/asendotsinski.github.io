// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-our-reproducibility-study-on-the-competition-of-mechanisms-in-llms-was-accepted-at-tmlr-and-mlrc-paper",
          title: 'Our reproducibility study on the competition of mechanisms in LLMs was accepted at...',
          description: "",
          section: "News",},{id: "news-clare-our-work-on-generated-face-detection-was-accepted-at-the-1st-acm-workshop-on-deepfake-deception-and-disinformation-security-paper",
          title: 'CLaRE, our work on generated-face detection, was accepted at the 1st ACM Workshop...',
          description: "",
          section: "News",},{id: "news-i-had-a-great-time-at-eurips-this-past-week-where-i-presented-my-reproducibility-study-on-competitions-of-mechanisms-in-llms-paper",
          title: 'I had a great time at EurIPS this past week, where I presented...',
          description: "",
          section: "News",},{id: "news-sockpuppetting-my-work-on-jailbreaking-llms-via-prefilling-and-optimization-was-accepted-at-icml-s-second-workshop-on-agents-in-the-wild-safety-security-and-beyond-thank-you-to-anyone-who-stopped-by-my-poster-paper",
          title: 'Sockpuppetting, my work on jailbreaking LLMs via prefilling and optimization, was accepted at...',
          description: "",
          section: "News",},{id: "news-excited-to-be-joining-insait-to-start-my-phd-on-llm-security-advised-by-dr-yuxia-wang-sparkles",
          title: 'Excited to be joining INSAIT to start my PhD on LLM security, advised...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%65%6E%64%6F%74%73%69%6E%73%6B%69@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/asen-dotsinski", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=szGMKMcAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
