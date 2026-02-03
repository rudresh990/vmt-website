type EstimateInput ={
    projectType?:string;
    complexity?:string;
    scale?:string;
    timeline?:string;
}

export function estimateCost (input:EstimateInput){
    let base = 0;

    // project type 
    if(input.projectType === "web") base = 400000;
    if(input.projectType === "mobile") base = 600000;
    if(input.projectType === "platform") base = 900000;

    //complexity
    if(input.complexity === "medium") base *= 1.4;
    if(input.complexity === "complex") base *=1.8;

    //scale
    if(input.scale === "growth") base *= 1.3;
    if(input.scale === "enterprise") base *=1.6;

    //timeline
    if(input.timeline === "urgent") base *=1.25;

    return{
        min: Math.round(base* 0.85),
        max: Math.round(base * 1.15),
    }
}