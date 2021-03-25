import React from 'react';

import {Field} from "./Field";

const Template = (args) => <Field {...args}/>

export const Simple = Template.bind({})
Simple.args = {}

export default {
    title: 'Form/Field',
    component: Field
}