export interface content {
  landingPage: {
    hero: { title: string; description: string; heroLinks: { link1: string; link2: string } };
    offer: { title: string; description: string; cards: [{ icon: string; title: string; description: string }] };
    goal: { title: string; description: string; content: [{ title: string; description: string; icon: string }] };
  };
}

export const content = {
  landingPage: {
    hero: {
      title: 'is free open-source & easy-to-use software',
      description: "Are you facing a lot of challenges while you are trying to integrate a certain software into your website In addition to the time wasted from you while you are trying to read and understand the documentation to integrate this software? , Integrator will solve your problems, and boost your productivity and you don't have to pay any fees it's a free open source software and you can contribute to it and make web better place.",
      heroLinks: { link1: 'https://github.com/mohammmedsinan/Integrator', link2: 'https://github.com/mohammmedsinan/Integrator' },
    },
    offer: {
      title: 'What does ',
      description:"Explore the perks that Integrator gives you when you will use it in your projects to see if it fits your needs, * also this is the list of things that we should achieved in the future*",
      cards: [
        {
          icon: 'ant-design:github-outlined',
          title: 'Open Source',
          description:'Open-source software anyone can contribute to it and You can read the rules of the contributors, also anyone Can use this project as a base for their project with Customizable themes and components with clean code.',
        },
        {
          icon: 'ant-design:dollar-circle-outlined',
          title: 'No Fees',
          description: 'No Fees required anyone can use this software in the Community, we are trying to deliver this product for Free Because we have a vision for better web Development With our software, for those who wonder How we will get fund we have a model business.',
        },
        {
          icon: 'ant-design:compass-outlined',
          title: 'Support 11+ Framework',
          description: 'In this point we are focusing on deliver Javascript Frameworks integration to the software at the first, The next step we will bring more languages and Frameworks to the software for example {PHP , Java , Python, and more}  .',
        },
        {
          icon: 'ant-design:gold-outlined',
          title: 'Integrate 44+ Technology',
          description:'We will put the most used technologies and softwares, The next step will add more based on the developers needs and  trying to listen and be in touch with other developers from the community, also updating the software quickly.',
        },
        {
          icon: 'ant-design:pushpin-outlined',
          title: 'Well Documented',
          description: 'Well Documented software, have so many tutorials, also you can integrate with any library or software with an easy way and explanations included, with a documentation page in the site help the beginners to integrate softwares in their project.',
        },
        {
          icon: 'ant-design:cloud-server-outlined',
          title: 'Open API',
          description: "We will build Open-API so other developers can talk with our back-end side and take some sort of data they need, likewise we want to build an artificial intelligence and inclusion in this software to make the developer's life cycle easier.",
        },
      ],
    },
    goal: {
      title: 'What does',
      description: 'The goals that we want to achieve in the future, ',
      content: [
        {
          title: 'Stay up to date',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ',
          icon: 'ic:round-update',
        },
        {
          title: 'Inclusion-with-AI',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ',
          icon: 'ph:robot-fill',
        },
        {
          title: 'Easy-to-use',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ',
          icon: 'tabler:hand-click',
        },
      ],
    },
  },
};
