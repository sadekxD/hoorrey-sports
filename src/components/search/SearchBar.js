import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "rsuite";

const SearchBar = ({ value, setValue, action }) => {
  const history = useHistory();
  return (
    <Form
      layout="inline"
      formValue={value}
      onChange={(formValue) => {
        setValue({ ...value, ...formValue });
      }}
      onSubmit={() => {
        if (value.search) {
          action();
        }
      }}
    >
      <Form.Group controlId="search">
        <Form.Control name="search" placeholder="Search" />
      </Form.Group>
      <Button appearance="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
