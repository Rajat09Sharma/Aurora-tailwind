
const FAQS = [
    { question: "Can I use this in my project?", answer: "Yes, this is just a practice UI. Replace content and make it your own." },
    { question: "How do I switch dark mode?", answer: "Use the top-right toggle. Try tweaking colors and backgrounds." },
    { question: "What should I focus on?", answer: "Spacing, hierarchy, and consistent rounded/shadows across components." },
    { question: "How do I customize it?", answer: "Change fonts, accent gradients, and section structures to challenge yourself." },
]

export const Faq = () => {
    return (
        <>
            <div id="FAQ" className="mt-8 py-16 mx-5 md:mx-16 md:scroll-mt-28">
                <h2 className="font-bold text-2xl text-center md:text-4xl">FAQ</h2>
                <div className="mt-8 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:mt-14 ">
                    {FAQS.map((faq, index) => {
                        return (
                            <div key={index} className="border border-gray-300 rounded-xl bg-white py-8 px-6 space-y-2.5 md:mb-10 md:mx-5 dark:bg-slate-900 dark:border-gray-400">
                                <h3 className="font-medium text-lg">{faq.question}</h3>
                                <p className="text-gray-500 dark:text-gray-400 ">{faq.answer}</p>
                            </div>

                        )
                    })}
                </div>
            </div>
        </>
    )
}
