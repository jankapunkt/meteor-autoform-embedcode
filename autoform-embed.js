import { Tracker } from 'meteor/tracker';
import { Template } from 'meteor/templating';
import { Random } from 'meteor/random';
import { ReactiveDict } from 'meteor/reactive-dict';
import { $ } from 'meteor/jquery';

import SimpleSchema from 'simpl-schema';

import './autoform-embed.html';
import './autoform-embed.css';

// extend autoform with bpmn modeler
AutoForm.addInputType('embed', {
  template: 'afEmbedCode',
  valueOut() {
    return this.val();
  },
  valueIn(initialValue) {
    return initialValue;
  },
});

let extSchema;


Template.afEmbedCode.onCreated(function () {
  const instance = this;
  instance.state = new ReactiveDict();
  instance.state.set('initialValue', '');
  instance.autorun(function () {
    const { data } = instance;
    const { atts } = data;
    const { value } = data;

    instance.state.set('dataSchemaKey', atts['data-schema-key']);
    if (value) {
      $('#afEmbedCodeHiddenInput').val(value);
      instance.state.set('initialValue', value);
      instance.state.set('value', value);
    }
  });
});

Template.afEmbedCode.helpers({
  value() {
    return Template.instance().state.get('value');
  },
  dataSchemaKey() {
    return Template.instance().state.get('dataSchemaKey')
  },
  initialValue() {
    return Template.instance().state.get('initialValue');
  }
});

Template.afEmbedCode.events({
  'input #afEmbedCode-valueinput'(event, templateInstance) {
    event.preventDefault();

    const code = $(event.currentTarget).text();
    templateInstance.state.set('value', code);
    templateInstance.state.set('initialValue', '');
    $('#afEmbedCodeHiddenInput').val(code);
  }
});
