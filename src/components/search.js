import React from "react";
import { Link } from "react-router-dom";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      basic: ""
    };
  }

  render() {
    return (
      <Form inline>
        <FormControl
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          value={this.state.name}
          onChange={e => {
            this.setState({
              name: e.target.value
            });
          }}
        />
        <Link to="/Searches">
        <Button
          variant="outline-light"
              type="submit"
              onClick={e => {
                this.props.search(this.state.name);
                this.setState({
                  name: ""
                });
              }}
        >
          Search
        </Button>
        </Link>
      </Form>
    );
  }
}

export default Search;
