Patterns
==============================================================================

- Dynamically generate documentation from your front end standards.
- Maintain a separation of concerns by keeping atoms separate from molecules.
- One point of origin for all atoms means, update once, benefit everywhere.
- Build molecules, organisms, pages and templates up of their indavidual
  concerns.
- Friendly templating language

### Source

Template: `atoms/button.html`

    {% macro btn_primary(value='Primary button') -%}
        <input type="button" value="{{ value|e }}" class="btn btn-primary">
    {%- endmacro %}

    {% macro btn_secondary(value='Secondary button') -%}
        <input type="button" value="{{ value|e }}" class="btn btn-secondary">
    {%- endmacro %}

Template: `form.html`

    {% import 'atoms/button.html' as buttons %}

    <form>
        <fieldset>
            <div>
                There would be loads more stuff here
            </div>
            <div>
                {{ buttons.btn_primary(value='Submit me') }}
                {{ buttons.btn_secondary(value='Cancel me') }}
            </div>
        </fieldset>
    </form>

### Result

![screen shot 2013-07-11 at 17 12 53](https://f.cloud.github.com/assets/67624/782965/da0f2722-ea44-11e2-9536-8d45949d9a51.png)


Install
------------------------------------------------------------------------------

### Python

    $ git clone https://github.com/linssen/patterns.git
    $ virtualenv --distribute env && source env/bin/activate
    $ pip install -r requirements.txt

### Grunt

    $ npm install
    $ grunt dev

Run
------------------------------------------------------------------------------

    $ python patterns/app.py
