import React, { useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const CardPlanet = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	return (
        <div className="content">
            <h1 className="text-danger mx-4">Planets</h1>
                <CardGroup className="card-group-scroll">
                    {store.planets.map((item, id) => (
                        <Card key={id} className="mx-4  mb-3 card  border border-secondary">
                            <Card.Img variant="top" src="https://via.placeholder.com/400x200.png" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{`Population: ${item.population}`}</Card.Text>
                                <Card.Text>{`Terrain: ${item.terrain}`}</Card.Text>
                                <Button
                                    className="mr-5"
                                    variant="btn btn-outline-danger float-left"
                                    onClick={() => history.push(`/singlePlanet/${id}`)}>
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
        </div>
	);
};

export default CardPlanet;
