import data from './data.json'

function frameWorkPicker(name: string | "react" | "next"
    , explanation=[{}]) {
    const specificObject = data.find(e => e.name === name);
    return { ...specificObject,explanation }
}

export const technologies = [
{
name: 'redux',
icon: "bx:bxl-redux",
catagory:"front-end",
content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas sed nam unde debitis? Ipsa quidem quod, ab delectus, incidunt error eveniet vero ullam veritatis sint magnam in tenetur? Modi quibusdam rem voluptates? Dolores, voluptate minus reiciendis optio ipsa dolore illum voluptatem, blanditiis non distinctio nulla quia sequi debitis ducimus saepe nemo dolorem voluptates inventore sed consequatur nobis aliquid, eius aliquam odit. Incidunt iusto maxime et quasi iure accusamus modi, quos facilis nulla atque magni nisi iste! Officiis odit suscipit, dolores autem aliquid labore eum sequi ducimus velit in animi repellat beatae dicta facilis vitae similique excepturi expedita qui at consequatur unde perferendis? Natus accusantium beatae itaque provident facere iusto! Ut id rem doloremque molestiae dolores officia totam sunt assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptas sed nam unde debitis? Ipsa quidem quod, ab delectus, incidunt error eveniet vero ullam veritatis sint magnam in tenetur? Modi quibusdam rem voluptates? Dolores, voluptate minus reiciendis optio ipsa dolore illum voluptatem, blanditiis non distinctio nulla quia sequi debitis ducimus saepe nemo dolorem voluptates inventore sed consequatur nobis aliquid, eius aliquam odit. Incidunt iusto maxime et quasi iure accusamus modi, quos facilis nulla atque magni nisi iste! Officiis odit suscipit, dolores autem aliquid labore eum sequi ducimus velit in animi repellat beatae dicta facilis vitae similique excepturi expedita qui at consequatur unde perferendis? Natus accusantium beatae itaque provident facere iusto! Ut id rem doloremque molestiae dolores officia totam sunt assumenda?",
supportedTechnologies: [
    frameWorkPicker("react", [{
        explanation: "explanation",
        code:`function MyFunction () {
        return "react"  
    }`},{
        explanation: "explanation",
        code:`function MyFunction () {
        return "react"
    }`}]),
    frameWorkPicker("vue", [{
        explanation:"lol",
        code:`function MyFunction () {
        return "vue"   
    }`}]),
    frameWorkPicker("angular", [{
        explanation:"lol",
        code:`function MyFunction () {
        return "angular"   
    }`}]),
    frameWorkPicker("backbone", [{
        explanation:"lol",
        code:`function MyFunction () {
        return "backbone"   
    }`}]),
]
},
]


function DefaultFunction() {
    return "";
}


export default DefaultFunction;