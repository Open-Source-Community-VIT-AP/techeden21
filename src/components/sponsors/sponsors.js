import React from 'react'
import SectionHeader from '../sections/partials/SectionHeader';
import Card_container from './teams/Card_container'
const sectionHeader = {
  title: 'Sponsors',
  
};


function sponsors() {
    return (
        <div>

            <br/>
            <br/>
            <SectionHeader data={sectionHeader} className="center-content mt10" />
            <Card_container/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default sponsors
