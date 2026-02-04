import { forwardRef } from "react";
import Link from "next/link";
type CalculatorSummaryProps = {
    min: number;
    max: number;
}

const Calculatorsummary = forwardRef<HTMLDivElement, CalculatorSummaryProps>(
    function CalculatorSummary({ min, max }, ref) {
        return (
            <div className="calc-summary" ref={ref} tabIndex={-1}>
                <h2>Estimated Project Cost</h2>

                <p className="calc-range">
                    ₹{min.toLocaleString()} - ₹{max.toLocaleString()}
                </p>

                <p className="calc-disclaimer">
                    This estimate is based on high-level inputs and is intended to provide
                    directional guidance only. Final pricing may vary after detailed
                    requirement analysis and scope definition.
                </p>
                <Link className="btn btn-primary estimate-cta-link" href="/contact">
                    Discuss this estimate
                </Link>

                <p className="calc-note">
                    No commitment. We'll help you validate and refine this estimate.
                </p>

            </div>
        );
    });

export default Calculatorsummary;