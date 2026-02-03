type CalculatorSummaryProps = {
    min: number;
    max: number;
}

export default function CalculatorSummary({ min, max }: CalculatorSummaryProps) {
    return (
        <div className="calc-summary">
            <h2>Estimated Project Cost</h2>

            <p className="calc-range">
                ₹{min.toLocaleString()} - ₹{max.toLocaleString()}
            </p>

            <p className="calc-disclaimer">
                This estimate is based on high-level inputs and is intended to provide
                directional guidance only. Final pricing may vary after detailed
                requirement analysis and scope definition.
            </p>
        </div>
    );
}