import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'semantic-ui-react';

import { Posts } from 'data/posts';

type Props = {};

const SchoolCharacters: FC<Props> = () => (
  <>
    <Helmet>
      <title>投稿一覧</title>
    </Helmet>
    <Header as="h2">{school}</Header>
    <CharactersList characters={characters} isLoading={isLoading} />
  </>
);

export default SchoolCharacters;
