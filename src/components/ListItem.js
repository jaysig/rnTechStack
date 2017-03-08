import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class ListItem extends Component {

  render() {
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
 titleStyle: {
   fontSize: 18,
   paddingLeft: 15
 }
};
// function mapStateToProps(state) {
//  return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, actions)(Header)
export default ListItem;
