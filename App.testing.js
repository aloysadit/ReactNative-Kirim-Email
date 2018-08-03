import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon, Button, Text, Form, Title, Label } from 'native-base';
import axios from 'axios'

class App extends Component {
  state = {
    email: '',
    subject: '',
    messages: '',
  }

  kirimFunction() {
    var url = `http://66.96.238.51:3210/kirimEmail`;
    axios.post(url, {
      Email: this.state.email,
      Subject: this.state.subject,
      Messages: this.state.messages
    }).then((n) => {
      alert(n.data)
    }).catch((m) => { alert(m.data) })
  }

  render() {
    return (
      <Container>
        <Header>
          <Title style={{ fontSize: 15 }}>
            React Native <Icon name='heart' style={{ color: '#ff0000' }} />  Nodemailer
          </Title>
        </Header>

        <Content>

          <Form>
            <Item floatingLabel>
              <Label>
                To (email recipient)
              </Label>
              <Input onChangeText={(n) => { this.setState({ email: n }) }} />
            </Item>

            <Item floatingLabel>
              <Label>Email Subject</Label>
              <Input onChangeText={(n) => { this.setState({ subject: n }) }} />
            </Item>

            <Item floatingLabel>
              <Label> Messages </Label>
              <Input onChangeText={(n) => { this.setState({ messages: n }) }} />
            </Item>

            <Button block
              onPress={() => {
                this.kirimFunction()
              }}>
              <Icon name="mail" />
              <Text>
                SEND EMAIL
              </Text>
            </Button>
          </Form>


          <Text style={{ textAlign: 'center', fontSize: 15 }}>
            Email Will be sent from
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 15 }}>
            aloys168@gmail.com
          </Text>
        </Content>
      </Container>
    );
  }
}
export default App;