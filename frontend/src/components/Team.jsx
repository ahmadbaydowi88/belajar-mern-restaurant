import React from 'react';
import { data } from "../restApi.json";

const Team = () => {
    return (
        <section className='team' id='team'>
            <div className='container'>
                <div className='heading-section'>
                    <h1>OUR TEAM</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia mollitia ex quae. Obcaecati omnis vero quia quam magnam perferendis doloribus!
                    </p>
                </div>
                <div className='team_container'>
                    {
                        data[0].team.map((element)=>{
                            return (
                                <div className='card' key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.designation}</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Team;