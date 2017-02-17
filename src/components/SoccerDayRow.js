import { PropTypes } from 'react'
import '../stylesheets/ui.scss'
import Sunny from 'react-icons/lib/ti/weather-sunny'
import Rainy from 'react-icons/lib/ti/weather-shower'
import Calendar from 'react-icons/lib/fa/calendar'

export const SoccerDayRow = ({location, date,
                                sunny, rainy}) => (
         <tr>
             <td>{(new Date(date)).getMonth()+1}/{(new Date(date)).getDate()}/{(new Date(date)).getFullYear()}</td>
             <td>{location}</td>
             <td>{(sunny) ? <Sunny/> : null}</td>
             <td>{(rainy) ? <Rainy/> : null}</td>
         </tr>
);

SoccerDayRow.propTypes = {
    location: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    sunny: PropTypes.bool,
    rainy: PropTypes.bool
};