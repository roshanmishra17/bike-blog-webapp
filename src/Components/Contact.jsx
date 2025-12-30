import { useState } from "react"
import '..//CSS/Contact.css'

export default function Contact(){

    const[isHuman,setIsHuman] = useState(false)
    const[showPuzzle,setShowPuzzle] = useState(false)
    const[answer,setAnswer] = useState('')
    
    const correctAns = '24';

    function handleCheckboxClick(e){
        e.preventDefault();
        setShowPuzzle(true)
    }

    function verifyAns(){
        if(answer === correctAns){
            setIsHuman(true)
            setShowPuzzle(false);
        }else{
            alert('Oopsss! Try again 😅')
            setAnswer('');
        }
    }

    return(
        <section className="contact-section" id="contact">
            <h2 className="contact-title">Get in Touch</h2>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Reach out for collaborations, rides, or feedback!</p>
                    <p><b>📍</b> Mumbai, Maharashtra</p>
                    <p><b>📧</b> roshanbikeblog@gmail.com</p>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="4"></textarea>
                    </div>

                    <div className="form-check">
                        <input
                        type="checkbox"
                        id="humanCheck"
                        checked={isHuman}
                        onClick={handleCheckboxClick}
                        readOnly
                        />
                        <label htmlFor="humanCheck">I am a human</label>
                    </div>

                    <button type="submit" className="submit-btn" disabled={!isHuman}>
                        Send Message
                    </button>
                </form>
            </div>

            {showPuzzle && (
                <div className="puzzle">
                    <div className="puzzle-content">
                        <h3>Verify You’re Human 🧩</h3>
                        <p>What is (5×(5−(1÷5))?</p>
                        <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Enter your answer"
                        />
                        <div className="puzzle-buttons">
                        <button onClick={verifyAns}>Submit</button>
                        <button onClick={() => setShowPuzzle(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}