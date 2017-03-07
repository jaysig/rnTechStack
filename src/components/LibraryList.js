import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
// import * as actions from '../../actions';

class LibraryList extends Component {

  render() {
    return (
      <View>
        <Text>This is a feature</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
 return { authenticated: state.auth.authenticated };
};
// mapStateToProps, actions
export default connect(mapStateToProps)(LibraryList);
// export default LibraryList;
