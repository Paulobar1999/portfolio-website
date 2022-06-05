import React from "react";
import{VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import "../App.css";

function Experience() {
    return (
    <div className="experience" >

        <VerticalTimeline 
        lineColor='#000' 
        
        >


          <VerticalTimelineElement 
          contentStyle={{ background: '#FFF', color: '#000' }}
          contentArrowStyle={{ borderRight: '8px solid  rgb(f, f, f)' }}
          className="vertical-timeline-element--education" 
          date="Spring 2022"
          //iconStyle={{ background: '#0C2340', color: '#F15A22' }}
          iconStyle={{ background: '#000', color: '#fff'}}
          icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Texas at San Antonio</h4>
            <p>
            Graduated with honors from UTSA!
            </p>
          </VerticalTimelineElement>





          <VerticalTimelineElement 
          contentStyle={{ background: '#FFF', color: '#000' }}
          contentArrowStyle={{ borderRight: '8px solid  rgb(f, f, f)' }}
          className="vertical-timeline-element--work" 
          date="Feb 2022 - May 2022"
          //iconStyle={{ background: '#0C2340', color: '#F15A22' }}
          iconStyle={{ background: '#000', color: '#fff'}}

          icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Tutor of Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Texas at San Antonio</h4>
            <p>
            Worked to assist in learning and understanding of computer science concepts in a higher education environment.
            My work consisted of one on one talks with students, often times going over code, explaining algorithms, and data structures.
            </p>
          </VerticalTimelineElement>






          <VerticalTimelineElement 
          contentStyle={{ background: '#FFF', color: '#000' }}
          contentArrowStyle={{ borderRight: '8px solid  rgb(f, f, f)' }}
          className="vertical-timeline-element--work" 
          date="Jun 2021 - Aug 2021"
          //iconStyle={{ background: '#01807e', color: '#fff' }}
          iconStyle={{ background: '#000', color: '#fff'}}

          icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Administrative Professional 2</h3>
            <h4 className="vertical-timeline-element-subtitle">Booz Allen Hamilton</h4>
            <p>
            Tasked with modernizing flight line operations, 
            our team developed an internal product utilizing advanced computer vision, 
            Unity simulations, and data analytics. While working at Booz Allen involved rapid agile development, 
            it also involved consulting and public speaking, both of which helped me develop a client focused work ethic.

            </p>
          </VerticalTimelineElement>







          <VerticalTimelineElement           
          contentStyle={{ background: '#FFF', color: '#000' }}
          contentArrowStyle={{ borderRight: '8px solid  rgb(f, f, f)' }}
          className="vertical-timeline-element--work" 
          date="Jul 2018 - Jul 2019"
          //iconStyle={{ background: '#e61031', color: '#fff'}}
          iconStyle={{ background: '#000', color: '#fff'}}
          icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Tech Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Staples</h4>
            <p>
            Responsible for a wide array of hardware and operating system repair as well as educating
            customers on best practices to keep their devices secure. Working at Staples introduced
            me to a population of people who aren't tech savvy, one of my responsibilities was to
            explain complicated computer topics in a way that would resonate with them. 
            </p>
          </VerticalTimelineElement>









          <VerticalTimelineElement 
          contentStyle={{ background: '#FFF', color: '#000' }}
          contentArrowStyle={{ borderRight: '8px solid  rgb(f, f, f)' }}
          className="vertical-timeline-element--work" 
          date="Jan 2016 - Oct 2016"
          //iconStyle={{ background: '#FF770F', color: '#fff' }}
          iconStyle={{ background: '#000', color: '#fff'}}
          icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Restaurant Crew Member</h3>
            <h4 className="vertical-timeline-element-subtitle">Whataburger</h4>
            <p>
            Responsible for a wide array of hardware and operating system repair as well as educating
            customers on best practices to keep their devices secure. Working at Staples introduced
            me to a population of people who aren't tech savvy, one of my responsibilities was to
            explain complicated computer topics in a way that would resonate with them. 

            </p>
          </VerticalTimelineElement>








        </VerticalTimeline>

    </div>);
  }
  export default Experience;
  