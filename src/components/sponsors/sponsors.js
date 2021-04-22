import React from 'react'
import SectionHeader from '../sections/partials/SectionHeader';
import Card_container from './teams/Card_container'
import PlatinumSponsors from './teams/PlatinumSponsors'
import KnowledgePartner from './teams/KnowledgePartner'
import CodingPartner from './teams/CodingPartner'
const sectionHeader = {
  title: 'Our Sponsors',
  
};
const platinumSponsorsheading = {
  title: 'Platinum Sponsors',
  
};
const KnowledgePartnerheading = {
  title: 'Knowledge Partner',
  
};
const CodingPartnerheading = {
  title: 'Coding Partner',
  
};
const HackingPartnersheading = {
  title: 'Hacking Partners',
  
};


function sponsors() {
    return (
        <div>

            <br/>
            <br/>
            <SectionHeader data={sectionHeader} className="center-content mt10" />
            <SectionHeader data={platinumSponsorsheading} className="center-content mt10" />
            <PlatinumSponsors/>
            <br/>
            <br/>
            <SectionHeader data={KnowledgePartnerheading} className="center-content mt10" />
            <KnowledgePartner/>
            <br/>
            <br/>
     
            <SectionHeader data={CodingPartnerheading} className="center-content mt10" />
            <CodingPartner/>
            <br/>
            <br/>
            <SectionHeader data={HackingPartnersheading} className="center-content mt10" />
            
            <Card_container/>
            <br/>
            <br/>
        </div>
    )
}

export default sponsors
