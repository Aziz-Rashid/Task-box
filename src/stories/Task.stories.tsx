import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Task, { taskProps } from '../Components/Task'

export default {
    title: 'Example/Task',
    component: Task,

} as Meta;

const Template: Story<taskProps> = (args) => <Task {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Workout",  done: true
};
export const Checked = Template.bind({});
Checked.args = {
    title: "Workout",  done: true
};
export const unChecked = Template.bind({});
unChecked.args = {
    title: "Workout",    done: false
};
