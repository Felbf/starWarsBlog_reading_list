import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export function DetailCharacter() {
	const { store, actions } = useContext(Context);
	const { detailsId } = useParams();
	return (
		<div>
			{store.people.map((people, id) => {
				if (id === parseInt(detailsId)) {
					return (
						<div className="container">
							<div className="row my-5">
								<div className="col-12 col-sm-6">
									<img className="img-detail" src="https://via.placeholder.com/500x300" />
								</div>
								<div className="col-12 col-sm-6">
									<h1>{people.name}</h1>
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
									<p classNmae="mb-2 font-weight-bold">Name:</p>
									<span>{people.name}</span>
								</div>
								<div className="col-2 text-danger">
									<p classNmae="mb-2 font-weight-bold">Birth Year: </p>
									<span>{people.birth_year}</span>
								</div>
								<div className="col-2 text-danger">
									<p classNmae="mb-2 font-weight-bold">Gender: </p>
									<span>{people.gender}</span>
								</div>
								<div className="col-2 text-danger">
									<p classNmae="mb-2 font-weight-bold">Height: </p>
									<span>{people.height}</span>
								</div>
								<div className="col-2 text-danger">
									<p classNmae="mb-2 font-weight-bold">Skin Color: </p>
									<span>{people.skin_color}</span>
								</div>
								<div className="col-2 text-danger">
									<p classNmae="mb-2 font-weight-bold">Eye Color: </p>
									<span>{people.eye_color}</span>
								</div>
							</div>
						</div>
							// <div className="container" key={id}>
							// 	<div className="row my-5">
							// 		<div className="col-12 col-sm-6">
							// 			<img src="https://via.placeholder.com/700x450.png" />
							// 		</div>
							// 		<div className="col-12 col-sm-6">
							// 			<h1>{character.name}</h1>
							// 			<p className="m-3">
							// 				{
							// 					"Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis, ultrices montes volutpat bibendum fermentum pretium eros maecenas, sollicitudin vitae erat senectus elementum justo himenaeos. Quam feugiat eu dictum montes consequat duis viverra aliquam nascetur mollis tortor, mattis suspendisse urna nulla vestibulum nibh habitant velit pellentesque interdum massa, faucibus sem praesent magna tincidunt eros penatibus at auctor euismod. Varius molestie leo venenatis vivamus dis congue blandit scelerisque senectus, nibh dui nascetur pharetra habitant est donec sociis nisl primis, bibendum porta ac tellus aliquam felis imperdiet dignissim.Leo potenti sociosqu cubilia dignissim penatibus est quis auctor, diam lacus proin dui dapibus fermentum at ullamcorper eu, accumsan sodales tortor metus elementum feugiat eget. Cursus nullam augue primis est molestie lectus aenean, montes lacus placerat diam senectus pharetra ad luctus, urna torquent fermentum velit donec ut. Mus augue risus lobortis aliquet viverra accumsan senectus, pharetra malesuada diam suscipit lacus hendrerit arcu pulvinar, congue nibh nullam dictum sem turpis."
							// 				}
							// 			</p>
							// 		</div>
							// 	</div>
							// 	<div className="row text-center border-top border-danger pt-3" />
							// 	<div className="col-2 text-danger">
							// 			<p className="mb-2 font-weight-bold">
							// 				Name:
							// 			</p>
							// 			<span className="text-danger">{character.name}</span>
							// 		<div className="text-center m-3">
							// 			<p className="text-danger">
							// 				<strong>Birth Year</strong>
							// 			</p>
							// 			<p className="text-danger">{character.birth_year}</p>
							// 		</div>
							// 		<div className="text-center m-3">
							// 			<p className="text-danger">
							// 				<strong>Gender</strong>
							// 			</p>
							// 			<p className="text-danger">{character.gender}</p>
							// 		</div>
							// 		<div className="text-center m-3">
							// 			<p className="text-danger">
							// 				<strong>Height</strong>
							// 			</p>
							// 			<p className="text-danger">{character.height}</p>
							// 		</div>
							// 		<div className="text-center m-3">
							// 			<p className="text-danger">
							// 				<strong>Skin Color</strong>
							// 			</p>
							// 			<p className="text-danger">{character.skin_color}</p>
							// 		</div>
							// 		<div className="text-center m-3">
							// 			<p className="text-danger">
							// 				<strong>Eye Color</strong>
							// 			</p>
							// 			<p className="text-danger">{character.eye_color}</p>
							// 		</div>
							// 	</div>
							// </div>
					);
				}
			})}
		</div>
	);
}
