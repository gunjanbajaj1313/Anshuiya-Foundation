import React from 'react';
import './Causes.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cause1 from '../../assets/causes-11.png';
import cause2 from '../../assets/causes-2.png';
import cause3 from '../../assets/Bride.jpg';
import cause4 from '../../assets/pregnant.jpg';
import cause5 from '../../assets/death.jpg';
import cause6 from '../../assets/causes-3.png';


function Causes() {
  return (
    <div className='causes-container'>
        <h2 style={{color:'gray',fontSize:'2.2rem',wordSpacing:'0.5rem'}}>Trending Causes</h2>
        <h1 style={{fontSize:'3rem',wordSpacing:'0.5rem',fontWeight:'600'}}>We are always where<br />other people need help</h1>
        <div className='causes-cards'>
        <Card  style={{ width: '30rem',height:'36rem',marginBottom:'40px',borderRadius:'20px' }}>
      <Card.Img style={{borderRadius:'20px 20px 0px 0px'}} variant="top" src={cause1} />
      <Card.Body>
        <Card.Title className='title'>Collect fund for new born<br/>babies life</Card.Title>
        <Card.Text className='text'>
          There are many newborn babies ,<br/>require instant medical aid and you<br/>can just save a life.
        </Card.Text>
        <Button variant="danger" sz="lg" className='cause-button'>Donate now</Button>
      </Card.Body>
    </Card>

    <Card  style={{ width: '30rem',height:'36rem',marginBottom:'40px',borderRadius:'20px' }}>
      <Card.Img style={{borderRadius:'20px 20px 0px 0px'}} variant="top" src={cause2} />
      <Card.Body>
        <Card.Title className='title'>Give children a good<br />education & better life</Card.Title>
        <Card.Text className='text'>
          Sponsor a child education and change<br/>her life,give them a perspective of<br />growing society,
        </Card.Text>
        <Button variant="danger" sz="lg" className='cause-button'>Donate now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem',height:'36rem',marginBottom:'40px',borderRadius:'20px' }}>
      <Card.Img style={{borderRadius:'20px 20px 0px 0px'}} variant="top" src={cause3} />
      <Card.Body>
        <Card.Title className='title'>Collect fund for Marriage<br/>& happy life</Card.Title>
        <Card.Text className='text'>
          You may contribute to a girl marriage,<br/>it can help a family to grow<br/>respectfully.
        </Card.Text>
        <Button variant="danger" sz="lg" className='cause-button'>Donate now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem',height:'36rem',marginBottom:'40px',borderRadius:'20px' }}>
      <Card.Img style={{borderRadius:'20px 20px 0px 0px'}} variant="top" src={cause4} className='rounded-top-4' />
      <Card.Body>
        <Card.Title className='title'>Collect fund for Delivery &<br/>Health</Card.Title>
        <Card.Text className='text'>
          29 out of 100 children die due to<br/>unavailability of proper medical<br/>facilities in India,let's improve this.
        </Card.Text>
        <Button variant="danger" sz="lg" className='cause-button'>Donate now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem',height:'36rem',marginBottom:'40px',borderRadius:'20px' }}>
      <Card.Img style={{borderRadius:'20px 20px 0px 0px'}} variant="top" src={cause5} />
      <Card.Body>
        <Card.Title className='title'>Give children better &<br/>safe life</Card.Title>
        <Card.Text className='text'>
          A child without parents care and love,<br/>they are already seeking for love and<br/>support,lets join hands for them.
        </Card.Text>
        <Button variant="danger" sz="lg" className='cause-button'>Donate now</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem',height:'36rem',marginBottom:'40px',borderRadius:'20px' }}>
      <Card.Img style={{borderRadius:'20px 20px 0px 0px'}} variant="top" src={cause6} />
      <Card.Body>
        <Card.Title className='title'>Collect fund for drinking<br/>water & healthy food</Card.Title>
        <Card.Text className='text'>
          Healthy food and clean drinking water<br/>is everyone's right,let's make it<br/>available to needy children.
        </Card.Text>
        <Button variant="danger" sz="lg" className='cause-button'>Donate now</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Causes
