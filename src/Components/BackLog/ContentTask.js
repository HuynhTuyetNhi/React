import React, { useState } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
  return (
    <div className="content-right">
    {/* <Button color="primary" id="toggler1" style={{ marginBottom: '1rem' }}>
      Toggle
    </Button> */}
    <UncontrolledCollapse toggler="#toggler1">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
  )
}

export default Example;