type StepProps<T> = {
    value?: T;
    onSelect: (value: T) => void;
}

// step 1

export function StepProjectType({
    onSelect,
}: StepProps<"web" | "mobile" | "platform">) {
    return (
        <div>
            <h2>What type of project is this?</h2>
            <button onClick={() => onSelect("web")}>Web App</button>
            <button onClick={() => onSelect("mobile")}>Mobile App</button>
            <button onClick={() => onSelect("platform")}>Platform / SaaS</button>
        </div>
    );
}

// step 2

export function StepComplexity({
    onSelect,
}: StepProps<"simple" | "medium" | "complex">) {
    return (
        <div>
            <h2>How complex is the project?</h2>

            <button onClick={() => onSelect("simple")}>Simple</button>
            <button onClick={() => onSelect("medium")}>Moderate</button>
            <button onClick={() => onSelect("complex")}>Complex</button>
        </div>
    );
}

// step 3

export function StepScale({
    onSelect,
}: StepProps<"mvp" | "growth" | "enterprise">) {
    return (
        <div>
            <h2>What scale are you targeting?</h2>

            <button onClick={() => onSelect("mvp")}>MVP</button>
            <button onClick={() => onSelect("growth")}>Growth</button>
            <button onClick={() => onSelect("enterprise")}>Enterprise</button>
        </div>
    );
}

//step 4
export function StepTimeline({
    onSelect,
}: StepProps<"flexible" | "standard" | "urgent">) {
    return (
        <div>
            <h2>How urgent is the timeline?</h2>

            <button onClick={() => onSelect("flexible")}>Flexible</button>
            <button onClick={() => onSelect("standard")}>Standard</button>
            <button onClick={() => onSelect("urgent")}>Urgent</button>
        </div>
    );
}
