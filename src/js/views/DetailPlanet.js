import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export function DetailPlanet() {
	const { store, actions } = useContext(Context);
	const { detailsId } = useParams();

	return (
		<>
			{store.planets.map((planet, id) => {
				if (id === parseInt(detailsId)) {
					return (
						<div className="container">
							<div key={id}>
								<div className="row my-5">
									<div className="col-12 col-sm-6">
										<img className="img-detail" src="https://via.placeholder.com/700x450.png" />
									</div>
									<div className="col-12 col-sm-6">
										<h1>{planet.name}</h1>
										<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus, mauris nec malesuada
										commodo, erat ligula blandit sem, ac sagittis metus dolor vel leo. Maecenas mattis nibh vel
										tempor ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse
										potenti. Aliquam eget libero porttitor metus commodo ullamcorper id sit amet libero. Aliquam
										mollis, ligula id interdum lacinia, nulla orci consectetur quam, eget porttitor neque nisi et
										magna. Etiam sed suscipit urna, id viverra risus. Sed blandit id magna dignissim bibendum.
										Praesent sit amet ultricies neque, sed commodo lorem.
									</p>
									</div>
								</div>
								<div className="row text-center border-top border-danger pt-3">
									<div className="col-2 text-danger">
										<p className="mb-2 font-weight-bold">
											Rotation period:
										</p>
										<span>{planet.rotation_period}</span>
									</div>
									<div className="col-2 text-danger">
										<p className="mb-2 font-weight-bold">
											<strong>Gravity:</strong>
										</p>
										<span>{planet.gravity}</span>
									</div>
									<div className="col-2 text-danger">
										<p className="mb-2 font-weight-bold">
											<strong>Terrain:</strong>
										</p>
										<span>{planet.terrain}</span>
									</div>
									<div className="col-2 text-danger">
										<p className="mb-2 font-weight-bold">
											<strong>Population:</strong>
										</p>
										<span>{planet.population}</span>
									</div>
									<div className="col-2 text-danger">
										<p className="mb-2 font-weight-bold">
											<strong>Climate:</strong>
										</p>
										<span>{planet.climate}</span>
									</div>
									<div className="col-2 text-danger">
										<p className="mb-2 font-weight-bold">
											<strong>Surface water:</strong>
										</p>
										<span>{planet.surface_water}</span>
									</div>
								</div>
							</div>
						</div>
					);
				}
			})}
		</>
	);
}
