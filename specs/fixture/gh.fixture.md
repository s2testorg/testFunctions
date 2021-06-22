---
testspace:
before:
  name: github::auto
  description: parameter types - string, json, yaml, file
  input: 
   string: this is a string
   json: {
      "json": [
        "rigid",
        "better for data interchange"
      ],
      "yaml": [
        "slim and flexible",
        "better for configuration"
      ],
      "object": {
        "key": "value",
        "array": [
          {
            "null_value": null
          },
          {
            "boolean": true
          },
          {
            "integer": 1
          }
        ]
      },
      "paragraph": "Blank lines denote\nparagraph breaks\n",
      "content": "Or we\ncan auto\nconvert line breaks\nto save space"
    }
   yaml:
      # <- yaml supports comments, json does not
      # did you know you can embed json in yaml?
      # try uncommenting the next line
      # { foo: 'bar' }

      json:
        - rigid
        - better for data interchange
      yaml:
        - slim and flexible
        - better for configuration
      object:
        key: value
        array:
          - null_value:
          - boolean: true
          - integer: 1
      paragraph: >
        Blank lines denote

        paragraph breaks
      content: |-
        Or we
        can auto
        convert line breaks
        to save space
   file: "@file.json"
---

# gh.fixture
Fixture using `string`, `json`, `yaml`, and `file` parameter types.

Refer to [JSON to YAML](https://www.json2yaml.com/) for JSON/YAML parameters. 

## One
* one
* two

## Two
* one
* two