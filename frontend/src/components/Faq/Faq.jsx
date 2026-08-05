import { useState } from "react"
import "./Faq.css"

/* This is the FAQ section that will go at the bottom of Pricing.jsx and Contact.jsx. It use useState to track which question which question
index is currently open in state and show/hide that question's answer based on whether it matches the open index. One question will be open at a time. */

const faqData = [

    {
        question: "Will my whole team need training to use this?",
        answer: "No. If your team can fill out a form, they can build a brief. Most people are productive within their first session."
    },

    {
        question: "Can I try Brief.io on one real project before committing?",
        answer: "Yes. Build a full brief with your own project details before you ever create an account."
    },

    {
        question: "Does Brief.io replace the tools we already use, or add another one?",
        answer: "It replaces the step where briefs get rewritten three different ways. Your team can still use the tools they already have — Brief.io just gives you one clean source to work from."
    },

    {
        question: "How is this different from a shared doc or template?",
        answer: "Templates drift. Every project ends up with a slightly different version. Brief.io keeps the format consistent, every time, without anyone maintaining it by hand."
    },

    {
        question: "What if my team is small and we don't have a dedicated admin?",
        answer: "That's who this is built for. No steep learning curve, no admin required to keep it running."
    }

]

function Faq() {

    const [openIndex, setOpenIndex] = useState(null)

    function handleToggle(index) {

        if (openIndex === index) {

            setOpenIndex(null)

        } else {

            setOpenIndex(index)

        }

    }

    return (

        <section className="faq">

            <h2 className="faq-heading">Frequently
            <br />
            asked questions</h2>

            <div className="faq-list">

                {faqData.map((item, index) => (

                    <div className="faq-item" key={index}>

                        <button className="faq-question" onClick={() => handleToggle(index)}>

                            <i className={`fa-solid fa-chevron-right ${openIndex === index ? "faq-icon-open" : ""}`}></i>

                            <span>{item.question}</span>

                        </button>

                        {openIndex === index && (

                            <p className="faq-answer">{item.answer}</p>

                        )}

                    </div>

                ))}

            </div>

        </section>

    )

}

export default Faq