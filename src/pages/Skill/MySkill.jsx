import React from 'react'
import './skill.css'
import ListSkill from '../../components/Fragment/ListSkill'
import { SkillUtils } from '../../utils/DataObject'
import TitleSection from '../../components/Fragment/TitleSection'

function MySkill() {
    return (
        <section className='my-skill mb-2 ' id='my-skill'>
            <TitleSection title={'My Skill'} />
            <div className="row">
                <div className="col-lg-9 ">
                    <div className="card  p-2 p-sm-5 py-5">
                        <div className="row justify-content-start ">
                            {SkillUtils.map((item, index) => (
                                <ListSkill key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center p-3 order-first order-lg-last">
                    <div className="text-center text-lg-start" data-aos="fade-up">
                        <h2 >Tech Stack⚙️ & Tools🛠️</h2>
                        <p className='text-light ' >There are some tech stack and tools
                            that i've learned and experienced</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MySkill