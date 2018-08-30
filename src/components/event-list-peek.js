import React from 'react';
import { connect } from 'react-redux';

// import {Redirect} from 'react-router-dom';

export class EventListPeek extends React.Component {

    render() {
        const {loading, error, eventListPeek} = this.props;
        console.log(eventListPeek);
        if (loading) {
            return <div>Loading event list...</div>
        }

        if (error) {
            return <div>{this.props.error}</div>
        }

        if (eventListPeek) {
            return (eventListPeek.map((event, index) => {
               
               return <ul key={index.toString() + 'ul'}>
                    {this.state.redirect}
                    <li className='event-name' key={index.toString()+'name'}>{event.name}</li>
                    <li className='event-date' key={index.toString()+'date'}>{event.dates.start.localDate}</li>
                    <img className='event-img' src={event.smallImage} width="200px" alt='event artist' />
                    {/* <li className='event-venue'key={index.toString()+'venue'}>{event.venues[0].name}</li> */}
                    {/* <li className='event-rsvp-count' key={index.toString()+'rsvp'}>RSVPs:  {event.rsvpCount}</li> */}
                    <button type='submit' value={event.id} onClick={(e) => this.goToEvent(e)}>See more info</button>
                </ul>

            }))

        }
        return null
        }
    }

const mapStateToProps = state => {
    return {
        eventListPeek: state.event.eventListPeek,
        loading: state.event.loading,
        error: state.event.error
    };
}


export default connect(mapStateToProps)(EventListPeek);