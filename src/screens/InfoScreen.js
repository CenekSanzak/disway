import React from "react";
import { Container, Content, Card, CardItem, Text, Button } from "native-base";
import { connect } from "react-redux";

class InfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "",
  });

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            
            <CardItem>
              <Text>{this.props.places[this.props.navigation.getParam('id')].renderName}</Text>
            </CardItem>
            <CardItem>
              <Text>{this.props.places[this.props.navigation.getParam('id')].desc}</Text>
            </CardItem>
            
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  places: state.places
});
export default connect(mapStateToProps)(InfoScreen);
