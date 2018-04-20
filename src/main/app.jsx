import 'modules/bootstrap/dist/css/bootstrap.min.css'
import '../scss/style.scss';
import { Button } from 'reactstrap';

import React from 'react'

export default props => (
    <div className='container'>
        <h1>
            Workflow React
        </h1>
        <Button color="primary">Button</Button>{' '}       
    </div>
)