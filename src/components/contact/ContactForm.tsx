"use client";

type ContactFormProps = {
    estimateContext?: Record<string, string> | null;
}
export default function ContactForm({ estimateContext }: ContactFormProps) {
    return (
        <form action="api/contact" method="post" className="contact-form">
            <label>Name:
                <input name="name" required />
            </label>

            <label>Email:
                <input type="email" name="email" required />
            </label>

            <label>Message
                <textarea name="message" rows={4} placeholder="Tell us about your goals or questions" />
            </label>

            {estimateContext && 
            Object.entries(estimateContext).map(([key, value])=>(
                <input type="hidden" key={key} name={key} value={value ?? ""} />
            ))
            }
            <button type="submit" className="btn btn-primary">
                Send message
            </button>
        </form>
    )
}