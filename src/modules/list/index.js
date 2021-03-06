import React from 'react';
import { withRouter } from 'react-router';
import { get } from 'lodash';
import styled from 'styled-components';
import { Card, Load } from './components';

import api from '../../utils/api';
import { GetPokemon } from '../../utils/formatter/index';

import { Container, Row, Col } from '../../components/grid';

const Pokemon = ({ match }) => {
  const page = get(match, 'params.page', '');
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    api(GetPokemon(page))
      .then((response) => setData(response.results))
      .finally(() => setLoading(false));
  }, [match]);

  return (
    <Section>
      <Container>
        <Row>
          {data.map((item) => (
            <Col col={3} key={item.name}>
              <Card data={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Load isLoading={isLoading} />
    </Section>
  );
};

const Section = styled('div')`
  padding: 80px 0;
`;

export default withRouter(Pokemon);
