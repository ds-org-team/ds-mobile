import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { COLORS } from '../../themes/tokens';
import Box from '../Box';
import Paper from './Paper';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bg: any;
};

export default {
  title: 'Elements/Pressable',
  component: Paper,
  argTypes: {
    bg: {
      options: COLORS,
      control: { type: 'select' },
    },
  },
  decorators: [withDesign],
};

const urlHandoff =
  'https://www.figma.com/file/3raVfIADTUZCzFOOaQ9PMQ/HANDOFF-%7C-Core-Components-Mobile-%7C-Institucional?node-id=203%3A1636';

// Stories
export const BasicPaper = ({ bg }: Props): React.ReactNode => (
  <Paper
    flexDirection="row"
    justifyContent="space-between"
    alignItems="baseline"
    bg={bg || 'feedback-positive-fill'}
  >
    <Box width={100} height={100} bg="action-main-primary" />
    <Box width={100} height={100} ml="md" bg="action-main-primary" />
  </Paper>
);

BasicPaper.parameters = {
  design: {
    type: 'figma',
    url: urlHandoff,
  },
};
