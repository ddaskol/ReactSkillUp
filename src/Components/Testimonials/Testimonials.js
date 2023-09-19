import React, { useState } from "react";

const Testimonials = () => {

    const arrTestimonials = [
        {
            name: "Jack", text: "Lorem ipsum set amet alfa tauris f1 team for london race winLorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win"
        },
        {
            name: "Anastasia", text: "Lorem ipsum set amet alfa tauris f1 team for london race winLorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win"
        },
        {
            name: "Anastasia", text: "Lorem ipsum set amet alfa tauris f1 team for london race winLorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win"
        },
        {
            name: "Anastasia", text: "Lorem ipsum set amet alfa tauris f1 team for london race winLorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win"
        },
        {
            name: "Anastasia", text: "Lorem ipsum set amet alfa tauris f1 team for london race winLorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win Lorem ipsum set amet alfa tauris f1 team for london race win"
        },
    ]

    const [newTestimonials, setNewTestimonials] = useState({
        name: "",
        text: "",
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name: e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text: e.target.value
        }))
    }
    console.log(newTestimonials)
    return (
        <>
            <h1 > Testimonials</h1>


            {
                arrTestimonials.map((item) => (
                    <div style={{
                        backgroundColor: "red",
                        padding: "10px"
                    }}>
                        <div> Name: {item.name}</div>
                        <div> Message: {item.text}</div>
                    </div>
                ))
            }

            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={newTestimonials.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <textarea
                        cols={30} rows={10}
                        placeholder="Your Message"
                        value={newTestimonials.text}
                        onChange={handleTextChange}
                    ></textarea>
                </div>
                <button> Leave a comment</button>
            </form>

        </>
    )
}

export default Testimonials