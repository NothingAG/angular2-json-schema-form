// Sources:
//
// Angular Schema Form compatibility examples ('asf-...') from
//   http://schemaform.io/examples/bootstrap-example.html
//
// React JSON Schema Form compatibility examples ('rjsf-...') from
//   https://mozilla-services.github.io/react-jsonschema-form/
//
// JSONForm compatibility examples ('jsf-...') from
//   http://ulion.github.io/jsonform/playground/
//
// Other examples ('ng2jsf-...') are original

export const ExampleSchemas: any = {
  exampleSetList: [ 'asf', 'rjsf', 'jsf', 'ng2jsf' ],
  exampleSets: {
    'asf': 'Angular Schema Form compatibility examples',
    'rjsf': 'React JSON Schema Form compatibility examples',
    'jsf': 'JSONForm compatibility examples',
    'ng2jsf': 'Other examples',
  },
  exampleList: {
    'asf': [
      'asf-simple', 'asf-basic-json-schema-type', 'asf-bootstrap-grid',
      'asf-complex-key-support', 'asf-array', 'asf-tab-array',
      'asf-titlemap-examples', 'asf-kitchen-sink', 'asf-hack-conditional-required',
    ],
    'rjsf': [
      'rjsf-simple', 'rjsf-nested', 'rjsf-arrays', 'rjsf-numbers', 'rjsf-widgets',
      'rjsf-ordering', 'rjsf-references', 'rjsf-errors', 'rjsf-large',
      'rjsf-date-and-time', 'rjsf-validation', 'rjsf-files', 'rjsf-custom',
    ],
    'jsf': [
      'jsf-gettingstarted',
      'jsf-schema-basic', 'jsf-schema-morecomplex', 'jsf-schema-array',
      'jsf-schema-required', 'jsf-schema-default', 'jsf-schema-inlineref',
      'jsf-fields-common', 'jsf-fields-password', 'jsf-fields-textarea',
      'jsf-fields-autocomplete', 'jsf-fields-ace', 'jsf-fields-color',
      'jsf-fields-checkbox', 'jsf-fields-checkboxes', 'jsf-fields-select',
      'jsf-fields-radios', 'jsf-fields-radiobuttons', 'jsf-fields-checkboxbuttons',
      'jsf-fields-range', 'jsf-fields-imageselect', 'jsf-fields-iconselect',
      'jsf-fields-fieldset', 'jsf-fields-advancedfieldset', 'jsf-fields-authfieldset',
      'jsf-fields-section', 'jsf-fields-actions', 'jsf-fields-array',
      'jsf-fields-array-simple', 'jsf-fields-tabarray', 'jsf-fields-tabarray-maxitems',
      'jsf-fields-tabarray-value', 'jsf-fields-selectfieldset', 'jsf-fields-selectfieldset-key',
      'jsf-fields-submit', 'jsf-fields-help', 'jsf-fields-hidden',
      'jsf-fields-questions', 'jsf-templating-idx', 'jsf-templating-value',
      'jsf-templating-values', 'jsf-templating-tpldata', 'jsf-events',
      'jsf-previousvalues', 'jsf-previousvalues-multidimensional',
    ],
    'ng2jsf': [
      'ng2jsf-simple-array', 'ng2jsf-data-only', // 'ng2jsf-layout-only',
      'ng2jsf-json-schema-draft04', 'ng2jsf-json-schema-draft03',
    ],
  },
  examples: {
    'asf': {
      'asf-simple': 'Simple',
      'asf-basic-json-schema-type': 'Basic JSON Schema Type',
      'asf-bootstrap-grid': 'Bootstrap Grid',
      'asf-complex-key-support': 'Complex Key Support',
      'asf-array': 'Array',
      'asf-tab-array': 'Tab Array',
      'asf-titlemap-examples': 'TitleMap Examples',
      'asf-kitchen-sink': 'Kitchen Sink',
      'asf-hack-conditional-required': 'Hack: Conditional Required',
    },
    'rjsf': {
      'rjsf-simple': 'Simple',
      'rjsf-nested': 'Nested',
      'rjsf-arrays': 'Arrays',
      'rjsf-numbers': 'Numbers',
      'rjsf-widgets': 'Widgets',
      'rjsf-ordering': 'Ordering',
      'rjsf-references': 'References',
      'rjsf-custom': 'Custom',
      'rjsf-errors': 'Errors',
      'rjsf-large': 'Large',
      'rjsf-date-and-time': 'Date & Time',
      'rjsf-validation': 'Validation',
      'rjsf-files': 'Files',
    },
    'jsf': {
      'jsf-gettingstarted': 'Getting started',
      'jsf-schema-basic': 'JSON Schema - A basic example',
      'jsf-schema-morecomplex': 'JSON Schema - Slightly more complex example',
      'jsf-schema-array': 'JSON Schema - Arrays',
      'jsf-schema-required': 'JSON Schema - Required field',
      'jsf-schema-default': 'JSON Schema - Default values',
      'jsf-schema-inlineref': 'JSON Schema - Inline $ref to definitions',
      'jsf-fields-common': 'Fields - Common properties',
      'jsf-fields-password': 'Fields - Gathering secrets: the password type',
      'jsf-fields-textarea': 'Fields - Large text: the textarea type',
      'jsf-fields-autocomplete': 'Fields - text field with jquery-ui autocomplete',
      'jsf-fields-ace': 'Fields - Code (JavaScript, JSON...): the ace type',
      'jsf-fields-color': 'Fields - Color picker: the color type',
      'jsf-fields-checkbox': 'Fields - Boolean flag: the checkbox type',
      'jsf-fields-checkboxes': 'Fields - Multiple options: the checkboxes type',
      'jsf-fields-select': 'Fields - Selection list: the select type',
      'jsf-fields-radios': 'Fields - A list of radio buttons: the radios type',
      'jsf-fields-radiobuttons': 'Fields - Radio buttons as real buttons: the radio buttons type',
      'jsf-fields-checkboxbuttons': 'Fields - Checkbox buttons: the checkbox buttons type',
      'jsf-fields-range': 'Fields - Number: the range type',
      'jsf-fields-imageselect': 'Fields - Image selector: the imageselect type',
      'jsf-fields-iconselect': 'Fields - Icon selector: the iconselect type',
      'jsf-fields-fieldset': 'Fields - Grouping: the fieldset type',
      'jsf-fields-advancedfieldset': 'Fields - Advanced options section: the advancedfieldset type',
      'jsf-fields-authfieldset': 'Fields - Authentication settings section: the authfieldset type',
      'jsf-fields-section': 'Fields - Generic group: the section type',
      'jsf-fields-actions': 'Fields - Group of buttons: the actions type',
      'jsf-fields-array': 'Fields - Generic array: the array type (complex)',
      'jsf-fields-array-simple': 'Fields - Generic array: the array type (simple)',
      'jsf-fields-tabarray': 'Fields - Arrays with tabs: the tabarray type',
      'jsf-fields-tabarray-maxitems': 'Fields - Arrays with tabs: the tabarray type w/ maxItems',
      'jsf-fields-tabarray-value': 'Fields - Arrays with tabs: the tabarray type w/ default & legend',
      'jsf-fields-selectfieldset': 'Fields - Alternative: the selectfieldset type',
      'jsf-fields-selectfieldset-key': 'Fields - Alternative with schema key',
      'jsf-fields-submit': 'Fields - Submit the form: the submit type',
      'jsf-fields-help': 'Fields - Guide users: the help type',
      'jsf-fields-hidden': 'Fields - Hidden form values: the hidden type',
      'jsf-fields-questions': 'Fields - Series of questions: the questions type',
      'jsf-templating-idx': 'Templating - item index with idx',
      'jsf-templating-value': 'Templating - tab legend with value and valueInLegend',
      'jsf-templating-values': 'Templating - values.xxx to reference another field',
      'jsf-templating-tpldata': 'Templating - Using the tpldata property',
      'jsf-events': 'Using event handlers',
      'jsf-previousvalues': 'Using previously submitted values',
      'jsf-previousvalues-multidimensional': 'Using previously submitted values - Multidimensional arrays',
    },
    'ng2jsf': {
      'ng2jsf-simple-array': 'Simple Array',
      'ng2jsf-data-only': 'Data Only (no Schema or Layout)',
      'ng2jsf-layout-only': 'Layout Only (no Schema or Data)',
      'ng2jsf-json-schema-draft04': 'JSON Meta-Schema - Version 4',
      'ng2jsf-json-schema-draft03': 'JSON Meta-Schema - Version3',
    },
  },
  links: {
    'asf': { 'url': 'http://schemaform.io/examples/bootstrap-example.html', },
    'rjsf': { 'url': 'https://mozilla-services.github.io/react-jsonschema-form/', },
    'jsf': { 'url': 'http://ulion.github.io/jsonform/playground/',
      'suffixes': {
        'jsf-gettingstarted': '?example=gettingstarted',
        'jsf-schema-basic': '?example=schema-basic',
        'jsf-schema-morecomplex': '?example=schema-morecomplex',
        'jsf-schema-array': '?example=schema-array',
        'jsf-schema-required': '?example=schema-required',
        'jsf-schema-default': '?example=schema-default',
        'jsf-schema-inlineref': '?example=schema-inlineref',
        'jsf-fields-common': '?example=fields-common',
        'jsf-fields-password': '?example=fields-password',
        'jsf-fields-textarea': '?example=fields-textarea',
        'jsf-fields-autocomplete': '?example=fields-autocomplete',
        'jsf-fields-ace': '?example=fields-ace',
        'jsf-fields-color': '?example=fields-color',
        'jsf-fields-checkbox': '?example=fields-checkbox',
        'jsf-fields-checkboxes': '?example=fields-checkboxes',
        'jsf-fields-select': '?example=fields-select',
        'jsf-fields-radios': '?example=fields-radios',
        'jsf-fields-radiobuttons': '?example=fields-radiobuttons',
        'jsf-fields-checkboxbuttons': '?example=fields-checkboxbuttons',
        'jsf-fields-range': '?example=fields-range',
        'jsf-fields-imageselect': '?example=fields-imageselect',
        'jsf-fields-iconselect': '?example=fields-iconselect',
        'jsf-fields-fieldset': '?example=fields-fieldset',
        'jsf-fields-advancedfieldset': '?example=fields-advancedfieldset',
        'jsf-fields-authfieldset': '?example=fields-authfieldset',
        'jsf-fields-section': '?example=fields-section',
        'jsf-fields-actions': '?example=fields-actions',
        'jsf-fields-array': '?example=fields-array',
        'jsf-fields-tabarray': '?example=fields-tabarray',
        'jsf-fields-tabarray-maxitems': '?example=fields-tabarray-maxitems',
        'jsf-fields-tabarray-value': '?example=fields-tabarray-value',
        'jsf-fields-selectfieldset': '?example=fields-selectfieldset',
        'jsf-fields-selectfieldset-key': '?example=fields-selectfieldset-key',
        'jsf-fields-submit': '?example=fields-submit',
        'jsf-fields-help': '?example=fields-help',
        'jsf-fields-hidden': '?example=fields-hidden',
        'jsf-fields-questions': '?example=fields-questions',
        'jsf-templating-idx': '?example=templating-idx',
        'jsf-templating-value': '?example=templating-value',
        'jsf-templating-values': '?example=templating-values',
        'jsf-templating-tpldata': '?example=templating-tpldata',
        'jsf-events': '?example=events',
        'jsf-previousvalues': '?example=previousvalues',
        'jsf-previousvalues-multidimensional': '?example=previousvalues-multidimensional',
      },
    },
  },
  frameworkList: [ 'bootstrap-3', 'material-design', 'no-framework' ],
  frameworks: {
    'bootstrap-3': 'Bootstrap 3 framework',
    'material-design': 'Material Design framework (under construction)',
    'no-framework': 'No Framework (bare controls + styles from layout only)',
  },
};
