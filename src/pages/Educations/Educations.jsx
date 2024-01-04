import React from 'react'
import './Educations.css'
import EducationList from '../../components/Fragment/EducationList'
import { AwardsUtils, EducationUtils } from '../../utils/DataObject'
import { Mortarboard, TrophyFill } from 'react-bootstrap-icons'
import EducationTitle from '../../components/Fragment/EducationTitle'
import TitleSection from '../../components/Fragment/TitleSection'

function Educations() {
    return (
        <section className='educations ' id='educations'>
            <TitleSection title={'Educations'} />
            <div className="row">
                <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center p-3 ">
                    <div className="text-center text-lg-start" data-aos="fade-right">
                        <h2 >Educations🎓 & Awards🏆</h2>
                        <p className='text-light ' >There are some formal education &
                            awards that i've reached below</p>
                    </div>
                </div>
                <div className="col-lg-9" data-aos="fade-left">
                    <div className=" education-list rounded-3 p-2 p-sm-5 py-5">
                        <div className="row row-cols-md-2 row-cols-1">
                            <div className="col">

                                <div className="container">
                                    <EducationTitle title="EDUCATIONS" icon={<Mortarboard />} />
                                    {EducationUtils.map((item, index) => (
                                        <EducationList title={item.title} subtitle={item.subtitle} date={item.date} key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className="col">
                                <div className="container mt-4 mt-md-0">
                                    <EducationTitle title={'AWARDS'} icon={<TrophyFill />} />
                                    {AwardsUtils.map((item, index) => (
                                        <EducationList title={item.title} subtitle={item.subtitle} date={item.date} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </section>
    )
}

export default Educations