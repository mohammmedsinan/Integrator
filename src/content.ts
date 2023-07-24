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
          icon: 'ant-design:dollar-circle-filled',
          title: 'Open Source',
          description:'Open-source software anyone can contribute to it and You can read the rules of the contributors, also anyone Can use this project as a base for their project with Customizable themes and components with clean code.',
        },
        {
          icon: 'ant-design:minus-circle-filled',
          title: 'No Fees',
          description: 'No Fees required anyone can use this software in the Community, we are trying to deliver this product for Free Because we have a vision for better web Development With our software, fot those who wonder How we will get fund we have a model business.',
        },
        {
          icon: 'ant-design:compass-filled',
          title: 'Support 11+ Framework',
          description: 'In this point we are focusing on deliver Javascript Frameworks integration to the software at the first, The next step we will bring more languages and Frameworks to the software for example {PHP , Java , Python, and more}  .',
        },
        {
          icon: 'ant-design:info-circle-filled',
          title: 'Integrate 44+ Technology',
          description:'We will put the most used technologies and softwares, The next step will add more based on the developers needs and  trying to listen and be in touch with other developers from the community, also updating the software quickly.',
        },
        {
          icon: 'ant-design:meh-filled',
          title: 'Well Documented',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in eligendi sed quam, soluta commodi aspernatur itaque deleniti fugiat voluptatibus debitis consequatur et nihil, est, sequi officiis dignissimosfacere maxime.',
        },
        {
          icon: 'ant-design:chrome-filled',
          title: 'Open API',
          description:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in eligendi sed quam, soluta commodi aspernatur itaque deleniti fugiat voluptatibus debitis consequatur et nihil, est, sequi officiis dignissimosfacere maxime.',
        },
      ],
    },
    goal: {
      title: 'What does',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, recusandae velit doloribus consequuntur et tenetur obcaecati harum magnam commodi vitae! Quo!',
      content: [
        {
          title: 'Authantication',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ',
          icon: 'tabler:clock',
        },
        {
          title: 'Authantication',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ',
          icon: 'tabler:clock',
        },
        {
          title: 'Authantication',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ',
          icon: 'tabler:clock',
        },
      ],
    },
  },
};
