import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const CardCharacter = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
		<div className="content">
			<h1 className="text-danger mx-4">Characters</h1>
			{/* <div className="cardContainer"> */}
				<CardGroup className="card-group-scroll">
					{store.people.map((item, id) => (
						<Card key={id} className="mx-4  mb-3 card  border border-secondary">
							<Card.Img className="w-auto" variant="top" src="https://via.placeholder.com/400x200.png" />
							<Card.Body>
								<Card.Title>{item.name}</Card.Title>
								<Card.Text>{`Gender: ${item.gender}`}</Card.Text>
								<Card.Text>{`Hair color: ${item.hair_color}`}</Card.Text>
								<Card.Text>{`Eye color: ${item.eye_color}`}</Card.Text>
								<Button
									className="mr-5"
									variant="btn btn-outline-danger float-left"
									onClick={() => history.push(`/singleCharacter/${id}`)}>
									More!
								</Button>
								<Button
									className="float-end"
									variant="outline-warning float-right"
									onClick={() => actions.favorites(item.name)}>
									<i className="far fa-heart" />
								</Button>
							</Card.Body>
						</Card>
					))}
				</CardGroup>
			{/* </div> */}
		</div>
	);
};

export default CardCharacter;