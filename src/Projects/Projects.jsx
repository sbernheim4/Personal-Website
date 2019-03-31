import React, { Component } from "react";
import './projects.scss';


class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	render() {
		return (
			<section className="projects">
				<p>I've worked on some pretty fun side projects, each helping me explore a new framework, technology, or platform.</p>

				<div className="projects__container">

                    <div className="project project--one">
                        <h2>Budgeteer</h2>
                    </div>
                    <div className="project project--two">
                        <h2>Weatherterm</h2>
                    </div>
                    <div className="project project--three">
                        <h2>M5 Systems</h2>
                    </div>
                    <div className="project project--four">
                        <h2>Kinetic Global</h2>
                    </div>
				</div>
			</section>
		);
	}
}

export default Projects;
