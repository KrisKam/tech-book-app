import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class NewAuthor extends Component {
  render() {
    return (
      <Form>

        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" />
        </FormGroup>

        <FormGroup>
          <Label for="genre">Genre</Label>
          <Input type="text" name="genre" id="genre" placeholder="example: JavaScript"/>
        </FormGroup>

        <FormGroup>
          <Label for="cover">Cover URL</Label>
          <Input type="url" name="cover" id="cover" />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" name="description" id="description" />
        </FormGroup>

        

        <FormGroup>
          <Label for="selectAuthor">Select</Label>
          <Input type="select" name="selectAuthor" id="selectAuthor">
            <option>Author 1</option>
            <option>Author 2</option>
            <option>Author 3</option>
            <option>Author 4</option>
            <option>Author 5</option>
          </Input>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default NewAuthor;