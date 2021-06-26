import React from 'react'
import './styles/styles.css'


const MyFiles = () => {
    return(
        <div class="container">
            <DocCards/>
        </div>

    );
}

const DocCards = () => {
    return(
        <div class="card">
            <p>Summaries</p>
            <hr></hr>
            <h1>Assignment #</h1>
            <p>Date</p>
        </div>
    )
}

export default MyFiles