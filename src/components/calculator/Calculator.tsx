"use client"
import { useState, useRef, useEffect } from "react";
import CalculatorSummary from "./CalculatorSummary";
import { StepProjectType, StepComplexity, StepScale, StepTimeline } from "./CalculatorStep";
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

    const next = () => setStep((s) => { console.log(s); return s + 1});
    const prev = () => setStep((s) => s = s - 1);

    const showbackbutton = step > 1 && !result;



    //result scroll view 

    const summaryRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (result && summaryRef.current) {
            summaryRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            summaryRef.current.focus();
        }
    }, [result])

    return (
        <section className="calc">
            <h1 className="calc-title">Estimate Your Project Cost</h1>
            <p className="calc-subtitle">
                {step<=4 && `Step ${step} of 4`}
            </p>

            {!result && <>
                {showbackbutton && <button aria-label="Go to previous step"
                    type="button"
                    onClick={prev}
                    className="calc-back"
                >← Back</button>}

                {step === 1 && (
                    <StepProjectType
                        value={data.projectType}
                        onSelect={(value) => {
                            setData({ ...data, projectType: value })
                            next();
                        }}
                    />
                )}

                {step === 2 && (
                    <StepComplexity
                        value={data.complexity}
                        onSelect={(value) => {
                            setData({ ...data, complexity: value })
                            next();
                        }}
                    />
                )}

                {step === 3 && (
                    <StepScale
                        value={data.scale}
                        onSelect={(value) => {
                            setData({ ...data, scale: value })
                            next();
                        }}
                    />
                )}

                {step === 4 && (
                    <StepTimeline
                        value={data.timeline}
                        onSelect={(value) => {
                            const finalData = { ...data, timeline: value };
                            setData(finalData);
                            setResult(estimateCost(finalData));
                            next();
                        }}
                    />
                )}
            </>}


            {result && (
                <CalculatorSummary min={result.min} max={result.max} ref={summaryRef} />
            )}
        </section>
    )
}