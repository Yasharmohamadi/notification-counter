import "./Menu.css";
import React from "react";

export default class Menu extends React.Component {
	constructor() {
		super();

		this.state = {
			nofifications: [
				"New",
				"New",
				"New",
				"New",
				"New",
				"New",
				"New",
				"New",
				"New",
				"New",
			],
		};
	}

	render() {
		//////////////////////////////////////  1  /////////////////////////////////////////
		// if (this.state.nofifications.length === 0) {
		// 	console.log("خبری نیست");
		// 	return (
		// 		<div className="container">
		// 			<h1 className="title">React</h1>
		// 			<div className="news">
		// 				<h4 className="news__text">News</h4>
		// 			</div>
		// 		</div>
		// 	);
		// } else {
		// 	console.log("خبر داریم!");
		// 	return (
		// 		<div className="container">
		// 			<h1 className="title">React</h1>
		// 			<div className="news">
		// 				<h4 className="news__text">News</h4>
		// 				<p className="news__number">{this.state.nofifications.length}</p>
		// 			</div>
		// 		</div>
		// 	);
		// }
		//////////////////////////////////////////  2  ///////////////////////////////////
		// let newsCount = null
		// if (this.state.nofifications.length !== 0) {
		//     newsCount = <p className="news__number">{this.state.nofifications.length}</p>
		// }

		// return (
		//     <div className="container">
		//         <h1 className="title">React</h1>
		//         <div className="news">
		//             <h4 className="news__text">News</h4>
		//             {newsCount}
		//         </div>
		//     </div>
		// );
		/////////////////////////////////////////  3  ///////////////////////////////////
		// return (
		// 	<div className="container">
		// 		<h1 className="title">React</h1>
		// 		<div className="news">
		// 			<h4 className="news__text">News</h4>
		// 			{this.state.nofifications.length !== 0 && (
		// 				<p className="news__number">{this.state.nofifications.length}</p>
		// 			)}
		// 		</div>
		// 	</div>
		// );
		////////////////////////////////////////  4  /////////////////////////////////////
		return (
			<div className="container">
				<h1 className="title">React</h1>
				<div className="news">
					<h4 className="news__text">News</h4>
					{this.state.nofifications.length !== 0 && (
						<p className="news__number">{this.state.nofifications.length}</p>
					)}
				</div>
			</div>
		);
	}
}
