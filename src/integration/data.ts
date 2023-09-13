import data from './data.json'

function frameWorkPicker(name: string | "react" | "next"
    , explanation: string) {
    const specificObject = data.find(e => e.name === name);
    return { ...specificObject,explanation }
}

export const technologies = [
    {
        name: 'redux',
        icon: "bx:bxl-redux",
        content: "Lorem",
        supportedTechnologies: [
            frameWorkPicker("react" , "Lorem Ipsum"),
            frameWorkPicker("vue" , "Lorem Ipsum"),
            frameWorkPicker("angular" , "Lorem Ipsum"),
            frameWorkPicker("next" , "Lorem Ipsum"),
            frameWorkPicker("astro" , "Lorem Ipsum"),
            frameWorkPicker("backbone" , "Lorem Ipsum"),
        ]
    }
]


function DefaultFunction() {
    return "";
}


export default DefaultFunction;