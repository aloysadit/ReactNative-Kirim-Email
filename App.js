import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, Button, Text, Form, Title, Label } from 'native-base';
import axios from 'axios'

class App extends Component {
  state = {
    email: '',
    subject: '',
    messages: '',
  }

  kirim() {
    var url = `http://192.168.1.32:3210/dataEmail`;
    axios.post(url, {
      Email: this.state.email,
      Judul: this.state.subject,
      Isi: this.state.messages
    }).then((x) => {
      alert(x.data)
    }).catch((y) => { alert(y.data) })
  }

  render() {

    return (
      <Container>
        <Header>
          <Title style={{ fontSize: 20 }}>React Native <Icon name='heart' style={{ color: '#ff0000' }} /> Nodemailer</Title>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label> To (email recipient) </Label><Input onChangeText={(x) => { this.setState({ email: x }) }} />
            </Item>
            <Item floatingLabel>
              <Label> Email Subject </Label><Input onChangeText={(x) => { this.setState({ subject: x }) }} />
            </Item>
            <Item floatingLabel>
              <Label> Messages </Label><Input onChangeText={(x) => { this.setState({ messages: x }) }} />
            </Item>
            <Text>{"\n"}</Text>
            <Button block
              onPress={() => { this.kirim() }}>
              <Icon name="mail" />
              <Text>
                SEND EMAIL
              </Text>
            </Button>
          </Form>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            {"\n"}
            Email Will be sent from
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            yeo.region3@gmail.com
          </Text>
        </Content>
      </Container>
    );
  }
}
export default App;