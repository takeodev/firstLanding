// React
import React from 'react'
import styled from 'styled-components'

// data from skills
const contenSkills = [
    [
        {
            title: 'Js',
            background: '#1e88e5',
            width: '60%'
        },
        {
            title: 'React',
            background: '#1565c0',
            width: '80%'
        },
        {
            title: 'Vue',
            background: '#1976d2',
            width: '70%'
        },
        {
            title: 'Angular',
            background: '#2196f3',
            width: '50%'
        },
        {
            title: 'Ionic',
            background: '#2196f3',
            width: '50%'
        }
    ],
    [
        {
            title: 'Html, Css',
            background: '#1e88e5',
            width: '60%'
        },
        {
            title: 'Golang',
            background: '#1976d2',
            width: '70%'
        },
        {
            title: 'Node Js',
            background: '#2196f3',
            width: '50%'
        },
        {
            title: 'Php (Yii2 framework)',
            background: '#1565c0',
            width: '80%'
        },
        {
            title: 'Blockchain solutions',
            background: '#1e88e5',
            width: '60%'
        }
    ]
]

/**
 * Funtional Component to render Skills section
 */
const Skills = () => (
    <Section>
        <h3 className="title-section">Skills</h3>
        <div className="div-skill">
            {contenSkills.map( (skill, index) => (
                <div className="div-skill-bar" key={index} >
                    {skill.map(({title, background, width}, ind) => {
                        const styleSkill = {
                            backgroundColor: background,
                            width: width
                        }
                        return (
                            <div key={ind}>
                                <span>{title}</span>
                                <div className="bar-wrap"><span className="bar-fill" style={styleSkill}></span></div>
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    </Section>
)
export default Skills

/**
 * Estyled component and component class
 */
const Section = styled.section`
    grid-area: skills;
    background: rgb(255,255,255);
    background: linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(230,230,230,1) 17%);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 0 4rem 0;

    .div-skill {
        display: flex;

        .div-skill-bar {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 0 5rem;
            width: 100%;

            > div {
                margin: .5rem 0;
            }
        }
    }

    .bar-wrap {
        background-color: rgb(182, 188, 226);
        border-radius: 10px;
        margin-bottom: 10px;
        height: 5px;
    }

    .bar-fill {
        border-radius: 10px;
        display: block;
        height: 5px;
        width: 0px;
    }

    @media screen and (max-width: 1200px){
        .div-skill .div-skill-bar {
            padding: 0 3rem;
        }
    }

    @media screen and (max-width: 1000px){
        .div-skill .div-skill-bar {
            padding: 0 1rem;
        }
    }

    @media screen and (max-width: 650px){
        .div-skill {
            flex-direction: column;
            margin-bottom: 1rem;
        }
        .div-skill .div-skill-bar {
            padding: 0;
        }
    }
`