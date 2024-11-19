import PropTypes from "prop-types";
import styled from "styled-components";

const EventItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    border-bottom: 1px solid #4b3832;

    .event-details {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
        }
    }

    .event-location {
        font-size: 0.9rem;
        color: #6b4f4b;
        margin-top: 0.5rem;

        @media (max-width: 768px) {
            margin-top: 0.25rem;
        }
    }
`;

function EventItem({ name, time, location = "Local não informado" }) { // Parâmetro padrão para location
    return (
        <EventItemContainer>
            <div className="event-details">
                <span>{name}</span>
                <span>{time}</span>
            </div>
            <div className="event-location">{location}</div>
        </EventItemContainer>
    );
}

EventItem.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string,
};

export default EventItem;
