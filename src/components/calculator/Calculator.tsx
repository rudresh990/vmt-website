"use client"
import { useState } from "react";
import CalculatorSummary from "./CalculatorSummary";
import { StepProjectType, StepComplexity,StepScale,StepTimeline } from "./CalculatorStep";
import { estimateCost } from "@/lib/calculator/pricing";

type calculatorData = {
    projectType?: "web" | "mobile" | "platform";
    complexity?: "simple" | "medium" | "complex";
    scale?: "mvp" | "growth" | "enterprise";
    timeline?: "flexible" | "standard" | "urgent";
}
export default function Calculator() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<calculatorData>({});
    const [result, setResult] = useState<{
        min: number;
        max: number;
    } | null>(null);

    const next = () => setStep((s) => s + 1);
    const prev = () => setStep((s) => s = s - 1);

    return (
        <section className="calc">
            <h1 className="calc-title">Estimate Your Project Cost</h1>
            <p className="calc-subtitle">
                Step {step} of 4
            </p>

            {step === 1 && (
                <StepProjectType
                    value={data.projectType}
                    onSelect={(value)=>{
                        setData({...data,projectType:value})
                        next();
                    }}
                />
            )}

            {step === 2 && (
                <StepComplexity
                    value={data.complexity}
                    onSelect={(value)=>{
                        setData({...data,complexity:value})
                        next();
                    }}
                />
            )}

            {step === 3 && (
                <StepScale
                    value ={data.scale}
                    onSelect = {(value) => {
                        setData({...data,scale:value})
                        next();
                    }}
                />
            )}

            {step === 4 && (
                <StepTimeline
                    value = {data.timeline}
                    onSelect = {(value)=>{
                        const finalData ={...data,timeline:value};
                        setData(finalData);
                        setResult(estimateCost(finalData));
                    }}
                />
            )}

            { result && (
                <CalculatorSummary min={result.min} max = {result.max}/>
            )}   
            {/* steps */}
            <div className="calc-steps">

            </div>

            {/* summary */}
            <div className="calc-summary">

            </div>
        </section>
    )
}