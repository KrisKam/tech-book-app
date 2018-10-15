import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class NewAuthor extends Component {

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input type="text" name="firstName" id="firstName" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input type="text" name="lastName" id="lastName" />
        </FormGroup>
        <FormGroup>
          <Label for="portrait">Headshot URL</Label>
          <Input type="url" name="portrait" id="portrait" />
        </FormGroup>
        <FormGroup>
          <Label for="bio">Bio</Label>
          <Input type="textarea" name="bio" id="bio" />
        </FormGroup>

        <FormGroup>
          <Label for="selectBook">Select</Label>
          <Input type="select" name="selectBook" id="selectBook">
            <option>Book 1</option>
            <option>Book 2</option>
            <option>Book 3</option>
            <option>Book 4</option>
            <option>Book 5</option>
            <option>Book 6</option>
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default NewAuthor;