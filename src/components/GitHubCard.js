import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function MyGitHubCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.myface} />
            <Card.Body>
                <Card.Title>{props.myName}</Card.Title>
                <Card.Text>
                    {props.myBio}
                </Card.Text>
                <Card.Text>
                    <i>data pulled from {props.myURL}</i>
                </Card.Text>
                <Button variant="primary" href={props.myURL}>visit profile</Button>
            </Card.Body>
        </Card>
    );
}

export default MyGitHubCard;