import React from 'react'
import './Educations.css'

function Educations() {
    return (
        <section className='educations mt-5' id='educations'>
            <div className="container">
                <div className="timeline-item bg " date-is="20-07-1990">
                    <h1>Hello, 'Im a single div responsive timeline without mediaQueries!</h1>
                    <p>
                        I'm speaking with myself, number one, because I have a very good brain and
                        I've said a lot of things. I write the best placeholder text, and I'm the
                        biggest developer on the web by far... While that's mock-ups and this is
                        politics, are they really so different? I think the only card she has is
                        the Lorem card.
                    </p>
                </div>
                <div className="timeline-item" date-is="20-07-1990">
                    <h1>Oeehhh, that's awesome.. Me too!</h1>
                    <p>
                        I'm speaking with myself, number one, because I have a very good brain and
                        I've said a lot of things. I write the best placeholder text, and I'm the
                        biggest developer on the web by far... While that's mock-ups and this is
                        politics, are they really so different? I think the only card she has is
                        the Lorem card.
                    </p>
                </div>
                <div className="timeline-item" date-is="20-07-1990">
                    <h1>I'm ::last-child so my border fades ^__^</h1>
                    <p>
                        I'm speaking with myself, number one, because I have a very good brain and
                        I've said a lot of things. I write the best placeholder text, and I'm the
                        biggest developer on the web by far... While that's mock-ups and this is
                        politics, are they really so different? I think the only card she has is
                        the Lorem card.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Educations