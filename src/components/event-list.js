import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import {getEventList} from '../actions/event-list'
import {Redirect} from 'react-router-dom';

export class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null,
        }
    }
    componentDidMount() {
        this.setState({
            redirect: null
        })
        this.props.dispatch(getEventList());
    }

    goToEvent(e) {
        e.preventDefault();
        console.log('clicked');
        let eventId = e.currentTarget.value;
        return this.setState({
            redirect: <Redirect to={'/dashboard/'+eventId} />
        })
    }

    render() {
        let eventList = this.props.eventList.map((event, index) => {
            return (
            <ul key={index.toString() + 'ul'}>
                {this.state.redirect}
                <li className='event-name' key={index.toString()+'name'}>{event.name}</li>
                <li className='event-date' key={index.toString()+'date'}>{event.dates.start.localDate}</li>
                <img className='event-img' src={event.images[0].url} alt='event artist' />
                <li className='event-venue'key={index.toString()+'venue'}>{event.venues[0].name}</li>
                <li className='event-rsvp-count' key={index.toString()+'rsvp'}>RSVPs:  {event.rsvpCount}</li>
                <button type='submit' value={event.id} onClick={(e) => this.goToEvent(e)}>See more info</button>
            </ul>
            )
        })

        return (
            <div>
                {eventList}
    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventList: state.event.eventList,
        loading: state.event.loading,

    };
}

export default requiresLogin()(connect(mapStateToProps)(EventList));