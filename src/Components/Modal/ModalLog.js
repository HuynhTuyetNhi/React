import React, { Component } from 'react'
import {FormGroup, Label, Input} from 'reactstrap';
export default class ModalLog extends Component {
  render() {
    return (
      <div>
         <div className="modal" id="myModal1">
          <div className="modal-dialog">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Log Work 'nametask'</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
              <FormGroup className="form-log-work">
              <div className="form-log">
              <Label for="time">Time spent *</Label>
                <Input type="text" name="time" id="timeUp" placeholder="with a placeholder" />
              </div>
              <div className="form-log">
              <Label for="date">Date Started *</Label>
                <Input type="date" name="date" id="dateStarted" placeholder="2019/20/09" />
              </div>
              </FormGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Log</button>
                <a href="#" data-dismiss="modal">Cancle</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
