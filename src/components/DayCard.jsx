import PropTypes from "prop-types";
import styled from "styled-components";
import EventItem from "./EventItem";

const DayCardContainer = styled.div`
    background-color: #d7b377;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
    color: #4b3832;
`;

function DayCard({ day, events }) {
    return (
        <DayCardContainer>
            <h2>{day}</h2>
            <div className="events-list">
                {events.length > 0 ? (
                    events.map((event, index) => (
                        <EventItem 
                            key={index} 
                            name={event.name} 
                            time={event.time} 
                            location={event.location} 
                        />
                    ))
                ) : (
                    <p>Sem eventos</p>
                )}
            </div>
        </DayCardContainer>
    );
}

DayCard.propTypes = {
    day: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default DayCard;
