import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { FooterComponent } from '../app/components/footer/footer.component';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<FooterComponent> = {
  title: 'Example/Footer',
  component: FooterComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<FooterComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple: Story = {
  args: {},
};
