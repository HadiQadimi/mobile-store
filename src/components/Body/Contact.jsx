
import React, { Component } from 'react';
import {Container,Form, Button,Col,Row} from "react-bootstrap";

export class Contact extends Component {
  constructor(){
    super();
    this.state={
      firstname:"",
      mobile   :"",
      Email    :"",
      agree    : false,
      message  :"",
     
    }
  }
  handleinputchange=event =>{
    
     const value= event.target.type === "checkbox" ? 
     event.target.checked : event.target.value;
    
    const name=event.target.name;
    this.setState({
      [name]:value
    });

  }
  handlesubmit= event =>{
    console.log(this.state);
    event.preventDefault();

  }
  render() {
    document.title="تماس با ما";
    return(
      <div className="contact">
          <fragment>
              <Container>
              <h2>فرم تماس باما </h2>
              <hr></hr>
              <Form onSubmit={this.handlesubmit}>
    <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>نام و نام خانوادگی</Form.Label>
      <Form.Control type="text" name="firstname" placeholder="نام خود را وارد کنید" 
       value={this.state.firstname}  onChange={this.handleinputchange} />
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>شماره موبایل</Form.Label>
      <Form.Control type="number" name='mobile' placeholder="شماره موبایل خود را وارد کنید" 
      value={this.state.mobile}  onChange={this.handleinputchange}/>
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>ایمیل </Form.Label>
      <Form.Control type="Email" name='Email' placeholder="ایمیل خود را وارد کنید"
      value={this.state.Email}  onChange={this.handleinputchange} />
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>پیام شما:</Form.Label>
      <Form.Control as="textarea" name="message" placeholder="پیام خود را وارد کنید" 
       value={this.state.message}  onChange={this.handleinputchange} />
    </Form.Group>
    </Row>
    <Row>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox"  name='agree'  label="صحت اطلاعات وارده را تایید میکنم" 
      value={this.state.agree}  onChange={this.handleinputchange}/>
    </Form.Group>
    </Row>
    <Button variant="primary" type="submit">
      ارسال اطلاعات
    </Button>
  </Form>
              </Container>
          </fragment>
          
      </div>
  )
} 
}
export default Contact;