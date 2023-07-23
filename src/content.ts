export interface content{
    landingPage: {
        hero: { title: string, description: string, heroLinks: { link1: string, link2: string; } },
        offer: { title: string, description: string, cards: [{ icon: string, title: string, description: string }] },
        goal: { title: string; description: string; content: [{ title: string; description: string; icon: string; }] }
    }
}


export const content = {
    landingPage: {
        hero: {
            title: "is free open-source software & ease to ues",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eveniet cumque iste repellat optio dolorum eum illo earum aliquid cum delectus itaque aliquam. Nobis, rem molestias ab id recusandae autem ullam consectetur reiciendis eveniet consequatur exercitationem soluta quis fuga. Magnam blanditiis omnis odio consectetur totam obcaecati saepe, incidunt repudiandae corrupti ab ratione sed sit asperiores odit vero hic unde cum earum aspernatur a eligendi. Incidunt, fuga? Sequi facilis perferendis voluptatibus?",
            heroLinks:{link1:"#1",link2:"#2"}
        },
        offer: {
            title: "What does ",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, recusandae velit doloribus consequuntur et tenetur obcaecati harum magnam commodi vitae! Quo!",
            cards: [
                {icon:"G",title:"ThisIsTest",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in eligendi sed quam, soluta commodi aspernatur itaque deleniti fugiat voluptatibus debitis consequatur et nihil, est, sequi officiis dignissimosfacere maxime."},
                {icon:"G",title:"ThisIsTest",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in eligendi sed quam, soluta commodi aspernatur itaque deleniti fugiat voluptatibus debitis consequatur et nihil, est, sequi officiis dignissimosfacere maxime."},
                {icon:"G",title:"ThisIsTest",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in eligendi sed quam, soluta commodi aspernatur itaque deleniti fugiat voluptatibus debitis consequatur et nihil, est, sequi officiis dignissimosfacere maxime."},
                {icon:"G",title:"ThisIsTest",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in eligendi sed quam, soluta commodi aspernatur itaque deleniti fugiat voluptatibus debitis consequatur et nihil, est, sequi officiis dignissimosfacere maxime."},
                {icon:"G",title:"ThisIsTest",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in eligendi sed quam, soluta commodi aspernatur itaque deleniti fugiat voluptatibus debitis consequatur et nihil, est, sequi officiis dignissimosfacere maxime."},
                {icon:"G",title:"ThisIsTest",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic in eligendi sed quam, soluta commodi aspernatur itaque deleniti fugiat voluptatibus debitis consequatur et nihil, est, sequi officiis dignissimosfacere maxime."},
            ]
            
        },
        goal: {
            title: "What does",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, recusandae velit doloribus consequuntur et tenetur obcaecati harum magnam commodi vitae! Quo!",
            content: [
                { title: "Authantication", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ", icon: "tabler:clock" },
                { title: "Authantication", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ", icon: "tabler:clock" },
                { title: "Authantication", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nobis dicta laborum ad dolor enim quasi facere quia, ", icon: "tabler:clock" },
            ]
            
        }
    }
}