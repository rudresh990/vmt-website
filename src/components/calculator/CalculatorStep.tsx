type StepProps<T> = {
    value?: T;
    onSelect: (value: T) => void;
}

type StepWrapperProps = {
    id:string;
    title: string;
    helper?: string;
    children: React.ReactNode;
}

function StepWrapper({ id,title, helper, children }: StepWrapperProps) {
    return (
        <div className="calc-step">
            <h2  id = {id} className="calc-question">{title}</h2>

            {helper && (
                <p className="calc-helper">{helper}</p>
            )}

            <div className="calc-options" role="group" aria-labelledby={id}>
                {children}
            </div>
        </div>
    );
}

// step 1

export function StepProjectType({
    onSelect,
}: StepProps<"web" | "mobile" | "platform">) {
    return (
        <StepWrapper
            id="project-type-step"
            title="What type of project are you planning?"
            helper="This helps  us understand the overall structure and effort involved."
        >
            <button onClick={() => onSelect("web")}>Web App</button>
            <button onClick={() => onSelect("mobile")}>Mobile App</button>
            <button onClick={() => onSelect("platform")}>Platform / SaaS</button>
        </StepWrapper>
    );
}

// step 2

export function StepComplexity({
    onSelect,
}: StepProps<"simple" | "medium" | "complex">) {
    return (
        <StepWrapper
            id="complexity-step"
            title="How complex is the project?"
            helper="Complexity depends on features, integrations, and business logic involved."
        >
            <button onClick={() => onSelect("simple")}>Simple</button>
            <button onClick={() => onSelect("medium")}>Moderate</button>
            <button onClick={() => onSelect("complex")}>Complex</button>
        </StepWrapper>
    );
}

// step 3

export function StepScale({
    onSelect,
}: StepProps<"mvp" | "growth" | "enterprise">) {
    return (
        <StepWrapper
            id="project-scale-step"
            title="What scale are you targeting?"
            helper="Scale reflects expected users, data volume, and long-term growth needs."
        >


            <button onClick={() => onSelect("mvp")}>MVP</button>
            <button onClick={() => onSelect("growth")}>Growth</button>
            <button onClick={() => onSelect("enterprise")}>Enterprise</button>
        </StepWrapper>
    );
}

//step 4
export function StepTimeline({
    onSelect,
}: StepProps<"flexible" | "standard" | "urgent">) {
    return (
        <StepWrapper
            id="project-timeline-step"
            title="How urgent is the timeline?"
            helper="Shorter timelines may require additional resources or parallel development."
        >

            <button onClick={() => onSelect("flexible")}>Flexible</button>
            <button onClick={() => onSelect("standard")}>Standard</button>
            <button onClick={() => onSelect("urgent")}>Urgent</button>
        </StepWrapper>
    );
}
