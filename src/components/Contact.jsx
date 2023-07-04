import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <main>
                <h1>Contact Us</h1>

                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" required placeholder="ABC" />
                    </div>

                    <div>
                        <label htmlFor="name">Email</label>
                        <input type="email" required placeholder="@xyz" />
                    </div>

                    <div>
                        <label htmlFor="name">Email</label>
                        <input type="text" required placeholder="Tell us about your query" />
                    </div>
                    <button type="submit">send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact