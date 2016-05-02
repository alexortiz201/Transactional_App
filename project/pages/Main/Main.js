// import './main.less';

import React, { PropTypes } from 'react';
import { connect }  from 'react-redux';

class Main extends React.Component {
	componentWillMount() {}

	render() {
		return (
			<section className="main">
				{`HELLO WORLD`/*this.props.children*/}
			</section>
		);
	}
}

export default connect((state) => ({
}), {
})(Main);
