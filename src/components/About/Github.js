import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Assuming you use Bootstrap for styling

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to track which item is selected

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Container>
      <Row>
        {/* Left Side - Navigation */}
        <Col sm={3}>
          <div className="sidebar">
            <Button variant="link" onClick={() => handleItemClick('12')}>
              12th Grade
            </Button>
            <Button variant="link" onClick={() => handleItemClick('10')}>
              10th Grade
            </Button>
            <Button variant="link" onClick={() => handleItemClick('college')}>
              College
            </Button>
            <Button variant="link" onClick={() => handleItemClick('work')}>
              Work Experience
            </Button>
          </div>
        </Col>

        {/* Right Side - Display Content */}
        <Col sm={9}>
          <div className="content">
            {selectedItem === '12' && (
              <div>
                <h2>12th Grade</h2>
                <p>Details about your 12th grade education.</p>
              </div>
            )}
            {selectedItem === '10' && (
              <div>
                <h2>10th Grade</h2>
                <p>Details about your 10th grade education.</p>
              </div>
            )}
            {selectedItem === 'college' && (
              <div>
                <h2>College</h2>
                <p>Details about your college education.</p>
              </div>
            )}
            {selectedItem === 'work' && (
              <div>
                <h2>Work Experience</h2>
                <p>Details about your work experience.</p>
              </div>
            )}
            {selectedItem === null && <p>Select an item to display more information.</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
