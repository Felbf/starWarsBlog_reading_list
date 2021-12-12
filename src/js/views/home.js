import React, { useContext, useState, useEffect } from "react";
import CardCharacter from "../component/CardCharacter.js";
import CardPlanet from "../component/CardPlanet.js";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadingData();
	}, []);

	return (
		<>
		
			<CardCharacter />
			<CardPlanet />
		</>
	);
};


